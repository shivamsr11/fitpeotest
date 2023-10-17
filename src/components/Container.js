import Summary from "./Summary";
import Charts from "./Charts";
import List from "./List";

const Container = () =>{
    return (
        <div className="bg-gray-100 w-full h-full">
            <div className="flex flex-wrap justify-between">
            <div className="ml-8 mt-3 font-bold">Helloooo Shahrukh 👋,</div>
            <div>
                <input type = "text" className="my-3 mr-8 border border-gray-400  rounded-lg" placeholder=" 🔎 search" ></input>
            </div>
            </div>
           <div className="ml-8 mr-8 "><Summary /></div>
           <div className="ml-8 mr-8 mt-7"><Charts /></div>
           <div className="ml-8 mr-8 mt-7 h-[20h]"><List /></div>
        </div>
    )
}

export default Container;