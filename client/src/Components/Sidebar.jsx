import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Sample Orders", path: "/allorders" },
    { name: "Add New Dyeing Order", path: "/neworder" },
    { name: "Marketing Report", path: "/marketing" },
    { name: "Raw Report", path: "/rawreport" },
    { name: "Generate PI", path: "/generate-pi" },
    { name: "Add New Shipped Yarns", path: "/newshipped" },
    { name: "Login", path: "/login" },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-72 bg-gradient-to-b from-blue-50 to-white border-r border-gray-200 shadow-lg flex flex-col">
      
      {/* Logo / Title */}
      <div className="p-6 border-b border-gray-300">
        <h2 className="text-2xl font-bold text-blue-800 font-serif tracking-wide">
          SOUTH DRAGON
        </h2>
      </div>

      {/* Menu items (scrollable) */}
      <div className="flex-1 overflow-y-auto px-4 mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.name} to={item.path}>
              <div
                className={`p-3 mb-3 rounded-lg cursor-pointer transition-colors duration-200
                  ${isActive ? "bg-blue-500 text-white shadow-md" : "hover:bg-blue-100 text-gray-800"}
                `}
              >
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer (fixed at bottom) */}
      <div className="p-4 border-t border-gray-300 text-sm text-gray-500">
        &copy; 2025 Riad Sarkar
      </div>
    </div>
  );
};

export default Sidebar;
