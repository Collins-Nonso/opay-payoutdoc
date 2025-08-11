import { useState, useEffect } from "react";
import { SideNavLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const SideNav = ({ sidebarOpen, toggleSidebar }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    setOpenMenu("Getting Started");
  }, []);

  const toggleMenu = (title) => {
    setOpenMenu((prev) => (prev === title ? "" : title));
  };

  const date = new Date();

  return (
    <aside
      className={`fixed top-15 left-0 z-10 h-full transition-all duration-200 ease-in-out w-80 xl:w-80
        ${theme === "dark" ? "dark bg-slate-900 text-gray-200" : "bg-[#F9FBFC] text-slate-900"}
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        xl:translate-x-0`} >

      <div className="pt-10 px-4 h-full overflow-y-auto">
        <ul className="space-y-4 pb-32">
          {SideNavLinks.map((item, index) => {
            if (item.type === "divider") {
              return (
                <hr
                  key={`divider-${index}`}
                  className={`my-4 ${theme === "dark" ? "dark border-slate-800" : "border-slate-200"}`}
                />
              );
            }

            const isOpen = openMenu === item.title;
            const ChevronIcon = isOpen ? item.iconOpen : item.iconClosed;

            return (
              <li key={item.title || index}>
                <div
                  className="flex items-center justify-between cursor-pointer uppercase text-xs font-bold"
                  onClick={() => item.subNav && toggleMenu(item.title)}
                >
                  <div className="flex items-center gap-2">
                    {ChevronIcon && <ChevronIcon className="text-lg" />}
                    {item.path ? (
                      <Link
                        to={item.path}
                        className={`hover:text-[#26d99d] ${
                          location.pathname === item.path ? "text-[#26d99d]" : ""
                        }`}
                        onClick={toggleSidebar}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span>{item.title}</span>
                    )}
                  </div>
                </div>

                {item.subNav && (
                  <ul
                    className={`pl-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.subNav.map((subItem, subIndex) => {
                      const SubIcon = subItem.iconURL;
                      const isActive = location.pathname === subItem.path;

                      return (
                        <li key={subItem.title || subIndex} className="py-1 mt-2">
                          <Link
                            to={subItem.path}
                            onClick={toggleSidebar}
                            className={`flex items-center gap-2 text-sm transition-colors duration-150 ${
                              isActive
                                ? "text-[#26d99d] font-semibold"
                                : "hover:text-[#26d99d]"
                            }`}
                          >
                            {SubIcon && <SubIcon className="text-base" />}
                            {subItem.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      <div className="fixed bottom-15 left-0 w-full text-gray-200 font-bold bg-[#26d99d] text-center py-5">
        <p>&copy; {date.getFullYear()} OPay</p>
      </div>
      </div>
    </aside>
  );
};

export default SideNav;
