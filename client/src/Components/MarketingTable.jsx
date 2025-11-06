import React from 'react';

const MarketingTable = () => {
    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Marketing Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Sample Taken Lbs
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Yarn Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Section
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                1
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Mr. Chunnu
                            </th>
                            <td className="px-6 py-4">80</td>
                            <td className="px-6 py-4">100% Cotton 2/32</td>
                            <td className="px-6 py-4">Hover To View</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                1
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Mr. Chunnu
                            </th>
                            <td className="px-6 py-4">80</td>
                            <td className="px-6 py-4">100% Cotton 2/32</td>
                            <td className="px-6 py-4">Hover To View</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                1
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Mr. Chunnu
                            </th>
                            <td className="px-6 py-4">80</td>
                            <td className="px-6 py-4">100% Cotton 2/32</td>
                            <td className="px-6 py-4">Hover To View</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                1
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Mr. Chunnu
                            </th>
                            <td className="px-6 py-4">80</td>
                            <td className="px-6 py-4">100% Cotton 2/32</td>
                            <td className="px-6 py-4">Hover To View</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                1
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Mr. Chunnu
                            </th>
                            <td className="px-6 py-4">80</td>
                            <td className="px-6 py-4">100% Cotton 2/32</td>
                            <td className="px-6 py-4">Hover To View</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MarketingTable;