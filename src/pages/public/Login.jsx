import React from "react";
import Logo from "../../components/Logo";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import WrapperInput from "../../components/WrapperInput";
import { useAuthStore } from "../../store/authStore";
import { toast, Toaster } from "react-hot-toast";

export default function Login() {
    const navigate = useNavigate();
    const loginUser = useAuthStore((state) => state.login);
    const initialValues = {
        login: "",
        password: "",
        remember: false,
    };
    const validationSchema = Yup.object({
        login: Yup.string().required("username : admin"),

        password: Yup.string().required("Password : Admin123"),

        remember: Yup.boolean(),
    });
    const onSubmit = (values) => {
        const { login, password } = values;

        if (login === "admin" && password === "Admin123") {
            toast.success("Login Success");
            loginUser(login);
            navigate("/app");
        } else {
            toast.error("Login Failed");
        }
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
                            <WrapperInput
                                elementClasses={"flex flex-col gap-1 mb-4"}
                                inputClasses={"border p-2 rounded-lg"}
                                label={"Email or Username"}
                                name={"login"}
                                placeholder={"Enter email or username"}
                            />
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
                <div className=" font-sans text-center">
                    <h4 className="text-amber-300 text-xl font-bold mb-1 capitalize">Alert</h4>
                    <p className="text-amber-300 text-sm mb-1">This is a temporary mock authentication used for learning purposes until OAuth integration is implemented.</p>
                    <p className="text-white/70">
                        Username: <span className="font-bold">admin</span>
                    </p>
                    <p className="text-white/70">
                        Password: <span className="font-bold">Admin123</span>
                    </p>
                </div>
            </section>
        </main>
    );
}
