import React, { useState, useEffect } from "react";
import { BarChart, User, LogOut, Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface IMenuItem {
  title: string;
  icon: JSX.Element;
  path: string;
}

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems: IMenuItem[] = [
    { title: "Feed", icon: <BarChart className="w-6 h-6" />, path: "/feed" },
    { title: "Profile", icon: <User className="w-6 h-6" />, path: "/profile" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsExpanded(false);
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsExpanded(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${
        isExpanded ? "w-64" : "w-16"
      } h-screen bg-gray-100 shadow-md flex flex-col transition-all duration-300`}
    >
      <div
        className={`flex items-center ${
          isExpanded ? "justify-between px-4" : "justify-center"
        } py-3 border-b border-gray-300`}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-grow">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <div
              className={`flex items-center ${
                isExpanded ? "px-4 py-3" : "px-2 py-3 justify-center"
              } cursor-pointer hover:bg-blue-100`}
            >
              {item.icon}
              {isExpanded && (
                <span className="ml-3 text-sm font-medium">{item.title}</span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="border-t border-gray-300">
        <Link to="/logout">
          <div
            className={`flex items-center ${
              isExpanded ? "px-4 py-3" : "px-2 py-3 justify-center"
            } cursor-pointer hover:bg-blue-100`}
          >
            <LogOut className="w-6 h-6" />
            {isExpanded && (
              <span className="ml-3 text-sm font-medium">Logout</span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
