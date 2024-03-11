import React, { useState, useEffect } from "react";
import flag from "../../../PRMS-FE/src/assets/images/Group@3x.png";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CreatePatientForm1 = ({ formData, setFormData, setStage }) => {
    const [country, setCountry] = useState("");

    const [showCountry, setShowCountry] = useState(false);
    const [selectCountry, setSelectCountry] = useState(flag);
    const [countryFlags, setCountryFlag] = useState([]);
    async function getCountryFlags() {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        if (response.ok) {
            setCountryFlag(data);
        }
    }
    useEffect(() => {
        getCountryFlags();
    }, []);
    const genders = ["Male", "Female", "Others"];
    const [gender, setGender] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();
    }

    function nextForm() {
        formData.gender = gender;
        formData.country = country;
        setStage(2);
    }
    const navigate = useNavigate();

    return (
        <div className=" bg-white h-[70rem]  relative ">
            <div className=" absolute space-x-60 cursor-pointer   left-40 ">
                <div
                    onClick={() => navigate("/")}
                    className=" relative  text-black"
                >
                    <svg
                        width="66"
                        height="24"
                        viewBox="0 0 66 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_140_42881)">
                            <path
                                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                                fill="#323232"
                            />
                        </g>
                        <path
                            d="M35.4219 12.3594H32.5234L32.5078 10.9297H35.0391C35.4661 10.9297 35.8281 10.8672 36.125 10.7422C36.4271 10.612 36.6562 10.4271 36.8125 10.1875C36.9688 9.94271 37.0469 9.64844 37.0469 9.30469C37.0469 8.92448 36.974 8.61458 36.8281 8.375C36.6823 8.13542 36.4583 7.96094 36.1562 7.85156C35.8594 7.74219 35.4792 7.6875 35.0156 7.6875H33.1172V17.5H31.1562V6.125H35.0156C35.6406 6.125 36.1979 6.1849 36.6875 6.30469C37.1823 6.42448 37.6016 6.61198 37.9453 6.86719C38.2943 7.11719 38.5573 7.4349 38.7344 7.82031C38.9167 8.20573 39.0078 8.66406 39.0078 9.19531C39.0078 9.66406 38.8958 10.0938 38.6719 10.4844C38.4479 10.8698 38.1172 11.1849 37.6797 11.4297C37.2422 11.6745 36.6979 11.8203 36.0469 11.8672L35.4219 12.3594ZM35.3359 17.5H31.9062L32.7891 15.9453H35.3359C35.7786 15.9453 36.1484 15.8724 36.4453 15.7266C36.7422 15.5755 36.9635 15.3698 37.1094 15.1094C37.2604 14.8438 37.3359 14.5339 37.3359 14.1797C37.3359 13.8099 37.2708 13.4896 37.1406 13.2188C37.0104 12.9427 36.8047 12.7318 36.5234 12.5859C36.2422 12.4349 35.875 12.3594 35.4219 12.3594H33.2188L33.2344 10.9297H36.1016L36.5469 11.4688C37.1719 11.4896 37.6849 11.6276 38.0859 11.8828C38.4922 12.138 38.7943 12.4688 38.9922 12.875C39.1901 13.2812 39.2891 13.7188 39.2891 14.1875C39.2891 14.9115 39.1302 15.5182 38.8125 16.0078C38.5 16.4974 38.0495 16.8698 37.4609 17.125C36.8724 17.375 36.1641 17.5 35.3359 17.5ZM45.8438 15.8047V11.7734C45.8438 11.4714 45.7891 11.2109 45.6797 10.9922C45.5703 10.7734 45.4036 10.6042 45.1797 10.4844C44.9609 10.3646 44.6849 10.3047 44.3516 10.3047C44.0443 10.3047 43.7786 10.3568 43.5547 10.4609C43.3307 10.5651 43.1562 10.7057 43.0312 10.8828C42.9062 11.0599 42.8438 11.2604 42.8438 11.4844H40.9688C40.9688 11.151 41.0495 10.8281 41.2109 10.5156C41.3724 10.2031 41.6068 9.92448 41.9141 9.67969C42.2214 9.4349 42.5885 9.24219 43.0156 9.10156C43.4427 8.96094 43.9219 8.89062 44.4531 8.89062C45.0885 8.89062 45.651 8.9974 46.1406 9.21094C46.6354 9.42448 47.0234 9.7474 47.3047 10.1797C47.5911 10.6068 47.7344 11.1432 47.7344 11.7891V15.5469C47.7344 15.9323 47.7604 16.2786 47.8125 16.5859C47.8698 16.888 47.9505 17.151 48.0547 17.375V17.5H46.125C46.0365 17.2969 45.9661 17.0391 45.9141 16.7266C45.8672 16.4089 45.8438 16.1016 45.8438 15.8047ZM46.1172 12.3594L46.1328 13.5234H44.7812C44.4323 13.5234 44.125 13.5573 43.8594 13.625C43.5938 13.6875 43.3724 13.7812 43.1953 13.9062C43.0182 14.0312 42.8854 14.1823 42.7969 14.3594C42.7083 14.5365 42.6641 14.737 42.6641 14.9609C42.6641 15.1849 42.7161 15.3906 42.8203 15.5781C42.9245 15.7604 43.0755 15.9036 43.2734 16.0078C43.4766 16.112 43.7214 16.1641 44.0078 16.1641C44.3932 16.1641 44.7292 16.0859 45.0156 15.9297C45.3073 15.7682 45.5365 15.5729 45.7031 15.3438C45.8698 15.1094 45.9583 14.888 45.9688 14.6797L46.5781 15.5156C46.5156 15.7292 46.4089 15.9583 46.2578 16.2031C46.1068 16.4479 45.9089 16.6823 45.6641 16.9062C45.4245 17.125 45.1354 17.3047 44.7969 17.4453C44.4635 17.5859 44.0781 17.6562 43.6406 17.6562C43.0885 17.6562 42.5964 17.5469 42.1641 17.3281C41.7318 17.1042 41.3932 16.8047 41.1484 16.4297C40.9036 16.0495 40.7812 15.6198 40.7812 15.1406C40.7812 14.6927 40.8646 14.2969 41.0312 13.9531C41.2031 13.6042 41.4531 13.3125 41.7812 13.0781C42.1146 12.8438 42.5208 12.6667 43 12.5469C43.4792 12.4219 44.026 12.3594 44.6406 12.3594H46.1172ZM53.1562 16.1562C53.4635 16.1562 53.7396 16.0964 53.9844 15.9766C54.2344 15.8516 54.4349 15.6797 54.5859 15.4609C54.7422 15.2422 54.8281 14.9896 54.8438 14.7031H56.6172C56.6068 15.25 56.4453 15.7474 56.1328 16.1953C55.8203 16.6432 55.4062 17 54.8906 17.2656C54.375 17.526 53.8047 17.6562 53.1797 17.6562C52.5339 17.6562 51.9714 17.5469 51.4922 17.3281C51.013 17.1042 50.6146 16.7969 50.2969 16.4062C49.9792 16.0156 49.7396 15.5651 49.5781 15.0547C49.4219 14.5443 49.3438 13.9974 49.3438 13.4141V13.1406C49.3438 12.5573 49.4219 12.0104 49.5781 11.5C49.7396 10.9844 49.9792 10.5312 50.2969 10.1406C50.6146 9.75 51.013 9.44531 51.4922 9.22656C51.9714 9.0026 52.5312 8.89062 53.1719 8.89062C53.849 8.89062 54.4427 9.02604 54.9531 9.29688C55.4635 9.5625 55.8646 9.9349 56.1562 10.4141C56.4531 10.888 56.6068 11.4401 56.6172 12.0703H54.8438C54.8281 11.7578 54.75 11.4766 54.6094 11.2266C54.474 10.9714 54.2812 10.7682 54.0312 10.6172C53.7865 10.4661 53.4922 10.3906 53.1484 10.3906C52.7682 10.3906 52.4531 10.4688 52.2031 10.625C51.9531 10.776 51.7578 10.9844 51.6172 11.25C51.4766 11.5104 51.375 11.8047 51.3125 12.1328C51.2552 12.4557 51.2266 12.7917 51.2266 13.1406V13.4141C51.2266 13.763 51.2552 14.1016 51.3125 14.4297C51.3698 14.7578 51.4688 15.0521 51.6094 15.3125C51.7552 15.5677 51.9531 15.7734 52.2031 15.9297C52.4531 16.0807 52.7708 16.1562 53.1562 16.1562ZM59.9609 5.5V17.5H58.0703V5.5H59.9609ZM65.2109 9.04688L61.5312 13.125L59.5156 15.1875L59.0234 13.5938L60.5469 11.7109L62.9375 9.04688H65.2109ZM63.3438 17.5L60.6016 13.5312L61.7891 12.2109L65.5234 17.5H63.3438Z"
                            fill="black"
                        />
                        <defs>
                            <clipPath id="clip0_140_42881">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className=" absolute left-[35rem] h-screen w-[32rem] mt-10 ">
                <form onSubmit={handleFormSubmit}>
                    <p className=" text-black">FULL NAME</p>
                    <div className=" relative bg-teal-100 bg-opacity-50 w-full rounded-lg  h-[3rem] mt-2 border border-solid border-teal-600 focus:outline-none px-5">
                        <label className=" text-teal-500 block">
                            First name
                        </label>
                        <input
                            className=" bg-transparent focus:outline-none w-full"
                            placeholder="Diana"
                            onChange={setFormData}
                            value={formData.firstName}
                            type="text"
                            name="firstName"
                        ></input>
                    </div>
                    <div className=" relative bg-teal-100 bg-opacity-50 w-full rounded-lg  h-[3rem] mt-3 border border-solid border-teal-600 focus:outline-none px-5">
                        <label className=" text-teal-500 block">
                            Last name
                        </label>
                        <input
                            className=" bg-transparent focus:outline-none w-full "
                            placeholder="Tekno"
                            onChange={setFormData}
                            value={formData.lastName}
                            type="text"
                            name="lastName"
                        ></input>
                    </div>
                    <div className=" relative bg-teal-100 bg-opacity-50 w-full rounded-lg  h-[3rem] mt-3 border border-solid border-teal-600 focus:outline-none px-5">
                        <label className=" text-teal-500 block">
                            Middle name
                        </label>
                        <input
                            className=" bg-transparent focus:outline-none w-full "
                            placeholder="Pana"
                            onChange={setFormData}
                            value={formData.middleName}
                            type="text"
                            name="middleName"
                        ></input>
                    </div>
                    <p className=" text-black pt-2">DATE OF BIRTH</p>
                    <div>
                        <div className="dropdown flex w-full">
                            <div>
                                <input
                                    type="month"
                                    className="bg-teal-100 text-black h-[3.5rem] border border-solid border-gray-400 hover:bg-teal-100 rounded-lg mx-3 outline-none px-3 placeholder-black"
                                    placeholder="Month & Year"
                                    onChange={setFormData}
                                    value={formData.monthYear}
                                    name="monthYear"
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    min="1"
                                    max="31"
                                    step="1"
                                    className="bg-teal-100 text-black h-[3.5rem] w-48 border border-solid border-gray-400 hover:bg-teal-100 rounded-lg mx-3 outline-none px-3 placeholder-gray-400"
                                    placeholder="Day"
                                    onChange={setFormData}
                                    value={formData.day}
                                    name="day"
                                />
                            </div>
                        </div>
                    </div>
                    <p className=" text-black pt-3">GENDER</p>
                    <div className=" flex space-x-5   justify-center text-center  ">
                        {genders.map((x) => (
                            <p
                                className={` ${
                                    gender === x
                                        ? " bg-[#009688] text-white h-[3.5rem] w-[10rem] border border-solid  border-gray-400 hover:bg-teal-500 rounded-lg mx-3 pt-4 "
                                        : "h-[3.5rem] mx-3 w-[10rem] border border-solid border-gray-400 bg-white text-gray-500 hover:bg-teal-500 rounded-lg pt-4"
                                }  `}
                                onClick={() => setGender(x)}
                                name="gender"
                                
                            >
                                {x}
                                    
                            </p>
                        ))}
                    </div>
                    <p className=" text-black pt-3">CONTACT INFORMATION</p>
                    <div className=" relative bg-teal-100 bg-opacity-50 w-full rounded-lg  h-[3rem] mt-1 border border-solid border-teal-600 focus:outline-none px-5">
                        <label className=" text-teal-500 block">Email</label>
                        <input
                            className=" bg-transparent focus:outline-none w-full "
                            placeholder="Dianapana@gmail.com"
                            onChange={setFormData}
                            value={formData.email}
                            type="text"
                            name="email"
                        ></input>
                    </div>
                    <div className="flex items-center gap-2 pt-4">
                        <div className="relative flex items-center gap-4 border border-solid border-teal-600 rounded-[8px] py-[8px] px-2 bg-teal-100 bg-opacity-50">
                            <img
                                src={selectCountry}
                                className="w-[4.4rem] h-[1.5rem]"
                            />
                            <IoIosArrowDown
                                onClick={() => setShowCountry(!showCountry)}
                            />
                            {showCountry && (
                                <div className="absolute top-[50px] left-0 h-[300px] overflow-y-scroll w-[60px] z-30 bg-teal-200">
                                    {countryFlags &&
                                        countryFlags.map((flag) => (
                                            <>
                                                <img
                                                    src={flag.flags.svg}
                                                    alt=""
                                                    onClick={() => {
                                                        setCountry(
                                                            flag.name.common,
                                                        );
                                                        setSelectCountry(
                                                            flag.flags.svg,
                                                        );

                                                        setShowCountry(false);
                                                    }}
                                                    className="w-[40px] h-[50px] my-2 cursor-pointer"
                                                    onChange={setFormData}
                                                    value={formData.country}
                                                    type="text"
                                                    name="country"
                                                />
                                            </>
                                        ))}
                                </div>
                            )}
                        </div>
                        <input
                            className="border border-solid border-teal-600 rounded-[8px] py-[8px] px-[24px] w-full bg-teal-100 bg-opacity-50 focus:outline-none "
                            placeholder="+0123456789"
                            onChange={setFormData}
                                                    value={formData.phoneNumber}
                                                    type="text"
                                                    name="phoneNumber"

                        />
                    </div>
                    <p className=" pt-4 text-black"> ADDRESS</p>
                    <div className=" relative bg-teal-100 bg-opacity-50 w-full rounded-lg  h-[3rem] mt-1 border border-solid border-teal-600 focus:outline-none px-5">
                        <label className=" text-teal-500 block">
                            Street Address
                        </label>
                        <input
                            className=" bg-transparent focus:outline-none w-full "
                            placeholder="32, Rasaq Eletu"
                            onChange={setFormData}
                            value={formData.address}
                            type="text"
                            name="address"
                        ></input>
                    </div>
                    <div className=" relative bg-teal-100 bg-opacity-50 w-full rounded-lg  h-[3rem] mt-3 border border-solid border-teal-600 focus:outline-none px-5">
                        <label className=" text-teal-500 block">City</label>
                        <input
                            className=" bg-transparent focus:outline-none w-full "
                            placeholder="Ikorodu"
                            onChange={setFormData}
                            value={formData.city}
                            type="text"
                            name="city"
                        ></input>
                    </div>
                    <div className=" relative bg-teal-100 bg-opacity-50 w-full rounded-lg  h-[3rem] mt-3 border border-solid border-teal-600 focus:outline-none px-5">
                        <label className=" text-teal-500 block">State</label>
                        <input
                            className=" bg-transparent focus:outline-none w-full "
                            placeholder="Lagos"
                            onChange={setFormData}
                            value={formData.state}
                            type="text"
                            name="state"
                        ></input>
                    </div>
                    <button
                        className=" mt-8 rounded-full bg-teal-600 cursor-pointer mx-auto w-[21.25rem] h-[2.5rem]  absolute left-20 text-white"
                        onClick={() => {
                            nextForm();
                        }}
                    >
                        CONTINUE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePatientForm1;

//                 <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={setFormData}
//                 />
//             </div>
//             <div>
//                 <button className="input" onClick={() => setStage(2)}>
//                     Continue
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CreatePatientForm1;
