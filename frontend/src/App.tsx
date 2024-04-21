
import './index.css'
import { Landing } from './screens/Landing';
import {Game} from './screens/Game'
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {


  
     return (
      <div className='h-screen bg-slate-950'>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/> 
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </BrowserRouter>
      </div>
   
  );

  
}

export default App
