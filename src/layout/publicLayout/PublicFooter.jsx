import { Form, Formik } from "formik";
import React, { useState } from "react";
import Logo from "../../components/Logo";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function PublicFooter() {
    const [openCommunity, setOpenCommunity] = useState(false);
    const [openResources, setOpenResources] = useState(false);
    const [openNewsletter, setOpenNewsletter] = useState(false);
    return (
        <footer className="px-10 xl:px-40 py-20 ">
            <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-between pb-8 mb-8 border-b border-gray-300">
                <div className="flex flex-col gap-4 max-w-80">
                    <Logo />
                    <p className="font-sans ">The premier destination for readers to connect, share, and grow. Founded by book lovers, for book lovers.</p>
                </div>
                <div className="w-full sm:w-fit">
                    <h4 className="mb-6 text-xl flex justify-between items-center " onClick={() => setOpenCommunity(!openCommunity)}>
                        Community <span className="sm:hidden">{openCommunity ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                    </h4>
                    <ul className={`font-sans flex flex-col gap-4 overflow-hidden transition-all duration-300 ${openCommunity ? "h-fit" : "h-0"}`}>
                        <li className="cursor-pointer hover:text-blue-500 transition">Book Clubs</li>
                        <li className="cursor-pointer hover:text-blue-500 transition">Discussion Forums</li>
                        <li className="cursor-pointer hover:text-blue-500 transition">Live Events</li>
                        <li className="cursor-pointer hover:text-blue-500 transition">Member Leaderboard</li>
                    </ul>
                </div>
                <div className="w-full sm:w-fit ">
                    <h4 className="mb-6 text-xl flex justify-between items-center" onClick={() => setOpenResources(!openResources)}>
                        Resources <span className="sm:hidden">{openResources ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                    </h4>
                    <ul className={`font-sans flex flex-col gap-4 overflow-hidden transition-all duration-300 ${openResources ? "h-fit" : "h-0"}`}>
                        <li className="cursor-pointer hover:text-blue-500 transition">Reading Lists</li>
                        <li className="cursor-pointer hover:text-blue-500 transition">Author Interviews</li>
                        <li className="cursor-pointer hover:text-blue-500 transition">Writing Tips</li>
                        <li className="cursor-pointer hover:text-blue-500 transition">Help Center</li>
                    </ul>
                </div>
                <div className="max-w-70">
                    <h4 className="mb-6 text-xl flex justify-between items-center" onClick={() => setOpenNewsletter(!openNewsletter)}>
                        Newsletter <span className="sm:hidden">{openNewsletter ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                    </h4>
                    <div className={`overflow-hidden transition-all duration-300 ${openNewsletter ? "h-fit" : "h-0"}`}>
                        <p className="mb-6 font-sans">Get the best reviews and club updates in your inbox.</p>
                        <Formik>
                            <Form className="flex flex-col">
                                <input type="text" className="bg-gray-100 font-sans p-3 rounded-full outline-0 mb-4" placeholder="Enter Your Email" />
                                <button className="p-3 bg-blue-500 rounded-full text-white cursor-pointer">Subscribe</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            <div className="text-gray-400 flex flex-col gap-4 md:flex-row justify-between font-sans">
                <p>© 2024 BookHub Community. All rights reserved.</p>
                <ul className="flex gap-6">
                    <li className="cursor-pointer hover:text-blue-500 transition  ">Privacy Policy</li>
                    <li className="cursor-pointer hover:text-blue-500 transition  ">Terms of Service</li>
                    <li className="cursor-pointer hover:text-blue-500 transition  ">Cookie Settings</li>
                </ul>
            </div>
        </footer>
    );
}
