'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ToggleTheme() {
    //const [mounted, setMounted] = useState(false);
    const {theme, setTheme}=useTheme();
    const [toggle, setToggle] = useState(theme==="dark");
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }
    return (
        <div className="flex justify-end items-center m-10 gap-4 ">
            <Image src="/night-mode-1.png" width={20} height={20} className="invert"/>
            <div onClick={() => {setTheme(theme === "light" ? "dark" : "light");setToggle(!toggle);console.log(theme);}} className={`flex h-6 w-12 cursor-pointer ${toggle ? "bg-white justify-start" : "bg-black justify-end"} rounded-full p-[1px] border border-black`}>
                <motion.div className={`h-5 w-5 rounded-full ${toggle ? 'bg-black' : 'bg-white'}`} transition={{ type: 'spring', stiffness: 700, damping: 30 }}></motion.div>
            </div>
            <Image src="/light-mode-1.png" width={20} height={20}/>
        </div>
    );
}
