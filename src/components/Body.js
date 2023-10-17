import Container from "./Container";
import Sidebar from "./Sidebar";

const Body = () =>{
    return(
     <div className="flex">
        <div  className="sidebar">
            <Sidebar/>
        </div>
        <div className="container">
            <Container />
        </div>
     </div>
    )
}

export default Body;
