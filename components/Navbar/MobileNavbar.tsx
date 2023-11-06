"use client";
import { useState } from "react";
import { BiMenuAltRight, BiMenu } from "react-icons/bi";
import { navItems } from "@/utils/data";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Variants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: '100%',
    opacity: 1,
  },
};

const MobileNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <button
        className="text-[2.5rem] p-2"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <BiMenu /> : <BiMenuAltRight />}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={Variants}
            initial="closed"
            animate="open"
            exit="closed"
            key="mobile-menu"
            className="fixed top-0 right-0 w-[50%] h-screen bg-gray-100 shadow-xl z-10"
          >
            <div className="relative w-full h-screen flex justify-center items-center">
              <ul className="flex flex-col gap-6 items-center text-[1.5rem] font-medium">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className="cursor-pointer relative line-animations text-gray-700 rounded  hover:text-gray-900 transition-all"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              <span
                className="absolute top-8 right-8 text-2xl text-red-700"
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                <AiOutlineClose />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
