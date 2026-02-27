import React from "react";
import Logo from "../../components/Logo";
import { Field, Formik } from "formik";
import { Form } from "react-router-dom";
import * as Yup from "yup";

export default function Login() {
    const initialValues = {
        email: "",
        password: "",
        remember: false,
    };
    const validationSchema = Yup.object({
        email: Yup.string(),
        password: Yup.string(),
    });
    const onSubmit = () => {
        console.log(`Hello`);
    };
    return (
        <main className="bg-gray-800 min-h-screen flex justify-center items-center text-white ">
            <section className="w-150 flex flex-col items-center gap-10 p-5">
                <div className="flex flex-col items-center">
                    <Logo />
                    <p className="font-sans mt-4 text-center max-w-80 text-white/70">Enter your credentials to access your collection</p>
                </div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {() => (
                        <Form className="border p-4 rounded-2xl w-full flex flex-col">
                            <div className="flex flex-col gap-1 mb-4">
                                <label htmlFor="email">Email Address</label>
                                <Field id="email" name="email" className="border p-2 rounded-lg" placeholder="name@example.com"/>
                            </div>
                            <div className="flex flex-col gap-1 mb-4">
                                <label htmlFor="password">Password</label>
                                <Field id="password" name="password" className="border p-2 rounded-lg" placeholder="*******" type="password"/>
                            </div>
                            <div className="flex  items-center gap-2 mb-4">
                                <Field type="checkbox" id="remember" name="remember" />
                                <label htmlFor="remember">remember me for 30 days</label>
                            </div>
                            <button className="bg-blue-500 p-3 rounded-2xl cursor-pointer">Login</button>
                        </Form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
