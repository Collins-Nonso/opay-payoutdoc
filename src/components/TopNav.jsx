import { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { TopNavLinks } from '../constants';
import { OPayLogo } from '../assets/images';
import { useTheme } from '../context/ThemeContext';

const TopNav = ({ toggleSidebar }) => {
  const [words, setInput] = useState('');
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`w-full px-5 py-2 z-10 fixed h-15 shadow transition-colors ${theme === 'dark' ? 'dark bg-[#0D0D0D] text-gray-300' : 'bg-[#F9FBFC] text-slate-900'}`}>
      <nav className="flex justify-between items-center md:mt-1 xl:m-auto">
        <a href="/opay-payoutdoc/">
          <img src={OPayLogo} alt="Opay Logo" className="w-24" />
        </a>

        <form className="flex m-auto relative rounded-xl w-120">
          <FaSearch className={`absolute xl:block md:hidden min-sm:hidden max-sm:hidden mt-4 ml-3  ${theme === "dark" ? "dark text-slate-700" : "text-slate-200"}`} />
          <input
            value={words}
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search..."
            className={`xl:w-3xl xl:block md:hidden min-sm:hidden max-sm:hidden px-10 py-3 focus:outline-none ${theme === "dark" ? "dark text-slate-200 bg-auto" : "text-slate-900 bg-blend-saturation"}`} disabled/>
          {words && (
            <MdClose
              className={`absolute h-auto w-5 right-3 top-4 xl:block md:hidden min-sm:hidden max-sm:hidden cursor-pointer ${theme === "dark" ? "dark text-slate-700" : "text-slate-200"}`}
              onClick={() => setInput('')}
            />
          )}
        </form>

        <ul className="flex gap-6 xl:text-xl md:text-sm font-semibold items-center md:hidden xl:flex min-sm:hidden max-sm:hidden mr-5">

          {TopNavLinks.map((item) => (
            <li key={item.name} className="flex items-center gap-1">
              {item.isLink ? (
                <a
                  href={item.path}
                  className="hover:bg-[#1fad7e] bg-[#26d99d] text-gray-100 rounded-xl px-5 py-2 cursor-pointer xl:flex md:hidden"
                >
                  {item.name}
                </a>
              ) : (
                <>
                  {item.name && <p>{item.name}</p>}
                  {item.imgURL && (
                    <img
                      src={item.imgURL}
                      alt={item.name}
                      className="w-8 h-8 rounded-full ml-1"
                    />
                  )}
                </>
              )}
            </li>
          ))}
        </ul>

          {/* Theme Toggle */}
          <ul className='xl:mr-2 md:mr-8 min-sm:mr-5 max-sm:mr-5'>
          <li>
            <button
              onClick={toggleTheme}
              className="text-xl rounded-full p-2 bg-slate-900 text-[#F9FBFC] dark:bg-gray-700 hover:bg-gray-600 dark:hover:bg-gray-600"
            >
              {theme === 'dark' ? <BsSunFill /> : <BsMoonFill />}
            </button>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <FaBarsStaggered
            className="text-3xl xl:hidden md:flex cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
