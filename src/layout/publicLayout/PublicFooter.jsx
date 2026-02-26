import { Form, Formik } from "formik";
import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

export default function PublicFooter() {
    return (
        <footer className="px-40 py-20 ">
            <div className="flex  justify-between pb-8 mb-8 border-b border-gray-300">
                <div className="flex flex-col gap-4 max-w-80">
                    <Logo />
                    <p className="font-sans ">The premier destination for readers to connect, share, and grow. Founded by book lovers, for book lovers.</p>
                </div>
                <div className="">
                    <h4 className="mb-6 text-xl ">Community</h4>
                    <ul className="font-sans flex flex-col gap-4">
                        <li className="cursor-pointer hover:text-blue-500 transition">Book Clubs</li>
                        <li className="cursor-pointer hover:text-blue-500 transition">Discussion Forums</li>
                        <li className="cursor-pointer hover:text-blue-500 transition">Live Events</li>
                        <li className="cursor-pointer hover:text-blue-500 transition">Member Leaderboard</li>
                    </ul>
                </div>
                <div className="">
                    <h4 className="mb-6 text-xl ">Resources</h4>
                    <ul className="font-sans flex flex-col gap-4">
                        <li className="cursor-pointer hover:text-blue-500 transition">Reading Lists</li>
                        <li className="cursor-pointer hover:text-blue-500 transition">Author Interviews</li>
                        <li className="cursor-pointer hover:text-blue-500 transition">Writing Tips</li>
                        <li className="cursor-pointer hover:text-blue-500 transition">Help Center</li>
                    </ul>
                </div>
                <div className="max-w-70">
                    <h4 className="mb-6 text-xl">Newsletter</h4>
                    <p className="mb-6 font-sans">Get the best reviews and club updates in your inbox.</p>
                    <Formik>
                        <Form className="flex flex-col">
                            <input type="text" className="bg-gray-100 font-sans p-3 rounded-full outline-0 mb-4" placeholder="Enter Your Email" />
                            <button className="p-3 bg-blue-500 rounded-full text-white cursor-pointer">Subscribe</button>
                        </Form>
                    </Formik>
                </div>
            </div>
            <div className="text-gray-400 flex justify-between font-sans">
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
