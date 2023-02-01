import MainMenu from "./Menu";
import Greeting from "./Greeting";
import Motion from "./Motion";

function Main() {
    return(
<div className="main">
    <div className="main__left">
       <MainMenu />
       
      
       
    
    </div>
    <div className="main__right">
      <Greeting />
    </div>
</div>
    )
}

export default Main;