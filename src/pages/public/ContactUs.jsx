import React from "react";
import ContactInformationCard from "../../components/ContactInformationCard";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Field, Form, Formik } from "formik";
import WrapperInput from "../../components/WrapperInput";

export default function ContactUs() {
    const selectOptions = ["General inquiry", "Account support", "Book recommendation", "Business partnership"];

    const initialValues = {
        fullName: "",
        email: "",
        subject: "General inquiry",
        message: "",
    };
    const onSubmit = (e) => {
      console.log(e);
    }
    return (
        <main className="bg-gray-100 px-40 py-20 flex flex-col xl:flex-row  gap-12">
            <section className="flex flex-col gap-6 flex-1">
                <h1 className="text-6xl">
                    Get in touch with our <span className="text-blue-500">Librarians</span>
                </h1>
                <p>Have a question about our collection or need help with your account? We're here to help you navigate through our universe of stories.</p>
                <div className="">
                    <ContactInformationCard title={"email us"} info={"support@booklibrary.com"} />
                    <ContactInformationCard title={"visit us"} info={"123 Bibliophile Avenue, Fiction District New York, NY 10001"} />
                    <ContactInformationCard title={"call us"} info={"+1 (555) 000-BOOK"} />
                </div>
                <div className="">
                    <h4 className="mb-4 text-xl capitalize">follow our journey</h4>
                    <div className=" flex gap-2">
                        <div className="flex justify-center items-center w-12 h-12 text-2xl rounded-full bg-blue-500 hover:bg-blue-600 transition text-white cursor-pointer">
                            <FaFacebook />
                        </div>
                        <div className="flex justify-center items-center w-12 h-12 text-2xl rounded-full bg-blue-500 hover:bg-blue-600 transition text-white cursor-pointer">
                            <FaInstagram />
                        </div>
                        <div className="flex justify-center items-center w-12 h-12 text-2xl rounded-full bg-blue-500 hover:bg-blue-600 transition text-white cursor-pointer">
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex-1">
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {() => (
                        <Form className="bg-white h-full rounded-3xl p-14 flex flex-wrap gap-8  content-center">
                            <WrapperInput
                                elementClasses={"w-[calc((100%-1rem)/2)]"}
                                inputClasses={"bg-gray-100 focus:outline-blue-500 p-4  rounded-xl w-full"}
                                label={"Full Name"}
                                placeholder={"John Doe"}
                                name={"fullName"}
                            />
                            <WrapperInput
                                elementClasses={"w-[calc((100%-3rem)/2)]"}
                                inputClasses={"bg-gray-100 focus:outline-blue-500 p-4  rounded-xl w-full"}
                                label={"Email Address"}
                                placeholder={"john@example.com"}
                                name={"email"}
                            />
                            <WrapperInput
                                elementClasses={"w-full"}
                                inputClasses={"bg-gray-100 focus:outline-blue-500 p-4 w-full rounded-xl w-full"}
                                isSelect
                                selectOptions={selectOptions}
                                label={"subject"}
                                name={"subject"}
                            />
                            <WrapperInput
                                elementClasses={"w-full"}
                                inputClasses={"bg-gray-100 focus:outline-blue-500 p-4 w-full  rounded-xl w-full h-full "}
                                isTextArea
                                label={"message"}
                                placeholder={"Tell us how we can help"}
                                name={"message"}
                            />
                            <button type="submit" className="capitalize bg-blue-500 hover:bg-blue-600 transition p-4 w-full text-white rounded-xl cursor-pointer">
                                send a message
                            </button>
                        </Form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
