import './App.css';
import { LeftMenu } from "./component/LeftMenu.js";
import { RightMenu } from "./component/RightMenu.js";
import { MainContainer } from "./component/MainContainer.js";
function App() {
  return (
    <div className="App" >
  
   <LeftMenu/>
   <MainContainer/>
   <RightMenu/>
 

 <div className='background'>
 </div>


    </div>
  );
}

export default App;
