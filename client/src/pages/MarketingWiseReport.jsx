import { useEffect } from 'react';
import Header from '../Components/Reusable/Header';
import useFetchRequest from '../hooks/Fetch.requiest';

const MarketingWiseReport = () => {

    const { get, fetchedData } = useFetchRequest();

    useEffect(() => {
        get("/report")

    }, [get])

    console.log(fetchedData?.data?.sectionWiseReport);


    return (
        <div>
            <div className='mb-20'>
                <Header typeOfHeader={"Marketing Wise Report"} />
            </div>


            <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs bg-white rounded-base border border-default">
                <table class="w-full text-sm text-left rtl:text-right text-body">
                    <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                        <tr>
                            <th scope="col" class="px-6 py-3 font-medium">
                                #Sr
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                Marketing Name
                            </th>
                            {/* <th scope="col" class="px-6 py-3 font-medium">
                                Section
                            </th> */}
                            <th scope="col" class="px-6 py-3 font-medium">
                                Yarn Type
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                Qty
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fetchedData?.data?.sectionWiseReport?.length > 0 ? (
                                fetchedData.data.sectionWiseReport.map((item, index) => (
                                    <tr key={index} className=" border-b border-default">
                                        <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                            {index + 1}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.marketingName}
                                        </td>
                                        {/* <td className="px-6 py-4 uppercase">
                                            {item.dyeingSection}
                                        </td> */}
                                        <td className="px-6 py-4">
                                            {item.yarnType}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.totalLbs}
                                        </td>
                                    </tr>
                                ))
                            ) : null
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MarketingWiseReport;