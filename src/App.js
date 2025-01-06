import {useState , useRef} from "react";
import Content from "./components/Content";
import PreviewAvatar_Timer from "./components/PreviewAvatar_Timer";
import FakeChatApp from "./components/Fake_chat_app";
import UseLayoutEffect from "./components/UseLayoutEffect";
import Learn_UseRef from "./components/Learn_UseRef";
import RollDice from "./components/Dicegame/RollDice";
import UserLayoutEffect from "./components/UseLayoutEffect";



function App() {

    const [toggle,setToggle] = useState(false);

    const handleToggle = () =>{
        setToggle(!toggle);

    }


  return (
    <div className="App" style={{ paddingLeft: "5%" }}>

        <button onClick={handleToggle}> Toggle</button>
        {toggle &&  <PreviewAvatar_Timer  />}
        <br/>



    </div>
  );
}

export default App;
