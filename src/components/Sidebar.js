import {DASHBOARD_URL} from "../utils/constants";
import { DASHBOARD_URL2 } from "../utils/constants";
import { PRODUCT_URL } from "../utils/constants";
import { CUSTOMERS_URL } from "../utils/constants";
import { INCOME_URL } from "../utils/constants";
import { PROMOTE_URL } from "../utils/constants";
import { HELP_URL } from "../utils/constants";

const Sidebar = () =>{
return(
    <div className="bg-white h-[100vh] w-[30vh]">
        <h1 className="font-bold text-xl text-center pt-2 pb-4 flex ml-5" > 
        <img className="h-7 w-10  mr-1 mt-1" src ={DASHBOARD_URL} />Dashboard</h1>
        <div >
             <ul>
                    <li className="ml-2 p-2 mb-3 hover:bg-blue-200 flex">
                        <img className = "h-5 w-5 mt-1 mr-2" src = { DASHBOARD_URL2 }/>Dashboard</li>
                    <li  className="ml-2 p-2 mb-3 hover:bg-blue-200 flex"> 
                        <img className = "h-5 w-5 mt-1 mr-2" src = { PRODUCT_URL } />
                    Products</li>
                    <li className="ml-2 p-2 mb-3 hover:bg-blue-200 flex">
                        <img  className = "h-5 w-5 mt-1 mr-2" src = { CUSTOMERS_URL } />
                        Customers</li>
                    <li className="ml-2 p-2 mb-3 hover:bg-blue-200 flex">
                        <img  className = "h-5 w-5 mt-1 mr-2" src = { INCOME_URL }/>
                        Income</li>
                    <li className="ml-2 p-2 mb-3 hover:bg-blue-200 flex">
                        <img className="h-5 w-5 mt-1 mr-2" src = { PROMOTE_URL } />
                        Promote</li>
                    <li className="ml-2 p-2  hover:bg-blue-200 flex">
                        <img className="h-5 w-5 mt-1 mr-2" src = { HELP_URL } />
                        Help</li>
                </ul>
        </div>
    </div>
)
}

export default Sidebar;