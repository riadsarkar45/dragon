import Header from "../Components/Reusable/Header";
import usePostRequest from "../hooks/Post.request";

const NewYarnShipped = () => {
    const { makePostRequest } = usePostRequest();
    
    const handleUpdateNewShippedYarns = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const insert = await makePostRequest('/newshipped', data)
        console.log(insert, "headshot");
    }
    return (
        <div>
            <Header typeOfHeader={'Add New Shipped Yarns'} />

            <form onSubmit={handleUpdateNewShippedYarns}>
                <div className="grid ml-3">
                    <div className="grid grid-cols-2 gap-1 mb-3">
                        <div className="grid">
                            <small>Yarn Type</small>
                            <input name="yarnType" className="w-full p-3 outline-none border rounded-md mt-1" type="text" placeholder="Yarn Type" />
                        </div>
                        <div className="grid">
                            <small>Yarn Received Qty</small>
                            <input name="receivedQty" className="w-[97%] p-3 outline-none border rounded-md mt-1" type="text" placeholder="Received Qty Lbs" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1 mb-2">
                        <div className="grid">
                            <small>Supplier Name</small>
                            <input name="supplierName" className="w-full p-3 outline-none border rounded-md mt-1" type="text" placeholder="Supplier Name" />
                        </div>
                        <div className="grid">
                            <small>Challan No</small>
                            <input name="challanNo" className="w-[97%] p-3 outline-none border rounded-md mt-1" type="text" placeholder="Challan No" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2  ml-3 mt-4 gap-2">
                    <button className="border-red-300 rounded-md border p-3 bg-red-500 bg-opacity-20 text-red-500">Cancel</button>
                    <button className="border-blue-300 w-[98%] rounded-md border p-3 bg-blue-500 bg-opacity-20 text-blue-500">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default NewYarnShipped;