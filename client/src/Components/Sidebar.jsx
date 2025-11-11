import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-300 bg-opacity-10 border-r border-gray-200 h-[100vh] w-[20rem] p-2">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b p-4 font-serif">SOUTH DRAGON</h2>
      <div>
        <div className="p-2 text-[1.2rem] border rounded-md hover:bg-blue-500 hover:bg-opacity-10 mb-3">
          <Link to='/allorders'><h2>Sample Orders</h2></Link>
        </div>
        <div className="p-2 text-[1.2rem] border rounded-md hover:bg-blue-500 hover:bg-opacity-10 mb-3">
          <Link to='/neworder'><h2>Add New Dyeing Order</h2></Link>
        </div>
        <div className="p-2 text-[1.2rem] border rounded-md hover:bg-blue-500 hover:bg-opacity-10 mb-3">
          <Link to='/neworder'><h2>Marketing Report</h2></Link>
        </div>
        <div className="p-2 text-[1.2rem] border rounded-md hover:bg-blue-500 hover:bg-opacity-10 mb-3">
          <Link to='/neworder'><h2>Raw Report</h2></Link>
        </div>
        <div className="p-2 text-[1.2rem] border rounded-md hover:bg-blue-500 hover:bg-opacity-10 mb-3">
          <Link to='/login'><h2>Login</h2></Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;