import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  User as ProfileIcon,
  LogOut,
  Menu,
  FileSliders,
  Shield,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { User } from "../types/users/userlogin";
import { logout } from "../redux/slices/authSlice";

interface IMenuItem {
  title: string;
  icon: JSX.Element;
  path: string;
}

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState<string>("/feed");

  const navigate = useNavigate();
  const location = useLocation();

  const { id, role } = useSelector((state: RootState) => state.auth.user! || {}) as User;
  const dispatch = useDispatch();

  const menuItems: IMenuItem[] = [
    {
      title: "Feed",
      icon: <BarChart className="w-6 h-6" />,
      path: `${id}/feed`,
    },
    {
      title: "Profile",
      icon: <ProfileIcon className="w-6 h-6" />,
      path: `${id}/profile`,
    },
    {
      title: "Data",
      icon: <FileSliders className="w-6 h-6" />,
      path: `${id}/admin`,
    },
    {
      title: "SuperData",
      icon: <Shield className="w-6 h-6" />,
      path: `${id}/superadmin`,
    },
  ];

  const filteredMenuItems = menuItems.filter((item) => {
    if (role === "user") {
      return item.path.includes("/feed") || item.path.includes("/profile");
    }
    if (role === "admin") {
      return (
        item.path.includes("/feed") ||
        item.path.includes("/profile") ||
        item.path.includes("/admin")
      );
    }
    if (role === "superadmin") {
      return (
        item.path.includes("/feed") ||
        item.path.includes("/profile") ||
        item.path.includes("/superadmin")
      );
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

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
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <motion.div className="flex-grow mt-4">
        {filteredMenuItems.map((item, index) => (
          <Link
            key={index}
            to={`/${item.path}`}
            className="group"
            onClick={() => setActiveItem(item.path)}
          >
            <motion.div
              whileHover={{
                scale: 1,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
              }}
              className={`flex items-center px-4 py-3 cursor-pointer transition-all duration-300 ${
                activeItem === `/${item.path}`
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
        <div className="group" onClick={handleLogout}>
          <motion.div
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(239, 68, 68, 0.1)",
            }}
            className="flex items-center px-4 py-3 cursor-pointer hover:bg-red-100 transition-all duration-300"
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
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
