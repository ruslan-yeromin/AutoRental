"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { Fragment } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { LuSettings } from "react-icons/lu";
import { navItems } from "@/utils/data";
import MobileNavbar from "./MobileNavbar";
import { GlobalContext } from "@/context";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const { user, setUser, isAuthUser, setIsAuthUser } =
    useContext(GlobalContext);
    const router = useRouter();

  const handleLogout = () => {
    setIsAuthUser(false);
    setUser(null);
    Cookies.remove("token");
    localStorage.clear();
    // router.push('/')
    // Will not allow other pages to be viewed by an unauthorized user and will redirect them to the home page if they are not already there.
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <Link href="/">
            <Image width={200} height={30} alt="Logo image" src="/logo.webp" />
          </Link>
        </div>

        {/* NavItems */}
        <div
          className="items-center hidden lg:flex justify-between w-full md:w-auto"
          id="nav-items"
        >
          <ul className="flex gap-6 items-center text-[1.5rem] font-medium">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer relative line-animations text-gray-700 rounded  hover:text-gray-900 transition-all"
              >
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex md:order-2 items-center gap-2">
          {/* Buttons */}
          {/* If the user is logged in, show the Account button.  */}
          {isAuthUser ? (
            <Fragment>
              <CustomButton
                title="Account"
                containerStyles="button button-padding"
                rightIcon={<LuSettings />}
              />
            </Fragment>
          ) : null}

          {/* If the user is logged in, show the Logout button, else show the Login button  */}
          {!isAuthUser ? (
            <CustomButton
              title="Login"
              containerStyles="button button-padding"
              onClick={() => router.push("/login")}
            />
          ) : (
            <CustomButton
              title="Log out"
              containerStyles="button button-padding"
              onClick={handleLogout}
            />
          )}
          {/* Mobile Menu Component*/}
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
