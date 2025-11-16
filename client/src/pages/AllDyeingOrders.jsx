import { useEffect, useState } from "react";
import Header from "../Components/Reusable/Header";
import useFetchRequest from "../hooks/Fetch.requiest";
import useAxiosPublic from "../hooks/Axios";
import usePostRequest from "../hooks/Post.request";

const AllDyeingOrders = () => {
    const { get, fetchedData } = useFetchRequest();
    const [orderNumber, setOrderNumber] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);
    const useAxios = useAxiosPublic();
    const { makePutRequest } = usePostRequest();


    useEffect(() => {
        get("/allorders")

    }, [get])

    if (!fetchedData) return;
    console.log(fetchedData);
    const handleChallanImageUpload = (orderId) => {
        setOrderNumber(orderId);
    }


    const handleFiles = (files) => {
        const fileArray = Array.from(files);

        const previews = fileArray.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setImages((prev) => [...prev, ...previews]);
    };

    const handleFileChange = (e) => {
        handleFiles(e.target.files);
        setOrderNumber(orderNumber);
        console.log(orderNumber);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };


    const uploadImages = async (orderNumber) => {
        setIsLoading(true);
        try {
            const urls = [];
            console.log(orderNumber);
            for (let i = 0; i < images.length; i++) {
                const formData = new FormData();
                formData.append("images", images[i].file);

                const res = await useAxios.post("/fileupload", formData);
                urls.push(res.data.files[0].secure_url); // collect each uploaded URL
            }

            console.log("All uploaded URLs:", urls);

            // Now send all URLs to your backend
            const insertChallan = await makePutRequest(`/dyeing-order/challan/${orderNumber}`,{ challanImages: urls });

            if(insertChallan && insertChallan.success){
                setIsLoading(false);
                setImages([]);
            }

            console.log("Backend response:", insertChallan);
        } catch (err) {
            console.error("Upload or insert failed:", err);
            setIsLoading(false);
        }
    };





    return (
        <div className="mt-10">
            <div className="mb-15">
                <Header typeOfHeader={'All Dyeing Orders'} />
            </div>
            <div className="mt-[5rem]">
                {
                    fetchedData?.dyeingOrders?.map((order, key) =>
                        <div key={key} className="p-3 border ml-3 w-[98%] mb-2 rounded-lg">
                            <div>
                                <div className="flex justify-between border-b p-2">
                                    <div className="flex gap-2">
                                        <h2 className="bg-blue-500 p-2 bg-opacity-20 text-blue-500 border-blue-500 uppercase">{order.orderNo}</h2>
                                        <span className="bg-blue-500 p-2  bg-opacity-20 text-blue-500 border-blue-500 uppercase">Section: {order.dyeingSection}</span>
                                        <label
                                            htmlFor="multiImageInput"
                                            onDrop={handleDrop}
                                            onDragOver={handleDragOver}
                                            className="flex flex-col items-center justify-center gap-2
                p-1 border-2 border-dashed rounded-xl cursor-pointer
                border-blue-400 bg-blue-50 hover:bg-blue-100 text-center transition"
                                        >
                                            {
                                                order.orderNo === orderNumber ? (
                                                    <span className="text-blue-700 font-medium">{images?.length > 0 ? `Upload ${images?.length} Images` : 'Select Multiple Images'}</span>
                                                ) : (
                                                    <span className="text-blue-500">Upload Challan</span>
                                                )
                                            }
                                        </label>

                                        <input
                                            id="multiImageInput"
                                            type="file"
                                            multiple
                                            onClick={() =>handleChallanImageUpload(order.orderNo)}
                                            accept="image/*"
                                            className="hidden mb-10"
                                            onChange={handleFileChange}
                                        />
                                        <div>
                                            { order.orderNo === orderNumber && images.length > 0 && (
                                                <button
                                                    onClick={() => uploadImages(order.orderNo)}
                                                    className=" bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
                                                >
                                                    {isLoading ? 'Uploading...' : 'Upload'}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>
                                            <button onClick={() => handleChallanImageUpload(order.orderNo)} className="bg-blue-500 p-1  bg-opacity-20 text-blue-500 border-blue-500 uppercase rounded-md">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </button>

                                        </span>
                                        <span>
                                            <button className="bg-blue-500 p-1 rounded-lg bg-opacity-20 text-blue-500 border-blue-500 uppercase">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    className="w-6 h-6"
                                                >
                                                    <circle cx="12" cy="5" r="2" />
                                                    <circle cx="12" cy="12" r="2" />
                                                    <circle cx="12" cy="19" r="2" />
                                                </svg>
                                            </button>


                                        </span>








                                    </div>
                                </div>


                                {
                                    orderNumber === order.orderNo ? (
                                        <div className="w-full items-start mt-3 justify-between">

                                            <div className="flex-1">
                                                <p className="text-lg font-medium border-b p-2 mb-3">Uploaded challans</p>

                                                <div className="flex flex-wrap  gap-3">
                                                    {order.challans.map((challan, i) => (
                                                        <div key={i}>
                                                            <img
                                                                src={challan.challanImage}
                                                                alt=""
                                                                className="w-[10rem] bg-gray-500 bg-opacity-20 rounded-md p-2 h-[10rem] object-cover"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>




                                    ) : <div className="border-b text-xl">
                                        <div className="flex border-b mb-2">
                                            <h2 className=" w-[20rem] mt-3 mb-3 uppercase p-1">Marketing Name: {order.marketingName}</h2>
                                            <h2 className=" w-[20rem] mt-3 mb-3 uppercase p-1">Factory Name: {order.factoryName}</h2>
                                        </div>
                                        <div className="grid border-b p-2 bg-opacity-20  gap-3 mb-2">
                                            {
                                                order.orderedYarns.map((yarn, index) =>
                                                    <div className="bg-gray-500 text-gray-500 items-center rounded-md grid grid-cols-2 bg-opacity-10">
                                                        <span key={index} className=" p-1">Yarn Type: {yarn.yarnTypes} </span>
                                                        <span>Order qty: {yarn.orderedYarnQty} LBS</span>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="p-2 flex gap-3">
                                            <span>
                                                Total Dyeing Order Qty:

                                            </span>
                                            <span className="">

                                                {
                                                    order.orderedYarns
                                                        .reduce((sum, yarn) => sum + Number(yarn.orderedYarnQty), 0)
                                                }
                                            </span>
                                        </div>
                                    </div>
                                }

                                <div className="flex gap-2 mt-2 items-center p-1">
                                    <h2>Colors:</h2>
                                    {
                                        order.colors.length > 0 ? order.colors.map((color, index) =>
                                            <span key={index} className={` bg-opacity-20 uppercase border-${color.colors}-500 border rounded-md bg-${color.colors}-500 text-${color.colors}-500 p-1`}>{color.colors}</span>
                                        ) : <span className="bg-red-500 bg-opacity-20 border-red-500 border rounded-md text-red-500 p-1">No colors added</span>
                                    }
                                </div>
                            </div>


                        </div >
                    )
                }
            </div >



        </div >
    );
};

export default AllDyeingOrders;