import {Chess} from 'chess.js'
import { GAME_OVER, INIT_GAME, MOVE } from './messages';
import { WebSocket } from 'ws';
export class Game {
    public player1:WebSocket;
    public player2:WebSocket;
    private board:Chess;
    private moves:string[];
    private startTime:Date;
    private moveCount:0;
    constructor(player1:WebSocket,player2:WebSocket){
        this.player1=player1;
        this.player2=player2;
        this.board= new Chess();
        this.moves=[];
        this.startTime=new Date();
        this.moveCount=0;
        this.player1.send(JSON.stringify({
            type:INIT_GAME,
            payload:{
                color:'white'
            }
        }))

        this.player2.send(JSON.stringify({
            type:INIT_GAME,
            payload:{
                color:'black'
            }
        }))
    }

    makeMove(socket:WebSocket,move:{
        from: string;
        to: string;
    }){
        console.log(move);
        //console.log(this.moveCount);
         if(this.moveCount % 2 ===0 && socket!=this.player1){
            return;
         }
         if(this.moveCount % 2 ===1 && socket!=this.player2){
            return;
         }

         try{
            console.log(this.moveCount);
            this.board.move(move);
            console.log('inside try');
         }
         catch(e){
            console.log(e);
            return;
         }
         
         console.log(this.moveCount);
         if(this.board.isGameOver()){
            this.player1.send(JSON.stringify({
                type: GAME_OVER,
                payload:{
                    winner: this.board.turn()==="w"?'black':"white"                   
                }
            }));
         }
         if(this.moveCount %2===0){
            console.log('inside player1');
            this.player2.send(JSON.stringify({
               type:MOVE,
               payload:move 
            }))
         }

         else
         {
            console.log('player 2 sent')
            this.player1.send(JSON.stringify({
                type:MOVE,
                payload:move
            }))
         }
         this.moveCount++;
    }
}