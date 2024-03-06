import React, { useState } from "react";
import adminimage from "../../assets/images/adminpng.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const RegularLogin = () => {
    const [passwordType, setPassWord] = useState("password");

    return (
        <div className="LoginPage flex overflow-y-hidden gap-x-40px">
            <div className="login w-3/5 h-screen p-[151px 149px 187px 149px] bg-teal-600 ">
                <div className="Intro   mx-auto gap-x-4 w-[32.25rem] pt-[6.25rem]">
                    <p className="Words font-[roboto] font-medium text-4xl tracking-normal text-center leading-[60px] text-white ">
                        WELCOME BACK!
                    </p>
                    <p className="WordsTwo font-[roboto] text-base font-normal leading-6 tracking-normal text-center text-white ">
                        Sign in to your account and continue your wellness
                        journey. Your health <br />
                        and happiness are just a click away.
                    </p>
                </div>

                <img
                    className="images-design  bg-teal-600  p-24 w-3/5 mx-auto "
                    src={adminimage}
                />
            </div>
            <div className="text w-[40%] bg-white relative">
                <p className="sign-in font-[roboto] text-4xl font-medium leading-15 tracking-normal text-center text-black pt-24 ">
                    Sign In
                </p>

                <div className=" w-[34rem] h-[3.5rem] focus:outline-none my-5 mx-10 border border-solid border-teal-600 bg-teal-100 rounded-lg px-[1.5rem]">
                    <label className="label text-[#009688] pb-1 block ">
                        Email
                    </label>
                    <input
                        className="focus: outline-none bg-teal-100   w-full placeholder-gray font-roboto "
                        placeholder="Dianapana@gmail.com"
                        type="text"
                    />
                </div>

                <div className=" w-[34rem] h-[3.5rem] focus:outline-none my-5 mx-10 border border-solid border-teal-600 bg-teal-100 rounded-lg px-[1.5rem]">
                    <label className="label text-[#009688] pb-1 block ">
                        Password
                    </label>
                    <div className="flex items-center justify-between">
                        <input
                            required
                            className="focus: outline-none bg-teal-100   w-full placeholder-gray font-roboto "
                            placeholder="************************"
                            type={passwordType}
                        />
                        {passwordType !== "text" ? (
                            <FaEyeSlash
                                cursor={"pointer"}
                                fontSize={"1.25rem"}
                                onClick={() => setPassWord("text")}
                            />
                        ) : (
                            <FaEye
                                cursor={"pointer"}
                                fontSize={"1.25rem"}
                                onClick={() => setPassWord("password")}
                            />
                        )}
                    </div>
                </div>
                <p className=" text-[#009688] font-[600] cursor-pointer mx-11 absolute">
                    Forgot Password?
                </p>

                <div className=" w-[70%] h-[6rem] mt-10 mx-auto">
                    <button className=" bg-teal-600 rounded-full w-full mt-10 h-[3rem] text-white">
                        SIGN IN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegularLogin;
