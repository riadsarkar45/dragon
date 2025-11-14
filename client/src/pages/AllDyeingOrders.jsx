import { useEffect } from "react";
import Header from "../Components/Reusable/Header";
import useFetchRequest from "../hooks/Fetch.requiest";

const AllDyeingOrders = () => {
    const { get, fetchedData } = useFetchRequest();
    useEffect(() => {
        get("/allorders")

    }, [get])

    if (!fetchedData) return;

    console.log(fetchedData.dyeingOrders);
    return (
        <div className="mt-10">
            <Header typeOfHeader={'All Dyeing Orders'} />
            {
                fetchedData?.dyeingOrders?.map((order, key) =>
                    <div key={key} className="p-3 border ml-3 w-[98%] mb-2 rounded-lg">
                        <div className="flex gap-3 border-b p-2">
                            <h2 className="bg-blue-500 p-2 bg-opacity-20 text-blue-500 border-blue-500 uppercase">{order.orderNo}</h2>
                            <span className="bg-blue-500 p-2  bg-opacity-20 text-blue-500 border-blue-500 uppercase">Section: {order.dyeingSection}</span>
                        </div>
                        <div className="border-b text-xl">
                            <div className="flex">
                                <h2 className=" bg-green-500 bg-opacity-20  border-r-0 border-green-500 border rounded-l-md text-green-500 w-[20rem] mt-3 mb-3 uppercase p-1">Marketing Name: {order.marketingName}</h2>
                                <h2 className=" bg-green-500 bg-opacity-20 border-green-500 border rounded-r-md text-green-500 w-[20rem] mt-3 mb-3 uppercase p-1">Factory Name: {order.factoryName}</h2>
                            </div>
                            <div className="flex rounded-md bg-opacity-20  gap-3 mb-2">
                                <span className=" bg-red-500 bg-opacity-20 border-red-500 border rounded-md text-red-500 p-2">Yarn Type: 100% Cotton 2/32</span>
                                <span className=" bg-red-500 bg-opacity-20 border-red-500 border rounded-md text-red-500 p-2">LBS: 25</span>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-2 border-b items-center p-1">
                            <h2>Colors:</h2>
                            {
                                order.colors.length > 0 ? order.colors.map((color, index) =>
                                    <span key={index} className={` bg-opacity-20 uppercase border-${color.colors}-500 border rounded-md bg-${color.colors}-500 text-${color.colors}-500 p-1`}>{color.colors}</span>
                                ) : <span className="bg-red-500 bg-opacity-20 border-red-500 border rounded-md text-red-500 p-1">No colors added</span>
                            }
                        </div>

                        <div className="flex mt-3">
                            <input className="p-2 outline-none border border-r-0 rounded-l-md w-[25rem]" type="text" placeholder="Received Color Names" />
                            <button className="p-2 border rounded-r-lg">Save</button>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default AllDyeingOrders;