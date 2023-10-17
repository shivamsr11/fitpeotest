const Summary = () =>{
    return(
        <div className="flex h-[16h] bg-gray-100 ">
            <div className=" bg-white  h-[16vh] w-60 flex  rounded-lg mr-8">
            <img className = "h-20 w-20 ml-3 mt-3 " src = "https://cdn-icons-png.flaticon.com/512/189/189715.png" />
            <div className="mt-4 ml-3">
                <div className="text-xs">Earning</div>
                <div className="text-b font-bold">$198k</div>
                <div className="flex">
                <div className="text-xs text-green-800">↑ 37.8% </div>
                <div className="text-xs ml-1">this month</div>
                </div>
             </div>
            </div>
            <div className=" bg-white  h-[16vh] w-60   mr-8 flex rounded-lg">               
             <img className = "h-20 w-20 ml-3 mt-3 " src = "https://booster.io/wp-content/uploads/custom-order-numbers-e1438361586475.png" />
             <div className="mt-4 ml-3">
                <div className="text-xs">Orders</div>
                <div className="text-b font-bold">$12.4k</div>
                <div className="flex">
                <div className="text-xs text-red-500">↓ 2% </div>
                <div className="text-xs ml-1">this month</div>
                </div>            
             </div>
            </div>
            <div className=" bg-white  h-[16vh] w-60   mr-8 flex rounded-lg">
            <img className = "h-20 w-20 ml-3 mt-3 " src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ858QRA_zz6buT07ZLaRL0SPnsPwwi7MR1Vw&usqp=CAU" />
             <div className="mt-4 ml-3">
                <div className="text-xs">Balance</div>
                <div className="text-b font-bold">$2.4k</div>
                <div className="flex">
                <div className="text-xs text-red-500">↓ 2% </div>
                <div className="text-xs ml-1">this month</div>
                </div>             
            </div>
            </div>
            <div className=" bg-white  h-[16vh] w-60   flex rounded-lg">
            <img className = "h-20 w-20 ml-3 mt-3 " src = "https://www.freeiconspng.com/thumbs/sales-icon/sales-icon-10.png" />
            <div className="mt-4 ml-3">
                <div className="text-xs">Total Sales</div>
                <div className="text-b font-bold">$89kk</div>
                <div className="flex">
                <div className="text-xs text-green-800">↑ 11% </div>
                <div className="text-xs ml-1">this month</div>
                </div>            
            </div>
            </div>
        </div>
    )
}

export default Summary;