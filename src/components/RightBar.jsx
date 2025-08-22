import { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const RightBar = ({ navLinks = [] }) => {
  const [activeId, setActiveId] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          const targetEntry = visibleEntries[visibleEntries.length - 1];
          setActiveId(targetEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.3,
      }
    );

    const observedElements = [];

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) {
        observer.observe(el);
        observedElements.push(el);
      }
    });

    return () => {
      observedElements.forEach((el) => observer.unobserve(el));
    };
  }, [navLinks]);

  // Scroll to section with offset
  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 80; // adjust to match your fixed TopNav height
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="h-full w-150 min-xl:w-120 mr-1 pt-5 text-justify fixed right-0 top-15 z-2 md:hidden xl:block min-sm:hidden max-sm:hidden">
      <div className="overflow-y-auto h-screen pl-5 pr-5 pb-30 scrollbar scrollbar-thumb-[#364153] scrollbar-track-[#F9FBFC]">
        <h1 className="text-lg font-bold pb-2">ON THIS PAGE</h1>
        <hr className={`pb-4 ${theme === "dark" ? "dark border-slate-800" : "border-slate-200"}`} />
        <ul className="space-y-3 text-[15px] font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={(e) => handleScroll(e, link.id)}
                className={`block w-full text-left px-2 py-1 rounded-md transition-colors ${
                  activeId === link.id
                    ? "bg-[#26d99d] text-gray-100"
                    : "hover:bg-slate-800 hover:text-gray-100"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Back to Top Button */}
        <div
          onClick={handleScrollToTop}
          className="text-white shadow-md shadow-gray-900 fixed bottom-5 right-5 p-4 bg-[#26d99d] rounded-full cursor-pointer hover:opacity-90 transition"
        >
          <FaAnglesUp size={18} />
        </div>
      </div>
    </section>
  );
};

export default RightBar;
