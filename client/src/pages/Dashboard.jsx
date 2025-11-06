import MarketingTable from "../Components/MarketingTable";
import Header from "../Components/Reusable/Header";

const Dashboard = () => {
    return (
        <div>
            <Header typeOfHeader={"Dashboard"} />
            <div className="grid grid-cols-4 gap-1 ml-3 mb-7">
                <div className="w-[24rem] border border-gray-300 border-l-8 p-2 border-l-green-500 h-[12rem]">
                    <div className="border-b p-2">
                        <small>Total Sample Order</small>
                    </div>
                    <div className="flex text-2xl justify-center items-center h-full">
                        20 LBS
                    </div>
                </div>
                <div className="w-[24rem] border border-gray-300 border-l-8 p-2 border-l-green-500 h-[12rem]">
                    <div className="border-b p-2">
                        <small>Total Sample Delivery</small>
                    </div>
                    <div className="flex text-2xl justify-center items-center h-full">
                        20 LBS
                    </div>
                </div>
                <div className="w-[24rem] border border-gray-300 border-l-8 p-2 border-l-red-500 h-[12rem]  ">
                    <div className="border-b p-2">
                        <small>Total Sample Delivery Balance</small>
                    </div>
                    <div className="flex text-2xl justify-center items-center h-full">
                        20 LBS
                    </div>
                </div>
                <div className="w-[24.5rem] border border-gray-300 border-l-8 p-2 border-l-gray-500 h-[12rem]">
                    <div className="border-b p-2">
                        <small>Total Sample Adjust Balance</small>
                    </div>
                    <div className="flex text-2xl justify-center items-center h-full">
                        20 LBS
                    </div>
                </div>
            </div>
            <div className="mb-4 flex justify-between ml-3">
                <div className="w-[65rem]">

                    <MarketingTable />
                </div>

                <div className="w-[30rem] border p-3 rounded-lg">
                    <Header typeOfHeader='Section Summary'/>
                    <div className="mb-8 bg-gray-200 p-3 rounded-md bg-opacity-25">
                        <h2>Con section : 2000 LBS</h2>
                    </div>
                    <div className="mb-8 bg-gray-200 p-3 rounded-md bg-opacity-25">
                        <h2>Hanks section : 2000 LBS</h2>
                    </div>
                    <div className="mb-8 bg-gray-200 p-3 rounded-md bg-opacity-25">
                        <h2>Peich section : 2000 LBS</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;