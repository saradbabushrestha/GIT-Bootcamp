import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [activeItem, setActiveItem] = useState<string>("/feed");

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

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveItem(currentPath);
  }, [window.location.pathname]);

  const sidebarVariants = {
    expanded: { width: "12rem" },
    collapsed: { width: "4rem" },
  };

  return (
    <motion.div
      variants={sidebarVariants}
      animate={isExpanded ? "expanded" : "collapsed"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="h-screen bg-gray-100 shadow-lg flex flex-col transition-all overflow-hidden"
    >
      <div className={`flex items-center px-4 py-4 border-b border-gray-300`}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg focus:outline-none transition-all"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <motion.div className="flex-grow mt-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="group"
            onClick={() => setActiveItem(item.path)}
          >
            <motion.div
              whileHover={{
                scale: 1,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
              }}
              className={`flex items-center px-4 py-3 cursor-pointer transition-all duration-300 ${
                activeItem === item.path
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-blue-100"
              }`}
            >
              {item.icon}
              {isExpanded ? (
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="ml-3 text-sm font-medium text-gray-700"
                >
                  {item.title}
                </motion.span>
              ) : (
                <span className="absolute left-16 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </span>
              )}
            </motion.div>
          </Link>
        ))}
      </motion.div>

      <div className="border-t border-gray-300">
        <Link to="/logout" className="group">
          <motion.div
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(239, 68, 68, 0.1)",
            }}
            className={`flex items-center px-4 py-3 cursor-pointer hover:bg-red-100 transition-all duration-300`}
          >
            <LogOut className="w-6 h-6 text-red-500" />
            {isExpanded ? (
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="ml-3 text-sm font-medium text-red-500"
              >
                Logout
              </motion.span>
            ) : (
              <span className="absolute left-16 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Logout
              </span>
            )}
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Sidebar;
