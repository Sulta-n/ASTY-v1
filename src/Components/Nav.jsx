import { MenuIcon, X } from "lucide-react";
import IMG from "../assets/logo2.png";
import { navInfo } from "../lib/info";
import { useState } from "react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isNavOpen, setIsnavOpen] = useState(false);

  const [activeNav, setActivenav] = useState("");

  const handleNavopen = () => {
    setIsnavOpen((prev) => !prev);
  };

  return (
    <nav
      className="w-full fixed inset-x-0 top-0 left-0 z-50 "
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Desktop */}
      <div className="hidden lg:flex  items-center mx-auto text-white px-8 py-5 rounded-b-lg bg-background gap-x-20 ">
        {/* logo */}
        <div className="flex items-center justify-center gap-x-4.5  ml-7 cursor-pointer">
          <img
            src={IMG}
            alt="Asty Properties Logo"
            className="h-16 stroke-logo"
          />
          <a
            className="text-2xl font-extrabold tracking-tight leading-none primary-glow pointer cursor-pointer"
            href="#"
          >
            <span className="text-primary">ASTY</span>
            <br />
            PROPERTIES
          </a>
        </div>
        {/* Nav menus */}
        <ul
          role="menu"
          className="flex items-center justify-end gap-x-7 text-primary  text-2xl lg:gap-x-36  lg:w-[50%] mx-auto"
        >
          {navInfo.map((info, i) => {
            return (
              <li
                role="menuitem"
                className={cn(
                  " underline-animation relative",
                  activeNav === info.title
                    ? "text-white after:content-[''] after:absolute after:-bottom-0.5 after:h-[3px] after:w-full after:bg-primary/70 after:block"
                    : ""
                )}
                key={i}
                onClick={() => setActivenav(info.title)}
              >
                <a
                  href={info.path}
                  className="lg:font-semibold pointer"
                  aria-current={activeNav === info ? "page" : undefined}
                >
                  {info.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* mobile */}

      <div>
        <motion.div
          className={cn(
            "bg-background  px-3 items-center justify-between py-2 text-white lg:hidden",
            isNavOpen ? "hidden" : "flex"
          )}
        >
          <div className="flex items-center justify-center gap-x-4">
            <img src={IMG} alt="Asty Properties Logo" className="h-7" />
            <a
              className=" tracking-tight leading-none primary-glow text-md font-semibold "
              href="#"
            >
              <span className="text-primary">ASTY</span>
              <br />
              PROPERTIES
            </a>
          </div>
          <MenuIcon
            className="text-primary"
            size={30}
            onClick={handleNavopen}
          />
        </motion.div>
        {/* Mobile menus */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              className={cn(
                "bg-background lg:hidden flex flex-col h-[90vh] w-[90vw]  text-white  gap-y-10 fixed inset-0 z-50 mx-auto rounded-xl top-5 px-3.5 py-5",
                isNavOpen ? "flex" : "hidden"
              )}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="  px-3 items-center justify-between py-2 text-white flex">
                <div className="flex items-center justify-center gap-x-4">
                  <img src={IMG} alt="Asty Properties Logo" className="h-7" />
                  <a
                    className=" tracking-tight leading-none primary-glow text-md font-semibold text-[1.5rem]"
                    href="#"
                  >
                    <span className="text-primary">ASTY</span>
                    <br />
                    PROPERTIES
                  </a>
                </div>
                <X
                  className="text-primary "
                  size={35}
                  onClick={handleNavopen}
                />
              </div>
              <ul
                role="menu"
                className="flex flex-col  justify-between gap-y-6 mt-6 text-2xl items-center md:gap-y-9 md:text-3xl px-10"
              >
                {navInfo.map((info, i) => {
                  return (
                    <motion.li
                      role="menuitem"
                      className="p-3  w-full rounded-md backdrop-blur-sm border-2 border-primary/20 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                        ease: "easeInOut",
                      }}
                      key={i}
                    >
                      <a
                        onClick={() => {
                          setActivenav(info.title);
                          handleNavopen();
                        }}
                        href={info.path}
                        aria-current={activeNav === info ? "page" : undefined}
                      >
                        {info.title}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
