import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function AccordionItem({ FQA, Answer }) {
    const [open, setOpen] = useState(false);
    return (
        <div className=" rounded-lg p-4 mb-2">
            <button className="w-full  flex bg-gray-100 mb-1 p-2 cursor-pointer justify-between items-center rounded" onClick={() => setOpen(!open)}>
                {FQA} {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 px-2  ${open? 'h-fit': 'h-0'}  text-black/60 font-sans text-w`}>
                {Answer}
            </div>
        </div>
    );
}
