import React from "react";
import Logo from "../../components/Logo";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import WrapperInput from "../../components/WrapperInput";

export default function Login() {
    const initialValues = {
        email: "",
        password: "",
        remember: false,
    };
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Email is required"),

        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),

        remember: Yup.boolean(),
    });
    const onSubmit = (values) => {
        console.log(values);
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
                            <WrapperInput elementClasses={"flex flex-col gap-1 mb-4"} inputClasses={"border p-2 rounded-lg"} label={"Email Address"} name={"email"} placeholder={"name@example.com"} />
                            <WrapperInput
                                elementClasses={"flex flex-col gap-1 mb-4"}
                                inputClasses={"border p-2 rounded-lg"}
                                label={"password"}
                                name={"password"}
                                placeholder={"*********"}
                                type={"password"}
                            />
                            <WrapperInput
                                elementClasses={"flex justify-end flex-row-reverse items-center gap-2 mb-4"}
                                inputClasses={""}
                                label={"remember me for 30 days"}
                                name={"remember"}
                                type={"checkbox"}
                            />
                            <button type="submit" className="bg-blue-500 p-3 rounded-2xl cursor-pointer mb-2">
                                Login
                            </button>
                            <p>
                                Don't have an account ?{" "}
                                <Link className="text-blue-400" to={"/signup"}>
                                    sign up
                                </Link>{" "}
                            </p>
                        </Form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
