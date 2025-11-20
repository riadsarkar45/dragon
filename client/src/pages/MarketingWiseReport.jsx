import { useEffect, useState } from 'react';
import Header from '../Components/Reusable/Header';
import useFetchRequest from '../hooks/Fetch.requiest';

const MarketingWiseReport = () => {

    const { get, fetchedData } = useFetchRequest();

    const [openModal, setOpenModal] = useState(false);
    const [selectedYarns, setSelectedYarns] = useState([]);
    const [showFactoryWise, setShowShowFactoryWise] = useState()

    useEffect(() => {
        get("/report");
    }, [get]);

    const handleViewYarns = (yarns) => {
        setSelectedYarns(yarns);
        setOpenModal(true);
    };
    const handleShowFactoryWise = (type) => {
        setShowShowFactoryWise(type)
    }
    return (
        <div>
            <div className='mb-20'>
                <Header typeOfHeader={"Marketing Wise Report"} />
            </div>

            <div className='flex justify-end bg-white border shadow-sm mb-3 p-2'>
                {
                    showFactoryWise ? (
                        <button onClick={() => handleShowFactoryWise(false)} className='bg-blue-500 bg-opacity-10 p-1 rounded-md border border-blue-500 text-blue-500'>Show Marketing Wise</button>

                    ) : <button onClick={() => handleShowFactoryWise(true)} className='bg-blue-500 bg-opacity-10 p-1 rounded-md border border-blue-500 text-blue-500'>Show Factory Wise</button>

                }
            </div>

            {
                !showFactoryWise && (
                    <div className="relative overflow-x-auto bg-white shadow-xs rounded-base border border-default">

                        <table className="w-full text-sm text-left text-body">
                            <thead className="text-sm bg-neutral-secondary-soft border-b border-default">
                                <tr>
                                    <th className="px-6 py-3 font-medium">#Sr</th>
                                    <th className="px-6 py-3 font-medium">Marketing Name</th>
                                    <th className="px-6 py-3 font-medium">Yarn Type</th>
                                    <th className="px-6 py-3 font-medium">Qty</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    fetchedData?.marketingReport.length > 0 &&
                                    fetchedData.marketingReport.map((item, index) => (
                                        <tr key={index} className="border-b border-default">
                                            <td className="px-6 py-4 font-medium">{index + 1}</td>

                                            <td className="px-6 py-4">{item.marketingName}</td>

                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => handleViewYarns(item.orderedYarns)}
                                                    className="bg-blue-500 border border-blue-500 bg-opacity-10 p-1 rounded-md text-blue-600 hover:bg-opacity-20 transition"
                                                >
                                                    {item.orderedYarns.length} Yarns (View)
                                                </button>
                                            </td>

                                            <td className="px-6 py-4">
                                                {item.totalOrderQty} LBS
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }

            {
                showFactoryWise && (
                    <div className='bg-white shadow-sm border mt-6 p-2'>
                        <h2>Factory Wise</h2>
                        {
                            fetchedData?.factoryReport.map((fr, i) => {
                                const factoryTotal = fr.orderedYarns.reduce((sum, ordY) =>
                                    sum + (Number(ordY.qty) || 0), 0
                                );

                                return (
                                    <div key={i} className='mb-4'>
                                        <h2 className='border-b p-2 bg-blue-500 bg-opacity-15 font-extrabold text-blue-500 border-blue-500'>
                                            #{i + 1} Factory Name: {fr.factoryName} | Total Qty: {factoryTotal} LBS
                                        </h2>
                                        {
                                            fr.orderedYarns.map((ordY, j) =>
                                                <div key={j} className='grid grid-cols-5 border-b p-2'>
                                                    <h2 className='uppercase'>{ordY.orderNo}</h2>
                                                    <h2>Merchent: {ordY.merchentName}</h2>
                                                    <h2>Yarn: {ordY.yarn}</h2>
                                                    <h2>Qty: {ordY.qty}</h2>
                                                    <h2>Marketing: {ordY.marketingName}</h2>
                                                </div>
                                            )
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                )
            }

            {/* modal section for yarn details */}

            {openModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-lg p-6 animate-[fadeIn_0.2s_ease]">

                        <div className="flex justify-between items-center mb-4">
                            <div className=''>
                                <p className="text-lg font-semibold mb-3">Yarn Details</p>
                                <span className='bg-blue-500 rounded-sm bg-opacity-15 text-blue-500 mt-3 p-1'>
                                    Total Qty :

                                    {
                                        selectedYarns?.reduce((sum, yarn) =>
                                            sum + Number(yarn.qty || yarn.orderedYarnQty || 0), 0)

                                    }
                                </span>
                            </div>
                            <button
                                onClick={() => setOpenModal(false)}
                                className="text-gray-500 hover:text-black"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="space-y-2 max-h-80 overflow-y-auto">
                            <div className="space-y-2 max-h-80 overflow-y-auto">
                                {
                                    selectedYarns.map((yarn, i) => (
                                        <div key={i} className="p-3 border rounded-lg bg-gray-50">
                                            <p className="font-medium border-b">Yarn {i + 1}</p>
                                            <p className="border-b p-1">Yarn Type: {yarn.yarn}</p>
                                            <p className="border-b p-1">Dyeing Section: {yarn.dyeingSection}</p>
                                            <p className="border-b p-1">Factory Name: {yarn.factoryName}</p>
                                            <p className=" p-1">Qty: {yarn.qty || 0} lbs</p>
                                            {yarn.count && <p>Count: {yarn.count}</p>}
                                            {yarn.type && <p>Type: {yarn.type}</p>}
                                        </div>
                                    ))
                                }
                            </div>


                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

export default MarketingWiseReport;
