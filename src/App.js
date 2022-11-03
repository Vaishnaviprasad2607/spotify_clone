import './App.css';
import { LeftMenu } from "./component/LeftMenu.js";
import { RightMenu } from "./component/RightMenu.js";
import { MainContainer } from "./component/MainContainer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
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
