import React from "react";
import * as Yup from "yup";
import Logo from "../../components/Logo";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import WrapperInput from "../../components/WrapperInput";

const nameRegex = /^[A-Za-z]+([ .-]?[A-Za-z]+)*$/;

export default function Signup() {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .matches(nameRegex, "Name can contain letters, spaces, dot (.) and dash (-) only")
            .min(2, "First name is too short")
            .max(50, "First name is too long")
            .required("First name is required"),

        lastName: Yup.string()
            .matches(nameRegex, "Name can contain letters, spaces, dot (.) and dash (-) only")
            .min(2, "Last name is too short")
            .max(50, "Last name is too long")
            .required("Last name is required"),

        email: Yup.string().email("Invalid email format").required("Email is required"),

        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .matches(/[A-Z]/, "Must contain at least one uppercase letter")
            .matches(/[a-z]/, "Must contain at least one lowercase letter")
            .matches(/[0-9]/, "Must contain at least one number")
            .required("Password is required"),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm password is required"),
    });
    const onSubmit = (values) => {
        console.log(values);
    };
    return (
        <main className="bg-gray-800 min-h-screen flex justify-center items-center text-white ">
            <section className="w-150 flex flex-col items-center gap-5 sm:gap-10 p-3 sm:p-5">
                <div className="flex flex-col items-center">
                    <Logo />
                    <p className="font-sans mt-4 text-center max-w-80 text-white/70">Enter your credentials to access your collection</p>
                </div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {() => (
                        <Form className="border p-4 rounded-2xl w-full flex flex-col">
                            <div className=" sm:flex sm:gap-2  ">
                                <WrapperInput
                                    elementClasses={"flex flex-col gap-1 mb-2 sm:mb-4 flex-1"}
                                    inputClasses={"border p-2 rounded-lg"}
                                    label={"First Name"}
                                    name={"firstName"}
                                    placeholder={"John"}
                                />
                                <WrapperInput
                                    elementClasses={"flex flex-col gap-1 mb-2 sm:mb-4 flex-1"}
                                    inputClasses={"border p-2 rounded-lg"}
                                    label={"Last Name"}
                                    name={"lastName"}
                                    placeholder={"John"}
                                    type={"text"}
                                />
                            </div>
                            <WrapperInput
                                elementClasses={"flex flex-col gap-1 mb-2 sm:mb-4"}
                                inputClasses={"border p-2 rounded-lg"}
                                label={"E-Mail"}
                                name={"email"}
                                placeholder={"name@example.com"}
                                type={"text"}
                            />
                            <WrapperInput
                                elementClasses={"flex flex-col gap-1 mb-2 sm:mb-4 flex-1"}
                                inputClasses={"border p-2 rounded-lg"}
                                label={"password"}
                                name={"password"}
                                placeholder={"*********"}
                                type={"password"}
                            />
                            <WrapperInput
                                elementClasses={"flex flex-col gap-1 mb-2 sm:mb-4 flex-1"}
                                inputClasses={"border p-2 rounded-lg"}
                                label={"Confirm Password"}
                                name={"confirmPassword"}
                                placeholder={"*********"}
                                type={"password"}
                            />

                            <button type="submit" className="bg-blue-500 p-3 rounded-2xl cursor-pointer mb-2 capitalize">
                                sign up
                            </button>
                            <p>
                                Already have an account ?{" "}
                                <Link className="text-blue-400" to={"/login"}>
                                    Login
                                </Link>{" "}
                            </p>
                        </Form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
