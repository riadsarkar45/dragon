import Header from "../Components/Reusable/Header";
import usePostRequest from "../hooks/Post.request";

const Profile = () => {
    const { makePostRequest } = usePostRequest();
    const handleCreateNewProfile = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const insert = await makePostRequest('/newprofile', data)
        console.log(insert, "head shot");
    }
    return (
        <div>
            <Header typeOfHeader={'Profile'}></Header>
            <form className="mt-16" onSubmit={handleCreateNewProfile}>
                <div className="flex gap-2 justify-between w-[60rem] m-auto">
                    <div className=" w-[30rem] mb-5">
                        <div className="mb-2">
                            <input name="userName" className="w-full rounded-md outline-green-400 border p-2" type="text" placeholder="User Name" />
                        </div>
                        <div className="mb-2">
                            <input name="userRole" className="w-full rounded-md outline-green-400 border p-2" type="text" placeholder="User Role" />
                        </div>
                        <div className="mb-6">
                            <input name="userDesignation" className="w-full rounded-md outline-green-400 border p-2" type="text" placeholder="User Designation" />
                        </div>
                        <div className="mb-6">
                            <input name="userEmail" className="w-full rounded-md outline-green-400 border p-2" type="text" placeholder="User Email" />
                        </div>
                        <div className="mb-6">
                            <input name="userPassword" className="w-full rounded-md outline-green-400 border p-2" type="text" placeholder="User Password" />
                        </div>
                        <div className="mb-6">
                            <input name="confirmPassword" className="w-full rounded-md outline-green-400 border p-2" type="text" placeholder="Confirm Password" />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <button className="border p-2 bg-red-500 bg-opacity-20 border-red-500 text-red-500 rounded-md">Cancel</button>
                            <button className="border p-2 bg-blue-500 bg-opacity-20 border-blue-500 text-blue-500 rounded-md">Submit</button>
                        </div>
                    </div>
                    <div className="mt-15">
                        <div className="border rounded-[10rem] h-[10rem] w-[10rem] mb-10">
                            <input type="file" />
                        </div>

                    </div>


                </div>
            </form>
        </div>
    );
};

export default Profile;