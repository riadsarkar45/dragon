import { useState } from "react";
import Header from "../Components/Reusable/Header";
import usePostRequest from "../hooks/Post.request";

const GeneratePI = () => {
    const { makePostRequest } = usePostRequest();

    const [form, setForm] = useState({
        piNo: "",
        buyerName: "",
        bankName: "",
        hsCode: "",
        amountInWord: "",
        date: new Date().toISOString().split("T")[0],
    });

    const [items, setItems] = useState([
        { description: "", qty: "", unitPrice: "" }
    ]);

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleItemChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        setItems(updated);
    };

    const addRow = () => {
        setItems([...items, { description: "", qty: "", unitPrice: "" }]);
    };

    const removeRow = (index) => {
        if (items.length > 1) {
            const updated = items.filter((_, i) => i !== index);
            setItems(updated);
        }
    };

    const calculateTotal = (item) => {
        const qty = Number(item.qty || 0);
        const price = Number(item.unitPrice || 0);
        return qty * price;
    };

    const grandTotal = items.reduce((sum, item) => sum + calculateTotal(item), 0);


    const handleSubmit = async () => {
        try {
            const payload = { ...form, items, grandTotal };

            const res = await makePostRequest("/generate-pi", payload, {
                responseType: "blob",
            });

            // 🛡️ Check if it's actually an error (JSON inside a Blob)
            if (res.data.type === "application/json") {
                const errorText = await res.data.text();
                const error = JSON.parse(errorText);
                throw new Error(error.message || "Failed to generate PI");
            }

            const url = window.URL.createObjectURL(res.data);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${payload.buyerName}-PI.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);

            alert("PI generated & downloaded!");
        } catch (err) {
            console.error("Error generating PI:", err);
            alert(err.message || "Failed to generate PI");
        }
    };


    return (
        <div className="w-full mt-[5rem]">
            <Header typeOfHeader={"Generate PI"} />

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 px-3">
                {/* FORM */}
                <div className="p-3 border rounded-md shadow-sm">
                    <div className="grid grid-cols-1 gap-3">

                        <input name="piNo" onChange={handleFormChange} value={form.piNo}
                            className="w-full border p-3 rounded-md" placeholder="PI No" />

                        <input name="buyerName" onChange={handleFormChange} value={form.buyerName}
                            className="w-full border p-3 rounded-md" placeholder="Buyer Name" />

                        <input name="bankName" onChange={handleFormChange} value={form.bankName}
                            className="w-full border p-3 rounded-md" placeholder="Advising Bank" />

                        <input name="hsCode" onChange={handleFormChange} value={form.hsCode}
                            className="w-full border p-3 rounded-md" placeholder="HS Code" />

                        <input name="amountInWord" onChange={handleFormChange} value={form.amountInWord}
                            className="w-full border p-3 rounded-md" placeholder="Total in words" />

                        {/* ITEM LIST */}
                        <div>
                            <h3 className="font-semibold mb-2">Goods Description</h3>

                            {items.map((item, i) => (
                                <div key={i} className="grid grid-cols-12 gap-2 mb-2 items-center">
                                    <input
                                        className="col-span-4 border p-2 rounded"
                                        placeholder="Description"
                                        value={item.description}
                                        onChange={(e) => handleItemChange(i, "description", e.target.value)}
                                    />
                                    <input
                                        className="col-span-3 border p-2 rounded"
                                        placeholder="Qty Lbs"
                                        type="number"
                                        value={item.qty}
                                        onChange={(e) => handleItemChange(i, "qty", e.target.value)}
                                    />
                                    <input
                                        className="col-span-3 border p-2 rounded"
                                        placeholder="Unit Price"
                                        type="number"
                                        value={item.unitPrice}
                                        onChange={(e) => handleItemChange(i, "unitPrice", e.target.value)}
                                    />
                                    <button
                                        onClick={() => removeRow(i)}
                                        className="col-span-1 bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        X
                                    </button>
                                </div>
                            ))}

                            <button onClick={addRow}
                                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                                + Add Row
                            </button>
                        </div>

                        <button onClick={handleSubmit}
                            className="bg-green-600 text-white py-3 rounded mt-3">
                            Generate PI
                        </button>
                    </div>
                </div>

                {/* PREVIEW */}
                <div className="p-3 border rounded-md shadow-sm">
                    <div className="text-center font-serif mb-4">
                        <h2 className="text-lg font-semibold">SOUTH DRAGON DYEING AND WASHING</h2>
                    </div>

                    <div className="mb-4 text-sm">
                        <h2>P I No : {form.piNo || "—"}</h2>
                        <h2>Date: {form.date}</h2>
                    </div>

                    {/* Header */}
                    <div className="grid grid-cols-7 font-semibold border bg-gray-100 text-sm">
                        <div className="border p-2 text-center">SL</div>
                        <div className="border p-2 col-span-2 text-center">DESCRIPTION</div>
                        <div className="border p-2 text-center">HS CODE</div>
                        <div className="border p-2 text-center">QTY</div>
                        <div className="border p-2 text-center">UNITE PRICE</div>
                        <div className="border p-2 text-center">TOTAL</div>
                    </div>

                    {/* Body */}
                    {items.map((item, i) => (
                        <div key={i} className="grid grid-cols-7 border text-sm">
                            <div className="border p-2 text-center">{i + 1}</div>
                            <div className="border p-2 col-span-2">{item.description || "—"}</div>
                            <div className="border p-2 text-center">{form.hsCode || "—"}</div>
                            <div className="border p-2 text-center">{item.qty || "—"}</div>
                            <div className="border p-2 text-center">{item.unitPrice || "—"}</div>
                            <div className="border p-2 text-center">{calculateTotal(item)}</div>
                        </div>
                    ))}

                    {/* Grand Total */}
                    <div className="text-right font-semibold mt-4">
                        Grand Total: {grandTotal} BDT
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneratePI;
