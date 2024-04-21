import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";
export const Landing = () =>{

    const navigate=useNavigate();
    return  <div>
         <div className="mt-2">
            <div className="grid gird-cols-1 gap-4
            md:grid-cols-2">
                <div className="flex justify-center">
                    <img src='../../public/chessboard.jpg'
                    className="max-w-96"/>
                </div>
                <div>
                <h1 className="text-4xl font-bold">
                    Play Chess online on the #1 Site!

                </h1>
                <div className="flex justify-center">
               <Button onClick={()=>{navigate('/game')}}>
                Play Online 
                </Button>
                    
                </div>
                </div>
              

            </div>

         </div>
    </div>
    
}