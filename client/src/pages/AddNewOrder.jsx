import Header from "../Components/Reusable/Header";
import usePostRequest from "../hooks/Post.request";

const AddNewOrder = () => {
    const { makePostRequest } = usePostRequest();
    const handleCreateNewDyeingOrder = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const insert = await makePostRequest('/neworder', data)
        console.log(insert, "headshot");
    }
    return (
        <div className="w-full">

            <Header typeOfHeader={'Add New Dyeing Order'} />

            <form onSubmit={handleCreateNewDyeingOrder}>
                <div className="grid ml-3">
                    <div className="grid grid-cols-2 gap-1 mb-3">
                        <div className="grid">
                            <small>Dyeing Order</small>
                            <input name="orderNo" className="w-full p-3 outline-none border rounded-md mt-1" type="text" placeholder="Dyeing Order" />
                        </div>
                        <div className="grid">
                            <small>Dyeing Section</small>
                            <input name="dyeingSection" className="w-full p-3 outline-none border rounded-md mt-1" type="text" placeholder="Dyeing Section" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1 mb-2">
                        <div className="grid">
                            <small>Yarn Type</small>
                            <input name="yarnType" className="w-full p-3 outline-none border rounded-md mt-1" type="text" placeholder="Yarn Type" />
                        </div>
                        <div className="grid">
                            <small>Order Qty</small>
                            <input name="orderQty" className="w-full p-3 outline-none border rounded-md mt-1" type="text" placeholder="Order Qty Lbs" />
                        </div>
                    </div>

                    <div className="grid mb-2">
                        <small>Marketing Name</small>
                        <input name="marketingName" className="w-[99%] p-3 outline-none border rounded-md mt-1" type="text" placeholder="Marketing Name" />
                    </div>

                    <div className="grid grid-cols-2 gap-1 mb-2">
                        <div className="grid">
                            <small>Factory Name</small>
                            <input name="factoryName" className="w-full p-3 outline-none border rounded-md mt-1" type="text" placeholder="Dyeing Order" />
                        </div>
                        <div className="grid">
                            <small>Merchandiser Name</small>
                            <input name="merchentName" className="w-full p-3 outline-none border rounded-md mt-1" type="text" placeholder="Merchandiser Name" />
                        </div>
                    </div>

                    <div className="grid">
                        <small>Colors</small>
                        <input name="colors" className="w-[99%] p-3 outline-none border rounded-md mt-1" type="text" placeholder="Use coma to add multiple colors" />
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

export default AddNewOrder;