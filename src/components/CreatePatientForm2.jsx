import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import flag from "../../../PRMS-FE/src/assets/images/Group@3x.png";

import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CreatePatientForm2 = ({ formData, setFormData, setStage }) => {
    const navigate = useNavigate();
    const Height = ["CM", "M"];
    const [heightDropDown, setHeightDropDown] = useState(false);
    const [height, setHeight] = useState("");

    const Weight = ["Kg", "G"];
    const [weightDropDown, setWeightDropDown] = useState(false);
    const [weight, setWeight] = useState("");

    const BloodGroup = ["O+", "O", "A+", "A-", "B+", "B-", "AB+", "AB-"];
    const [BGDropDown, setBGDropDown] = useState(false);
    const [bloodgroup, setBloodGroup] = useState("");

    const Alcohol = [
        "Everyday",
        "Every two days",
        "Twice a week",
        "Twice a month",
    ];
    const [AlcoholDropDown, setAlcoholDropDown] = useState(false);
    const [alcohol, setAlcoholGroup] = useState("");
    const [alcoholText, setAlcoholText] = useState("");

    const [physicianCountry, setPhysicianCountry] = useState("");
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

    const smoking = [" Non-Smoker", "Former Smoker", "Current Smoker"];
    const [selectedSmoke, setSelectedSmoke] = useState("");
    // function handleSmokselect(smoking) {
    //     setSelectedSmoke(smoking);
    // }

    const alcoholFrequency = ["Never", "Occasionally"];
    const [selectedalcoholFrequency, setalcoholFrequency] = useState("");
    //     useState(alcoholFrequency);
    // function handlealcoholFrequency(alcoholFrequency) {
    //     setalcoholFrequency(alcoholFrequency);
    // }

    const [diabetes, setDiabetes] = useState(false);
    const [hypertension, setHypertension] = useState(false);
    const [asthma, setAsthma] = useState(false);
    const [otherDisease, setOtherDisease] = useState(false);

    function nextForm() {
        formData.bloodGroup = bloodgroup;
        formData.diabetes = diabetes;
        formData.asthma = asthma;
        formData.hypertension = hypertension;
        formData.heightMeasurement = height;
        formData.weightMeasurement = weight;
        formData.healthHabits = selectedSmoke;
        formData.alcoholFrequency = selectedalcoholFrequency;
        formData.Alcohol = alcohol;
        formData.physicianCountry = physicianCountry;

        setStage(3);
    }

    function backForm() {
        setStage(1);
    }

    return (
        <div className=" bg-white h-[70rem]  relative ">
            <div className=" absolute space-x-60 cursor-pointer  left-40">
                <div
                    onClick={() => backForm()}
                    className=" relative top-6 text-black"
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
                <div className=""></div>
            </div>
            <div className=" absolute  left-[35rem] h-[65rem] w-[32rem] mt-10">
                <form>
                    <div className=" relative bg-teal-100 bg-opacity-50 w-full rounded-lg  h-[3rem] mt-2 border border-solid border-teal-600 focus:outline-none px-5">
                        <label className=" text-teal-500 block">
                            Medication
                        </label>
                        <input
                            className=" bg-transparent focus:outline-none w-full"
                            placeholder="Add medication"
                            type="text"
                            name="medication"
                            value={formData.medication}
                            onChange={setFormData}
                        ></input>
                    </div>
                    <div className="flex space-x-5 pt-3">
                        <div className=" relative bg-teal-100 bg-opacity-50 w-[48%] rounded-lg  h-[3rem] mt-2 border border-solid border-teal-600 focus:outline-none px-5">
                            <label className=" text-teal-500 block">
                                Dosage
                            </label>
                            <input
                                className=" bg-transparent focus:outline-none w-full"
                                placeholder="Add dosage"
                                type="text"
                                name="dosage"
                                value={formData.dosage}
                                onChange={setFormData}
                            ></input>
                        </div>
                        <div className=" relative bg-teal-100 bg-opacity-50 w-[48%] rounded-lg  h-[3rem] mt-2 border border-solid border-teal-600 focus:outline-none px-5">
                            <label className=" text-teal-500 block">
                                Frequency
                            </label>
                            <input
                                className=" bg-transparent focus:outline-none w-full"
                                placeholder="Before and after meals"
                                type="text"
                                name="frequency"
                                value={formData.frequency}
                                onChange={setFormData}
                            ></input>
                        </div>
                    </div>
                    <p className=" pt-4">HEALTH PROFILE</p>
                    <div className=" flex w-full space-x-2">
                        <div className=" flex w-[50%] space-x-2">
                            <div className=" relative bg-teal-100 bg-opacity-50 w-[40%] rounded-lg  h-[3rem] mt-2 border border-solid border-teal-600 focus:outline-none px-5">
                                <label className=" text-teal-500 block">
                                    Height
                                </label>
                                <div className="flex items-center justify-between ">
                                    <input
                                        type="text"
                                        placeholder="CM"
                                        value={height}
                                        required
                                        class=" placeholder:text-black  p-[8px 24px] rounded-[8px] bg-transparent outline-none w-[2rem]"
                                    />
                                    <MdKeyboardArrowDown
                                        cursor={"pointer"}
                                        fontSize={"20px"}
                                        onClick={() =>
                                            setHeightDropDown(!heightDropDown)
                                        }
                                    />
                                    {heightDropDown && (
                                        <div className="absolute bg-teal-100 p-1 w-[100%] left-0 top-[50px]  rounded-lg  z-50 ">
                                            {Height.map((height) => (
                                                <p
                                                    className="cursor-pointer my-2 hover:bg-white"
                                                    onClick={() => {
                                                        setHeight(height);
                                                        setHeightDropDown(
                                                            false,
                                                        );
                                                    }}
                                                    type="text"
                                                    name="heightMeasurement"
                                                    value={
                                                        formData.heightMeasurement
                                                    }
                                                    onChange={setFormData}
                                                >
                                                    {height}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className=" relative bg-teal-100 bg-opacity-50 w-[60%] rounded-lg  h-[3rem] mt-2 border border-solid border-teal-600 focus:outline-none px-5">
                                <label className=" text-teal-500 block">
                                    Measurement
                                </label>
                                <input
                                    className=" bg-transparent focus:outline-none w-full"
                                    placeholder="e.g 78"
                                    type="text"
                                    name="height"
                                    value={formData.height}
                                    onChange={setFormData}
                                ></input>
                            </div>
                        </div>
                        <div className="flex w-[50%] space-x-2">
                            <div className=" relative bg-teal-100 bg-opacity-50 w-[40%] rounded-lg  h-[3rem] mt-2 border border-solid border-teal-600 focus:outline-none px-5">
                                <label className=" text-teal-500 block">
                                    Weight
                                </label>

                                <div className="flex items-center justify-between ">
                                    <input
                                        type="text"
                                        placeholder="Kg"
                                        value={weight}
                                        required
                                        class=" placeholder:text-black  p-[8px 24px] rounded-[8px] bg-transparent outline-none w-[2rem]"
                                    />
                                    <MdKeyboardArrowDown
                                        cursor={"pointer"}
                                        fontSize={"20px"}
                                        onClick={() =>
                                            setWeightDropDown(!weightDropDown)
                                        }
                                    />
                                    {weightDropDown && (
                                        <div className="absolute bg-teal-100 p-1 w-[100%] left-0 top-[50px]  rounded-lg z-50 ">
                                            {Weight.map((weight) => (
                                                <p
                                                    className="cursor-pointer my-2  hover:bg-white"
                                                    onClick={() => {
                                                        setWeight(weight);
                                                        setWeightDropDown(
                                                            false,
                                                        );
                                                    }}
                                                    name="weightMeasurement"
                                                    value={
                                                        formData.weightMeasurement
                                                    }
                                                    onChange={setFormData}
                                                >
                                                    {weight}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className=" relative bg-teal-100 bg-opacity-50 w-[60%] rounded-lg  h-[3rem] mt-2 border border-solid border-teal-600 focus:outline-none px-5">
                                <label className=" text-teal-500 block">
                                    Measurement
                                </label>
                                <input
                                    className=" bg-transparent focus:outline-none w-full"
                                    placeholder=" e.g 102"
                                    type="text"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={setFormData}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className=" relative bg-teal-100 bg-opacity-50 w-[40%] rounded-lg  h-[3rem] mt-2 border border-solid border-teal-600 focus:outline-none px-5">
                        <label className=" text-teal-500 block">
                            Blood Type
                        </label>
                        <div className="flex items-center ">
                            <input
                                type="text"
                                placeholder="AB"
                                value={bloodgroup}
                                required
                                class=" placeholder:text-black p-[8px 24px] rounded-[8px] bg-transparent outline-none w-[2rem]  "
                            />
                            <MdKeyboardArrowDown
                                cursor={"pointer"}
                                fontSize={"20px"}
                                onClick={() => setBGDropDown(!BGDropDown)}
                                spacing={"10px"}
                            />
                            {BGDropDown && (
                                <div className="absolute bg-teal-100 p-1 w-[100%] left-0 top-[50px]  rounded-lg  z-50 shadow-md  ">
                                    {BloodGroup.map((bloodgroup) => (
                                        <p
                                            className="cursor-pointer my-2 hover:bg-white"
                                            onClick={() => {
                                                setBloodGroup(bloodgroup);
                                                setBGDropDown(false);
                                            }}
                                            name="bloodgroup"
                                            value={formData.bloodgroup}
                                            onChange={setFormData}
                                        >
                                            {bloodgroup}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <p className=" pt-3"> PRIMARY CARE PHYSICIAN</p>
                    <div>
                        <div className=" relative bg-teal-100 bg-opacity-50 w-full rounded-lg  h-[3rem] mt-2 border border-solid border-teal-600 focus:outline-none px-5">
                            <label className=" text-teal-500 block">
                                Full name
                            </label>
                            <input
                                className=" bg-transparent focus:outline-none w-full"
                                placeholder=" Dr. Ademide Johnson"
                                type="text"
                                name="primaryCarePhysician"
                                value={formData.primaryCarePhysician}
                                onChange={setFormData}
                            ></input>
                        </div>

                        <div className=" relative bg-teal-100 bg-opacity-50 w-full rounded-lg  h-[3rem] mt-2 border border-solid border-teal-600 focus:outline-none px-5">
                            <label className=" text-teal-500 block">
                                Email
                            </label>
                            <input
                                className=" bg-transparent focus:outline-none w-full"
                                placeholder=" drjohnson@gmail.com"
                                type="text"
                                name="primaryCarePhysicianEmail"
                                value={formData.primaryCarePhysicianEmail}
                                onChange={setFormData}
                            ></input>
                        </div>
                        <div className=" flex space-x-3">
                            <div className="relative flex items-center gap-4 border border-solid border-teal-600 rounded-[8px] py-[8px] px-2 bg-teal-100 bg-opacity-50  mt-3">
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
                                                            setPhysicianCountry(
                                                                flag.name
                                                                    .common,
                                                            );
                                                            setSelectCountry(
                                                                flag.flags.svg,
                                                            );
                                                            setShowCountry(
                                                                false,
                                                            );
                                                        }}
                                                        className="w-[40px] h-[50px] my-2 cursor-pointer"
                                                        onChange={setFormData}
                                                        value={
                                                            formData.physicianCountry
                                                        }
                                                        type="text"
                                                        name="physicianCountry"
                                                    />
                                                </>
                                            ))}
                                    </div>
                                )}
                            </div>
                            <input
                                className="border border-solid border-teal-600 rounded-[8px] py-[8px] px-[24px] w-full bg-teal-100 bg-opacity-50 focus:outline-none h-[3rem]  mt-3"
                                placeholder="+0123456789"
                                type="text"
                                name="primaryCarePhysicianPhoneNumber"
                                value={formData.primaryCarePhysicianPhoneNumber}
                                onChange={setFormData}
                            />
                        </div>
                        <div>
                            <div className=" flex  pt-3 w-[10rem] space-x-2">
                                <div>
                                    {diabetes ? (
                                        <div
                                            className="p-5 flex flex-col bg-white text-teal-500 justify-center items-center gap-2 border border-teal-500 cursor-pointer rounded-lg"
                                            onClick={() => setDiabetes(false)}
                                            name="diabetes"
                                            value={formData.diabetes}
                                            onChange={setFormData}
                                        >
                                            <svg
                                                width="125"
                                                height="79"
                                                viewBox="0 0 145 79"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M65.94 48H48.5C48.5 32 48.5 16 48.5 0C58.3763 0 68.2525 0 78.1287 0C78.0425 0.03 77.9588 0.06875 77.87 0.08875C75.8363 0.55125 74.4862 2.20125 74.4813 4.29375C74.47 8.7775 74.4637 13.2625 74.4837 17.7463C74.4987 20.9287 76.6437 23.715 79.715 24.57C80.3237 24.74 80.9625 24.8075 81.6063 24.925V28.54H71.9175C71.9537 28.3788 71.9825 28.2612 72.0075 28.1425C72.5987 25.3988 71.9487 23.0363 69.8237 21.1488C69.1325 20.5363 68.31 20.3375 67.425 20.6887C66.5312 21.0437 66.1737 21.785 66.02 22.69C65.8713 23.5638 65.7113 24.4425 65.45 25.2875C65.1588 26.2325 64.5988 27.0438 63.7163 27.5413C62.0425 28.485 60.2225 28.705 58.3413 28.545C58.0863 27.3713 57.9563 27.27 56.7288 27.27C55.1663 27.27 53.6038 27.2662 52.0412 27.2725C51.285 27.275 50.9175 27.6362 50.915 28.395C50.9075 30.5662 50.9125 32.7388 50.9125 34.91C50.9125 35.0037 50.9137 35.0987 50.9275 35.19C50.9813 35.5525 51.2175 35.7513 51.5575 35.7775C51.9012 35.805 52.1675 35.6325 52.2625 35.285C52.3112 35.1075 52.315 34.915 52.315 34.73C52.3188 32.8862 52.3175 31.0425 52.3175 29.1987C52.3175 29.035 52.3175 28.8713 52.3175 28.7013H56.8462V45.0762H52.3163C52.3163 44.8575 52.3163 44.6725 52.3163 44.4875C52.3163 42.5187 52.3175 40.55 52.3163 38.5812C52.3163 37.9625 52.0525 37.6188 51.6012 37.6225C51.1612 37.6263 50.9125 37.9513 50.9125 38.5475C50.91 40.8125 50.9087 43.0788 50.9125 45.3438C50.915 46.1662 51.265 46.5112 52.0863 46.5137C53.68 46.5175 55.2738 46.515 56.8675 46.515C57.935 46.515 58.125 46.3538 58.31 45.3025C58.315 45.2775 58.35 45.2575 58.3938 45.2088C58.6825 45.2088 58.995 45.2238 59.305 45.2062C60.4013 45.1425 61.3663 45.455 62.2075 46.1675C62.505 46.4188 62.8337 46.6325 63.15 46.8613C63.9875 47.4663 64.9613 47.74 65.94 47.9975V48Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M65.94 47.9999C64.96 47.7424 63.9875 47.4687 63.15 46.8637C62.8337 46.6349 62.5037 46.4212 62.2075 46.1699C61.3662 45.4574 60.4025 45.1449 59.305 45.2087C58.995 45.2262 58.6825 45.2112 58.3937 45.2112C58.35 45.2587 58.315 45.2787 58.31 45.3049C58.1262 46.3562 57.935 46.5174 56.8675 46.5174C55.2737 46.5174 53.68 46.5199 52.0862 46.5162C51.265 46.5137 50.915 46.1687 50.9125 45.3462C50.9075 43.0812 50.9087 40.8149 50.9125 38.5499C50.9125 37.9537 51.1612 37.6274 51.6012 37.6249C52.0537 37.6212 52.3162 37.9662 52.3162 38.5837C52.3187 40.5524 52.3162 42.5212 52.3162 44.4899C52.3162 44.6749 52.3162 44.8599 52.3162 45.0787H56.845V28.7037H52.3162C52.3162 28.8724 52.3162 29.0362 52.3162 29.2012C52.3162 31.0449 52.3175 32.8887 52.3137 34.7324C52.3137 34.9187 52.3087 35.1112 52.2612 35.2874C52.1662 35.6349 51.9 35.8062 51.5562 35.7799C51.2162 35.7537 50.9787 35.5549 50.9262 35.1924C50.9125 35.0999 50.9112 35.0049 50.9112 34.9124C50.9112 32.7412 50.9062 30.5687 50.9137 28.3974C50.9162 27.6387 51.2837 27.2774 52.04 27.2749C53.6025 27.2687 55.165 27.2724 56.7275 27.2724C57.955 27.2724 58.085 27.3737 58.34 28.5474C60.2212 28.7062 62.0412 28.4862 63.715 27.5437C64.5975 27.0462 65.1575 26.2362 65.4487 25.2899C65.7087 24.4449 65.87 23.5662 66.0187 22.6924C66.1725 21.7874 66.53 21.0462 67.4237 20.6912C68.3087 20.3399 69.1312 20.5387 69.8225 21.1512C71.9487 23.0387 72.5987 25.4012 72.0062 28.1449C71.9812 28.2637 71.9525 28.3824 71.9162 28.5424H81.605V24.9274C80.9612 24.8099 80.3237 24.7424 79.7137 24.5724C76.6425 23.7162 74.4975 20.9312 74.4825 17.7487C74.4625 13.2649 74.4687 8.77994 74.48 4.29619C74.485 2.20494 75.8362 0.553691 77.8687 0.0911914C77.9575 0.0711914 78.0412 0.0324414 78.1275 0.00244141C82.2525 0.00244141 86.3787 0.00244141 90.5037 0.00244141C90.5725 0.0324414 90.6375 0.0736914 90.7087 0.0899414C92.695 0.534941 94.0637 2.11869 94.0775 4.15369C94.1087 8.76119 94.1287 13.3699 94.0687 17.9762C94.0262 21.1949 91.6687 23.9574 88.5137 24.6662C88.0037 24.7812 87.4787 24.8312 86.965 24.9099V28.5724C87.0787 28.5899 87.1712 28.6012 87.2625 28.6187C88.7925 28.9249 89.7675 30.0849 89.7462 31.5712C89.725 33.0849 88.7087 34.2412 87.1312 34.4387C86.3925 34.5312 85.635 34.4799 84.8862 34.4899C84.5387 34.4949 84.19 34.4899 83.78 34.4899C84.1912 35.3312 84.2912 36.1162 84.0475 36.9337C83.8012 37.7574 83.2487 38.3224 82.4962 38.7312C83.0187 39.5324 83.2087 40.3624 82.99 41.2624C82.77 42.1637 82.2162 42.8099 81.3975 43.2287C81.4362 43.3049 81.4525 43.3487 81.4775 43.3862C82.6425 45.1974 81.6425 47.5999 79.5612 47.9349C79.5187 47.9412 79.4812 47.9787 79.4412 48.0024H65.94V47.9999ZM70.835 38.2724C70.7462 38.1762 70.6812 38.1099 70.62 38.0399C69.8437 37.1487 69.6562 36.1262 70.0275 35.0237C70.395 33.9337 71.2087 33.3262 72.3262 33.1299C72.6462 33.0737 72.98 33.0837 73.3075 33.0824C77.6662 33.0799 82.0262 33.0824 86.385 33.0774C86.6487 33.0774 86.9187 33.0612 87.1737 33.0037C87.8825 32.8437 88.3237 32.2799 88.34 31.5562C88.3562 30.8212 87.9062 30.2312 87.19 30.0387C86.865 29.9512 86.6362 29.9849 86.4012 30.3062C85.3437 31.7487 83.2487 31.7487 82.185 30.3137C81.9887 30.0487 81.795 29.9774 81.4912 29.9774C78.07 29.9862 74.6475 29.9824 71.2262 29.9824C71.0862 29.9824 70.9437 29.9912 70.805 29.9737C70.2837 29.9112 70.0187 29.4924 70.1837 28.9924C70.2325 28.8449 70.3087 28.7074 70.37 28.5637C71.31 26.3549 70.6662 23.5512 68.9125 22.2124C68.205 21.6724 67.57 21.9287 67.4287 22.8024C67.315 23.5112 67.2275 24.2274 67.0475 24.9199C66.5575 26.8024 65.59 28.3362 63.71 29.1149C62.3737 29.6699 60.9912 30.0337 59.525 29.9837C59.125 29.9699 58.7237 29.9812 58.305 29.9812V43.8024C58.72 43.8024 59.1075 43.7874 59.4925 43.8062C59.9437 43.8287 60.3987 43.8462 60.8425 43.9262C61.6775 44.0762 62.3762 44.5224 63.0362 45.0337C63.8162 45.6387 64.6012 46.2374 65.6 46.4349C65.995 46.5124 66.4 46.5762 66.8025 46.5837C67.9325 46.6037 69.0637 46.5912 70.215 46.5912C69.6175 44.8687 69.72 44.2412 70.8087 42.7799C69.4675 41.3862 69.5862 39.5274 70.835 38.2699V38.2724ZM86.9425 23.4187C87.185 23.4187 87.3725 23.4374 87.5562 23.4162C90.4187 23.0762 92.64 20.7287 92.6712 17.8612C92.72 13.3162 92.7 8.77119 92.68 4.22619C92.6725 2.58869 91.4425 1.41244 89.8 1.40994C86.1287 1.40244 82.4575 1.40244 78.7875 1.40994C77.1125 1.41369 75.89 2.63619 75.8862 4.31494C75.8775 8.78244 75.8725 13.2487 75.8887 17.7162C75.8987 20.3987 77.8037 22.7337 80.4225 23.3112C80.8075 23.3962 81.2075 23.4124 81.6437 23.4649C81.6437 22.6587 81.63 21.9412 81.6475 21.2237C81.6675 20.4187 82.1125 19.9862 82.915 19.9787C83.8362 19.9699 84.7587 19.9687 85.68 19.9787C86.4937 19.9874 86.9375 20.4474 86.9425 21.2749C86.9475 21.9762 86.9425 22.6762 86.9425 23.4187ZM77.0287 34.4949C77.0287 34.4949 77.0287 34.4949 77.0287 34.4937C75.6237 34.4937 74.2187 34.4774 72.8137 34.4987C71.785 34.5149 71.1687 35.2437 71.2762 36.2524C71.36 37.0362 71.9762 37.5637 72.8812 37.5799C73.9112 37.5987 74.9412 37.5862 75.9725 37.5862C77.6737 37.5862 79.375 37.5924 81.0775 37.5837C81.9412 37.5799 82.5462 37.1537 82.7187 36.4624C82.98 35.4187 82.3312 34.5237 81.2437 34.5024C79.84 34.4737 78.4337 34.4949 77.0287 34.4949ZM76.4575 38.9949C75.2562 38.9949 74.0537 38.9824 72.8525 38.9987C71.9 39.0112 71.2875 39.6012 71.2662 40.4837C71.2437 41.3987 71.84 42.0687 72.7925 42.0774C75.2425 42.1024 77.6925 42.0962 80.1425 42.0774C80.8725 42.0724 81.4087 41.6424 81.5937 41.0274C81.9125 39.9637 81.2412 39.0237 80.11 39.0012C78.8937 38.9762 77.6762 38.9962 76.4587 38.9949H76.4575ZM75.925 43.4987C74.8937 43.4987 73.8625 43.4837 72.8312 43.5037C71.8862 43.5224 71.2775 44.1287 71.2662 45.0149C71.255 45.9074 71.8487 46.5674 72.7762 46.5799C74.87 46.6062 76.9637 46.6024 79.0562 46.5787C79.7125 46.5712 80.225 46.2499 80.4612 45.5974C80.8412 44.5487 80.1587 43.5387 79.0175 43.5062C77.9875 43.4762 76.955 43.4999 75.9237 43.4987H75.925ZM83.11 21.4024C83.0887 21.4587 83.06 21.5012 83.06 21.5449C83.06 23.9649 83.0387 26.3862 83.0875 28.8049C83.0937 29.1337 83.3775 29.5237 83.6437 29.7624C83.9887 30.0724 84.455 30.0537 84.875 29.8224C85.3262 29.5749 85.5375 29.1799 85.5375 28.6687C85.5375 26.3737 85.5375 24.0774 85.5375 21.7824C85.5375 21.6624 85.5237 21.5424 85.5162 21.4024H83.1125H83.11Z"
                                                    fill="#009688"
                                                />
                                                <path
                                                    d="M79.4417 48C79.4817 47.9775 79.5192 47.94 79.5617 47.9325C81.6429 47.5975 82.6429 45.195 81.4779 43.3838C81.4529 43.3463 81.4367 43.3025 81.3979 43.2262C82.2167 42.8063 82.7704 42.1612 82.9904 41.26C83.2092 40.3612 83.0192 39.53 82.4967 38.7287C83.2492 38.32 83.8017 37.755 84.0479 36.9313C84.2929 36.1138 84.1917 35.3288 83.7804 34.4875C84.1904 34.4875 84.5392 34.4912 84.8867 34.4875C85.6354 34.4775 86.3929 34.5287 87.1317 34.4362C88.7092 34.2388 89.7254 33.0825 89.7467 31.5688C89.7679 30.0825 88.7929 28.9225 87.2629 28.6162C87.1717 28.5975 87.0792 28.5875 86.9654 28.57V24.9075C87.4804 24.8275 88.0042 24.7775 88.5142 24.6637C91.6704 23.955 94.0267 21.1925 94.0692 17.9737C94.1292 13.3675 94.1092 8.75875 94.0779 4.15125C94.0642 2.11625 92.6954 0.5325 90.7092 0.0875C90.6379 0.07125 90.5717 0.03 90.5042 0C92.5029 0 94.5017 0 96.4992 0V48H79.4404H79.4417Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M70.8347 38.2727C69.5872 39.5302 69.4672 41.389 70.8084 42.7827C69.7197 44.244 69.6159 44.8715 70.2147 46.594C69.0647 46.594 67.9334 46.6065 66.8022 46.5865C66.4009 46.579 65.9959 46.5152 65.5997 46.4377C64.6009 46.2402 63.8159 45.6415 63.0359 45.0365C62.3759 44.5252 61.6772 44.079 60.8422 43.929C60.3997 43.849 59.9434 43.8302 59.4922 43.809C59.1059 43.7902 58.7184 43.8052 58.3047 43.8052V29.984C58.7234 29.984 59.1247 29.9727 59.5247 29.9865C60.9909 30.0365 62.3734 29.6727 63.7097 29.1177C65.5897 28.3377 66.5572 26.8052 67.0472 24.9227C67.2272 24.2302 67.3134 23.514 67.4284 22.8052C67.5697 21.9315 68.2034 21.674 68.9122 22.2152C70.6659 23.554 71.3084 26.3577 70.3697 28.5665C70.3084 28.7102 70.2322 28.8477 70.1834 28.9952C70.0172 29.4965 70.2822 29.914 70.8047 29.9765C70.9434 29.9927 71.0859 29.9852 71.2259 29.9852C74.6472 29.9852 78.0697 29.989 81.4909 29.9802C81.7947 29.9802 81.9884 30.0515 82.1847 30.3165C83.2484 31.7515 85.3434 31.7515 86.4009 30.309C86.6359 29.989 86.8647 29.9552 87.1897 30.0415C87.9059 30.234 88.3559 30.824 88.3397 31.559C88.3234 32.284 87.8822 32.8477 87.1734 33.0065C86.9172 33.064 86.6484 33.0802 86.3847 33.0802C82.0259 33.084 77.6659 33.0827 73.3072 33.0852C72.9797 33.0852 72.6459 33.0765 72.3259 33.1327C71.2084 33.329 70.3947 33.9352 70.0272 35.0265C69.6547 36.129 69.8434 37.1515 70.6197 38.0427C70.6809 38.1127 70.7459 38.179 70.8347 38.2752V38.2727Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M86.9429 23.4187C86.9429 22.6774 86.9466 21.9762 86.9429 21.2749C86.9366 20.4474 86.4941 19.9874 85.6804 19.9787C84.7591 19.9687 83.8366 19.9699 82.9154 19.9787C82.1129 19.9862 81.6679 20.4187 81.6479 21.2237C81.6304 21.9399 81.6441 22.6574 81.6441 23.4649C81.2091 23.4124 80.8079 23.3962 80.4229 23.3112C77.8041 22.7337 75.8991 20.3987 75.8891 17.7162C75.8729 13.2487 75.8791 8.78242 75.8866 4.31492C75.8891 2.63492 77.1129 1.41367 78.7879 1.40992C82.4591 1.40242 86.1304 1.40242 89.8004 1.40992C91.4429 1.41367 92.6729 2.58867 92.6804 4.22617C92.7004 8.77117 92.7204 13.3174 92.6716 17.8612C92.6404 20.7287 90.4191 23.0762 87.5566 23.4162C87.3741 23.4374 87.1866 23.4187 86.9429 23.4187ZM88.9766 9.37117C88.0916 9.37117 87.2641 9.36992 86.4366 9.37117C85.8104 9.37242 85.4779 9.62367 85.4866 10.0837C85.4954 10.5374 85.8279 10.7762 86.4604 10.7774C87.3041 10.7787 88.1479 10.7799 88.9916 10.7774C89.9466 10.7749 90.4029 10.3249 90.4054 9.37742C90.4091 7.98742 90.4066 6.59617 90.4054 5.20617C90.4054 4.11367 89.9966 3.69992 88.9104 3.69867C85.8316 3.69742 82.7541 3.69867 79.6754 3.69867C79.5504 3.69867 79.4254 3.69742 79.3004 3.70992C78.6479 3.77367 78.2104 4.17992 78.2004 4.82992C78.1779 6.43867 78.1779 8.04867 78.2016 9.65742C78.2104 10.2912 78.6804 10.7537 79.3104 10.7687C80.4504 10.7949 81.5916 10.7862 82.7316 10.7749C83.1679 10.7699 83.4629 10.4662 83.4654 10.0799C83.4679 9.67742 83.1604 9.38367 82.6929 9.37867C81.8341 9.36867 80.9741 9.37492 80.1141 9.37492C79.9491 9.37492 79.7854 9.37492 79.6241 9.37492V5.13867H88.9741V9.37492L88.9766 9.37117ZM87.8079 18.5612C89.2191 18.5787 90.3891 17.4374 90.4041 16.0324C90.4191 14.6237 89.2741 13.4624 87.8591 13.4524C86.4529 13.4424 85.2854 14.5987 85.2841 16.0037C85.2829 17.3874 86.4241 18.5437 87.8079 18.5612ZM83.2891 16.0224C83.2954 14.6037 82.1554 13.4524 80.7429 13.4524C79.3241 13.4524 78.1854 14.5962 78.1904 16.0149C78.1954 17.4162 79.3166 18.5487 80.7116 18.5624C82.1241 18.5762 83.2816 17.4349 83.2891 16.0224Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M77.0283 34.495C78.4333 34.495 79.8383 34.4738 81.2433 34.5025C82.3308 34.525 82.9795 35.4188 82.7183 36.4625C82.5445 37.1538 81.9408 37.5788 81.077 37.5838C79.3758 37.5925 77.6745 37.5863 75.972 37.5863C74.942 37.5863 73.9108 37.5988 72.8808 37.58C71.977 37.5638 71.3608 37.0363 71.2758 36.2525C71.1683 35.2438 71.7845 34.515 72.8133 34.4988C74.2183 34.4763 75.6233 34.4938 77.0283 34.4938C77.0283 34.4938 77.0283 34.4938 77.0283 34.495Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M76.4578 38.996C77.6753 38.996 78.8928 38.9773 80.109 39.0023C81.2403 39.0248 81.9115 39.9648 81.5928 41.0285C81.409 41.6448 80.8728 42.0735 80.1415 42.0785C77.6915 42.0973 75.2415 42.1023 72.7915 42.0785C71.839 42.0685 71.2428 41.3998 71.2653 40.4848C71.2865 39.6035 71.899 39.0123 72.8515 38.9998C74.0528 38.9835 75.254 38.996 76.4565 38.996H76.4578Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M75.9253 43.4998C76.9565 43.4998 77.9878 43.4773 79.019 43.5073C80.1603 43.541 80.844 44.5498 80.4628 45.5986C80.2265 46.2498 79.714 46.5723 79.0578 46.5798C76.964 46.6036 74.8703 46.6073 72.7778 46.581C71.8503 46.5698 71.2553 45.9086 71.2678 45.016C71.279 44.1285 71.8878 43.5223 72.8328 43.5048C73.864 43.4848 74.8953 43.4998 75.9265 43.5011L75.9253 43.4998Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M83.1104 21.4038H85.5141C85.5229 21.5426 85.5354 21.6626 85.5354 21.7838C85.5354 24.0788 85.5354 26.3751 85.5354 28.6701C85.5354 29.1813 85.3241 29.5763 84.8729 29.8238C84.4529 30.0538 83.9866 30.0738 83.6416 29.7638C83.3754 29.5251 83.0916 29.1338 83.0854 28.8063C83.0379 26.3876 83.0579 23.9663 83.0579 21.5463C83.0579 21.5026 83.0879 21.4601 83.1079 21.4038H83.1104Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M88.976 9.37114V5.13489H79.626V9.37114C79.7873 9.37114 79.951 9.37114 80.116 9.37114C80.976 9.37114 81.8348 9.36489 82.6948 9.37489C83.1623 9.37989 83.4698 9.67364 83.4673 10.0761C83.4648 10.4624 83.1698 10.7674 82.7335 10.7711C81.5935 10.7836 80.4523 10.7911 79.3123 10.7649C78.6823 10.7511 78.2135 10.2874 78.2035 9.65364C78.1798 8.04489 78.1798 6.43489 78.2023 4.82614C78.211 4.17614 78.6498 3.76989 79.3023 3.70614C79.426 3.69364 79.5523 3.69489 79.6773 3.69489C82.756 3.69489 85.8335 3.69364 88.9123 3.69489C89.9973 3.69489 90.406 4.10989 90.4073 5.20239C90.4073 6.59239 90.4098 7.98364 90.4073 9.37364C90.4048 10.3211 89.9485 10.7711 88.9935 10.7736C88.1498 10.7761 87.306 10.7749 86.4623 10.7736C85.8285 10.7736 85.496 10.5349 85.4885 10.0799C85.4798 9.61989 85.8123 9.36864 86.4385 9.36739C87.266 9.36614 88.0935 9.36739 88.9785 9.36739L88.976 9.37114Z"
                                                    fill="#009688"
                                                />
                                                <path
                                                    d="M87.8079 18.5615C86.4242 18.5452 85.2829 17.3877 85.2842 16.004C85.2854 14.599 86.4529 13.4415 87.8592 13.4527C89.2729 13.4627 90.4179 14.624 90.4042 16.0327C90.3892 17.4377 89.2192 18.579 87.8079 18.5615ZM87.8504 17.154C88.4804 17.1515 89.0117 16.6065 88.9967 15.979C88.9817 15.3627 88.4617 14.8602 87.8417 14.8627C87.2242 14.8652 86.7054 15.374 86.6954 15.989C86.6854 16.6202 87.2179 17.1577 87.8517 17.1552L87.8504 17.154Z"
                                                    fill="#009688"
                                                />
                                                <path
                                                    d="M83.2892 16.0226C83.2829 17.4351 82.1254 18.5764 80.7117 18.5626C79.3167 18.5489 78.1954 17.4164 78.1904 16.0151C78.1854 14.5964 79.3242 13.4526 80.7429 13.4526C82.1554 13.4526 83.2954 14.6039 83.2892 16.0226ZM80.7504 14.8664C80.1204 14.8601 79.6154 15.3464 79.6004 15.9726C79.5842 16.6226 80.0854 17.1476 80.7279 17.1539C81.3617 17.1601 81.8867 16.6339 81.8817 15.9951C81.8767 15.3701 81.3792 14.8726 80.7504 14.8664Z"
                                                    fill="#009688"
                                                />
                                                <path
                                                    d="M87.8497 17.1538C87.216 17.1563 86.6835 16.6188 86.6935 15.9876C86.7035 15.3738 87.2222 14.8638 87.8397 14.8613C88.4597 14.8588 88.9785 15.3613 88.9947 15.9776C89.011 16.6051 88.4798 17.1501 87.8485 17.1526L87.8497 17.1538Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M80.7509 14.8648C81.3797 14.8711 81.8772 15.3686 81.8822 15.9936C81.8872 16.6323 81.3622 17.1598 80.7284 17.1523C80.0872 17.1461 79.5859 16.6211 79.6009 15.9711C79.6159 15.3436 80.1209 14.8586 80.7509 14.8648Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M45.5234 73H43.0938L43.1094 71.4453H45.5234C46.2266 71.4453 46.8151 71.2917 47.2891 70.9844C47.7682 70.6771 48.1276 70.237 48.3672 69.6641C48.612 69.0911 48.7344 68.4089 48.7344 67.6172V67C48.7344 66.3854 48.6641 65.8411 48.5234 65.3672C48.388 64.8932 48.1849 64.4948 47.9141 64.1719C47.6484 63.849 47.3203 63.6042 46.9297 63.4375C46.5443 63.2708 46.099 63.1875 45.5938 63.1875H43.0469V61.625H45.5938C46.349 61.625 47.0391 61.7526 47.6641 62.0078C48.2891 62.2578 48.8281 62.6198 49.2812 63.0938C49.7396 63.5677 50.0911 64.1354 50.3359 64.7969C50.5807 65.4583 50.7031 66.1979 50.7031 67.0156V67.6172C50.7031 68.4349 50.5807 69.1745 50.3359 69.8359C50.0911 70.4974 49.7396 71.0651 49.2812 71.5391C48.8229 72.0078 48.276 72.3698 47.6406 72.625C47.0104 72.875 46.3047 73 45.5234 73ZM44.1797 61.625V73H42.2188V61.625H44.1797ZM54.5 64.5469V73H52.6094V64.5469H54.5ZM52.4844 62.3281C52.4844 62.0417 52.5781 61.8047 52.7656 61.6172C52.9583 61.4245 53.224 61.3281 53.5625 61.3281C53.8958 61.3281 54.1589 61.4245 54.3516 61.6172C54.5443 61.8047 54.6406 62.0417 54.6406 62.3281C54.6406 62.6094 54.5443 62.8438 54.3516 63.0312C54.1589 63.2188 53.8958 63.3125 53.5625 63.3125C53.224 63.3125 52.9583 63.2188 52.7656 63.0312C52.5781 62.8438 52.4844 62.6094 52.4844 62.3281ZM61.3281 71.3047V67.2734C61.3281 66.9714 61.2734 66.7109 61.1641 66.4922C61.0547 66.2734 60.888 66.1042 60.6641 65.9844C60.4453 65.8646 60.1693 65.8047 59.8359 65.8047C59.5286 65.8047 59.263 65.8568 59.0391 65.9609C58.8151 66.0651 58.6406 66.2057 58.5156 66.3828C58.3906 66.5599 58.3281 66.7604 58.3281 66.9844H56.4531C56.4531 66.651 56.5339 66.3281 56.6953 66.0156C56.8568 65.7031 57.0911 65.4245 57.3984 65.1797C57.7057 64.9349 58.0729 64.7422 58.5 64.6016C58.9271 64.4609 59.4062 64.3906 59.9375 64.3906C60.5729 64.3906 61.1354 64.4974 61.625 64.7109C62.1198 64.9245 62.5078 65.2474 62.7891 65.6797C63.0755 66.1068 63.2188 66.6432 63.2188 67.2891V71.0469C63.2188 71.4323 63.2448 71.7786 63.2969 72.0859C63.3542 72.388 63.4349 72.651 63.5391 72.875V73H61.6094C61.5208 72.7969 61.4505 72.5391 61.3984 72.2266C61.3516 71.9089 61.3281 71.6016 61.3281 71.3047ZM61.6016 67.8594L61.6172 69.0234H60.2656C59.9167 69.0234 59.6094 69.0573 59.3438 69.125C59.0781 69.1875 58.8568 69.2812 58.6797 69.4062C58.5026 69.5312 58.3698 69.6823 58.2812 69.8594C58.1927 70.0365 58.1484 70.237 58.1484 70.4609C58.1484 70.6849 58.2005 70.8906 58.3047 71.0781C58.4089 71.2604 58.5599 71.4036 58.7578 71.5078C58.9609 71.612 59.2057 71.6641 59.4922 71.6641C59.8776 71.6641 60.2135 71.5859 60.5 71.4297C60.7917 71.2682 61.0208 71.0729 61.1875 70.8438C61.3542 70.6094 61.4427 70.388 61.4531 70.1797L62.0625 71.0156C62 71.2292 61.8932 71.4583 61.7422 71.7031C61.5911 71.9479 61.3932 72.1823 61.1484 72.4062C60.9089 72.625 60.6198 72.8047 60.2812 72.9453C59.9479 73.0859 59.5625 73.1562 59.125 73.1562C58.5729 73.1562 58.0807 73.0469 57.6484 72.8281C57.2161 72.6042 56.8776 72.3047 56.6328 71.9297C56.388 71.5495 56.2656 71.1198 56.2656 70.6406C56.2656 70.1927 56.349 69.7969 56.5156 69.4531C56.6875 69.1042 56.9375 68.8125 57.2656 68.5781C57.599 68.3438 58.0052 68.1667 58.4844 68.0469C58.9635 67.9219 59.5104 67.8594 60.125 67.8594H61.6016ZM65.1953 61H67.0781V71.1953L66.8984 73H65.1953V61ZM72.5938 68.6953V68.8594C72.5938 69.4844 72.5234 70.0599 72.3828 70.5859C72.2474 71.1068 72.0391 71.5599 71.7578 71.9453C71.4818 72.3307 71.138 72.6302 70.7266 72.8438C70.3203 73.0521 69.849 73.1562 69.3125 73.1562C68.7865 73.1562 68.3281 73.0573 67.9375 72.8594C67.5469 72.6615 67.2188 72.3802 66.9531 72.0156C66.6927 71.651 66.4818 71.2161 66.3203 70.7109C66.1589 70.2057 66.0443 69.6484 65.9766 69.0391V68.5156C66.0443 67.901 66.1589 67.3438 66.3203 66.8438C66.4818 66.3385 66.6927 65.9036 66.9531 65.5391C67.2188 65.1693 67.5443 64.8854 67.9297 64.6875C68.3203 64.4896 68.776 64.3906 69.2969 64.3906C69.8385 64.3906 70.3151 64.4948 70.7266 64.7031C71.1432 64.9115 71.4896 65.2083 71.7656 65.5938C72.0417 65.974 72.2474 66.4271 72.3828 66.9531C72.5234 67.4792 72.5938 68.0599 72.5938 68.6953ZM70.7109 68.8594V68.6953C70.7109 68.3151 70.6797 67.9583 70.6172 67.625C70.5547 67.2865 70.4505 66.9896 70.3047 66.7344C70.1641 66.4792 69.9714 66.2786 69.7266 66.1328C69.487 65.9818 69.1875 65.9062 68.8281 65.9062C68.4948 65.9062 68.2083 65.9635 67.9688 66.0781C67.7292 66.1927 67.5286 66.349 67.3672 66.5469C67.2057 66.7448 67.0781 66.974 66.9844 67.2344C66.8958 67.4948 66.8359 67.776 66.8047 68.0781V69.4922C66.8516 69.8828 66.9505 70.2422 67.1016 70.5703C67.2578 70.8932 67.4766 71.1536 67.7578 71.3516C68.0391 71.5443 68.401 71.6406 68.8438 71.6406C69.1927 71.6406 69.487 71.5703 69.7266 71.4297C69.9661 71.2891 70.1562 71.0938 70.2969 70.8438C70.4427 70.5885 70.5469 70.2917 70.6094 69.9531C70.6771 69.6146 70.7109 69.25 70.7109 68.8594ZM77.9141 73.1562C77.2891 73.1562 76.724 73.0547 76.2188 72.8516C75.7188 72.6432 75.2917 72.3542 74.9375 71.9844C74.5885 71.6146 74.3203 71.1797 74.1328 70.6797C73.9453 70.1797 73.8516 69.6406 73.8516 69.0625V68.75C73.8516 68.0885 73.9479 67.4896 74.1406 66.9531C74.3333 66.4167 74.6016 65.9583 74.9453 65.5781C75.2891 65.1927 75.6953 64.8984 76.1641 64.6953C76.6328 64.4922 77.1406 64.3906 77.6875 64.3906C78.2917 64.3906 78.8203 64.4922 79.2734 64.6953C79.7266 64.8984 80.1016 65.1849 80.3984 65.5547C80.7005 65.9193 80.9245 66.3542 81.0703 66.8594C81.2214 67.3646 81.2969 67.9219 81.2969 68.5312V69.3359H74.7656V67.9844H79.4375V67.8359C79.4271 67.4974 79.3594 67.1797 79.2344 66.8828C79.1146 66.5859 78.9297 66.3464 78.6797 66.1641C78.4297 65.9818 78.0964 65.8906 77.6797 65.8906C77.3672 65.8906 77.0885 65.9583 76.8438 66.0938C76.6042 66.224 76.4036 66.4141 76.2422 66.6641C76.0807 66.9141 75.9557 67.2161 75.8672 67.5703C75.7839 67.9193 75.7422 68.3125 75.7422 68.75V69.0625C75.7422 69.4323 75.7917 69.776 75.8906 70.0938C75.9948 70.4062 76.1458 70.6797 76.3438 70.9141C76.5417 71.1484 76.7812 71.3333 77.0625 71.4688C77.3438 71.599 77.6641 71.6641 78.0234 71.6641C78.4766 71.6641 78.8802 71.5729 79.2344 71.3906C79.5885 71.2083 79.8958 70.9505 80.1562 70.6172L81.1484 71.5781C80.9661 71.8438 80.7292 72.099 80.4375 72.3438C80.1458 72.5833 79.7891 72.7786 79.3672 72.9297C78.9505 73.0807 78.4661 73.1562 77.9141 73.1562ZM86.6406 64.5469V65.9219H81.875V64.5469H86.6406ZM83.25 62.4766H85.1328V70.6641C85.1328 70.9245 85.1693 71.125 85.2422 71.2656C85.3203 71.401 85.4271 71.4922 85.5625 71.5391C85.6979 71.5859 85.8568 71.6094 86.0391 71.6094C86.1693 71.6094 86.2943 71.6016 86.4141 71.5859C86.5339 71.5703 86.6302 71.5547 86.7031 71.5391L86.7109 72.9766C86.5547 73.0234 86.3724 73.0651 86.1641 73.1016C85.9609 73.138 85.7266 73.1562 85.4609 73.1562C85.0286 73.1562 84.6458 73.0807 84.3125 72.9297C83.9792 72.7734 83.7188 72.5208 83.5312 72.1719C83.3438 71.8229 83.25 71.3594 83.25 70.7812V62.4766ZM91.8203 73.1562C91.1953 73.1562 90.6302 73.0547 90.125 72.8516C89.625 72.6432 89.1979 72.3542 88.8438 71.9844C88.4948 71.6146 88.2266 71.1797 88.0391 70.6797C87.8516 70.1797 87.7578 69.6406 87.7578 69.0625V68.75C87.7578 68.0885 87.8542 67.4896 88.0469 66.9531C88.2396 66.4167 88.5078 65.9583 88.8516 65.5781C89.1953 65.1927 89.6016 64.8984 90.0703 64.6953C90.5391 64.4922 91.0469 64.3906 91.5938 64.3906C92.1979 64.3906 92.7266 64.4922 93.1797 64.6953C93.6328 64.8984 94.0078 65.1849 94.3047 65.5547C94.6068 65.9193 94.8307 66.3542 94.9766 66.8594C95.1276 67.3646 95.2031 67.9219 95.2031 68.5312V69.3359H88.6719V67.9844H93.3438V67.8359C93.3333 67.4974 93.2656 67.1797 93.1406 66.8828C93.0208 66.5859 92.8359 66.3464 92.5859 66.1641C92.3359 65.9818 92.0026 65.8906 91.5859 65.8906C91.2734 65.8906 90.9948 65.9583 90.75 66.0938C90.5104 66.224 90.3099 66.4141 90.1484 66.6641C89.987 66.9141 89.862 67.2161 89.7734 67.5703C89.6901 67.9193 89.6484 68.3125 89.6484 68.75V69.0625C89.6484 69.4323 89.6979 69.776 89.7969 70.0938C89.901 70.4062 90.0521 70.6797 90.25 70.9141C90.4479 71.1484 90.6875 71.3333 90.9688 71.4688C91.25 71.599 91.5703 71.6641 91.9297 71.6641C92.3828 71.6641 92.7865 71.5729 93.1406 71.3906C93.4948 71.2083 93.8021 70.9505 94.0625 70.6172L95.0547 71.5781C94.8724 71.8438 94.6354 72.099 94.3438 72.3438C94.0521 72.5833 93.6953 72.7786 93.2734 72.9297C92.8568 73.0807 92.3724 73.1562 91.8203 73.1562ZM101.414 70.7109C101.414 70.5234 101.367 70.3542 101.273 70.2031C101.18 70.0469 101 69.9062 100.734 69.7812C100.474 69.6562 100.089 69.5417 99.5781 69.4375C99.1302 69.3385 98.7188 69.2214 98.3438 69.0859C97.974 68.9453 97.6562 68.776 97.3906 68.5781C97.125 68.3802 96.9193 68.1458 96.7734 67.875C96.6276 67.6042 96.5547 67.2917 96.5547 66.9375C96.5547 66.5938 96.6302 66.2682 96.7812 65.9609C96.9323 65.6536 97.1484 65.3828 97.4297 65.1484C97.7109 64.9141 98.0521 64.7292 98.4531 64.5938C98.8594 64.4583 99.3125 64.3906 99.8125 64.3906C100.521 64.3906 101.128 64.5104 101.633 64.75C102.143 64.9844 102.534 65.3047 102.805 65.7109C103.076 66.112 103.211 66.5651 103.211 67.0703H101.328C101.328 66.8464 101.271 66.638 101.156 66.4453C101.047 66.2474 100.88 66.0885 100.656 65.9688C100.432 65.8438 100.151 65.7812 99.8125 65.7812C99.4896 65.7812 99.2214 65.8333 99.0078 65.9375C98.7995 66.0365 98.6432 66.1667 98.5391 66.3281C98.4401 66.4896 98.3906 66.6667 98.3906 66.8594C98.3906 67 98.4167 67.1276 98.4688 67.2422C98.526 67.3516 98.6198 67.4531 98.75 67.5469C98.8802 67.6354 99.0573 67.7188 99.2812 67.7969C99.5104 67.875 99.7969 67.9505 100.141 68.0234C100.786 68.1589 101.341 68.3333 101.805 68.5469C102.273 68.7552 102.633 69.026 102.883 69.3594C103.133 69.6875 103.258 70.1042 103.258 70.6094C103.258 70.9844 103.177 71.3281 103.016 71.6406C102.859 71.9479 102.63 72.2161 102.328 72.4453C102.026 72.6693 101.664 72.8438 101.242 72.9688C100.826 73.0938 100.357 73.1562 99.8359 73.1562C99.0703 73.1562 98.4219 73.0208 97.8906 72.75C97.3594 72.474 96.9557 72.1224 96.6797 71.6953C96.4089 71.263 96.2734 70.8151 96.2734 70.3516H98.0938C98.1146 70.7005 98.2109 70.9792 98.3828 71.1875C98.5599 71.3906 98.7786 71.5391 99.0391 71.6328C99.3047 71.7214 99.5781 71.7656 99.8594 71.7656C100.198 71.7656 100.482 71.7214 100.711 71.6328C100.94 71.5391 101.115 71.4141 101.234 71.2578C101.354 71.0964 101.414 70.9141 101.414 70.7109Z"
                                                    fill="#009688"
                                                />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div
                                            className="p-5 flex flex-col bg-white text-gray-500 justify-center items-center gap-2 border border-gray-500 cursor-pointer rounded-lg"
                                            onClick={() => setDiabetes(true)}
                                            name="diabetes"
                                            value={formData.diabetes}
                                            onChange={setFormData}
                                        >
                                            <svg
                                                width="125"
                                                height="79"
                                                viewBox="0 0 145 79"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M65.94 48H48.5C48.5 32 48.5 16 48.5 0C58.3763 0 68.2525 0 78.1287 0C78.0425 0.03 77.9588 0.06875 77.87 0.08875C75.8363 0.55125 74.4862 2.20125 74.4813 4.29375C74.47 8.7775 74.4637 13.2625 74.4837 17.7463C74.4987 20.9287 76.6437 23.715 79.715 24.57C80.3237 24.74 80.9625 24.8075 81.6063 24.925V28.54H71.9175C71.9537 28.3788 71.9825 28.2612 72.0075 28.1425C72.5987 25.3988 71.9487 23.0363 69.8237 21.1488C69.1325 20.5363 68.31 20.3375 67.425 20.6887C66.5312 21.0437 66.1737 21.785 66.02 22.69C65.8713 23.5638 65.7113 24.4425 65.45 25.2875C65.1588 26.2325 64.5988 27.0438 63.7163 27.5413C62.0425 28.485 60.2225 28.705 58.3413 28.545C58.0863 27.3713 57.9563 27.27 56.7288 27.27C55.1663 27.27 53.6038 27.2662 52.0412 27.2725C51.285 27.275 50.9175 27.6362 50.915 28.395C50.9075 30.5662 50.9125 32.7388 50.9125 34.91C50.9125 35.0037 50.9137 35.0987 50.9275 35.19C50.9813 35.5525 51.2175 35.7513 51.5575 35.7775C51.9012 35.805 52.1675 35.6325 52.2625 35.285C52.3112 35.1075 52.315 34.915 52.315 34.73C52.3188 32.8862 52.3175 31.0425 52.3175 29.1987C52.3175 29.035 52.3175 28.8713 52.3175 28.7013H56.8462V45.0762H52.3163C52.3163 44.8575 52.3163 44.6725 52.3163 44.4875C52.3163 42.5187 52.3175 40.55 52.3163 38.5812C52.3163 37.9625 52.0525 37.6188 51.6012 37.6225C51.1612 37.6263 50.9125 37.9513 50.9125 38.5475C50.91 40.8125 50.9087 43.0788 50.9125 45.3438C50.915 46.1662 51.265 46.5112 52.0863 46.5137C53.68 46.5175 55.2738 46.515 56.8675 46.515C57.935 46.515 58.125 46.3538 58.31 45.3025C58.315 45.2775 58.35 45.2575 58.3938 45.2088C58.6825 45.2088 58.995 45.2238 59.305 45.2062C60.4013 45.1425 61.3663 45.455 62.2075 46.1675C62.505 46.4188 62.8337 46.6325 63.15 46.8613C63.9875 47.4663 64.9613 47.74 65.94 47.9975V48Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M65.94 47.9999C64.96 47.7424 63.9875 47.4687 63.15 46.8637C62.8337 46.6349 62.5037 46.4212 62.2075 46.1699C61.3662 45.4574 60.4025 45.1449 59.305 45.2087C58.995 45.2262 58.6825 45.2112 58.3937 45.2112C58.35 45.2587 58.315 45.2787 58.31 45.3049C58.1262 46.3562 57.935 46.5174 56.8675 46.5174C55.2737 46.5174 53.68 46.5199 52.0862 46.5162C51.265 46.5137 50.915 46.1687 50.9125 45.3462C50.9075 43.0812 50.9087 40.8149 50.9125 38.5499C50.9125 37.9537 51.1612 37.6274 51.6012 37.6249C52.0537 37.6212 52.3162 37.9662 52.3162 38.5837C52.3187 40.5524 52.3162 42.5212 52.3162 44.4899C52.3162 44.6749 52.3162 44.8599 52.3162 45.0787H56.845V28.7037H52.3162C52.3162 28.8724 52.3162 29.0362 52.3162 29.2012C52.3162 31.0449 52.3175 32.8887 52.3137 34.7324C52.3137 34.9187 52.3087 35.1112 52.2612 35.2874C52.1662 35.6349 51.9 35.8062 51.5562 35.7799C51.2162 35.7537 50.9787 35.5549 50.9262 35.1924C50.9125 35.0999 50.9112 35.0049 50.9112 34.9124C50.9112 32.7412 50.9062 30.5687 50.9137 28.3974C50.9162 27.6387 51.2837 27.2774 52.04 27.2749C53.6025 27.2687 55.165 27.2724 56.7275 27.2724C57.955 27.2724 58.085 27.3737 58.34 28.5474C60.2212 28.7062 62.0412 28.4862 63.715 27.5437C64.5975 27.0462 65.1575 26.2362 65.4487 25.2899C65.7087 24.4449 65.87 23.5662 66.0187 22.6924C66.1725 21.7874 66.53 21.0462 67.4237 20.6912C68.3087 20.3399 69.1312 20.5387 69.8225 21.1512C71.9487 23.0387 72.5987 25.4012 72.0062 28.1449C71.9812 28.2637 71.9525 28.3824 71.9162 28.5424H81.605V24.9274C80.9612 24.8099 80.3237 24.7424 79.7137 24.5724C76.6425 23.7162 74.4975 20.9312 74.4825 17.7487C74.4625 13.2649 74.4687 8.77994 74.48 4.29619C74.485 2.20494 75.8362 0.553691 77.8687 0.0911914C77.9575 0.0711914 78.0412 0.0324414 78.1275 0.00244141C82.2525 0.00244141 86.3787 0.00244141 90.5037 0.00244141C90.5725 0.0324414 90.6375 0.0736914 90.7087 0.0899414C92.695 0.534941 94.0637 2.11869 94.0775 4.15369C94.1087 8.76119 94.1287 13.3699 94.0687 17.9762C94.0262 21.1949 91.6687 23.9574 88.5137 24.6662C88.0037 24.7812 87.4787 24.8312 86.965 24.9099V28.5724C87.0787 28.5899 87.1712 28.6012 87.2625 28.6187C88.7925 28.9249 89.7675 30.0849 89.7462 31.5712C89.725 33.0849 88.7087 34.2412 87.1312 34.4387C86.3925 34.5312 85.635 34.4799 84.8862 34.4899C84.5387 34.4949 84.19 34.4899 83.78 34.4899C84.1912 35.3312 84.2912 36.1162 84.0475 36.9337C83.8012 37.7574 83.2487 38.3224 82.4962 38.7312C83.0187 39.5324 83.2087 40.3624 82.99 41.2624C82.77 42.1637 82.2162 42.8099 81.3975 43.2287C81.4362 43.3049 81.4525 43.3487 81.4775 43.3862C82.6425 45.1974 81.6425 47.5999 79.5612 47.9349C79.5187 47.9412 79.4812 47.9787 79.4412 48.0024H65.94V47.9999ZM70.835 38.2724C70.7462 38.1762 70.6812 38.1099 70.62 38.0399C69.8437 37.1487 69.6562 36.1262 70.0275 35.0237C70.395 33.9337 71.2087 33.3262 72.3262 33.1299C72.6462 33.0737 72.98 33.0837 73.3075 33.0824C77.6662 33.0799 82.0262 33.0824 86.385 33.0774C86.6487 33.0774 86.9187 33.0612 87.1737 33.0037C87.8825 32.8437 88.3237 32.2799 88.34 31.5562C88.3562 30.8212 87.9062 30.2312 87.19 30.0387C86.865 29.9512 86.6362 29.9849 86.4012 30.3062C85.3437 31.7487 83.2487 31.7487 82.185 30.3137C81.9887 30.0487 81.795 29.9774 81.4912 29.9774C78.07 29.9862 74.6475 29.9824 71.2262 29.9824C71.0862 29.9824 70.9437 29.9912 70.805 29.9737C70.2837 29.9112 70.0187 29.4924 70.1837 28.9924C70.2325 28.8449 70.3087 28.7074 70.37 28.5637C71.31 26.3549 70.6662 23.5512 68.9125 22.2124C68.205 21.6724 67.57 21.9287 67.4287 22.8024C67.315 23.5112 67.2275 24.2274 67.0475 24.9199C66.5575 26.8024 65.59 28.3362 63.71 29.1149C62.3737 29.6699 60.9912 30.0337 59.525 29.9837C59.125 29.9699 58.7237 29.9812 58.305 29.9812V43.8024C58.72 43.8024 59.1075 43.7874 59.4925 43.8062C59.9437 43.8287 60.3987 43.8462 60.8425 43.9262C61.6775 44.0762 62.3762 44.5224 63.0362 45.0337C63.8162 45.6387 64.6012 46.2374 65.6 46.4349C65.995 46.5124 66.4 46.5762 66.8025 46.5837C67.9325 46.6037 69.0637 46.5912 70.215 46.5912C69.6175 44.8687 69.72 44.2412 70.8087 42.7799C69.4675 41.3862 69.5862 39.5274 70.835 38.2699V38.2724ZM86.9425 23.4187C87.185 23.4187 87.3725 23.4374 87.5562 23.4162C90.4187 23.0762 92.64 20.7287 92.6712 17.8612C92.72 13.3162 92.7 8.77119 92.68 4.22619C92.6725 2.58869 91.4425 1.41244 89.8 1.40994C86.1287 1.40244 82.4575 1.40244 78.7875 1.40994C77.1125 1.41369 75.89 2.63619 75.8862 4.31494C75.8775 8.78244 75.8725 13.2487 75.8887 17.7162C75.8987 20.3987 77.8037 22.7337 80.4225 23.3112C80.8075 23.3962 81.2075 23.4124 81.6437 23.4649C81.6437 22.6587 81.63 21.9412 81.6475 21.2237C81.6675 20.4187 82.1125 19.9862 82.915 19.9787C83.8362 19.9699 84.7587 19.9687 85.68 19.9787C86.4937 19.9874 86.9375 20.4474 86.9425 21.2749C86.9475 21.9762 86.9425 22.6762 86.9425 23.4187ZM77.0287 34.4949C77.0287 34.4949 77.0287 34.4949 77.0287 34.4937C75.6237 34.4937 74.2187 34.4774 72.8137 34.4987C71.785 34.5149 71.1687 35.2437 71.2762 36.2524C71.36 37.0362 71.9762 37.5637 72.8812 37.5799C73.9112 37.5987 74.9412 37.5862 75.9725 37.5862C77.6737 37.5862 79.375 37.5924 81.0775 37.5837C81.9412 37.5799 82.5462 37.1537 82.7187 36.4624C82.98 35.4187 82.3312 34.5237 81.2437 34.5024C79.84 34.4737 78.4337 34.4949 77.0287 34.4949ZM76.4575 38.9949C75.2562 38.9949 74.0537 38.9824 72.8525 38.9987C71.9 39.0112 71.2875 39.6012 71.2662 40.4837C71.2437 41.3987 71.84 42.0687 72.7925 42.0774C75.2425 42.1024 77.6925 42.0962 80.1425 42.0774C80.8725 42.0724 81.4087 41.6424 81.5937 41.0274C81.9125 39.9637 81.2412 39.0237 80.11 39.0012C78.8937 38.9762 77.6762 38.9962 76.4587 38.9949H76.4575ZM75.925 43.4987C74.8937 43.4987 73.8625 43.4837 72.8312 43.5037C71.8862 43.5224 71.2775 44.1287 71.2662 45.0149C71.255 45.9074 71.8487 46.5674 72.7762 46.5799C74.87 46.6062 76.9637 46.6024 79.0562 46.5787C79.7125 46.5712 80.225 46.2499 80.4612 45.5974C80.8412 44.5487 80.1587 43.5387 79.0175 43.5062C77.9875 43.4762 76.955 43.4999 75.9237 43.4987H75.925ZM83.11 21.4024C83.0887 21.4587 83.06 21.5012 83.06 21.5449C83.06 23.9649 83.0387 26.3862 83.0875 28.8049C83.0937 29.1337 83.3775 29.5237 83.6437 29.7624C83.9887 30.0724 84.455 30.0537 84.875 29.8224C85.3262 29.5749 85.5375 29.1799 85.5375 28.6687C85.5375 26.3737 85.5375 24.0774 85.5375 21.7824C85.5375 21.6624 85.5237 21.5424 85.5162 21.4024H83.1125H83.11Z"
                                                    fill="#98A2B3"
                                                />
                                                <path
                                                    d="M79.4417 48C79.4817 47.9775 79.5192 47.94 79.5617 47.9325C81.6429 47.5975 82.6429 45.195 81.4779 43.3838C81.4529 43.3463 81.4367 43.3025 81.3979 43.2262C82.2167 42.8063 82.7704 42.1612 82.9904 41.26C83.2092 40.3612 83.0192 39.53 82.4967 38.7287C83.2492 38.32 83.8017 37.755 84.0479 36.9313C84.2929 36.1138 84.1917 35.3288 83.7804 34.4875C84.1904 34.4875 84.5392 34.4912 84.8867 34.4875C85.6354 34.4775 86.3929 34.5287 87.1317 34.4362C88.7092 34.2388 89.7254 33.0825 89.7467 31.5688C89.7679 30.0825 88.7929 28.9225 87.2629 28.6162C87.1717 28.5975 87.0792 28.5875 86.9654 28.57V24.9075C87.4804 24.8275 88.0042 24.7775 88.5142 24.6637C91.6704 23.955 94.0267 21.1925 94.0692 17.9737C94.1292 13.3675 94.1092 8.75875 94.0779 4.15125C94.0642 2.11625 92.6954 0.5325 90.7092 0.0875C90.6379 0.07125 90.5717 0.03 90.5042 0C92.5029 0 94.5017 0 96.4992 0V48H79.4404H79.4417Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M70.8347 38.2727C69.5872 39.5302 69.4672 41.389 70.8084 42.7827C69.7197 44.244 69.6159 44.8715 70.2147 46.594C69.0647 46.594 67.9334 46.6065 66.8022 46.5865C66.4009 46.579 65.9959 46.5152 65.5997 46.4377C64.6009 46.2402 63.8159 45.6415 63.0359 45.0365C62.3759 44.5252 61.6772 44.079 60.8422 43.929C60.3997 43.849 59.9434 43.8302 59.4922 43.809C59.1059 43.7902 58.7184 43.8052 58.3047 43.8052V29.984C58.7234 29.984 59.1247 29.9727 59.5247 29.9865C60.9909 30.0365 62.3734 29.6727 63.7097 29.1177C65.5897 28.3377 66.5572 26.8052 67.0472 24.9227C67.2272 24.2302 67.3134 23.514 67.4284 22.8052C67.5697 21.9315 68.2034 21.674 68.9122 22.2152C70.6659 23.554 71.3084 26.3577 70.3697 28.5665C70.3084 28.7102 70.2322 28.8477 70.1834 28.9952C70.0172 29.4965 70.2822 29.914 70.8047 29.9765C70.9434 29.9927 71.0859 29.9852 71.2259 29.9852C74.6472 29.9852 78.0697 29.989 81.4909 29.9802C81.7947 29.9802 81.9884 30.0515 82.1847 30.3165C83.2484 31.7515 85.3434 31.7515 86.4009 30.309C86.6359 29.989 86.8647 29.9552 87.1897 30.0415C87.9059 30.234 88.3559 30.824 88.3397 31.559C88.3234 32.284 87.8822 32.8477 87.1734 33.0065C86.9172 33.064 86.6484 33.0802 86.3847 33.0802C82.0259 33.084 77.6659 33.0827 73.3072 33.0852C72.9797 33.0852 72.6459 33.0765 72.3259 33.1327C71.2084 33.329 70.3947 33.9352 70.0272 35.0265C69.6547 36.129 69.8434 37.1515 70.6197 38.0427C70.6809 38.1127 70.7459 38.179 70.8347 38.2752V38.2727Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M86.9429 23.4187C86.9429 22.6774 86.9466 21.9762 86.9429 21.2749C86.9366 20.4474 86.4941 19.9874 85.6804 19.9787C84.7591 19.9687 83.8366 19.9699 82.9154 19.9787C82.1129 19.9862 81.6679 20.4187 81.6479 21.2237C81.6304 21.9399 81.6441 22.6574 81.6441 23.4649C81.2091 23.4124 80.8079 23.3962 80.4229 23.3112C77.8041 22.7337 75.8991 20.3987 75.8891 17.7162C75.8729 13.2487 75.8791 8.78242 75.8866 4.31492C75.8891 2.63492 77.1129 1.41367 78.7879 1.40992C82.4591 1.40242 86.1304 1.40242 89.8004 1.40992C91.4429 1.41367 92.6729 2.58867 92.6804 4.22617C92.7004 8.77117 92.7204 13.3174 92.6716 17.8612C92.6404 20.7287 90.4191 23.0762 87.5566 23.4162C87.3741 23.4374 87.1866 23.4187 86.9429 23.4187ZM88.9766 9.37117C88.0916 9.37117 87.2641 9.36992 86.4366 9.37117C85.8104 9.37242 85.4779 9.62367 85.4866 10.0837C85.4954 10.5374 85.8279 10.7762 86.4604 10.7774C87.3041 10.7787 88.1479 10.7799 88.9916 10.7774C89.9466 10.7749 90.4029 10.3249 90.4054 9.37742C90.4091 7.98742 90.4066 6.59617 90.4054 5.20617C90.4054 4.11367 89.9966 3.69992 88.9104 3.69867C85.8316 3.69742 82.7541 3.69867 79.6754 3.69867C79.5504 3.69867 79.4254 3.69742 79.3004 3.70992C78.6479 3.77367 78.2104 4.17992 78.2004 4.82992C78.1779 6.43867 78.1779 8.04867 78.2016 9.65742C78.2104 10.2912 78.6804 10.7537 79.3104 10.7687C80.4504 10.7949 81.5916 10.7862 82.7316 10.7749C83.1679 10.7699 83.4629 10.4662 83.4654 10.0799C83.4679 9.67742 83.1604 9.38367 82.6929 9.37867C81.8341 9.36867 80.9741 9.37492 80.1141 9.37492C79.9491 9.37492 79.7854 9.37492 79.6241 9.37492V5.13867H88.9741V9.37492L88.9766 9.37117ZM87.8079 18.5612C89.2191 18.5787 90.3891 17.4374 90.4041 16.0324C90.4191 14.6237 89.2741 13.4624 87.8591 13.4524C86.4529 13.4424 85.2854 14.5987 85.2841 16.0037C85.2829 17.3874 86.4241 18.5437 87.8079 18.5612ZM83.2891 16.0224C83.2954 14.6037 82.1554 13.4524 80.7429 13.4524C79.3241 13.4524 78.1854 14.5962 78.1904 16.0149C78.1954 17.4162 79.3166 18.5487 80.7116 18.5624C82.1241 18.5762 83.2816 17.4349 83.2891 16.0224Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M77.0283 34.495C78.4333 34.495 79.8383 34.4738 81.2433 34.5025C82.3308 34.525 82.9795 35.4188 82.7183 36.4625C82.5445 37.1538 81.9408 37.5788 81.077 37.5838C79.3758 37.5925 77.6745 37.5863 75.972 37.5863C74.942 37.5863 73.9108 37.5988 72.8808 37.58C71.977 37.5638 71.3608 37.0363 71.2758 36.2525C71.1683 35.2438 71.7845 34.515 72.8133 34.4988C74.2183 34.4763 75.6233 34.4938 77.0283 34.4938C77.0283 34.4938 77.0283 34.4938 77.0283 34.495Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M76.4578 38.996C77.6753 38.996 78.8928 38.9773 80.109 39.0023C81.2403 39.0248 81.9115 39.9648 81.5928 41.0285C81.409 41.6448 80.8728 42.0735 80.1415 42.0785C77.6915 42.0973 75.2415 42.1023 72.7915 42.0785C71.839 42.0685 71.2428 41.3998 71.2653 40.4848C71.2865 39.6035 71.899 39.0123 72.8515 38.9998C74.0528 38.9835 75.254 38.996 76.4565 38.996H76.4578Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M75.9253 43.4998C76.9565 43.4998 77.9878 43.4773 79.019 43.5073C80.1603 43.541 80.844 44.5498 80.4628 45.5986C80.2265 46.2498 79.714 46.5723 79.0578 46.5798C76.964 46.6036 74.8703 46.6073 72.7778 46.581C71.8503 46.5698 71.2553 45.9086 71.2678 45.016C71.279 44.1285 71.8878 43.5223 72.8328 43.5048C73.864 43.4848 74.8953 43.4998 75.9265 43.5011L75.9253 43.4998Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M83.1104 21.4038H85.5141C85.5229 21.5426 85.5354 21.6626 85.5354 21.7838C85.5354 24.0788 85.5354 26.3751 85.5354 28.6701C85.5354 29.1813 85.3241 29.5763 84.8729 29.8238C84.4529 30.0538 83.9866 30.0738 83.6416 29.7638C83.3754 29.5251 83.0916 29.1338 83.0854 28.8063C83.0379 26.3876 83.0579 23.9663 83.0579 21.5463C83.0579 21.5026 83.0879 21.4601 83.1079 21.4038H83.1104Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M88.976 9.37114V5.13489H79.626V9.37114C79.7873 9.37114 79.951 9.37114 80.116 9.37114C80.976 9.37114 81.8348 9.36489 82.6948 9.37489C83.1623 9.37989 83.4698 9.67364 83.4673 10.0761C83.4648 10.4624 83.1698 10.7674 82.7335 10.7711C81.5935 10.7836 80.4523 10.7911 79.3123 10.7649C78.6823 10.7511 78.2135 10.2874 78.2035 9.65364C78.1798 8.04489 78.1798 6.43489 78.2023 4.82614C78.211 4.17614 78.6498 3.76989 79.3023 3.70614C79.426 3.69364 79.5523 3.69489 79.6773 3.69489C82.756 3.69489 85.8335 3.69364 88.9123 3.69489C89.9973 3.69489 90.406 4.10989 90.4073 5.20239C90.4073 6.59239 90.4098 7.98364 90.4073 9.37364C90.4048 10.3211 89.9485 10.7711 88.9935 10.7736C88.1498 10.7761 87.306 10.7749 86.4623 10.7736C85.8285 10.7736 85.496 10.5349 85.4885 10.0799C85.4798 9.61989 85.8123 9.36864 86.4385 9.36739C87.266 9.36614 88.0935 9.36739 88.9785 9.36739L88.976 9.37114Z"
                                                    fill="#98A2B3"
                                                />
                                                <path
                                                    d="M87.8079 18.5615C86.4242 18.5452 85.2829 17.3877 85.2842 16.004C85.2854 14.599 86.4529 13.4415 87.8592 13.4527C89.2729 13.4627 90.4179 14.624 90.4042 16.0327C90.3892 17.4377 89.2192 18.579 87.8079 18.5615ZM87.8504 17.154C88.4804 17.1515 89.0117 16.6065 88.9967 15.979C88.9817 15.3627 88.4617 14.8602 87.8417 14.8627C87.2242 14.8652 86.7054 15.374 86.6954 15.989C86.6854 16.6202 87.2179 17.1577 87.8517 17.1552L87.8504 17.154Z"
                                                    fill="##98A2B3"
                                                />
                                                <path
                                                    d="M83.2892 16.0226C83.2829 17.4351 82.1254 18.5764 80.7117 18.5626C79.3167 18.5489 78.1954 17.4164 78.1904 16.0151C78.1854 14.5964 79.3242 13.4526 80.7429 13.4526C82.1554 13.4526 83.2954 14.6039 83.2892 16.0226ZM80.7504 14.8664C80.1204 14.8601 79.6154 15.3464 79.6004 15.9726C79.5842 16.6226 80.0854 17.1476 80.7279 17.1539C81.3617 17.1601 81.8867 16.6339 81.8817 15.9951C81.8767 15.3701 81.3792 14.8726 80.7504 14.8664Z"
                                                    fill="##98A2B3"
                                                />
                                                <path
                                                    d="M87.8497 17.1538C87.216 17.1563 86.6835 16.6188 86.6935 15.9876C86.7035 15.3738 87.2222 14.8638 87.8397 14.8613C88.4597 14.8588 88.9785 15.3613 88.9947 15.9776C89.011 16.6051 88.4798 17.1501 87.8485 17.1526L87.8497 17.1538Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M80.7509 14.8648C81.3797 14.8711 81.8772 15.3686 81.8822 15.9936C81.8872 16.6323 81.3622 17.1598 80.7284 17.1523C80.0872 17.1461 79.5859 16.6211 79.6009 15.9711C79.6159 15.3436 80.1209 14.8586 80.7509 14.8648Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M45.5234 73H43.0938L43.1094 71.4453H45.5234C46.2266 71.4453 46.8151 71.2917 47.2891 70.9844C47.7682 70.6771 48.1276 70.237 48.3672 69.6641C48.612 69.0911 48.7344 68.4089 48.7344 67.6172V67C48.7344 66.3854 48.6641 65.8411 48.5234 65.3672C48.388 64.8932 48.1849 64.4948 47.9141 64.1719C47.6484 63.849 47.3203 63.6042 46.9297 63.4375C46.5443 63.2708 46.099 63.1875 45.5938 63.1875H43.0469V61.625H45.5938C46.349 61.625 47.0391 61.7526 47.6641 62.0078C48.2891 62.2578 48.8281 62.6198 49.2812 63.0938C49.7396 63.5677 50.0911 64.1354 50.3359 64.7969C50.5807 65.4583 50.7031 66.1979 50.7031 67.0156V67.6172C50.7031 68.4349 50.5807 69.1745 50.3359 69.8359C50.0911 70.4974 49.7396 71.0651 49.2812 71.5391C48.8229 72.0078 48.276 72.3698 47.6406 72.625C47.0104 72.875 46.3047 73 45.5234 73ZM44.1797 61.625V73H42.2188V61.625H44.1797ZM54.5 64.5469V73H52.6094V64.5469H54.5ZM52.4844 62.3281C52.4844 62.0417 52.5781 61.8047 52.7656 61.6172C52.9583 61.4245 53.224 61.3281 53.5625 61.3281C53.8958 61.3281 54.1589 61.4245 54.3516 61.6172C54.5443 61.8047 54.6406 62.0417 54.6406 62.3281C54.6406 62.6094 54.5443 62.8438 54.3516 63.0312C54.1589 63.2188 53.8958 63.3125 53.5625 63.3125C53.224 63.3125 52.9583 63.2188 52.7656 63.0312C52.5781 62.8438 52.4844 62.6094 52.4844 62.3281ZM61.3281 71.3047V67.2734C61.3281 66.9714 61.2734 66.7109 61.1641 66.4922C61.0547 66.2734 60.888 66.1042 60.6641 65.9844C60.4453 65.8646 60.1693 65.8047 59.8359 65.8047C59.5286 65.8047 59.263 65.8568 59.0391 65.9609C58.8151 66.0651 58.6406 66.2057 58.5156 66.3828C58.3906 66.5599 58.3281 66.7604 58.3281 66.9844H56.4531C56.4531 66.651 56.5339 66.3281 56.6953 66.0156C56.8568 65.7031 57.0911 65.4245 57.3984 65.1797C57.7057 64.9349 58.0729 64.7422 58.5 64.6016C58.9271 64.4609 59.4062 64.3906 59.9375 64.3906C60.5729 64.3906 61.1354 64.4974 61.625 64.7109C62.1198 64.9245 62.5078 65.2474 62.7891 65.6797C63.0755 66.1068 63.2188 66.6432 63.2188 67.2891V71.0469C63.2188 71.4323 63.2448 71.7786 63.2969 72.0859C63.3542 72.388 63.4349 72.651 63.5391 72.875V73H61.6094C61.5208 72.7969 61.4505 72.5391 61.3984 72.2266C61.3516 71.9089 61.3281 71.6016 61.3281 71.3047ZM61.6016 67.8594L61.6172 69.0234H60.2656C59.9167 69.0234 59.6094 69.0573 59.3438 69.125C59.0781 69.1875 58.8568 69.2812 58.6797 69.4062C58.5026 69.5312 58.3698 69.6823 58.2812 69.8594C58.1927 70.0365 58.1484 70.237 58.1484 70.4609C58.1484 70.6849 58.2005 70.8906 58.3047 71.0781C58.4089 71.2604 58.5599 71.4036 58.7578 71.5078C58.9609 71.612 59.2057 71.6641 59.4922 71.6641C59.8776 71.6641 60.2135 71.5859 60.5 71.4297C60.7917 71.2682 61.0208 71.0729 61.1875 70.8438C61.3542 70.6094 61.4427 70.388 61.4531 70.1797L62.0625 71.0156C62 71.2292 61.8932 71.4583 61.7422 71.7031C61.5911 71.9479 61.3932 72.1823 61.1484 72.4062C60.9089 72.625 60.6198 72.8047 60.2812 72.9453C59.9479 73.0859 59.5625 73.1562 59.125 73.1562C58.5729 73.1562 58.0807 73.0469 57.6484 72.8281C57.2161 72.6042 56.8776 72.3047 56.6328 71.9297C56.388 71.5495 56.2656 71.1198 56.2656 70.6406C56.2656 70.1927 56.349 69.7969 56.5156 69.4531C56.6875 69.1042 56.9375 68.8125 57.2656 68.5781C57.599 68.3438 58.0052 68.1667 58.4844 68.0469C58.9635 67.9219 59.5104 67.8594 60.125 67.8594H61.6016ZM65.1953 61H67.0781V71.1953L66.8984 73H65.1953V61ZM72.5938 68.6953V68.8594C72.5938 69.4844 72.5234 70.0599 72.3828 70.5859C72.2474 71.1068 72.0391 71.5599 71.7578 71.9453C71.4818 72.3307 71.138 72.6302 70.7266 72.8438C70.3203 73.0521 69.849 73.1562 69.3125 73.1562C68.7865 73.1562 68.3281 73.0573 67.9375 72.8594C67.5469 72.6615 67.2188 72.3802 66.9531 72.0156C66.6927 71.651 66.4818 71.2161 66.3203 70.7109C66.1589 70.2057 66.0443 69.6484 65.9766 69.0391V68.5156C66.0443 67.901 66.1589 67.3438 66.3203 66.8438C66.4818 66.3385 66.6927 65.9036 66.9531 65.5391C67.2188 65.1693 67.5443 64.8854 67.9297 64.6875C68.3203 64.4896 68.776 64.3906 69.2969 64.3906C69.8385 64.3906 70.3151 64.4948 70.7266 64.7031C71.1432 64.9115 71.4896 65.2083 71.7656 65.5938C72.0417 65.974 72.2474 66.4271 72.3828 66.9531C72.5234 67.4792 72.5938 68.0599 72.5938 68.6953ZM70.7109 68.8594V68.6953C70.7109 68.3151 70.6797 67.9583 70.6172 67.625C70.5547 67.2865 70.4505 66.9896 70.3047 66.7344C70.1641 66.4792 69.9714 66.2786 69.7266 66.1328C69.487 65.9818 69.1875 65.9062 68.8281 65.9062C68.4948 65.9062 68.2083 65.9635 67.9688 66.0781C67.7292 66.1927 67.5286 66.349 67.3672 66.5469C67.2057 66.7448 67.0781 66.974 66.9844 67.2344C66.8958 67.4948 66.8359 67.776 66.8047 68.0781V69.4922C66.8516 69.8828 66.9505 70.2422 67.1016 70.5703C67.2578 70.8932 67.4766 71.1536 67.7578 71.3516C68.0391 71.5443 68.401 71.6406 68.8438 71.6406C69.1927 71.6406 69.487 71.5703 69.7266 71.4297C69.9661 71.2891 70.1562 71.0938 70.2969 70.8438C70.4427 70.5885 70.5469 70.2917 70.6094 69.9531C70.6771 69.6146 70.7109 69.25 70.7109 68.8594ZM77.9141 73.1562C77.2891 73.1562 76.724 73.0547 76.2188 72.8516C75.7188 72.6432 75.2917 72.3542 74.9375 71.9844C74.5885 71.6146 74.3203 71.1797 74.1328 70.6797C73.9453 70.1797 73.8516 69.6406 73.8516 69.0625V68.75C73.8516 68.0885 73.9479 67.4896 74.1406 66.9531C74.3333 66.4167 74.6016 65.9583 74.9453 65.5781C75.2891 65.1927 75.6953 64.8984 76.1641 64.6953C76.6328 64.4922 77.1406 64.3906 77.6875 64.3906C78.2917 64.3906 78.8203 64.4922 79.2734 64.6953C79.7266 64.8984 80.1016 65.1849 80.3984 65.5547C80.7005 65.9193 80.9245 66.3542 81.0703 66.8594C81.2214 67.3646 81.2969 67.9219 81.2969 68.5312V69.3359H74.7656V67.9844H79.4375V67.8359C79.4271 67.4974 79.3594 67.1797 79.2344 66.8828C79.1146 66.5859 78.9297 66.3464 78.6797 66.1641C78.4297 65.9818 78.0964 65.8906 77.6797 65.8906C77.3672 65.8906 77.0885 65.9583 76.8438 66.0938C76.6042 66.224 76.4036 66.4141 76.2422 66.6641C76.0807 66.9141 75.9557 67.2161 75.8672 67.5703C75.7839 67.9193 75.7422 68.3125 75.7422 68.75V69.0625C75.7422 69.4323 75.7917 69.776 75.8906 70.0938C75.9948 70.4062 76.1458 70.6797 76.3438 70.9141C76.5417 71.1484 76.7812 71.3333 77.0625 71.4688C77.3438 71.599 77.6641 71.6641 78.0234 71.6641C78.4766 71.6641 78.8802 71.5729 79.2344 71.3906C79.5885 71.2083 79.8958 70.9505 80.1562 70.6172L81.1484 71.5781C80.9661 71.8438 80.7292 72.099 80.4375 72.3438C80.1458 72.5833 79.7891 72.7786 79.3672 72.9297C78.9505 73.0807 78.4661 73.1562 77.9141 73.1562ZM86.6406 64.5469V65.9219H81.875V64.5469H86.6406ZM83.25 62.4766H85.1328V70.6641C85.1328 70.9245 85.1693 71.125 85.2422 71.2656C85.3203 71.401 85.4271 71.4922 85.5625 71.5391C85.6979 71.5859 85.8568 71.6094 86.0391 71.6094C86.1693 71.6094 86.2943 71.6016 86.4141 71.5859C86.5339 71.5703 86.6302 71.5547 86.7031 71.5391L86.7109 72.9766C86.5547 73.0234 86.3724 73.0651 86.1641 73.1016C85.9609 73.138 85.7266 73.1562 85.4609 73.1562C85.0286 73.1562 84.6458 73.0807 84.3125 72.9297C83.9792 72.7734 83.7188 72.5208 83.5312 72.1719C83.3438 71.8229 83.25 71.3594 83.25 70.7812V62.4766ZM91.8203 73.1562C91.1953 73.1562 90.6302 73.0547 90.125 72.8516C89.625 72.6432 89.1979 72.3542 88.8438 71.9844C88.4948 71.6146 88.2266 71.1797 88.0391 70.6797C87.8516 70.1797 87.7578 69.6406 87.7578 69.0625V68.75C87.7578 68.0885 87.8542 67.4896 88.0469 66.9531C88.2396 66.4167 88.5078 65.9583 88.8516 65.5781C89.1953 65.1927 89.6016 64.8984 90.0703 64.6953C90.5391 64.4922 91.0469 64.3906 91.5938 64.3906C92.1979 64.3906 92.7266 64.4922 93.1797 64.6953C93.6328 64.8984 94.0078 65.1849 94.3047 65.5547C94.6068 65.9193 94.8307 66.3542 94.9766 66.8594C95.1276 67.3646 95.2031 67.9219 95.2031 68.5312V69.3359H88.6719V67.9844H93.3438V67.8359C93.3333 67.4974 93.2656 67.1797 93.1406 66.8828C93.0208 66.5859 92.8359 66.3464 92.5859 66.1641C92.3359 65.9818 92.0026 65.8906 91.5859 65.8906C91.2734 65.8906 90.9948 65.9583 90.75 66.0938C90.5104 66.224 90.3099 66.4141 90.1484 66.6641C89.987 66.9141 89.862 67.2161 89.7734 67.5703C89.6901 67.9193 89.6484 68.3125 89.6484 68.75V69.0625C89.6484 69.4323 89.6979 69.776 89.7969 70.0938C89.901 70.4062 90.0521 70.6797 90.25 70.9141C90.4479 71.1484 90.6875 71.3333 90.9688 71.4688C91.25 71.599 91.5703 71.6641 91.9297 71.6641C92.3828 71.6641 92.7865 71.5729 93.1406 71.3906C93.4948 71.2083 93.8021 70.9505 94.0625 70.6172L95.0547 71.5781C94.8724 71.8438 94.6354 72.099 94.3438 72.3438C94.0521 72.5833 93.6953 72.7786 93.2734 72.9297C92.8568 73.0807 92.3724 73.1562 91.8203 73.1562ZM101.414 70.7109C101.414 70.5234 101.367 70.3542 101.273 70.2031C101.18 70.0469 101 69.9062 100.734 69.7812C100.474 69.6562 100.089 69.5417 99.5781 69.4375C99.1302 69.3385 98.7188 69.2214 98.3438 69.0859C97.974 68.9453 97.6562 68.776 97.3906 68.5781C97.125 68.3802 96.9193 68.1458 96.7734 67.875C96.6276 67.6042 96.5547 67.2917 96.5547 66.9375C96.5547 66.5938 96.6302 66.2682 96.7812 65.9609C96.9323 65.6536 97.1484 65.3828 97.4297 65.1484C97.7109 64.9141 98.0521 64.7292 98.4531 64.5938C98.8594 64.4583 99.3125 64.3906 99.8125 64.3906C100.521 64.3906 101.128 64.5104 101.633 64.75C102.143 64.9844 102.534 65.3047 102.805 65.7109C103.076 66.112 103.211 66.5651 103.211 67.0703H101.328C101.328 66.8464 101.271 66.638 101.156 66.4453C101.047 66.2474 100.88 66.0885 100.656 65.9688C100.432 65.8438 100.151 65.7812 99.8125 65.7812C99.4896 65.7812 99.2214 65.8333 99.0078 65.9375C98.7995 66.0365 98.6432 66.1667 98.5391 66.3281C98.4401 66.4896 98.3906 66.6667 98.3906 66.8594C98.3906 67 98.4167 67.1276 98.4688 67.2422C98.526 67.3516 98.6198 67.4531 98.75 67.5469C98.8802 67.6354 99.0573 67.7188 99.2812 67.7969C99.5104 67.875 99.7969 67.9505 100.141 68.0234C100.786 68.1589 101.341 68.3333 101.805 68.5469C102.273 68.7552 102.633 69.026 102.883 69.3594C103.133 69.6875 103.258 70.1042 103.258 70.6094C103.258 70.9844 103.177 71.3281 103.016 71.6406C102.859 71.9479 102.63 72.2161 102.328 72.4453C102.026 72.6693 101.664 72.8438 101.242 72.9688C100.826 73.0938 100.357 73.1562 99.8359 73.1562C99.0703 73.1562 98.4219 73.0208 97.8906 72.75C97.3594 72.474 96.9557 72.1224 96.6797 71.6953C96.4089 71.263 96.2734 70.8151 96.2734 70.3516H98.0938C98.1146 70.7005 98.2109 70.9792 98.3828 71.1875C98.5599 71.3906 98.7786 71.5391 99.0391 71.6328C99.3047 71.7214 99.5781 71.7656 99.8594 71.7656C100.198 71.7656 100.482 71.7214 100.711 71.6328C100.94 71.5391 101.115 71.4141 101.234 71.2578C101.354 71.0964 101.414 70.9141 101.414 70.7109Z"
                                                    fill="#98A2B3"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {hypertension ? (
                                        <div
                                            className="p-5 flex flex-col bg-white text-teal-500 justify-center items-center gap-2 border border-teal-500 cursor-pointer rounded-lg"
                                            onClick={() =>
                                                setHypertension(false)
                                            }
                                        >
                                            <svg
                                                width="115"
                                                height="79"
                                                viewBox="0 0 128 79"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clip-path="url(#clip0_137_21857)">
                                                    <path
                                                        d="M88.2109 13.0952V47.9998H40.2109V34.5096C40.9609 34.5096 41.7122 34.5423 42.4597 34.5008C42.8822 34.4769 43.0722 34.6643 43.3109 34.9787C44.3984 36.4136 45.4384 37.8988 46.6597 39.2118C49.9097 42.7003 53.8372 45.2885 58.0034 47.5282C58.1559 47.61 58.4334 47.5999 58.5884 47.5144C59.5884 46.9674 60.5872 46.4128 61.5584 45.8141C65.8834 43.148 69.7884 40.004 72.7509 35.7923C72.8447 35.6603 73.0797 35.5647 73.2509 35.5609C74.2647 35.5396 75.2797 35.5509 76.3222 35.5509V31.2952H75.1484C76.0522 28.9359 76.4234 26.5565 76.1759 24.0728C76.3722 24.0615 76.4934 24.0502 76.6159 24.0464C81.6059 23.8992 85.9847 20.6509 87.5622 15.8783C87.8597 14.9778 87.9984 14.0246 88.2109 13.0952Z"
                                                        fill="#F9FAFB"
                                                    />
                                                    <path
                                                        d="M88.2109 13.0955C87.9984 14.0249 87.8597 14.9781 87.5622 15.8786C85.9847 20.6524 81.6059 23.8995 76.6159 24.0467C76.4934 24.0504 76.3722 24.0605 76.1759 24.0731C76.4234 26.5568 76.0522 28.9362 75.1484 31.2955H76.3222V35.5512C75.2784 35.5512 74.2647 35.5398 73.2509 35.5612C73.0797 35.565 72.8447 35.6593 72.7509 35.7926C69.7897 40.0043 65.8834 43.1483 61.5584 45.8144C60.5872 46.413 59.5897 46.9676 58.5884 47.5147C58.4334 47.6002 58.1559 47.6103 58.0034 47.5285C53.8372 45.2887 49.9084 42.7006 46.6597 39.212C45.4372 37.9004 44.3972 36.4139 43.3109 34.979C43.0722 34.6633 42.8809 34.4772 42.4597 34.5011C41.7122 34.5426 40.9609 34.5111 40.2109 34.5099V30.2642H40.9434C40.7409 29.0796 40.4709 27.9289 40.3622 26.7643C40.1209 24.1938 40.5922 21.7528 41.9522 19.5331C44.4984 15.373 49.3747 14.1041 53.7709 16.4432C55.4097 17.3147 56.7734 18.5258 57.9859 19.9205C58.0759 20.0249 58.1684 20.1267 58.2847 20.2575C60.0609 18.1435 62.1047 16.4382 64.8172 15.6145C63.6697 11.3575 64.4609 7.52182 67.2822 4.06846C67.6597 4.40298 67.9947 4.70103 68.3297 4.99782C64.2484 9.81191 65.1647 16.5778 69.5622 20.2299C73.7647 23.7197 80.0272 23.3789 83.8172 19.4288C87.6597 15.4233 87.8084 9.17556 84.1822 5.03429C80.4884 0.816311 73.9659 0.0554642 69.2809 4.05714C68.9847 3.72639 68.6859 3.39313 68.3597 3.02843C69.1484 2.29147 70.0222 1.72807 70.9572 1.25521C78.2772 -2.44338 87.2209 2.43107 88.1234 10.6105C88.1384 10.7488 88.1809 10.8834 88.2109 11.0192V13.0942V13.0955ZM63.1334 25.6212C63.2547 25.7733 63.3547 25.8903 63.4459 26.0123C64.6797 27.6736 65.9072 29.3399 67.1559 30.9899C67.2747 31.1471 67.5234 31.2904 67.7134 31.2917C69.5722 31.3143 71.4309 31.2992 73.2897 31.3118C73.5509 31.3131 73.6722 31.2288 73.7672 30.9873C74.5822 28.911 74.9784 26.7731 74.8072 24.5346C74.7747 24.1045 74.6259 23.9385 74.1884 23.8568C70.3334 23.1374 67.5047 20.9894 65.6334 17.5398C65.5309 17.3512 65.4434 17.155 65.3384 16.94C62.2059 17.8593 60.1234 20.045 58.2834 22.5866C58.1334 22.3904 58.0297 22.2345 57.9072 22.0961C57.0884 21.1705 56.3247 20.1846 55.4297 19.3395C53.8309 17.8316 51.9509 16.8369 49.7172 16.6985C46.6447 16.5086 43.8684 18.3409 42.5559 21.4132C41.3747 24.1787 41.5234 26.9819 42.3659 29.8014C42.4747 30.1636 42.6309 30.2793 43.0134 30.2781C47.9959 30.263 52.9797 30.2718 57.9622 30.2605C58.3222 30.2605 58.5684 30.346 58.7859 30.649C59.1359 31.1395 59.5334 31.5948 59.9409 32.1016C61.0209 29.9096 62.0647 27.788 63.1322 25.6212H63.1334ZM60.2247 34.7136C59.4722 33.7754 58.7572 32.9039 58.0697 32.0098C57.8747 31.7557 57.6697 31.6765 57.3634 31.6765C52.2859 31.6853 47.2084 31.6828 42.1309 31.6828C41.9672 31.6828 41.8022 31.6828 41.6422 31.6828V33.1127H47.9609V34.5275H44.6209C45.2922 35.3914 45.8584 36.1825 46.4859 36.9182C49.7284 40.7149 53.7159 43.5507 58.0472 45.9339C58.1922 46.0131 58.4747 45.9754 58.6284 45.8836C60.1009 44.997 61.5934 44.1368 63.0172 43.1747C65.9772 41.1751 68.6459 38.8398 70.8447 35.9938C70.9409 35.8681 71.0259 35.7348 71.1547 35.5499C69.2447 35.5499 67.4334 35.5587 65.6222 35.5373C65.4297 35.5348 65.1847 35.4015 65.0572 35.2493C64.6522 34.7639 64.2909 34.2407 63.8759 33.6836C62.8322 35.8014 61.8247 37.8425 60.7934 39.9352C59.7159 38.5895 58.6897 37.3043 57.6597 36.0228C57.2572 35.5235 56.9347 34.8494 56.4109 34.5904C55.9059 34.3401 55.1884 34.5174 54.5647 34.5136C53.7897 34.5099 53.0147 34.5136 52.2447 34.5136V33.0989C53.7659 33.0989 55.2484 33.1089 56.7322 33.09C57.0347 33.0863 57.2184 33.1894 57.3934 33.4233C57.7397 33.8886 58.1134 34.3326 58.4759 34.7853C59.1409 35.6153 59.8059 36.4441 60.5097 37.3244C61.5597 35.1965 62.5797 33.1278 63.6322 30.9936C64.3509 31.9607 65.0322 32.8561 65.6872 33.7717C65.8809 34.042 66.0822 34.1477 66.4172 34.1452C69.0884 34.1301 71.7597 34.1364 74.4322 34.1364H74.9097V32.7216C74.7047 32.7216 74.5359 32.7216 74.3672 32.7216C71.9459 32.7216 69.5234 32.7153 67.1022 32.7291C66.7884 32.7304 66.5947 32.6348 66.4084 32.3782C65.5159 31.1471 64.6022 29.931 63.6934 28.7111C63.6047 28.5929 63.5072 28.4809 63.3759 28.3212C62.3172 30.4705 61.2859 32.5631 60.2247 34.7161V34.7136Z"
                                                        fill="#009688"
                                                    />
                                                    <path
                                                        d="M85.3574 12.7106H81.1774C81.2799 10.9298 80.7712 9.40312 79.4074 8.23858C78.4899 7.4551 77.4112 7.06776 76.2162 7.08536C74.7537 7.10674 73.5224 7.68398 72.5474 8.79192C71.7799 9.6647 71.6074 10.1954 71.2937 12.7056H67.1274C67.0037 9.48738 68.1187 6.82127 70.6349 4.79905C73.5049 2.49136 77.5037 2.19582 80.7112 4.00425C83.8112 5.75231 85.7462 9.35659 85.3599 12.7106H85.3574ZM68.5662 11.321C68.9499 11.321 69.2762 11.3008 69.5987 11.3272C69.9037 11.3511 69.9749 11.2191 70.0374 10.9374C70.1562 10.4067 70.3099 9.87597 70.5224 9.37671C70.7212 8.91014 71.0162 8.48507 71.2712 8.03737C70.9599 7.72045 70.6549 7.41108 70.3187 7.06776C69.3062 8.30146 68.7262 9.6823 68.5662 11.321ZM81.2099 8.06378C81.8949 8.99314 82.3512 9.97407 82.5137 11.0845C82.5262 11.1713 82.6562 11.3033 82.7387 11.3084C83.1324 11.3323 83.5287 11.3184 83.9487 11.3184C83.7812 9.67602 83.2074 8.29392 82.2037 7.08536C81.8599 7.42492 81.5499 7.73051 81.2099 8.06378ZM75.5287 4.29978C73.9337 4.44818 72.5599 5.04051 71.3749 6.00886C71.7049 6.36224 72.0174 6.69802 72.2962 6.99607C72.8337 6.7018 73.3212 6.38111 73.8499 6.15977C74.3762 5.93969 74.9449 5.82022 75.5287 5.64667V4.29853V4.29978ZM81.1687 6.0315C79.9324 5.03548 78.5687 4.4356 76.9912 4.30481V5.71081C78.1949 5.86298 79.2449 6.3132 80.1737 7.03254C80.5024 6.7018 80.8199 6.38111 81.1687 6.03024V6.0315Z"
                                                        fill="#009688"
                                                    />
                                                    <path
                                                        d="M79.5218 13.4438C79.848 13.757 80.1605 14.0588 80.5518 14.4348C79.8443 15.119 79.163 15.788 78.4693 16.442C78.2568 16.6419 78.1768 16.8142 78.2705 17.1261C78.553 18.0643 78.1518 19.0276 77.3268 19.5193C76.5055 20.0085 75.4618 19.879 74.778 19.2024C74.1055 18.5384 73.9555 17.5185 74.4068 16.6859C74.8668 15.8371 75.8093 15.3931 76.748 15.6522C77.0943 15.7478 77.2805 15.6623 77.5105 15.4258C78.1643 14.7543 78.8455 14.1091 79.5218 13.4464V13.4438ZM76.9568 17.7096C76.9655 17.3223 76.633 16.9815 76.2518 16.9852C75.888 16.989 75.5693 17.3059 75.558 17.6757C75.548 18.0492 75.843 18.3686 76.2168 18.3875C76.6155 18.4076 76.9468 18.1045 76.9568 17.7096Z"
                                                        fill="#009688"
                                                    />
                                                    <path
                                                        d="M68.5674 11.3211C68.7274 9.68242 69.3074 8.30157 70.3199 7.06787C70.6574 7.4112 70.9611 7.72182 71.2724 8.03748C71.0174 8.48393 70.7236 8.90899 70.5236 9.37682C70.3111 9.87609 70.1561 10.4068 70.0386 10.9375C69.9761 11.2192 69.9049 11.3512 69.5999 11.3274C69.2774 11.3022 68.9511 11.3211 68.5674 11.3211Z"
                                                        fill="#F9FAFB"
                                                    />
                                                    <path
                                                        d="M81.2109 8.0624C81.5497 7.72787 81.8597 7.42228 82.2047 7.08398C83.2084 8.29379 83.7822 9.67464 83.9497 11.3171C83.5309 11.3171 83.1347 11.3296 82.7397 11.307C82.6584 11.302 82.5272 11.1712 82.5147 11.0831C82.3522 9.97394 81.8959 8.99302 81.2109 8.0624Z"
                                                        fill="#F9FAFB"
                                                    />
                                                    <path
                                                        d="M75.5297 4.2998V5.64795C74.946 5.8215 74.3785 5.94097 73.851 6.16105C73.3222 6.38239 72.8347 6.70307 72.2972 6.99735C72.0185 6.6993 71.706 6.36352 71.376 6.01014C72.5622 5.04179 73.936 4.44946 75.5297 4.30106V4.2998Z"
                                                        fill="#F9FAFB"
                                                    />
                                                    <path
                                                        d="M81.1697 6.03158C80.8209 6.38245 80.5034 6.70188 80.1747 7.03388C79.2459 6.31454 78.1959 5.86432 76.9922 5.71215V4.30615C78.5684 4.43694 79.9334 5.03682 81.1697 6.03283V6.03158Z"
                                                        fill="#F9FAFB"
                                                    />
                                                    <path
                                                        d="M76.9577 17.7093C76.9489 18.1042 76.6164 18.4072 76.2177 18.3871C75.8439 18.3683 75.5477 18.0488 75.5589 17.6753C75.5689 17.3056 75.8877 16.9887 76.2527 16.9849C76.6339 16.9811 76.9677 17.3232 76.9577 17.7093Z"
                                                        fill="#F9FAFB"
                                                    />
                                                    <path
                                                        d="M72.0049 27.0194V25.6763H73.3649V27.0194H72.0049Z"
                                                        fill="#009688"
                                                    />
                                                    <path
                                                        d="M70.6143 28.4946H71.9568V29.8491H70.6143V28.4946Z"
                                                        fill="#009688"
                                                    />
                                                    <path
                                                        d="M49.4033 34.4731V33.1338H50.7671V34.4731H49.4033Z"
                                                        fill="#009688"
                                                    />
                                                </g>
                                                <path
                                                    d="M24.9141 66.375V67.9297H18.875V66.375H24.9141ZM19.3594 61.625V73H17.3984V61.625H19.3594ZM26.4219 61.625V73H24.4688V61.625H26.4219ZM31.0234 72.0781L33.3203 64.5469H35.3359L31.9453 74.2891C31.8672 74.4974 31.7656 74.724 31.6406 74.9688C31.5156 75.2135 31.3516 75.4453 31.1484 75.6641C30.9505 75.888 30.7031 76.0677 30.4062 76.2031C30.1094 76.3438 29.75 76.4141 29.3281 76.4141C29.1615 76.4141 29 76.3984 28.8438 76.3672C28.6927 76.3411 28.5495 76.3125 28.4141 76.2812L28.4062 74.8438C28.4583 74.849 28.5208 74.8542 28.5938 74.8594C28.6719 74.8646 28.7344 74.8672 28.7812 74.8672C29.0938 74.8672 29.3542 74.8281 29.5625 74.75C29.7708 74.6771 29.9401 74.5573 30.0703 74.3906C30.2057 74.224 30.3203 74 30.4141 73.7188L31.0234 72.0781ZM29.7266 64.5469L31.7344 70.875L32.0703 72.8594L30.7656 73.1953L27.6953 64.5469H29.7266ZM38.3047 66.1719V76.25H36.4219V64.5469H38.1562L38.3047 66.1719ZM43.8125 68.6953V68.8594C43.8125 69.474 43.7396 70.0443 43.5938 70.5703C43.4531 71.0911 43.2422 71.5469 42.9609 71.9375C42.6849 72.3229 42.3438 72.6224 41.9375 72.8359C41.5312 73.0495 41.0625 73.1562 40.5312 73.1562C40.0052 73.1562 39.5443 73.0599 39.1484 72.8672C38.7578 72.6693 38.4271 72.3906 38.1562 72.0312C37.8854 71.6719 37.6667 71.25 37.5 70.7656C37.3385 70.276 37.224 69.7396 37.1562 69.1562V68.5234C37.224 67.9036 37.3385 67.3411 37.5 66.8359C37.6667 66.3307 37.8854 65.8958 38.1562 65.5312C38.4271 65.1667 38.7578 64.8854 39.1484 64.6875C39.5391 64.4896 39.9948 64.3906 40.5156 64.3906C41.0469 64.3906 41.5182 64.4948 41.9297 64.7031C42.3411 64.9062 42.6875 65.1979 42.9688 65.5781C43.25 65.9531 43.4609 66.4062 43.6016 66.9375C43.7422 67.4635 43.8125 68.0495 43.8125 68.6953ZM41.9297 68.8594V68.6953C41.9297 68.3047 41.8932 67.9427 41.8203 67.6094C41.7474 67.2708 41.6328 66.974 41.4766 66.7188C41.3203 66.4635 41.1198 66.2656 40.875 66.125C40.6354 65.9792 40.3464 65.9062 40.0078 65.9062C39.6745 65.9062 39.388 65.9635 39.1484 66.0781C38.9089 66.1875 38.7083 66.3411 38.5469 66.5391C38.3854 66.737 38.2604 66.9688 38.1719 67.2344C38.0833 67.4948 38.0208 67.7786 37.9844 68.0859V69.6016C38.0469 69.9766 38.1536 70.3203 38.3047 70.6328C38.4557 70.9453 38.6693 71.1953 38.9453 71.3828C39.2266 71.5651 39.5859 71.6562 40.0234 71.6562C40.362 71.6562 40.651 71.5833 40.8906 71.4375C41.1302 71.2917 41.3255 71.0911 41.4766 70.8359C41.6328 70.5755 41.7474 70.276 41.8203 69.9375C41.8932 69.599 41.9297 69.2396 41.9297 68.8594ZM49.1406 73.1562C48.5156 73.1562 47.9505 73.0547 47.4453 72.8516C46.9453 72.6432 46.5182 72.3542 46.1641 71.9844C45.8151 71.6146 45.5469 71.1797 45.3594 70.6797C45.1719 70.1797 45.0781 69.6406 45.0781 69.0625V68.75C45.0781 68.0885 45.1745 67.4896 45.3672 66.9531C45.5599 66.4167 45.8281 65.9583 46.1719 65.5781C46.5156 65.1927 46.9219 64.8984 47.3906 64.6953C47.8594 64.4922 48.3672 64.3906 48.9141 64.3906C49.5182 64.3906 50.0469 64.4922 50.5 64.6953C50.9531 64.8984 51.3281 65.1849 51.625 65.5547C51.9271 65.9193 52.151 66.3542 52.2969 66.8594C52.4479 67.3646 52.5234 67.9219 52.5234 68.5312V69.3359H45.9922V67.9844H50.6641V67.8359C50.6536 67.4974 50.5859 67.1797 50.4609 66.8828C50.3411 66.5859 50.1562 66.3464 49.9062 66.1641C49.6562 65.9818 49.3229 65.8906 48.9062 65.8906C48.5938 65.8906 48.3151 65.9583 48.0703 66.0938C47.8307 66.224 47.6302 66.4141 47.4688 66.6641C47.3073 66.9141 47.1823 67.2161 47.0938 67.5703C47.0104 67.9193 46.9688 68.3125 46.9688 68.75V69.0625C46.9688 69.4323 47.0182 69.776 47.1172 70.0938C47.2214 70.4062 47.3724 70.6797 47.5703 70.9141C47.7682 71.1484 48.0078 71.3333 48.2891 71.4688C48.5703 71.599 48.8906 71.6641 49.25 71.6641C49.7031 71.6641 50.1068 71.5729 50.4609 71.3906C50.8151 71.2083 51.1224 70.9505 51.3828 70.6172L52.375 71.5781C52.1927 71.8438 51.9557 72.099 51.6641 72.3438C51.3724 72.5833 51.0156 72.7786 50.5938 72.9297C50.1771 73.0807 49.6927 73.1562 49.1406 73.1562ZM55.8828 66.1562V73H54V64.5469H55.7969L55.8828 66.1562ZM58.4688 64.4922L58.4531 66.2422C58.3385 66.2214 58.2135 66.2057 58.0781 66.1953C57.9479 66.1849 57.8177 66.1797 57.6875 66.1797C57.3646 66.1797 57.0807 66.2266 56.8359 66.3203C56.5911 66.4089 56.3854 66.5391 56.2188 66.7109C56.0573 66.8776 55.9323 67.0807 55.8438 67.3203C55.7552 67.5599 55.7031 67.8281 55.6875 68.125L55.2578 68.1562C55.2578 67.625 55.3099 67.1328 55.4141 66.6797C55.5182 66.2266 55.6745 65.8281 55.8828 65.4844C56.0964 65.1406 56.362 64.8724 56.6797 64.6797C57.0026 64.487 57.375 64.3906 57.7969 64.3906C57.9115 64.3906 58.0339 64.401 58.1641 64.4219C58.2995 64.4427 58.401 64.4661 58.4688 64.4922ZM63.9141 64.5469V65.9219H59.1484V64.5469H63.9141ZM60.5234 62.4766H62.4062V70.6641C62.4062 70.9245 62.4427 71.125 62.5156 71.2656C62.5938 71.401 62.7005 71.4922 62.8359 71.5391C62.9714 71.5859 63.1302 71.6094 63.3125 71.6094C63.4427 71.6094 63.5677 71.6016 63.6875 71.5859C63.8073 71.5703 63.9036 71.5547 63.9766 71.5391L63.9844 72.9766C63.8281 73.0234 63.6458 73.0651 63.4375 73.1016C63.2344 73.138 63 73.1562 62.7344 73.1562C62.3021 73.1562 61.9193 73.0807 61.5859 72.9297C61.2526 72.7734 60.9922 72.5208 60.8047 72.1719C60.6172 71.8229 60.5234 71.3594 60.5234 70.7812V62.4766ZM69.0938 73.1562C68.4688 73.1562 67.9036 73.0547 67.3984 72.8516C66.8984 72.6432 66.4714 72.3542 66.1172 71.9844C65.7682 71.6146 65.5 71.1797 65.3125 70.6797C65.125 70.1797 65.0312 69.6406 65.0312 69.0625V68.75C65.0312 68.0885 65.1276 67.4896 65.3203 66.9531C65.513 66.4167 65.7812 65.9583 66.125 65.5781C66.4688 65.1927 66.875 64.8984 67.3438 64.6953C67.8125 64.4922 68.3203 64.3906 68.8672 64.3906C69.4714 64.3906 70 64.4922 70.4531 64.6953C70.9062 64.8984 71.2812 65.1849 71.5781 65.5547C71.8802 65.9193 72.1042 66.3542 72.25 66.8594C72.401 67.3646 72.4766 67.9219 72.4766 68.5312V69.3359H65.9453V67.9844H70.6172V67.8359C70.6068 67.4974 70.5391 67.1797 70.4141 66.8828C70.2943 66.5859 70.1094 66.3464 69.8594 66.1641C69.6094 65.9818 69.276 65.8906 68.8594 65.8906C68.5469 65.8906 68.2682 65.9583 68.0234 66.0938C67.7839 66.224 67.5833 66.4141 67.4219 66.6641C67.2604 66.9141 67.1354 67.2161 67.0469 67.5703C66.9635 67.9193 66.9219 68.3125 66.9219 68.75V69.0625C66.9219 69.4323 66.9714 69.776 67.0703 70.0938C67.1745 70.4062 67.3255 70.6797 67.5234 70.9141C67.7214 71.1484 67.9609 71.3333 68.2422 71.4688C68.5234 71.599 68.8438 71.6641 69.2031 71.6641C69.6562 71.6641 70.0599 71.5729 70.4141 71.3906C70.7682 71.2083 71.0755 70.9505 71.3359 70.6172L72.3281 71.5781C72.1458 71.8438 71.9089 72.099 71.6172 72.3438C71.3255 72.5833 70.9688 72.7786 70.5469 72.9297C70.1302 73.0807 69.6458 73.1562 69.0938 73.1562ZM75.8125 66.3516V73H73.9297V64.5469H75.7031L75.8125 66.3516ZM75.4766 68.4609L74.8672 68.4531C74.8724 67.8542 74.9557 67.3047 75.1172 66.8047C75.2839 66.3047 75.513 65.875 75.8047 65.5156C76.1016 65.1562 76.4557 64.8802 76.8672 64.6875C77.2786 64.4896 77.737 64.3906 78.2422 64.3906C78.6484 64.3906 79.0156 64.4479 79.3438 64.5625C79.6771 64.6719 79.9609 64.8516 80.1953 65.1016C80.4349 65.3516 80.6172 65.6771 80.7422 66.0781C80.8672 66.474 80.9297 66.9609 80.9297 67.5391V73H79.0391V67.5312C79.0391 67.125 78.9792 66.8047 78.8594 66.5703C78.7448 66.3307 78.5755 66.1615 78.3516 66.0625C78.1328 65.9583 77.8594 65.9062 77.5312 65.9062C77.2083 65.9062 76.9193 65.974 76.6641 66.1094C76.4089 66.2448 76.1927 66.4297 76.0156 66.6641C75.8438 66.8984 75.7109 67.1693 75.6172 67.4766C75.5234 67.7839 75.4766 68.112 75.4766 68.4609ZM87.5938 70.7109C87.5938 70.5234 87.5469 70.3542 87.4531 70.2031C87.3594 70.0469 87.1797 69.9062 86.9141 69.7812C86.6536 69.6562 86.2682 69.5417 85.7578 69.4375C85.3099 69.3385 84.8984 69.2214 84.5234 69.0859C84.1536 68.9453 83.8359 68.776 83.5703 68.5781C83.3047 68.3802 83.099 68.1458 82.9531 67.875C82.8073 67.6042 82.7344 67.2917 82.7344 66.9375C82.7344 66.5938 82.8099 66.2682 82.9609 65.9609C83.112 65.6536 83.3281 65.3828 83.6094 65.1484C83.8906 64.9141 84.2318 64.7292 84.6328 64.5938C85.0391 64.4583 85.4922 64.3906 85.9922 64.3906C86.7005 64.3906 87.3073 64.5104 87.8125 64.75C88.3229 64.9844 88.7135 65.3047 88.9844 65.7109C89.2552 66.112 89.3906 66.5651 89.3906 67.0703H87.5078C87.5078 66.8464 87.4505 66.638 87.3359 66.4453C87.2266 66.2474 87.0599 66.0885 86.8359 65.9688C86.612 65.8438 86.3307 65.7812 85.9922 65.7812C85.6693 65.7812 85.401 65.8333 85.1875 65.9375C84.9792 66.0365 84.8229 66.1667 84.7188 66.3281C84.6198 66.4896 84.5703 66.6667 84.5703 66.8594C84.5703 67 84.5964 67.1276 84.6484 67.2422C84.7057 67.3516 84.7995 67.4531 84.9297 67.5469C85.0599 67.6354 85.237 67.7188 85.4609 67.7969C85.6901 67.875 85.9766 67.9505 86.3203 68.0234C86.9661 68.1589 87.5208 68.3333 87.9844 68.5469C88.4531 68.7552 88.8125 69.026 89.0625 69.3594C89.3125 69.6875 89.4375 70.1042 89.4375 70.6094C89.4375 70.9844 89.3568 71.3281 89.1953 71.6406C89.0391 71.9479 88.8099 72.2161 88.5078 72.4453C88.2057 72.6693 87.8438 72.8438 87.4219 72.9688C87.0052 73.0938 86.5365 73.1562 86.0156 73.1562C85.25 73.1562 84.6016 73.0208 84.0703 72.75C83.5391 72.474 83.1354 72.1224 82.8594 71.6953C82.5885 71.263 82.4531 70.8151 82.4531 70.3516H84.2734C84.2943 70.7005 84.3906 70.9792 84.5625 71.1875C84.7396 71.3906 84.9583 71.5391 85.2188 71.6328C85.4844 71.7214 85.7578 71.7656 86.0391 71.7656C86.3776 71.7656 86.6615 71.7214 86.8906 71.6328C87.1198 71.5391 87.2943 71.4141 87.4141 71.2578C87.5339 71.0964 87.5938 70.9141 87.5938 70.7109ZM93.1016 64.5469V73H91.2109V64.5469H93.1016ZM91.0859 62.3281C91.0859 62.0417 91.1797 61.8047 91.3672 61.6172C91.5599 61.4245 91.8255 61.3281 92.1641 61.3281C92.4974 61.3281 92.7604 61.4245 92.9531 61.6172C93.1458 61.8047 93.2422 62.0417 93.2422 62.3281C93.2422 62.6094 93.1458 62.8438 92.9531 63.0312C92.7604 63.2188 92.4974 63.3125 92.1641 63.3125C91.8255 63.3125 91.5599 63.2188 91.3672 63.0312C91.1797 62.8438 91.0859 62.6094 91.0859 62.3281ZM94.8047 68.8672V68.6875C94.8047 68.0781 94.8932 67.513 95.0703 66.9922C95.2474 66.4661 95.5026 66.0104 95.8359 65.625C96.1745 65.2344 96.5859 64.9323 97.0703 64.7188C97.5599 64.5 98.112 64.3906 98.7266 64.3906C99.3464 64.3906 99.8984 64.5 100.383 64.7188C100.872 64.9323 101.286 65.2344 101.625 65.625C101.964 66.0104 102.221 66.4661 102.398 66.9922C102.576 67.513 102.664 68.0781 102.664 68.6875V68.8672C102.664 69.4766 102.576 70.0417 102.398 70.5625C102.221 71.0833 101.964 71.5391 101.625 71.9297C101.286 72.3151 100.875 72.6172 100.391 72.8359C99.9062 73.0495 99.3568 73.1562 98.7422 73.1562C98.1224 73.1562 97.5677 73.0495 97.0781 72.8359C96.5938 72.6172 96.1823 72.3151 95.8438 71.9297C95.5052 71.5391 95.2474 71.0833 95.0703 70.5625C94.8932 70.0417 94.8047 69.4766 94.8047 68.8672ZM96.6875 68.6875V68.8672C96.6875 69.2474 96.7266 69.6068 96.8047 69.9453C96.8828 70.2839 97.0052 70.5807 97.1719 70.8359C97.3385 71.0911 97.5521 71.2917 97.8125 71.4375C98.0729 71.5833 98.3828 71.6562 98.7422 71.6562C99.0911 71.6562 99.3932 71.5833 99.6484 71.4375C99.9089 71.2917 100.122 71.0911 100.289 70.8359C100.456 70.5807 100.578 70.2839 100.656 69.9453C100.74 69.6068 100.781 69.2474 100.781 68.8672V68.6875C100.781 68.3125 100.74 67.9583 100.656 67.625C100.578 67.2865 100.453 66.987 100.281 66.7266C100.115 66.4661 99.901 66.263 99.6406 66.1172C99.3854 65.9661 99.0807 65.8906 98.7266 65.8906C98.3724 65.8906 98.0651 65.9661 97.8047 66.1172C97.5495 66.263 97.3385 66.4661 97.1719 66.7266C97.0052 66.987 96.8828 67.2865 96.8047 67.625C96.7266 67.9583 96.6875 68.3125 96.6875 68.6875ZM106.109 66.3516V73H104.227V64.5469H106L106.109 66.3516ZM105.773 68.4609L105.164 68.4531C105.169 67.8542 105.253 67.3047 105.414 66.8047C105.581 66.3047 105.81 65.875 106.102 65.5156C106.398 65.1562 106.753 64.8802 107.164 64.6875C107.576 64.4896 108.034 64.3906 108.539 64.3906C108.945 64.3906 109.312 64.4479 109.641 64.5625C109.974 64.6719 110.258 64.8516 110.492 65.1016C110.732 65.3516 110.914 65.6771 111.039 66.0781C111.164 66.474 111.227 66.9609 111.227 67.5391V73H109.336V67.5312C109.336 67.125 109.276 66.8047 109.156 66.5703C109.042 66.3307 108.872 66.1615 108.648 66.0625C108.43 65.9583 108.156 65.9062 107.828 65.9062C107.505 65.9062 107.216 65.974 106.961 66.1094C106.706 66.2448 106.49 66.4297 106.312 66.6641C106.141 66.8984 106.008 67.1693 105.914 67.4766C105.82 67.7839 105.773 68.112 105.773 68.4609Z"
                                                    fill="#009688"
                                                />
                                                <defs>
                                                    <clipPath id="clip0_137_21857">
                                                        <rect
                                                            width="48"
                                                            height="48"
                                                            fill="white"
                                                            transform="translate(40.2109)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    ) : (
                                        <div
                                            className="p-5 flex flex-col bg-white text-teal-500 justify-center items-center gap-2 border border-gray-500 cursor-pointer rounded-lg"
                                            onClick={() =>
                                                setHypertension(true)
                                            }
                                        >
                                            <svg
                                                width="115"
                                                height="79"
                                                viewBox="0 0 128 79"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clip-path="url(#clip0_137_21857)">
                                                    <path
                                                        d="M88.2109 13.0952V47.9998H40.2109V34.5096C40.9609 34.5096 41.7122 34.5423 42.4597 34.5008C42.8822 34.4769 43.0722 34.6643 43.3109 34.9787C44.3984 36.4136 45.4384 37.8988 46.6597 39.2118C49.9097 42.7003 53.8372 45.2885 58.0034 47.5282C58.1559 47.61 58.4334 47.5999 58.5884 47.5144C59.5884 46.9674 60.5872 46.4128 61.5584 45.8141C65.8834 43.148 69.7884 40.004 72.7509 35.7923C72.8447 35.6603 73.0797 35.5647 73.2509 35.5609C74.2647 35.5396 75.2797 35.5509 76.3222 35.5509V31.2952H75.1484C76.0522 28.9359 76.4234 26.5565 76.1759 24.0728C76.3722 24.0615 76.4934 24.0502 76.6159 24.0464C81.6059 23.8992 85.9847 20.6509 87.5622 15.8783C87.8597 14.9778 87.9984 14.0246 88.2109 13.0952Z"
                                                        fill="#F9FAFB"
                                                    />
                                                    <path
                                                        d="M88.2109 13.0955C87.9984 14.0249 87.8597 14.9781 87.5622 15.8786C85.9847 20.6524 81.6059 23.8995 76.6159 24.0467C76.4934 24.0504 76.3722 24.0605 76.1759 24.0731C76.4234 26.5568 76.0522 28.9362 75.1484 31.2955H76.3222V35.5512C75.2784 35.5512 74.2647 35.5398 73.2509 35.5612C73.0797 35.565 72.8447 35.6593 72.7509 35.7926C69.7897 40.0043 65.8834 43.1483 61.5584 45.8144C60.5872 46.413 59.5897 46.9676 58.5884 47.5147C58.4334 47.6002 58.1559 47.6103 58.0034 47.5285C53.8372 45.2887 49.9084 42.7006 46.6597 39.212C45.4372 37.9004 44.3972 36.4139 43.3109 34.979C43.0722 34.6633 42.8809 34.4772 42.4597 34.5011C41.7122 34.5426 40.9609 34.5111 40.2109 34.5099V30.2642H40.9434C40.7409 29.0796 40.4709 27.9289 40.3622 26.7643C40.1209 24.1938 40.5922 21.7528 41.9522 19.5331C44.4984 15.373 49.3747 14.1041 53.7709 16.4432C55.4097 17.3147 56.7734 18.5258 57.9859 19.9205C58.0759 20.0249 58.1684 20.1267 58.2847 20.2575C60.0609 18.1435 62.1047 16.4382 64.8172 15.6145C63.6697 11.3575 64.4609 7.52182 67.2822 4.06846C67.6597 4.40298 67.9947 4.70103 68.3297 4.99782C64.2484 9.81191 65.1647 16.5778 69.5622 20.2299C73.7647 23.7197 80.0272 23.3789 83.8172 19.4288C87.6597 15.4233 87.8084 9.17556 84.1822 5.03429C80.4884 0.816311 73.9659 0.0554642 69.2809 4.05714C68.9847 3.72639 68.6859 3.39313 68.3597 3.02843C69.1484 2.29147 70.0222 1.72807 70.9572 1.25521C78.2772 -2.44338 87.2209 2.43107 88.1234 10.6105C88.1384 10.7488 88.1809 10.8834 88.2109 11.0192V13.0942V13.0955ZM63.1334 25.6212C63.2547 25.7733 63.3547 25.8903 63.4459 26.0123C64.6797 27.6736 65.9072 29.3399 67.1559 30.9899C67.2747 31.1471 67.5234 31.2904 67.7134 31.2917C69.5722 31.3143 71.4309 31.2992 73.2897 31.3118C73.5509 31.3131 73.6722 31.2288 73.7672 30.9873C74.5822 28.911 74.9784 26.7731 74.8072 24.5346C74.7747 24.1045 74.6259 23.9385 74.1884 23.8568C70.3334 23.1374 67.5047 20.9894 65.6334 17.5398C65.5309 17.3512 65.4434 17.155 65.3384 16.94C62.2059 17.8593 60.1234 20.045 58.2834 22.5866C58.1334 22.3904 58.0297 22.2345 57.9072 22.0961C57.0884 21.1705 56.3247 20.1846 55.4297 19.3395C53.8309 17.8316 51.9509 16.8369 49.7172 16.6985C46.6447 16.5086 43.8684 18.3409 42.5559 21.4132C41.3747 24.1787 41.5234 26.9819 42.3659 29.8014C42.4747 30.1636 42.6309 30.2793 43.0134 30.2781C47.9959 30.263 52.9797 30.2718 57.9622 30.2605C58.3222 30.2605 58.5684 30.346 58.7859 30.649C59.1359 31.1395 59.5334 31.5948 59.9409 32.1016C61.0209 29.9096 62.0647 27.788 63.1322 25.6212H63.1334ZM60.2247 34.7136C59.4722 33.7754 58.7572 32.9039 58.0697 32.0098C57.8747 31.7557 57.6697 31.6765 57.3634 31.6765C52.2859 31.6853 47.2084 31.6828 42.1309 31.6828C41.9672 31.6828 41.8022 31.6828 41.6422 31.6828V33.1127H47.9609V34.5275H44.6209C45.2922 35.3914 45.8584 36.1825 46.4859 36.9182C49.7284 40.7149 53.7159 43.5507 58.0472 45.9339C58.1922 46.0131 58.4747 45.9754 58.6284 45.8836C60.1009 44.997 61.5934 44.1368 63.0172 43.1747C65.9772 41.1751 68.6459 38.8398 70.8447 35.9938C70.9409 35.8681 71.0259 35.7348 71.1547 35.5499C69.2447 35.5499 67.4334 35.5587 65.6222 35.5373C65.4297 35.5348 65.1847 35.4015 65.0572 35.2493C64.6522 34.7639 64.2909 34.2407 63.8759 33.6836C62.8322 35.8014 61.8247 37.8425 60.7934 39.9352C59.7159 38.5895 58.6897 37.3043 57.6597 36.0228C57.2572 35.5235 56.9347 34.8494 56.4109 34.5904C55.9059 34.3401 55.1884 34.5174 54.5647 34.5136C53.7897 34.5099 53.0147 34.5136 52.2447 34.5136V33.0989C53.7659 33.0989 55.2484 33.1089 56.7322 33.09C57.0347 33.0863 57.2184 33.1894 57.3934 33.4233C57.7397 33.8886 58.1134 34.3326 58.4759 34.7853C59.1409 35.6153 59.8059 36.4441 60.5097 37.3244C61.5597 35.1965 62.5797 33.1278 63.6322 30.9936C64.3509 31.9607 65.0322 32.8561 65.6872 33.7717C65.8809 34.042 66.0822 34.1477 66.4172 34.1452C69.0884 34.1301 71.7597 34.1364 74.4322 34.1364H74.9097V32.7216C74.7047 32.7216 74.5359 32.7216 74.3672 32.7216C71.9459 32.7216 69.5234 32.7153 67.1022 32.7291C66.7884 32.7304 66.5947 32.6348 66.4084 32.3782C65.5159 31.1471 64.6022 29.931 63.6934 28.7111C63.6047 28.5929 63.5072 28.4809 63.3759 28.3212C62.3172 30.4705 61.2859 32.5631 60.2247 34.7161V34.7136Z"
                                                        fill="#98A2B3"
                                                    />
                                                    <path
                                                        d="M85.3574 12.7106H81.1774C81.2799 10.9298 80.7712 9.40312 79.4074 8.23858C78.4899 7.4551 77.4112 7.06776 76.2162 7.08536C74.7537 7.10674 73.5224 7.68398 72.5474 8.79192C71.7799 9.6647 71.6074 10.1954 71.2937 12.7056H67.1274C67.0037 9.48738 68.1187 6.82127 70.6349 4.79905C73.5049 2.49136 77.5037 2.19582 80.7112 4.00425C83.8112 5.75231 85.7462 9.35659 85.3599 12.7106H85.3574ZM68.5662 11.321C68.9499 11.321 69.2762 11.3008 69.5987 11.3272C69.9037 11.3511 69.9749 11.2191 70.0374 10.9374C70.1562 10.4067 70.3099 9.87597 70.5224 9.37671C70.7212 8.91014 71.0162 8.48507 71.2712 8.03737C70.9599 7.72045 70.6549 7.41108 70.3187 7.06776C69.3062 8.30146 68.7262 9.6823 68.5662 11.321ZM81.2099 8.06378C81.8949 8.99314 82.3512 9.97407 82.5137 11.0845C82.5262 11.1713 82.6562 11.3033 82.7387 11.3084C83.1324 11.3323 83.5287 11.3184 83.9487 11.3184C83.7812 9.67602 83.2074 8.29392 82.2037 7.08536C81.8599 7.42492 81.5499 7.73051 81.2099 8.06378ZM75.5287 4.29978C73.9337 4.44818 72.5599 5.04051 71.3749 6.00886C71.7049 6.36224 72.0174 6.69802 72.2962 6.99607C72.8337 6.7018 73.3212 6.38111 73.8499 6.15977C74.3762 5.93969 74.9449 5.82022 75.5287 5.64667V4.29853V4.29978ZM81.1687 6.0315C79.9324 5.03548 78.5687 4.4356 76.9912 4.30481V5.71081C78.1949 5.86298 79.2449 6.3132 80.1737 7.03254C80.5024 6.7018 80.8199 6.38111 81.1687 6.03024V6.0315Z"
                                                        fill="#98A2B3"
                                                    />
                                                    <path
                                                        d="M79.5218 13.4438C79.848 13.757 80.1605 14.0588 80.5518 14.4348C79.8443 15.119 79.163 15.788 78.4693 16.442C78.2568 16.6419 78.1768 16.8142 78.2705 17.1261C78.553 18.0643 78.1518 19.0276 77.3268 19.5193C76.5055 20.0085 75.4618 19.879 74.778 19.2024C74.1055 18.5384 73.9555 17.5185 74.4068 16.6859C74.8668 15.8371 75.8093 15.3931 76.748 15.6522C77.0943 15.7478 77.2805 15.6623 77.5105 15.4258C78.1643 14.7543 78.8455 14.1091 79.5218 13.4464V13.4438ZM76.9568 17.7096C76.9655 17.3223 76.633 16.9815 76.2518 16.9852C75.888 16.989 75.5693 17.3059 75.558 17.6757C75.548 18.0492 75.843 18.3686 76.2168 18.3875C76.6155 18.4076 76.9468 18.1045 76.9568 17.7096Z"
                                                        fill="#98A2B3"
                                                    />
                                                    <path
                                                        d="M68.5674 11.3211C68.7274 9.68242 69.3074 8.30157 70.3199 7.06787C70.6574 7.4112 70.9611 7.72182 71.2724 8.03748C71.0174 8.48393 70.7236 8.90899 70.5236 9.37682C70.3111 9.87609 70.1561 10.4068 70.0386 10.9375C69.9761 11.2192 69.9049 11.3512 69.5999 11.3274C69.2774 11.3022 68.9511 11.3211 68.5674 11.3211Z"
                                                        fill="#F9FAFB"
                                                    />
                                                    <path
                                                        d="M81.2109 8.0624C81.5497 7.72787 81.8597 7.42228 82.2047 7.08398C83.2084 8.29379 83.7822 9.67464 83.9497 11.3171C83.5309 11.3171 83.1347 11.3296 82.7397 11.307C82.6584 11.302 82.5272 11.1712 82.5147 11.0831C82.3522 9.97394 81.8959 8.99302 81.2109 8.0624Z"
                                                        fill="#F9FAFB"
                                                    />
                                                    <path
                                                        d="M75.5297 4.2998V5.64795C74.946 5.8215 74.3785 5.94097 73.851 6.16105C73.3222 6.38239 72.8347 6.70307 72.2972 6.99735C72.0185 6.6993 71.706 6.36352 71.376 6.01014C72.5622 5.04179 73.936 4.44946 75.5297 4.30106V4.2998Z"
                                                        fill="#F9FAFB"
                                                    />
                                                    <path
                                                        d="M81.1697 6.03158C80.8209 6.38245 80.5034 6.70188 80.1747 7.03388C79.2459 6.31454 78.1959 5.86432 76.9922 5.71215V4.30615C78.5684 4.43694 79.9334 5.03682 81.1697 6.03283V6.03158Z"
                                                        fill="#F9FAFB"
                                                    />
                                                    <path
                                                        d="M76.9577 17.7093C76.9489 18.1042 76.6164 18.4072 76.2177 18.3871C75.8439 18.3683 75.5477 18.0488 75.5589 17.6753C75.5689 17.3056 75.8877 16.9887 76.2527 16.9849C76.6339 16.9811 76.9677 17.3232 76.9577 17.7093Z"
                                                        fill="#F9FAFB"
                                                    />
                                                    <path
                                                        d="M72.0049 27.0194V25.6763H73.3649V27.0194H72.0049Z"
                                                        fill="#98A2B3"
                                                    />
                                                    <path
                                                        d="M70.6143 28.4946H71.9568V29.8491H70.6143V28.4946Z"
                                                        fill="#98A2B3"
                                                    />
                                                    <path
                                                        d="M49.4033 34.4731V33.1338H50.7671V34.4731H49.4033Z"
                                                        fill="#98A2B3"
                                                    />
                                                </g>
                                                <path
                                                    d="M24.9141 66.375V67.9297H18.875V66.375H24.9141ZM19.3594 61.625V73H17.3984V61.625H19.3594ZM26.4219 61.625V73H24.4688V61.625H26.4219ZM31.0234 72.0781L33.3203 64.5469H35.3359L31.9453 74.2891C31.8672 74.4974 31.7656 74.724 31.6406 74.9688C31.5156 75.2135 31.3516 75.4453 31.1484 75.6641C30.9505 75.888 30.7031 76.0677 30.4062 76.2031C30.1094 76.3438 29.75 76.4141 29.3281 76.4141C29.1615 76.4141 29 76.3984 28.8438 76.3672C28.6927 76.3411 28.5495 76.3125 28.4141 76.2812L28.4062 74.8438C28.4583 74.849 28.5208 74.8542 28.5938 74.8594C28.6719 74.8646 28.7344 74.8672 28.7812 74.8672C29.0938 74.8672 29.3542 74.8281 29.5625 74.75C29.7708 74.6771 29.9401 74.5573 30.0703 74.3906C30.2057 74.224 30.3203 74 30.4141 73.7188L31.0234 72.0781ZM29.7266 64.5469L31.7344 70.875L32.0703 72.8594L30.7656 73.1953L27.6953 64.5469H29.7266ZM38.3047 66.1719V76.25H36.4219V64.5469H38.1562L38.3047 66.1719ZM43.8125 68.6953V68.8594C43.8125 69.474 43.7396 70.0443 43.5938 70.5703C43.4531 71.0911 43.2422 71.5469 42.9609 71.9375C42.6849 72.3229 42.3438 72.6224 41.9375 72.8359C41.5312 73.0495 41.0625 73.1562 40.5312 73.1562C40.0052 73.1562 39.5443 73.0599 39.1484 72.8672C38.7578 72.6693 38.4271 72.3906 38.1562 72.0312C37.8854 71.6719 37.6667 71.25 37.5 70.7656C37.3385 70.276 37.224 69.7396 37.1562 69.1562V68.5234C37.224 67.9036 37.3385 67.3411 37.5 66.8359C37.6667 66.3307 37.8854 65.8958 38.1562 65.5312C38.4271 65.1667 38.7578 64.8854 39.1484 64.6875C39.5391 64.4896 39.9948 64.3906 40.5156 64.3906C41.0469 64.3906 41.5182 64.4948 41.9297 64.7031C42.3411 64.9062 42.6875 65.1979 42.9688 65.5781C43.25 65.9531 43.4609 66.4062 43.6016 66.9375C43.7422 67.4635 43.8125 68.0495 43.8125 68.6953ZM41.9297 68.8594V68.6953C41.9297 68.3047 41.8932 67.9427 41.8203 67.6094C41.7474 67.2708 41.6328 66.974 41.4766 66.7188C41.3203 66.4635 41.1198 66.2656 40.875 66.125C40.6354 65.9792 40.3464 65.9062 40.0078 65.9062C39.6745 65.9062 39.388 65.9635 39.1484 66.0781C38.9089 66.1875 38.7083 66.3411 38.5469 66.5391C38.3854 66.737 38.2604 66.9688 38.1719 67.2344C38.0833 67.4948 38.0208 67.7786 37.9844 68.0859V69.6016C38.0469 69.9766 38.1536 70.3203 38.3047 70.6328C38.4557 70.9453 38.6693 71.1953 38.9453 71.3828C39.2266 71.5651 39.5859 71.6562 40.0234 71.6562C40.362 71.6562 40.651 71.5833 40.8906 71.4375C41.1302 71.2917 41.3255 71.0911 41.4766 70.8359C41.6328 70.5755 41.7474 70.276 41.8203 69.9375C41.8932 69.599 41.9297 69.2396 41.9297 68.8594ZM49.1406 73.1562C48.5156 73.1562 47.9505 73.0547 47.4453 72.8516C46.9453 72.6432 46.5182 72.3542 46.1641 71.9844C45.8151 71.6146 45.5469 71.1797 45.3594 70.6797C45.1719 70.1797 45.0781 69.6406 45.0781 69.0625V68.75C45.0781 68.0885 45.1745 67.4896 45.3672 66.9531C45.5599 66.4167 45.8281 65.9583 46.1719 65.5781C46.5156 65.1927 46.9219 64.8984 47.3906 64.6953C47.8594 64.4922 48.3672 64.3906 48.9141 64.3906C49.5182 64.3906 50.0469 64.4922 50.5 64.6953C50.9531 64.8984 51.3281 65.1849 51.625 65.5547C51.9271 65.9193 52.151 66.3542 52.2969 66.8594C52.4479 67.3646 52.5234 67.9219 52.5234 68.5312V69.3359H45.9922V67.9844H50.6641V67.8359C50.6536 67.4974 50.5859 67.1797 50.4609 66.8828C50.3411 66.5859 50.1562 66.3464 49.9062 66.1641C49.6562 65.9818 49.3229 65.8906 48.9062 65.8906C48.5938 65.8906 48.3151 65.9583 48.0703 66.0938C47.8307 66.224 47.6302 66.4141 47.4688 66.6641C47.3073 66.9141 47.1823 67.2161 47.0938 67.5703C47.0104 67.9193 46.9688 68.3125 46.9688 68.75V69.0625C46.9688 69.4323 47.0182 69.776 47.1172 70.0938C47.2214 70.4062 47.3724 70.6797 47.5703 70.9141C47.7682 71.1484 48.0078 71.3333 48.2891 71.4688C48.5703 71.599 48.8906 71.6641 49.25 71.6641C49.7031 71.6641 50.1068 71.5729 50.4609 71.3906C50.8151 71.2083 51.1224 70.9505 51.3828 70.6172L52.375 71.5781C52.1927 71.8438 51.9557 72.099 51.6641 72.3438C51.3724 72.5833 51.0156 72.7786 50.5938 72.9297C50.1771 73.0807 49.6927 73.1562 49.1406 73.1562ZM55.8828 66.1562V73H54V64.5469H55.7969L55.8828 66.1562ZM58.4688 64.4922L58.4531 66.2422C58.3385 66.2214 58.2135 66.2057 58.0781 66.1953C57.9479 66.1849 57.8177 66.1797 57.6875 66.1797C57.3646 66.1797 57.0807 66.2266 56.8359 66.3203C56.5911 66.4089 56.3854 66.5391 56.2188 66.7109C56.0573 66.8776 55.9323 67.0807 55.8438 67.3203C55.7552 67.5599 55.7031 67.8281 55.6875 68.125L55.2578 68.1562C55.2578 67.625 55.3099 67.1328 55.4141 66.6797C55.5182 66.2266 55.6745 65.8281 55.8828 65.4844C56.0964 65.1406 56.362 64.8724 56.6797 64.6797C57.0026 64.487 57.375 64.3906 57.7969 64.3906C57.9115 64.3906 58.0339 64.401 58.1641 64.4219C58.2995 64.4427 58.401 64.4661 58.4688 64.4922ZM63.9141 64.5469V65.9219H59.1484V64.5469H63.9141ZM60.5234 62.4766H62.4062V70.6641C62.4062 70.9245 62.4427 71.125 62.5156 71.2656C62.5938 71.401 62.7005 71.4922 62.8359 71.5391C62.9714 71.5859 63.1302 71.6094 63.3125 71.6094C63.4427 71.6094 63.5677 71.6016 63.6875 71.5859C63.8073 71.5703 63.9036 71.5547 63.9766 71.5391L63.9844 72.9766C63.8281 73.0234 63.6458 73.0651 63.4375 73.1016C63.2344 73.138 63 73.1562 62.7344 73.1562C62.3021 73.1562 61.9193 73.0807 61.5859 72.9297C61.2526 72.7734 60.9922 72.5208 60.8047 72.1719C60.6172 71.8229 60.5234 71.3594 60.5234 70.7812V62.4766ZM69.0938 73.1562C68.4688 73.1562 67.9036 73.0547 67.3984 72.8516C66.8984 72.6432 66.4714 72.3542 66.1172 71.9844C65.7682 71.6146 65.5 71.1797 65.3125 70.6797C65.125 70.1797 65.0312 69.6406 65.0312 69.0625V68.75C65.0312 68.0885 65.1276 67.4896 65.3203 66.9531C65.513 66.4167 65.7812 65.9583 66.125 65.5781C66.4688 65.1927 66.875 64.8984 67.3438 64.6953C67.8125 64.4922 68.3203 64.3906 68.8672 64.3906C69.4714 64.3906 70 64.4922 70.4531 64.6953C70.9062 64.8984 71.2812 65.1849 71.5781 65.5547C71.8802 65.9193 72.1042 66.3542 72.25 66.8594C72.401 67.3646 72.4766 67.9219 72.4766 68.5312V69.3359H65.9453V67.9844H70.6172V67.8359C70.6068 67.4974 70.5391 67.1797 70.4141 66.8828C70.2943 66.5859 70.1094 66.3464 69.8594 66.1641C69.6094 65.9818 69.276 65.8906 68.8594 65.8906C68.5469 65.8906 68.2682 65.9583 68.0234 66.0938C67.7839 66.224 67.5833 66.4141 67.4219 66.6641C67.2604 66.9141 67.1354 67.2161 67.0469 67.5703C66.9635 67.9193 66.9219 68.3125 66.9219 68.75V69.0625C66.9219 69.4323 66.9714 69.776 67.0703 70.0938C67.1745 70.4062 67.3255 70.6797 67.5234 70.9141C67.7214 71.1484 67.9609 71.3333 68.2422 71.4688C68.5234 71.599 68.8438 71.6641 69.2031 71.6641C69.6562 71.6641 70.0599 71.5729 70.4141 71.3906C70.7682 71.2083 71.0755 70.9505 71.3359 70.6172L72.3281 71.5781C72.1458 71.8438 71.9089 72.099 71.6172 72.3438C71.3255 72.5833 70.9688 72.7786 70.5469 72.9297C70.1302 73.0807 69.6458 73.1562 69.0938 73.1562ZM75.8125 66.3516V73H73.9297V64.5469H75.7031L75.8125 66.3516ZM75.4766 68.4609L74.8672 68.4531C74.8724 67.8542 74.9557 67.3047 75.1172 66.8047C75.2839 66.3047 75.513 65.875 75.8047 65.5156C76.1016 65.1562 76.4557 64.8802 76.8672 64.6875C77.2786 64.4896 77.737 64.3906 78.2422 64.3906C78.6484 64.3906 79.0156 64.4479 79.3438 64.5625C79.6771 64.6719 79.9609 64.8516 80.1953 65.1016C80.4349 65.3516 80.6172 65.6771 80.7422 66.0781C80.8672 66.474 80.9297 66.9609 80.9297 67.5391V73H79.0391V67.5312C79.0391 67.125 78.9792 66.8047 78.8594 66.5703C78.7448 66.3307 78.5755 66.1615 78.3516 66.0625C78.1328 65.9583 77.8594 65.9062 77.5312 65.9062C77.2083 65.9062 76.9193 65.974 76.6641 66.1094C76.4089 66.2448 76.1927 66.4297 76.0156 66.6641C75.8438 66.8984 75.7109 67.1693 75.6172 67.4766C75.5234 67.7839 75.4766 68.112 75.4766 68.4609ZM87.5938 70.7109C87.5938 70.5234 87.5469 70.3542 87.4531 70.2031C87.3594 70.0469 87.1797 69.9062 86.9141 69.7812C86.6536 69.6562 86.2682 69.5417 85.7578 69.4375C85.3099 69.3385 84.8984 69.2214 84.5234 69.0859C84.1536 68.9453 83.8359 68.776 83.5703 68.5781C83.3047 68.3802 83.099 68.1458 82.9531 67.875C82.8073 67.6042 82.7344 67.2917 82.7344 66.9375C82.7344 66.5938 82.8099 66.2682 82.9609 65.9609C83.112 65.6536 83.3281 65.3828 83.6094 65.1484C83.8906 64.9141 84.2318 64.7292 84.6328 64.5938C85.0391 64.4583 85.4922 64.3906 85.9922 64.3906C86.7005 64.3906 87.3073 64.5104 87.8125 64.75C88.3229 64.9844 88.7135 65.3047 88.9844 65.7109C89.2552 66.112 89.3906 66.5651 89.3906 67.0703H87.5078C87.5078 66.8464 87.4505 66.638 87.3359 66.4453C87.2266 66.2474 87.0599 66.0885 86.8359 65.9688C86.612 65.8438 86.3307 65.7812 85.9922 65.7812C85.6693 65.7812 85.401 65.8333 85.1875 65.9375C84.9792 66.0365 84.8229 66.1667 84.7188 66.3281C84.6198 66.4896 84.5703 66.6667 84.5703 66.8594C84.5703 67 84.5964 67.1276 84.6484 67.2422C84.7057 67.3516 84.7995 67.4531 84.9297 67.5469C85.0599 67.6354 85.237 67.7188 85.4609 67.7969C85.6901 67.875 85.9766 67.9505 86.3203 68.0234C86.9661 68.1589 87.5208 68.3333 87.9844 68.5469C88.4531 68.7552 88.8125 69.026 89.0625 69.3594C89.3125 69.6875 89.4375 70.1042 89.4375 70.6094C89.4375 70.9844 89.3568 71.3281 89.1953 71.6406C89.0391 71.9479 88.8099 72.2161 88.5078 72.4453C88.2057 72.6693 87.8438 72.8438 87.4219 72.9688C87.0052 73.0938 86.5365 73.1562 86.0156 73.1562C85.25 73.1562 84.6016 73.0208 84.0703 72.75C83.5391 72.474 83.1354 72.1224 82.8594 71.6953C82.5885 71.263 82.4531 70.8151 82.4531 70.3516H84.2734C84.2943 70.7005 84.3906 70.9792 84.5625 71.1875C84.7396 71.3906 84.9583 71.5391 85.2188 71.6328C85.4844 71.7214 85.7578 71.7656 86.0391 71.7656C86.3776 71.7656 86.6615 71.7214 86.8906 71.6328C87.1198 71.5391 87.2943 71.4141 87.4141 71.2578C87.5339 71.0964 87.5938 70.9141 87.5938 70.7109ZM93.1016 64.5469V73H91.2109V64.5469H93.1016ZM91.0859 62.3281C91.0859 62.0417 91.1797 61.8047 91.3672 61.6172C91.5599 61.4245 91.8255 61.3281 92.1641 61.3281C92.4974 61.3281 92.7604 61.4245 92.9531 61.6172C93.1458 61.8047 93.2422 62.0417 93.2422 62.3281C93.2422 62.6094 93.1458 62.8438 92.9531 63.0312C92.7604 63.2188 92.4974 63.3125 92.1641 63.3125C91.8255 63.3125 91.5599 63.2188 91.3672 63.0312C91.1797 62.8438 91.0859 62.6094 91.0859 62.3281ZM94.8047 68.8672V68.6875C94.8047 68.0781 94.8932 67.513 95.0703 66.9922C95.2474 66.4661 95.5026 66.0104 95.8359 65.625C96.1745 65.2344 96.5859 64.9323 97.0703 64.7188C97.5599 64.5 98.112 64.3906 98.7266 64.3906C99.3464 64.3906 99.8984 64.5 100.383 64.7188C100.872 64.9323 101.286 65.2344 101.625 65.625C101.964 66.0104 102.221 66.4661 102.398 66.9922C102.576 67.513 102.664 68.0781 102.664 68.6875V68.8672C102.664 69.4766 102.576 70.0417 102.398 70.5625C102.221 71.0833 101.964 71.5391 101.625 71.9297C101.286 72.3151 100.875 72.6172 100.391 72.8359C99.9062 73.0495 99.3568 73.1562 98.7422 73.1562C98.1224 73.1562 97.5677 73.0495 97.0781 72.8359C96.5938 72.6172 96.1823 72.3151 95.8438 71.9297C95.5052 71.5391 95.2474 71.0833 95.0703 70.5625C94.8932 70.0417 94.8047 69.4766 94.8047 68.8672ZM96.6875 68.6875V68.8672C96.6875 69.2474 96.7266 69.6068 96.8047 69.9453C96.8828 70.2839 97.0052 70.5807 97.1719 70.8359C97.3385 71.0911 97.5521 71.2917 97.8125 71.4375C98.0729 71.5833 98.3828 71.6562 98.7422 71.6562C99.0911 71.6562 99.3932 71.5833 99.6484 71.4375C99.9089 71.2917 100.122 71.0911 100.289 70.8359C100.456 70.5807 100.578 70.2839 100.656 69.9453C100.74 69.6068 100.781 69.2474 100.781 68.8672V68.6875C100.781 68.3125 100.74 67.9583 100.656 67.625C100.578 67.2865 100.453 66.987 100.281 66.7266C100.115 66.4661 99.901 66.263 99.6406 66.1172C99.3854 65.9661 99.0807 65.8906 98.7266 65.8906C98.3724 65.8906 98.0651 65.9661 97.8047 66.1172C97.5495 66.263 97.3385 66.4661 97.1719 66.7266C97.0052 66.987 96.8828 67.2865 96.8047 67.625C96.7266 67.9583 96.6875 68.3125 96.6875 68.6875ZM106.109 66.3516V73H104.227V64.5469H106L106.109 66.3516ZM105.773 68.4609L105.164 68.4531C105.169 67.8542 105.253 67.3047 105.414 66.8047C105.581 66.3047 105.81 65.875 106.102 65.5156C106.398 65.1562 106.753 64.8802 107.164 64.6875C107.576 64.4896 108.034 64.3906 108.539 64.3906C108.945 64.3906 109.312 64.4479 109.641 64.5625C109.974 64.6719 110.258 64.8516 110.492 65.1016C110.732 65.3516 110.914 65.6771 111.039 66.0781C111.164 66.474 111.227 66.9609 111.227 67.5391V73H109.336V67.5312C109.336 67.125 109.276 66.8047 109.156 66.5703C109.042 66.3307 108.872 66.1615 108.648 66.0625C108.43 65.9583 108.156 65.9062 107.828 65.9062C107.505 65.9062 107.216 65.974 106.961 66.1094C106.706 66.2448 106.49 66.4297 106.312 66.6641C106.141 66.8984 106.008 67.1693 105.914 67.4766C105.82 67.7839 105.773 68.112 105.773 68.4609Z"
                                                    fill="#98A2B3"
                                                />
                                                <defs>
                                                    <clipPath id="clip0_137_21857">
                                                        <rect
                                                            width="48"
                                                            height="48"
                                                            fill="white"
                                                            transform="translate(40.2109)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    {asthma ? (
                                        <div
                                            className="p-5 flex flex-col bg-white text-teal-500 justify-center items-center gap-2 border border-teal-500 cursor-pointer rounded-lg"
                                            onClick={() => setAsthma(false)}
                                        >
                                            <svg
                                                width="125"
                                                height="79"
                                                viewBox="0 0 146 79"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="145"
                                                    height="79"
                                                    transform="translate(0.710938)"
                                                    fill="#FFFFFF"
                                                />
                                                <path
                                                    d="M82.1172 0C82.9247 0.15625 83.7434 0.27375 84.5397 0.4775C86.2272 0.91125 87.7372 1.7075 89.0722 2.83C89.4797 3.1725 89.5684 3.59875 89.3047 3.92625C89.0272 4.27 88.6159 4.2825 88.1909 3.92875C85.6897 1.84375 82.7684 1.23125 79.6009 1.4475C77.7497 1.57375 76.0709 2.17125 74.5209 3.18125C73.5522 3.81125 72.5622 4.40625 71.4209 4.69C69.9972 5.0425 68.6347 4.82125 67.2959 4.29375C67.0697 4.205 66.8122 4.115 66.5809 4.13875C66.0834 4.19125 65.8709 4.75125 66.1584 5.225C67.2209 6.97 68.6147 8.36875 70.4622 9.28125C72.1709 10.125 73.9922 10.4325 75.8747 10.3038C76.6084 10.2537 77.0359 10.4925 77.3684 11.13C77.7409 11.8463 78.2022 12.5162 78.6472 13.2413C79.7184 12.3975 80.8934 12.1137 82.1797 12.4862C83.1697 12.7725 83.9059 13.3988 84.4084 14.3013C85.3084 15.92 84.9197 18.4062 82.5072 19.56C83.4059 21.0325 84.3022 22.4975 85.2209 24.0037C87.9597 21.8425 90.3822 19.4737 91.5134 16.1425C92.6884 12.6812 92.1322 9.36875 90.2334 6.27C89.8384 5.62625 89.8309 5.2325 90.2547 4.97375C90.6622 4.725 91.0184 4.87875 91.4134 5.49875C94.1047 9.72375 94.6297 15.7563 90.4872 20.8612C89.1897 22.46 87.7372 23.89 86.0759 25.1038C85.8084 25.3 85.6822 25.495 85.6959 25.8325C85.7222 26.4563 85.6797 27.0837 85.7172 27.7062C85.7297 27.92 85.8434 28.1875 86.0022 28.325C87.1134 29.2888 87.8759 30.4925 88.4834 31.8075C88.6634 32.1963 88.5097 32.5925 88.1584 32.7575C87.8122 32.92 87.4522 32.805 87.2397 32.4388C87.0447 32.1012 86.8784 31.7475 86.6922 31.405C85.0209 28.3288 82.4047 27.8375 79.4897 29.0637C77.2622 30 75.6197 31.6612 74.2097 33.5725C73.1759 34.9737 72.3572 36.4963 71.7034 38.1087C71.6447 38.2537 71.5922 38.4012 71.5247 38.5412C71.3322 38.9375 70.9622 39.0988 70.6034 38.9487C70.2409 38.7962 70.0647 38.4212 70.2309 38.0112C70.5309 37.275 70.8422 36.5413 71.1959 35.83C72.1034 34.0013 73.2422 32.3275 74.6534 30.845C74.7522 30.7412 74.8547 30.585 74.8572 30.4513C74.8759 29.61 74.8672 28.7675 74.8672 27.8962C74.5809 27.8162 74.3147 27.7463 74.0497 27.6675C70.7959 26.6987 68.5422 23.7262 68.5247 20.335C68.5072 16.96 68.5159 13.585 68.5272 10.2113C68.5272 9.89625 68.4309 9.70875 68.1734 9.52375C66.8622 8.58125 65.8259 7.37875 64.9797 6.01C64.4347 5.12875 64.4784 4.215 65.0847 3.48375C65.7109 2.7275 66.6122 2.4925 67.5797 2.89125C68.9059 3.43875 70.2497 3.7075 71.6259 3.14375C72.2572 2.885 72.8697 2.55625 73.4422 2.18375C75.2384 1.015 77.1522 0.1975 79.3172 0.0625C79.3759 0.05875 79.4334 0.0225 79.4909 0.00125C80.3659 0.00125 81.2409 0.00125 82.1159 0.00125L82.1172 0ZM84.2947 27.3575C84.2947 26.9988 84.2622 26.685 84.3009 26.38C84.4084 25.5425 84.1234 24.8488 83.6759 24.1525C82.7047 22.6437 81.7884 21.0987 80.8609 19.5625C80.5047 18.9737 80.7397 18.4913 81.4184 18.3713C82.5284 18.1737 83.3347 17.355 83.4297 16.325C83.5297 15.2513 82.9497 14.2838 81.9722 13.895C80.9872 13.5038 79.9209 13.8237 79.2234 14.7212C78.7622 15.315 78.2509 15.29 77.8522 14.6438C77.3272 13.7937 76.7984 12.9463 76.2972 12.0825C76.1334 11.8 75.9447 11.7113 75.6259 11.725C74.1784 11.785 72.7584 11.6037 71.3772 11.1587C70.9059 11.0062 70.4472 10.8175 69.9522 10.6337V19.4587C70.1634 19.5087 70.3597 19.5513 70.5522 19.6038C71.7222 19.9175 72.7609 20.46 73.5884 21.3638C74.1572 21.985 74.1322 22.3075 73.4797 22.8325C72.8272 23.3575 72.1709 23.8787 71.5022 24.4137C72.5759 25.6087 73.8659 26.3038 75.4084 26.5275C76.0834 26.625 76.2734 26.8238 76.2784 27.4988C76.2822 28.085 76.2784 28.6712 76.2784 29.355C78.7034 27.5537 81.2359 26.5238 84.2934 27.3587L84.2947 27.3575ZM70.6309 23.3C71.2272 22.8237 71.7184 22.43 72.3384 21.935C71.5172 21.545 70.8084 21.2075 70.0984 20.87C70.0384 20.9237 69.9784 20.9788 69.9184 21.0325C70.1497 21.7675 70.3809 22.5025 70.6309 23.3Z"
                                                    fill="#009688"
                                                />
                                                <path
                                                    d="M68.9924 47.9999C68.6186 47.7749 68.5086 47.4474 68.5149 47.0149C68.5461 44.9761 68.8036 42.9686 69.2849 40.9886C69.4136 40.4599 69.7436 40.2161 70.1774 40.3161C70.5949 40.4111 70.7911 40.7936 70.6574 41.3274C70.2286 43.0299 70.0061 44.7586 69.9374 46.5511H75.3411C75.3411 46.3824 75.3411 46.2011 75.3411 46.0199C75.3411 43.3324 75.3411 40.6449 75.3411 37.9574C75.3411 37.8174 75.3361 37.6761 75.3461 37.5361C75.3749 37.1049 75.6211 36.8474 76.0074 36.8324C76.4124 36.8161 76.7199 37.0749 76.7411 37.5186C76.7699 38.1111 76.7524 38.7061 76.7524 39.2999C76.7524 40.2499 76.7524 41.1999 76.7524 42.1799H84.0936C84.0936 42.0086 84.0936 41.8424 84.0936 41.6761C84.0936 40.3486 84.0911 39.0199 84.0949 37.6924C84.0974 37.1399 84.3574 36.8324 84.8011 36.8311C85.2512 36.8299 85.5012 37.1274 85.5012 37.6886C85.5037 40.4536 85.5024 43.2199 85.5024 45.9849C85.5024 46.1686 85.5024 46.3524 85.5024 46.5624H89.8962C89.8612 45.9049 89.8424 45.2549 89.7886 44.6086C89.5236 41.4161 89.1286 38.2436 88.2261 35.1561C88.0674 34.6136 88.2262 34.2461 88.6387 34.1174C89.0787 33.9799 89.4237 34.2111 89.5837 34.7674C90.4074 37.6286 90.8611 40.5561 91.1086 43.5161C91.2061 44.6824 91.2386 45.8549 91.3199 47.0236C91.3499 47.4599 91.2236 47.7861 90.8361 47.9986H68.9924V47.9999ZM84.0736 43.6561H76.7886V46.5636H84.0736V43.6561Z"
                                                    fill="#009688"
                                                />
                                                <path
                                                    d="M53.6462 8.11492C53.6249 7.86867 53.6074 7.65242 53.5887 7.43492C53.4762 6.18492 54.3399 5.15867 55.5912 5.08742C56.1199 5.05742 56.6537 5.05617 57.1837 5.08742C58.2299 5.15242 59.0124 5.90367 59.1599 6.94617C59.2162 7.34367 59.2687 7.74242 59.3212 8.12867C60.3149 8.27617 60.3637 8.34992 60.4724 9.34867C60.7499 11.8924 61.0424 14.4349 61.3312 16.9774C61.3399 17.0537 61.3662 17.1274 61.3987 17.2612C61.9212 17.2612 62.4462 17.2599 62.9712 17.2612C64.4574 17.2674 65.3312 18.1374 65.3349 19.6174C65.3374 20.3824 65.3424 21.1474 65.3337 21.9124C65.3199 23.1924 64.4249 24.0949 63.1474 24.1012C61.3362 24.1099 59.5249 24.1174 57.7137 24.0974C55.9749 24.0787 54.5062 22.8174 54.2987 21.0899C53.8249 17.1549 53.3974 13.2149 52.9587 9.27617C52.8749 8.52367 52.9449 8.42992 53.6462 8.11242V8.11492ZM60.5474 22.6699C60.5349 22.5099 60.5274 22.3737 60.5112 22.2374C60.3699 20.9812 60.2262 19.7249 60.0849 18.4687C59.7649 15.6312 59.4424 12.7924 59.1312 9.95367C59.0987 9.65242 58.9674 9.57492 58.6787 9.57742C57.3824 9.59117 56.0862 9.58242 54.7899 9.58492C54.6837 9.58492 54.5787 9.60742 54.4287 9.62367C54.4537 9.90492 54.4712 10.1674 54.4999 10.4274C54.5787 11.1412 54.6637 11.8537 54.7437 12.5674C55.0587 15.3437 55.3662 18.1199 55.6924 20.8949C55.7974 21.7824 56.5162 22.5812 57.3949 22.6499C58.4312 22.7299 59.4774 22.6687 60.5474 22.6687V22.6699ZM61.5324 18.6837C61.6849 20.0424 61.8312 21.3499 61.9799 22.6724C62.0937 22.6837 62.1699 22.6974 62.2449 22.6974C62.5574 22.6987 62.8699 22.7087 63.1812 22.6937C63.6362 22.6712 63.9099 22.4112 63.9199 21.9537C63.9362 21.1112 63.9337 20.2674 63.9199 19.4249C63.9137 19.0112 63.6774 18.7249 63.2699 18.6937C62.7149 18.6524 62.1549 18.6837 61.5324 18.6837ZM57.8812 8.17742C57.8412 7.82867 57.8199 7.53617 57.7737 7.24742C57.6849 6.68492 57.4687 6.49867 56.9012 6.48742C56.5262 6.47992 56.1412 6.43492 55.7799 6.50367C55.5187 6.55367 55.1287 6.72492 55.0799 6.91367C54.9862 7.28367 55.0862 7.70367 55.1224 8.10242C55.1249 8.13367 55.2524 8.17367 55.3224 8.17367C56.1612 8.17867 56.9999 8.17742 57.8812 8.17742Z"
                                                    fill="#009688"
                                                />
                                                <path
                                                    d="M66.0736 39.7801C65.5674 39.7901 65.2749 39.3639 65.4149 38.8001C65.9761 36.5364 66.9461 34.4551 68.2474 32.5264C68.6136 31.9839 69.0174 31.4664 69.4274 30.9564C69.7774 30.5201 70.1749 30.4526 70.5186 30.7289C70.8599 31.0039 70.8661 31.4151 70.5211 31.8389C68.7636 33.9964 67.4924 36.4026 66.7899 39.1014C66.6911 39.4826 66.5086 39.7601 66.0736 39.7801Z"
                                                    fill="#009688"
                                                />
                                                <path
                                                    d="M67.373 30.4875C67.2418 30.7338 67.168 30.9038 67.0668 31.0538C66.4243 32.0038 65.768 32.945 65.1305 33.8988C64.8843 34.2663 64.5355 34.4088 64.1818 34.2338C63.8268 34.0575 63.6805 33.68 63.8655 33.28C64.4193 32.0838 65.1755 31.0175 66.088 30.0738C66.2393 29.9175 66.618 29.8538 66.8343 29.9238C67.0493 29.9938 67.1918 30.2863 67.3718 30.4875H67.373Z"
                                                    fill="#009688"
                                                />
                                                <path
                                                    d="M84.2944 27.3573C81.2369 26.5223 78.7056 27.5523 76.2794 29.3536C76.2794 28.6698 76.2831 28.0836 76.2794 27.4973C76.2744 26.8223 76.0856 26.6248 75.4094 26.5261C73.8669 26.3023 72.5769 25.6073 71.5031 24.4123C72.1719 23.8773 72.8281 23.3561 73.4806 22.8311C74.1319 22.3061 74.1581 21.9836 73.5894 21.3623C72.7619 20.4598 71.7231 19.9161 70.5531 19.6023C70.3594 19.5511 70.1631 19.5086 69.9531 19.4573V10.6323C70.4481 10.8161 70.9069 11.0061 71.3781 11.1573C72.7581 11.6023 74.1794 11.7836 75.6269 11.7236C75.9456 11.7098 76.1344 11.7986 76.2981 12.0811C76.7994 12.9448 77.3281 13.7936 77.8531 14.6423C78.2531 15.2886 78.7631 15.3136 79.2244 14.7198C79.9219 13.8236 80.9894 13.5023 81.9731 13.8936C82.9494 14.2823 83.5294 15.2486 83.4306 16.3236C83.3356 17.3536 82.5294 18.1723 81.4194 18.3698C80.7406 18.4898 80.5056 18.9723 80.8619 19.5611C81.7906 21.0973 82.7069 22.6423 83.6769 24.1511C84.1244 24.8461 84.4094 25.5411 84.3019 26.3786C84.2631 26.6836 84.2956 26.9986 84.2956 27.3561L84.2944 27.3573ZM75.3669 16.5748C75.2631 16.4661 75.1094 16.1911 74.8769 16.0811C74.2219 15.7711 73.5319 15.5336 72.8606 15.2573C72.4919 15.1061 72.1781 15.1636 71.9581 15.4948C71.7356 15.8273 71.7856 16.1736 72.0981 16.4123C72.8306 16.9698 73.6694 17.3036 74.5794 17.4261C75.0094 17.4836 75.3544 17.1561 75.3669 16.5748Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M70.6305 23.3001C70.3792 22.5026 70.1492 21.7676 69.918 21.0326C69.978 20.9789 70.038 20.9239 70.098 20.8701C70.8067 21.2076 71.5167 21.5439 72.338 21.9351C71.7192 22.4301 71.2267 22.8239 70.6305 23.3001Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M84.0731 43.6562V46.5638H76.7881V43.6562H84.0731Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M60.5475 22.6714C59.4775 22.6714 58.43 22.7326 57.395 22.6526C56.515 22.5839 55.7962 21.7851 55.6925 20.8976C55.3662 18.1226 55.0587 15.3464 54.7437 12.5701C54.6625 11.8564 54.5787 11.1439 54.5 10.4301C54.4712 10.1701 54.4537 9.90764 54.4287 9.62639C54.5787 9.60889 54.685 9.58764 54.79 9.58764C56.0862 9.58514 57.3825 9.59389 58.6787 9.58014C58.9675 9.57764 59.0975 9.65389 59.1312 9.95639C59.4425 12.7951 59.765 15.6326 60.085 18.4714C60.2262 19.7276 60.37 20.9839 60.5112 22.2401C60.5262 22.3751 60.5337 22.5114 60.5475 22.6726V22.6714Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M61.5322 18.6837C62.1547 18.6837 62.7147 18.6525 63.2697 18.6937C63.6772 18.7237 63.9122 19.0112 63.9197 19.425C63.9322 20.2675 63.936 21.1112 63.9197 21.9537C63.911 22.4112 63.636 22.6712 63.181 22.6937C62.8697 22.7087 62.5572 22.7 62.2447 22.6975C62.1697 22.6975 62.0935 22.6837 61.9797 22.6725C61.8322 21.3512 61.6847 20.0425 61.5322 18.6837Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M57.8813 8.17774C57 8.17774 56.1613 8.17899 55.3225 8.17399C55.2525 8.17399 55.125 8.13274 55.1225 8.10274C55.0863 7.70399 54.9863 7.28399 55.08 6.91399C55.1288 6.72524 55.5188 6.55399 55.78 6.50399C56.1413 6.43399 56.5263 6.48024 56.9013 6.48774C57.4688 6.49899 57.685 6.68524 57.7738 7.24774C57.82 7.53649 57.8413 7.82899 57.8813 8.17774Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M75.367 16.5748C75.3545 17.156 75.0095 17.4848 74.5795 17.426C73.6695 17.3035 72.8307 16.9698 72.0982 16.4123C71.7857 16.1748 71.7357 15.8285 71.9582 15.4948C72.1795 15.1648 72.4932 15.106 72.8607 15.2573C73.532 15.5335 74.222 15.771 74.877 16.081C75.1095 16.191 75.2632 16.4648 75.367 16.5748Z"
                                                    fill="#009688"
                                                />
                                                <path
                                                    d="M50.9844 63.1406L47.5859 73H45.5312L49.8125 61.625H51.125L50.9844 63.1406ZM53.8281 73L50.4219 63.1406L50.2734 61.625H51.5938L55.8906 73H53.8281ZM53.6641 68.7812V70.3359H47.4766V68.7812H53.6641ZM61.7188 70.7109C61.7188 70.5234 61.6719 70.3542 61.5781 70.2031C61.4844 70.0469 61.3047 69.9062 61.0391 69.7812C60.7786 69.6562 60.3932 69.5417 59.8828 69.4375C59.4349 69.3385 59.0234 69.2214 58.6484 69.0859C58.2786 68.9453 57.9609 68.776 57.6953 68.5781C57.4297 68.3802 57.224 68.1458 57.0781 67.875C56.9323 67.6042 56.8594 67.2917 56.8594 66.9375C56.8594 66.5938 56.9349 66.2682 57.0859 65.9609C57.237 65.6536 57.4531 65.3828 57.7344 65.1484C58.0156 64.9141 58.3568 64.7292 58.7578 64.5938C59.1641 64.4583 59.6172 64.3906 60.1172 64.3906C60.8255 64.3906 61.4323 64.5104 61.9375 64.75C62.4479 64.9844 62.8385 65.3047 63.1094 65.7109C63.3802 66.112 63.5156 66.5651 63.5156 67.0703H61.6328C61.6328 66.8464 61.5755 66.638 61.4609 66.4453C61.3516 66.2474 61.1849 66.0885 60.9609 65.9688C60.737 65.8438 60.4557 65.7812 60.1172 65.7812C59.7943 65.7812 59.526 65.8333 59.3125 65.9375C59.1042 66.0365 58.9479 66.1667 58.8438 66.3281C58.7448 66.4896 58.6953 66.6667 58.6953 66.8594C58.6953 67 58.7214 67.1276 58.7734 67.2422C58.8307 67.3516 58.9245 67.4531 59.0547 67.5469C59.1849 67.6354 59.362 67.7188 59.5859 67.7969C59.8151 67.875 60.1016 67.9505 60.4453 68.0234C61.0911 68.1589 61.6458 68.3333 62.1094 68.5469C62.5781 68.7552 62.9375 69.026 63.1875 69.3594C63.4375 69.6875 63.5625 70.1042 63.5625 70.6094C63.5625 70.9844 63.4818 71.3281 63.3203 71.6406C63.1641 71.9479 62.9349 72.2161 62.6328 72.4453C62.3307 72.6693 61.9688 72.8438 61.5469 72.9688C61.1302 73.0938 60.6615 73.1562 60.1406 73.1562C59.375 73.1562 58.7266 73.0208 58.1953 72.75C57.6641 72.474 57.2604 72.1224 56.9844 71.6953C56.7135 71.263 56.5781 70.8151 56.5781 70.3516H58.3984C58.4193 70.7005 58.5156 70.9792 58.6875 71.1875C58.8646 71.3906 59.0833 71.5391 59.3438 71.6328C59.6094 71.7214 59.8828 71.7656 60.1641 71.7656C60.5026 71.7656 60.7865 71.7214 61.0156 71.6328C61.2448 71.5391 61.4193 71.4141 61.5391 71.2578C61.6589 71.0964 61.7188 70.9141 61.7188 70.7109ZM69.0859 64.5469V65.9219H64.3203V64.5469H69.0859ZM65.6953 62.4766H67.5781V70.6641C67.5781 70.9245 67.6146 71.125 67.6875 71.2656C67.7656 71.401 67.8724 71.4922 68.0078 71.5391C68.1432 71.5859 68.3021 71.6094 68.4844 71.6094C68.6146 71.6094 68.7396 71.6016 68.8594 71.5859C68.9792 71.5703 69.0755 71.5547 69.1484 71.5391L69.1562 72.9766C69 73.0234 68.8177 73.0651 68.6094 73.1016C68.4062 73.138 68.1719 73.1562 67.9062 73.1562C67.474 73.1562 67.0911 73.0807 66.7578 72.9297C66.4245 72.7734 66.1641 72.5208 65.9766 72.1719C65.7891 71.8229 65.6953 71.3594 65.6953 70.7812V62.4766ZM72.3984 61V73H70.5234V61H72.3984ZM72.0703 68.4609L71.4609 68.4531C71.4661 67.8698 71.5469 67.3307 71.7031 66.8359C71.8646 66.3411 72.0885 65.9115 72.375 65.5469C72.6667 65.1771 73.0156 64.8932 73.4219 64.6953C73.8281 64.4922 74.2786 64.3906 74.7734 64.3906C75.1901 64.3906 75.5651 64.4479 75.8984 64.5625C76.237 64.6771 76.5286 64.862 76.7734 65.1172C77.0182 65.3672 77.2031 65.6953 77.3281 66.1016C77.4583 66.5026 77.5234 66.9922 77.5234 67.5703V73H75.6328V67.5547C75.6328 67.1484 75.5729 66.8255 75.4531 66.5859C75.3385 66.3464 75.1693 66.1745 74.9453 66.0703C74.7214 65.9609 74.4479 65.9062 74.125 65.9062C73.7865 65.9062 73.487 65.974 73.2266 66.1094C72.9714 66.2448 72.7578 66.4297 72.5859 66.6641C72.4141 66.8984 72.2839 67.1693 72.1953 67.4766C72.112 67.7839 72.0703 68.112 72.0703 68.4609ZM81.3125 66.2656V73H79.4297V64.5469H81.2031L81.3125 66.2656ZM81.0078 68.4609L80.3672 68.4531C80.3672 67.8698 80.4401 67.3307 80.5859 66.8359C80.7318 66.3411 80.9453 65.9115 81.2266 65.5469C81.5078 65.1771 81.8568 64.8932 82.2734 64.6953C82.6953 64.4922 83.1823 64.3906 83.7344 64.3906C84.1198 64.3906 84.4714 64.4479 84.7891 64.5625C85.112 64.6719 85.3906 64.8464 85.625 65.0859C85.8646 65.3255 86.0469 65.6328 86.1719 66.0078C86.3021 66.3828 86.3672 66.8359 86.3672 67.3672V73H84.4844V67.5312C84.4844 67.1198 84.4219 66.7969 84.2969 66.5625C84.1771 66.3281 84.0026 66.1615 83.7734 66.0625C83.5495 65.9583 83.2812 65.9062 82.9688 65.9062C82.6146 65.9062 82.3125 65.974 82.0625 66.1094C81.8177 66.2448 81.6172 66.4297 81.4609 66.6641C81.3047 66.8984 81.1901 67.1693 81.1172 67.4766C81.0443 67.7839 81.0078 68.112 81.0078 68.4609ZM86.25 67.9609L85.3672 68.1562C85.3672 67.6458 85.4375 67.1641 85.5781 66.7109C85.724 66.2526 85.9349 65.8516 86.2109 65.5078C86.4922 65.1589 86.8385 64.8854 87.25 64.6875C87.6615 64.4896 88.1328 64.3906 88.6641 64.3906C89.0964 64.3906 89.4818 64.4505 89.8203 64.5703C90.1641 64.6849 90.4557 64.8672 90.6953 65.1172C90.9349 65.3672 91.1172 65.6927 91.2422 66.0938C91.3672 66.4896 91.4297 66.9688 91.4297 67.5312V73H89.5391V67.5234C89.5391 67.0964 89.4766 66.7656 89.3516 66.5312C89.2318 66.2969 89.0599 66.1354 88.8359 66.0469C88.612 65.9531 88.3438 65.9062 88.0312 65.9062C87.7396 65.9062 87.4818 65.9609 87.2578 66.0703C87.0391 66.1745 86.8542 66.3229 86.7031 66.5156C86.5521 66.7031 86.4375 66.9193 86.3594 67.1641C86.2865 67.4089 86.25 67.6745 86.25 67.9609ZM98.1328 71.3047V67.2734C98.1328 66.9714 98.0781 66.7109 97.9688 66.4922C97.8594 66.2734 97.6927 66.1042 97.4688 65.9844C97.25 65.8646 96.974 65.8047 96.6406 65.8047C96.3333 65.8047 96.0677 65.8568 95.8438 65.9609C95.6198 66.0651 95.4453 66.2057 95.3203 66.3828C95.1953 66.5599 95.1328 66.7604 95.1328 66.9844H93.2578C93.2578 66.651 93.3385 66.3281 93.5 66.0156C93.6615 65.7031 93.8958 65.4245 94.2031 65.1797C94.5104 64.9349 94.8776 64.7422 95.3047 64.6016C95.7318 64.4609 96.2109 64.3906 96.7422 64.3906C97.3776 64.3906 97.9401 64.4974 98.4297 64.7109C98.9245 64.9245 99.3125 65.2474 99.5938 65.6797C99.8802 66.1068 100.023 66.6432 100.023 67.2891V71.0469C100.023 71.4323 100.049 71.7786 100.102 72.0859C100.159 72.388 100.24 72.651 100.344 72.875V73H98.4141C98.3255 72.7969 98.2552 72.5391 98.2031 72.2266C98.1562 71.9089 98.1328 71.6016 98.1328 71.3047ZM98.4062 67.8594L98.4219 69.0234H97.0703C96.7214 69.0234 96.4141 69.0573 96.1484 69.125C95.8828 69.1875 95.6615 69.2812 95.4844 69.4062C95.3073 69.5312 95.1745 69.6823 95.0859 69.8594C94.9974 70.0365 94.9531 70.237 94.9531 70.4609C94.9531 70.6849 95.0052 70.8906 95.1094 71.0781C95.2135 71.2604 95.3646 71.4036 95.5625 71.5078C95.7656 71.612 96.0104 71.6641 96.2969 71.6641C96.6823 71.6641 97.0182 71.5859 97.3047 71.4297C97.5964 71.2682 97.8255 71.0729 97.9922 70.8438C98.1589 70.6094 98.2474 70.388 98.2578 70.1797L98.8672 71.0156C98.8047 71.2292 98.6979 71.4583 98.5469 71.7031C98.3958 71.9479 98.1979 72.1823 97.9531 72.4062C97.7135 72.625 97.4245 72.8047 97.0859 72.9453C96.7526 73.0859 96.3672 73.1562 95.9297 73.1562C95.3776 73.1562 94.8854 73.0469 94.4531 72.8281C94.0208 72.6042 93.6823 72.3047 93.4375 71.9297C93.1927 71.5495 93.0703 71.1198 93.0703 70.6406C93.0703 70.1927 93.1536 69.7969 93.3203 69.4531C93.4922 69.1042 93.7422 68.8125 94.0703 68.5781C94.4036 68.3438 94.8099 68.1667 95.2891 68.0469C95.7682 67.9219 96.3151 67.8594 96.9297 67.8594H98.4062Z"
                                                    fill="#009688"
                                                />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div
                                            className="p-5 flex flex-col bg-white text-teal-500 justify-center items-center gap-2 border border-gray-500 cursor-pointer rounded-lg"
                                            onClick={() => setAsthma(true)}
                                        >
                                            <svg
                                                width="125"
                                                height="79"
                                                viewBox="0 0 146 79"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="145"
                                                    height="79"
                                                    transform="translate(0.710938)"
                                                    fill="#FFFFFF"
                                                />
                                                <path
                                                    d="M82.1172 0C82.9247 0.15625 83.7434 0.27375 84.5397 0.4775C86.2272 0.91125 87.7372 1.7075 89.0722 2.83C89.4797 3.1725 89.5684 3.59875 89.3047 3.92625C89.0272 4.27 88.6159 4.2825 88.1909 3.92875C85.6897 1.84375 82.7684 1.23125 79.6009 1.4475C77.7497 1.57375 76.0709 2.17125 74.5209 3.18125C73.5522 3.81125 72.5622 4.40625 71.4209 4.69C69.9972 5.0425 68.6347 4.82125 67.2959 4.29375C67.0697 4.205 66.8122 4.115 66.5809 4.13875C66.0834 4.19125 65.8709 4.75125 66.1584 5.225C67.2209 6.97 68.6147 8.36875 70.4622 9.28125C72.1709 10.125 73.9922 10.4325 75.8747 10.3038C76.6084 10.2537 77.0359 10.4925 77.3684 11.13C77.7409 11.8463 78.2022 12.5162 78.6472 13.2413C79.7184 12.3975 80.8934 12.1137 82.1797 12.4862C83.1697 12.7725 83.9059 13.3988 84.4084 14.3013C85.3084 15.92 84.9197 18.4062 82.5072 19.56C83.4059 21.0325 84.3022 22.4975 85.2209 24.0037C87.9597 21.8425 90.3822 19.4737 91.5134 16.1425C92.6884 12.6812 92.1322 9.36875 90.2334 6.27C89.8384 5.62625 89.8309 5.2325 90.2547 4.97375C90.6622 4.725 91.0184 4.87875 91.4134 5.49875C94.1047 9.72375 94.6297 15.7563 90.4872 20.8612C89.1897 22.46 87.7372 23.89 86.0759 25.1038C85.8084 25.3 85.6822 25.495 85.6959 25.8325C85.7222 26.4563 85.6797 27.0837 85.7172 27.7062C85.7297 27.92 85.8434 28.1875 86.0022 28.325C87.1134 29.2888 87.8759 30.4925 88.4834 31.8075C88.6634 32.1963 88.5097 32.5925 88.1584 32.7575C87.8122 32.92 87.4522 32.805 87.2397 32.4388C87.0447 32.1012 86.8784 31.7475 86.6922 31.405C85.0209 28.3288 82.4047 27.8375 79.4897 29.0637C77.2622 30 75.6197 31.6612 74.2097 33.5725C73.1759 34.9737 72.3572 36.4963 71.7034 38.1087C71.6447 38.2537 71.5922 38.4012 71.5247 38.5412C71.3322 38.9375 70.9622 39.0988 70.6034 38.9487C70.2409 38.7962 70.0647 38.4212 70.2309 38.0112C70.5309 37.275 70.8422 36.5413 71.1959 35.83C72.1034 34.0013 73.2422 32.3275 74.6534 30.845C74.7522 30.7412 74.8547 30.585 74.8572 30.4513C74.8759 29.61 74.8672 28.7675 74.8672 27.8962C74.5809 27.8162 74.3147 27.7463 74.0497 27.6675C70.7959 26.6987 68.5422 23.7262 68.5247 20.335C68.5072 16.96 68.5159 13.585 68.5272 10.2113C68.5272 9.89625 68.4309 9.70875 68.1734 9.52375C66.8622 8.58125 65.8259 7.37875 64.9797 6.01C64.4347 5.12875 64.4784 4.215 65.0847 3.48375C65.7109 2.7275 66.6122 2.4925 67.5797 2.89125C68.9059 3.43875 70.2497 3.7075 71.6259 3.14375C72.2572 2.885 72.8697 2.55625 73.4422 2.18375C75.2384 1.015 77.1522 0.1975 79.3172 0.0625C79.3759 0.05875 79.4334 0.0225 79.4909 0.00125C80.3659 0.00125 81.2409 0.00125 82.1159 0.00125L82.1172 0ZM84.2947 27.3575C84.2947 26.9988 84.2622 26.685 84.3009 26.38C84.4084 25.5425 84.1234 24.8488 83.6759 24.1525C82.7047 22.6437 81.7884 21.0987 80.8609 19.5625C80.5047 18.9737 80.7397 18.4913 81.4184 18.3713C82.5284 18.1737 83.3347 17.355 83.4297 16.325C83.5297 15.2513 82.9497 14.2838 81.9722 13.895C80.9872 13.5038 79.9209 13.8237 79.2234 14.7212C78.7622 15.315 78.2509 15.29 77.8522 14.6438C77.3272 13.7937 76.7984 12.9463 76.2972 12.0825C76.1334 11.8 75.9447 11.7113 75.6259 11.725C74.1784 11.785 72.7584 11.6037 71.3772 11.1587C70.9059 11.0062 70.4472 10.8175 69.9522 10.6337V19.4587C70.1634 19.5087 70.3597 19.5513 70.5522 19.6038C71.7222 19.9175 72.7609 20.46 73.5884 21.3638C74.1572 21.985 74.1322 22.3075 73.4797 22.8325C72.8272 23.3575 72.1709 23.8787 71.5022 24.4137C72.5759 25.6087 73.8659 26.3038 75.4084 26.5275C76.0834 26.625 76.2734 26.8238 76.2784 27.4988C76.2822 28.085 76.2784 28.6712 76.2784 29.355C78.7034 27.5537 81.2359 26.5238 84.2934 27.3587L84.2947 27.3575ZM70.6309 23.3C71.2272 22.8237 71.7184 22.43 72.3384 21.935C71.5172 21.545 70.8084 21.2075 70.0984 20.87C70.0384 20.9237 69.9784 20.9788 69.9184 21.0325C70.1497 21.7675 70.3809 22.5025 70.6309 23.3Z"
                                                    fill="#98A2B3"
                                                />
                                                <path
                                                    d="M68.9924 47.9999C68.6186 47.7749 68.5086 47.4474 68.5149 47.0149C68.5461 44.9761 68.8036 42.9686 69.2849 40.9886C69.4136 40.4599 69.7436 40.2161 70.1774 40.3161C70.5949 40.4111 70.7911 40.7936 70.6574 41.3274C70.2286 43.0299 70.0061 44.7586 69.9374 46.5511H75.3411C75.3411 46.3824 75.3411 46.2011 75.3411 46.0199C75.3411 43.3324 75.3411 40.6449 75.3411 37.9574C75.3411 37.8174 75.3361 37.6761 75.3461 37.5361C75.3749 37.1049 75.6211 36.8474 76.0074 36.8324C76.4124 36.8161 76.7199 37.0749 76.7411 37.5186C76.7699 38.1111 76.7524 38.7061 76.7524 39.2999C76.7524 40.2499 76.7524 41.1999 76.7524 42.1799H84.0936C84.0936 42.0086 84.0936 41.8424 84.0936 41.6761C84.0936 40.3486 84.0911 39.0199 84.0949 37.6924C84.0974 37.1399 84.3574 36.8324 84.8011 36.8311C85.2512 36.8299 85.5012 37.1274 85.5012 37.6886C85.5037 40.4536 85.5024 43.2199 85.5024 45.9849C85.5024 46.1686 85.5024 46.3524 85.5024 46.5624H89.8962C89.8612 45.9049 89.8424 45.2549 89.7886 44.6086C89.5236 41.4161 89.1286 38.2436 88.2261 35.1561C88.0674 34.6136 88.2262 34.2461 88.6387 34.1174C89.0787 33.9799 89.4237 34.2111 89.5837 34.7674C90.4074 37.6286 90.8611 40.5561 91.1086 43.5161C91.2061 44.6824 91.2386 45.8549 91.3199 47.0236C91.3499 47.4599 91.2236 47.7861 90.8361 47.9986H68.9924V47.9999ZM84.0736 43.6561H76.7886V46.5636H84.0736V43.6561Z"
                                                    fill="#98A2B3"
                                                />
                                                <path
                                                    d="M53.6462 8.11492C53.6249 7.86867 53.6074 7.65242 53.5887 7.43492C53.4762 6.18492 54.3399 5.15867 55.5912 5.08742C56.1199 5.05742 56.6537 5.05617 57.1837 5.08742C58.2299 5.15242 59.0124 5.90367 59.1599 6.94617C59.2162 7.34367 59.2687 7.74242 59.3212 8.12867C60.3149 8.27617 60.3637 8.34992 60.4724 9.34867C60.7499 11.8924 61.0424 14.4349 61.3312 16.9774C61.3399 17.0537 61.3662 17.1274 61.3987 17.2612C61.9212 17.2612 62.4462 17.2599 62.9712 17.2612C64.4574 17.2674 65.3312 18.1374 65.3349 19.6174C65.3374 20.3824 65.3424 21.1474 65.3337 21.9124C65.3199 23.1924 64.4249 24.0949 63.1474 24.1012C61.3362 24.1099 59.5249 24.1174 57.7137 24.0974C55.9749 24.0787 54.5062 22.8174 54.2987 21.0899C53.8249 17.1549 53.3974 13.2149 52.9587 9.27617C52.8749 8.52367 52.9449 8.42992 53.6462 8.11242V8.11492ZM60.5474 22.6699C60.5349 22.5099 60.5274 22.3737 60.5112 22.2374C60.3699 20.9812 60.2262 19.7249 60.0849 18.4687C59.7649 15.6312 59.4424 12.7924 59.1312 9.95367C59.0987 9.65242 58.9674 9.57492 58.6787 9.57742C57.3824 9.59117 56.0862 9.58242 54.7899 9.58492C54.6837 9.58492 54.5787 9.60742 54.4287 9.62367C54.4537 9.90492 54.4712 10.1674 54.4999 10.4274C54.5787 11.1412 54.6637 11.8537 54.7437 12.5674C55.0587 15.3437 55.3662 18.1199 55.6924 20.8949C55.7974 21.7824 56.5162 22.5812 57.3949 22.6499C58.4312 22.7299 59.4774 22.6687 60.5474 22.6687V22.6699ZM61.5324 18.6837C61.6849 20.0424 61.8312 21.3499 61.9799 22.6724C62.0937 22.6837 62.1699 22.6974 62.2449 22.6974C62.5574 22.6987 62.8699 22.7087 63.1812 22.6937C63.6362 22.6712 63.9099 22.4112 63.9199 21.9537C63.9362 21.1112 63.9337 20.2674 63.9199 19.4249C63.9137 19.0112 63.6774 18.7249 63.2699 18.6937C62.7149 18.6524 62.1549 18.6837 61.5324 18.6837ZM57.8812 8.17742C57.8412 7.82867 57.8199 7.53617 57.7737 7.24742C57.6849 6.68492 57.4687 6.49867 56.9012 6.48742C56.5262 6.47992 56.1412 6.43492 55.7799 6.50367C55.5187 6.55367 55.1287 6.72492 55.0799 6.91367C54.9862 7.28367 55.0862 7.70367 55.1224 8.10242C55.1249 8.13367 55.2524 8.17367 55.3224 8.17367C56.1612 8.17867 56.9999 8.17742 57.8812 8.17742Z"
                                                    fill="#98A2B3"
                                                />
                                                <path
                                                    d="M66.0736 39.7801C65.5674 39.7901 65.2749 39.3639 65.4149 38.8001C65.9761 36.5364 66.9461 34.4551 68.2474 32.5264C68.6136 31.9839 69.0174 31.4664 69.4274 30.9564C69.7774 30.5201 70.1749 30.4526 70.5186 30.7289C70.8599 31.0039 70.8661 31.4151 70.5211 31.8389C68.7636 33.9964 67.4924 36.4026 66.7899 39.1014C66.6911 39.4826 66.5086 39.7601 66.0736 39.7801Z"
                                                    fill="#98A2B3"
                                                />
                                                <path
                                                    d="M67.373 30.4875C67.2418 30.7338 67.168 30.9038 67.0668 31.0538C66.4243 32.0038 65.768 32.945 65.1305 33.8988C64.8843 34.2663 64.5355 34.4088 64.1818 34.2338C63.8268 34.0575 63.6805 33.68 63.8655 33.28C64.4193 32.0838 65.1755 31.0175 66.088 30.0738C66.2393 29.9175 66.618 29.8538 66.8343 29.9238C67.0493 29.9938 67.1918 30.2863 67.3718 30.4875H67.373Z"
                                                    fill="#98A2B3"
                                                />
                                                <path
                                                    d="M84.2944 27.3573C81.2369 26.5223 78.7056 27.5523 76.2794 29.3536C76.2794 28.6698 76.2831 28.0836 76.2794 27.4973C76.2744 26.8223 76.0856 26.6248 75.4094 26.5261C73.8669 26.3023 72.5769 25.6073 71.5031 24.4123C72.1719 23.8773 72.8281 23.3561 73.4806 22.8311C74.1319 22.3061 74.1581 21.9836 73.5894 21.3623C72.7619 20.4598 71.7231 19.9161 70.5531 19.6023C70.3594 19.5511 70.1631 19.5086 69.9531 19.4573V10.6323C70.4481 10.8161 70.9069 11.0061 71.3781 11.1573C72.7581 11.6023 74.1794 11.7836 75.6269 11.7236C75.9456 11.7098 76.1344 11.7986 76.2981 12.0811C76.7994 12.9448 77.3281 13.7936 77.8531 14.6423C78.2531 15.2886 78.7631 15.3136 79.2244 14.7198C79.9219 13.8236 80.9894 13.5023 81.9731 13.8936C82.9494 14.2823 83.5294 15.2486 83.4306 16.3236C83.3356 17.3536 82.5294 18.1723 81.4194 18.3698C80.7406 18.4898 80.5056 18.9723 80.8619 19.5611C81.7906 21.0973 82.7069 22.6423 83.6769 24.1511C84.1244 24.8461 84.4094 25.5411 84.3019 26.3786C84.2631 26.6836 84.2956 26.9986 84.2956 27.3561L84.2944 27.3573ZM75.3669 16.5748C75.2631 16.4661 75.1094 16.1911 74.8769 16.0811C74.2219 15.7711 73.5319 15.5336 72.8606 15.2573C72.4919 15.1061 72.1781 15.1636 71.9581 15.4948C71.7356 15.8273 71.7856 16.1736 72.0981 16.4123C72.8306 16.9698 73.6694 17.3036 74.5794 17.4261C75.0094 17.4836 75.3544 17.1561 75.3669 16.5748Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M70.6305 23.3001C70.3792 22.5026 70.1492 21.7676 69.918 21.0326C69.978 20.9789 70.038 20.9239 70.098 20.8701C70.8067 21.2076 71.5167 21.5439 72.338 21.9351C71.7192 22.4301 71.2267 22.8239 70.6305 23.3001Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M84.0731 43.6562V46.5638H76.7881V43.6562H84.0731Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M60.5475 22.6714C59.4775 22.6714 58.43 22.7326 57.395 22.6526C56.515 22.5839 55.7962 21.7851 55.6925 20.8976C55.3662 18.1226 55.0587 15.3464 54.7437 12.5701C54.6625 11.8564 54.5787 11.1439 54.5 10.4301C54.4712 10.1701 54.4537 9.90764 54.4287 9.62639C54.5787 9.60889 54.685 9.58764 54.79 9.58764C56.0862 9.58514 57.3825 9.59389 58.6787 9.58014C58.9675 9.57764 59.0975 9.65389 59.1312 9.95639C59.4425 12.7951 59.765 15.6326 60.085 18.4714C60.2262 19.7276 60.37 20.9839 60.5112 22.2401C60.5262 22.3751 60.5337 22.5114 60.5475 22.6726V22.6714Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M61.5322 18.6837C62.1547 18.6837 62.7147 18.6525 63.2697 18.6937C63.6772 18.7237 63.9122 19.0112 63.9197 19.425C63.9322 20.2675 63.936 21.1112 63.9197 21.9537C63.911 22.4112 63.636 22.6712 63.181 22.6937C62.8697 22.7087 62.5572 22.7 62.2447 22.6975C62.1697 22.6975 62.0935 22.6837 61.9797 22.6725C61.8322 21.3512 61.6847 20.0425 61.5322 18.6837Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M57.8813 8.17774C57 8.17774 56.1613 8.17899 55.3225 8.17399C55.2525 8.17399 55.125 8.13274 55.1225 8.10274C55.0863 7.70399 54.9863 7.28399 55.08 6.91399C55.1288 6.72524 55.5188 6.55399 55.78 6.50399C56.1413 6.43399 56.5263 6.48024 56.9013 6.48774C57.4688 6.49899 57.685 6.68524 57.7738 7.24774C57.82 7.53649 57.8413 7.82899 57.8813 8.17774Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M75.367 16.5748C75.3545 17.156 75.0095 17.4848 74.5795 17.426C73.6695 17.3035 72.8307 16.9698 72.0982 16.4123C71.7857 16.1748 71.7357 15.8285 71.9582 15.4948C72.1795 15.1648 72.4932 15.106 72.8607 15.2573C73.532 15.5335 74.222 15.771 74.877 16.081C75.1095 16.191 75.2632 16.4648 75.367 16.5748Z"
                                                    fill="#98A2B3"
                                                />
                                                <path
                                                    d="M50.9844 63.1406L47.5859 73H45.5312L49.8125 61.625H51.125L50.9844 63.1406ZM53.8281 73L50.4219 63.1406L50.2734 61.625H51.5938L55.8906 73H53.8281ZM53.6641 68.7812V70.3359H47.4766V68.7812H53.6641ZM61.7188 70.7109C61.7188 70.5234 61.6719 70.3542 61.5781 70.2031C61.4844 70.0469 61.3047 69.9062 61.0391 69.7812C60.7786 69.6562 60.3932 69.5417 59.8828 69.4375C59.4349 69.3385 59.0234 69.2214 58.6484 69.0859C58.2786 68.9453 57.9609 68.776 57.6953 68.5781C57.4297 68.3802 57.224 68.1458 57.0781 67.875C56.9323 67.6042 56.8594 67.2917 56.8594 66.9375C56.8594 66.5938 56.9349 66.2682 57.0859 65.9609C57.237 65.6536 57.4531 65.3828 57.7344 65.1484C58.0156 64.9141 58.3568 64.7292 58.7578 64.5938C59.1641 64.4583 59.6172 64.3906 60.1172 64.3906C60.8255 64.3906 61.4323 64.5104 61.9375 64.75C62.4479 64.9844 62.8385 65.3047 63.1094 65.7109C63.3802 66.112 63.5156 66.5651 63.5156 67.0703H61.6328C61.6328 66.8464 61.5755 66.638 61.4609 66.4453C61.3516 66.2474 61.1849 66.0885 60.9609 65.9688C60.737 65.8438 60.4557 65.7812 60.1172 65.7812C59.7943 65.7812 59.526 65.8333 59.3125 65.9375C59.1042 66.0365 58.9479 66.1667 58.8438 66.3281C58.7448 66.4896 58.6953 66.6667 58.6953 66.8594C58.6953 67 58.7214 67.1276 58.7734 67.2422C58.8307 67.3516 58.9245 67.4531 59.0547 67.5469C59.1849 67.6354 59.362 67.7188 59.5859 67.7969C59.8151 67.875 60.1016 67.9505 60.4453 68.0234C61.0911 68.1589 61.6458 68.3333 62.1094 68.5469C62.5781 68.7552 62.9375 69.026 63.1875 69.3594C63.4375 69.6875 63.5625 70.1042 63.5625 70.6094C63.5625 70.9844 63.4818 71.3281 63.3203 71.6406C63.1641 71.9479 62.9349 72.2161 62.6328 72.4453C62.3307 72.6693 61.9688 72.8438 61.5469 72.9688C61.1302 73.0938 60.6615 73.1562 60.1406 73.1562C59.375 73.1562 58.7266 73.0208 58.1953 72.75C57.6641 72.474 57.2604 72.1224 56.9844 71.6953C56.7135 71.263 56.5781 70.8151 56.5781 70.3516H58.3984C58.4193 70.7005 58.5156 70.9792 58.6875 71.1875C58.8646 71.3906 59.0833 71.5391 59.3438 71.6328C59.6094 71.7214 59.8828 71.7656 60.1641 71.7656C60.5026 71.7656 60.7865 71.7214 61.0156 71.6328C61.2448 71.5391 61.4193 71.4141 61.5391 71.2578C61.6589 71.0964 61.7188 70.9141 61.7188 70.7109ZM69.0859 64.5469V65.9219H64.3203V64.5469H69.0859ZM65.6953 62.4766H67.5781V70.6641C67.5781 70.9245 67.6146 71.125 67.6875 71.2656C67.7656 71.401 67.8724 71.4922 68.0078 71.5391C68.1432 71.5859 68.3021 71.6094 68.4844 71.6094C68.6146 71.6094 68.7396 71.6016 68.8594 71.5859C68.9792 71.5703 69.0755 71.5547 69.1484 71.5391L69.1562 72.9766C69 73.0234 68.8177 73.0651 68.6094 73.1016C68.4062 73.138 68.1719 73.1562 67.9062 73.1562C67.474 73.1562 67.0911 73.0807 66.7578 72.9297C66.4245 72.7734 66.1641 72.5208 65.9766 72.1719C65.7891 71.8229 65.6953 71.3594 65.6953 70.7812V62.4766ZM72.3984 61V73H70.5234V61H72.3984ZM72.0703 68.4609L71.4609 68.4531C71.4661 67.8698 71.5469 67.3307 71.7031 66.8359C71.8646 66.3411 72.0885 65.9115 72.375 65.5469C72.6667 65.1771 73.0156 64.8932 73.4219 64.6953C73.8281 64.4922 74.2786 64.3906 74.7734 64.3906C75.1901 64.3906 75.5651 64.4479 75.8984 64.5625C76.237 64.6771 76.5286 64.862 76.7734 65.1172C77.0182 65.3672 77.2031 65.6953 77.3281 66.1016C77.4583 66.5026 77.5234 66.9922 77.5234 67.5703V73H75.6328V67.5547C75.6328 67.1484 75.5729 66.8255 75.4531 66.5859C75.3385 66.3464 75.1693 66.1745 74.9453 66.0703C74.7214 65.9609 74.4479 65.9062 74.125 65.9062C73.7865 65.9062 73.487 65.974 73.2266 66.1094C72.9714 66.2448 72.7578 66.4297 72.5859 66.6641C72.4141 66.8984 72.2839 67.1693 72.1953 67.4766C72.112 67.7839 72.0703 68.112 72.0703 68.4609ZM81.3125 66.2656V73H79.4297V64.5469H81.2031L81.3125 66.2656ZM81.0078 68.4609L80.3672 68.4531C80.3672 67.8698 80.4401 67.3307 80.5859 66.8359C80.7318 66.3411 80.9453 65.9115 81.2266 65.5469C81.5078 65.1771 81.8568 64.8932 82.2734 64.6953C82.6953 64.4922 83.1823 64.3906 83.7344 64.3906C84.1198 64.3906 84.4714 64.4479 84.7891 64.5625C85.112 64.6719 85.3906 64.8464 85.625 65.0859C85.8646 65.3255 86.0469 65.6328 86.1719 66.0078C86.3021 66.3828 86.3672 66.8359 86.3672 67.3672V73H84.4844V67.5312C84.4844 67.1198 84.4219 66.7969 84.2969 66.5625C84.1771 66.3281 84.0026 66.1615 83.7734 66.0625C83.5495 65.9583 83.2812 65.9062 82.9688 65.9062C82.6146 65.9062 82.3125 65.974 82.0625 66.1094C81.8177 66.2448 81.6172 66.4297 81.4609 66.6641C81.3047 66.8984 81.1901 67.1693 81.1172 67.4766C81.0443 67.7839 81.0078 68.112 81.0078 68.4609ZM86.25 67.9609L85.3672 68.1562C85.3672 67.6458 85.4375 67.1641 85.5781 66.7109C85.724 66.2526 85.9349 65.8516 86.2109 65.5078C86.4922 65.1589 86.8385 64.8854 87.25 64.6875C87.6615 64.4896 88.1328 64.3906 88.6641 64.3906C89.0964 64.3906 89.4818 64.4505 89.8203 64.5703C90.1641 64.6849 90.4557 64.8672 90.6953 65.1172C90.9349 65.3672 91.1172 65.6927 91.2422 66.0938C91.3672 66.4896 91.4297 66.9688 91.4297 67.5312V73H89.5391V67.5234C89.5391 67.0964 89.4766 66.7656 89.3516 66.5312C89.2318 66.2969 89.0599 66.1354 88.8359 66.0469C88.612 65.9531 88.3438 65.9062 88.0312 65.9062C87.7396 65.9062 87.4818 65.9609 87.2578 66.0703C87.0391 66.1745 86.8542 66.3229 86.7031 66.5156C86.5521 66.7031 86.4375 66.9193 86.3594 67.1641C86.2865 67.4089 86.25 67.6745 86.25 67.9609ZM98.1328 71.3047V67.2734C98.1328 66.9714 98.0781 66.7109 97.9688 66.4922C97.8594 66.2734 97.6927 66.1042 97.4688 65.9844C97.25 65.8646 96.974 65.8047 96.6406 65.8047C96.3333 65.8047 96.0677 65.8568 95.8438 65.9609C95.6198 66.0651 95.4453 66.2057 95.3203 66.3828C95.1953 66.5599 95.1328 66.7604 95.1328 66.9844H93.2578C93.2578 66.651 93.3385 66.3281 93.5 66.0156C93.6615 65.7031 93.8958 65.4245 94.2031 65.1797C94.5104 64.9349 94.8776 64.7422 95.3047 64.6016C95.7318 64.4609 96.2109 64.3906 96.7422 64.3906C97.3776 64.3906 97.9401 64.4974 98.4297 64.7109C98.9245 64.9245 99.3125 65.2474 99.5938 65.6797C99.8802 66.1068 100.023 66.6432 100.023 67.2891V71.0469C100.023 71.4323 100.049 71.7786 100.102 72.0859C100.159 72.388 100.24 72.651 100.344 72.875V73H98.4141C98.3255 72.7969 98.2552 72.5391 98.2031 72.2266C98.1562 71.9089 98.1328 71.6016 98.1328 71.3047ZM98.4062 67.8594L98.4219 69.0234H97.0703C96.7214 69.0234 96.4141 69.0573 96.1484 69.125C95.8828 69.1875 95.6615 69.2812 95.4844 69.4062C95.3073 69.5312 95.1745 69.6823 95.0859 69.8594C94.9974 70.0365 94.9531 70.237 94.9531 70.4609C94.9531 70.6849 95.0052 70.8906 95.1094 71.0781C95.2135 71.2604 95.3646 71.4036 95.5625 71.5078C95.7656 71.612 96.0104 71.6641 96.2969 71.6641C96.6823 71.6641 97.0182 71.5859 97.3047 71.4297C97.5964 71.2682 97.8255 71.0729 97.9922 70.8438C98.1589 70.6094 98.2474 70.388 98.2578 70.1797L98.8672 71.0156C98.8047 71.2292 98.6979 71.4583 98.5469 71.7031C98.3958 71.9479 98.1979 72.1823 97.9531 72.4062C97.7135 72.625 97.4245 72.8047 97.0859 72.9453C96.7526 73.0859 96.3672 73.1562 95.9297 73.1562C95.3776 73.1562 94.8854 73.0469 94.4531 72.8281C94.0208 72.6042 93.6823 72.3047 93.4375 71.9297C93.1927 71.5495 93.0703 71.1198 93.0703 70.6406C93.0703 70.1927 93.1536 69.7969 93.3203 69.4531C93.4922 69.1042 93.7422 68.8125 94.0703 68.5781C94.4036 68.3438 94.8099 68.1667 95.2891 68.0469C95.7682 67.9219 96.3151 67.8594 96.9297 67.8594H98.4062Z"
                                                    fill="#98A2B3"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className=" flex space-x-2 pt-2">
                                {otherDisease ? (
                                    <div
                                        className="p-5 flex flex-col bg-white text-teal-500 justify-center items-center gap-2 border border-teal-500 cursor-pointer rounded-lg"
                                        onClick={() => setOtherDisease(false)}
                                    >
                                        <svg
                                            width="128"
                                            height="79"
                                            viewBox="0 0 128 79"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M66.85 26.9952C66.85 28.2165 66.8525 29.3715 66.85 30.5252C66.8488 31.2327 66.5938 31.494 65.8988 31.4952C64.54 31.499 63.1813 31.4977 61.8213 31.4952C61.0963 31.494 60.85 31.2415 60.8488 30.499C60.8463 29.3465 60.8488 28.194 60.8488 26.994C59.6875 26.994 58.5675 26.994 57.4475 26.994C56.5563 26.994 56.3488 26.784 56.3488 25.8902C56.3488 24.5777 56.3463 23.2652 56.3488 21.9527C56.35 21.2477 56.6038 20.994 57.3088 20.9927C58.4638 20.9902 59.6188 20.9927 60.8488 20.9927C60.8488 20.8277 60.8488 20.6802 60.8488 20.5327C60.8488 19.4865 60.845 18.439 60.85 17.3927C60.8538 16.774 61.1213 16.4965 61.7288 16.494C63.135 16.4877 64.54 16.489 65.9463 16.494C66.5813 16.4965 66.8463 16.769 66.8488 17.4177C66.8538 18.5877 66.8488 19.7577 66.8488 20.9715C67.0213 20.9802 67.17 20.9927 67.32 20.9927C68.3825 20.9952 69.445 20.9877 70.5063 20.9965C71.0588 21.0015 71.3438 21.284 71.3463 21.839C71.3538 23.2765 71.355 24.714 71.3463 26.1515C71.3425 26.7202 71.0513 26.9915 70.4588 26.9952C69.275 27.0015 68.09 26.9965 66.8488 26.9965L66.85 26.9952ZM65.35 29.979C65.35 28.774 65.3475 27.619 65.35 26.4652C65.3513 25.7577 65.605 25.499 66.3013 25.4965C67.3313 25.4927 68.3625 25.4965 69.3925 25.4965C69.54 25.4965 69.6875 25.4965 69.8238 25.4965V22.4952C69.645 22.4952 69.4925 22.4952 69.34 22.4952C68.325 22.4952 67.31 22.4977 66.295 22.4952C65.6175 22.4927 65.355 22.234 65.35 21.5677C65.3463 21.0527 65.35 20.5365 65.35 20.0215C65.35 19.3565 65.35 18.6902 65.35 18.029H62.3488C62.3488 19.2177 62.3513 20.3715 62.3488 21.5265C62.3475 22.234 62.0925 22.4927 61.3975 22.4952C60.3675 22.499 59.3363 22.4952 58.3063 22.4952C58.1588 22.4952 58.0113 22.4952 57.875 22.4952V25.4965C58.0538 25.4965 58.2063 25.4965 58.3588 25.4965C59.3888 25.4965 60.42 25.4927 61.45 25.4977C62.0663 25.5015 62.3388 25.7702 62.3475 26.379C62.3538 26.8315 62.3488 27.2852 62.3488 27.7377C62.3488 28.4815 62.3488 29.2252 62.3488 29.9802H65.35V29.979Z"
                                                fill="#009688"
                                            />
                                            <path
                                                d="M62.8084 44.9348C61.2471 44.9348 59.6846 44.9798 58.1259 44.9198C56.9284 44.8748 55.8096 44.4485 54.7346 43.926C53.0646 43.1135 51.3959 42.3011 49.7246 41.4936C48.3234 40.8173 46.8446 40.486 45.2871 40.4985C44.2871 40.506 43.2871 40.5023 42.2871 40.4985C41.6946 40.496 41.3521 40.2198 41.3496 39.7523C41.3471 39.2835 41.6909 38.9873 42.2796 39.0023C43.9634 39.0473 45.6609 39.001 47.3259 39.206C48.4009 39.3385 49.4634 39.771 50.4696 40.211C52.1546 40.9485 53.7921 41.796 55.4471 42.6023C56.6746 43.1998 57.9646 43.5085 59.3334 43.5035C61.7396 43.4948 64.1459 43.5035 66.5521 43.496C66.7784 43.496 67.0196 43.4523 67.2296 43.366C69.1796 42.5723 71.1196 41.7535 73.0746 40.971C73.4521 40.8198 73.5196 40.611 73.4571 40.256C73.3309 39.536 72.9309 39.116 72.2071 38.9948C71.2671 38.8373 70.3784 39.101 69.4896 39.3423C68.9934 39.4773 68.5084 39.6535 68.0171 39.8048C67.4771 39.971 67.0809 39.8123 66.9359 39.3785C66.7884 38.936 66.9921 38.536 67.5321 38.3935C68.7946 38.0585 70.0546 37.6685 71.3421 37.4823C73.0921 37.2285 74.5096 38.1498 74.8396 39.661C74.9509 40.1735 74.8859 40.7448 74.8009 41.2735C74.7284 41.7185 74.4009 42.0348 73.9646 42.2148C71.7871 43.111 69.6121 44.0148 67.4309 44.9048C67.2496 44.9785 67.0359 44.9973 66.8371 44.9985C65.4934 45.006 64.1496 45.0023 62.8059 45.0023C62.8059 44.9798 62.8059 44.9573 62.8059 44.9348H62.8084Z"
                                                fill="#009688"
                                            />
                                            <path
                                                d="M64.9031 3.05364C66.4643 3.05364 68.0268 3.01114 69.5856 3.06739C70.7193 3.10864 71.7856 3.49239 72.8068 3.98489C74.6056 4.85239 76.3968 5.73364 78.2018 6.58989C79.5056 7.20864 80.8893 7.48864 82.3318 7.48739C83.3631 7.48739 84.3943 7.48489 85.4256 7.48739C86.0118 7.48989 86.3581 7.77614 86.3531 8.24364C86.3481 8.70864 86.0043 8.99989 85.4118 8.98364C83.7281 8.93739 82.0306 8.98364 80.3656 8.77739C79.2906 8.64364 78.2281 8.21114 77.2218 7.76989C75.4943 7.01114 73.8181 6.13864 72.1168 5.31989C70.9443 4.75489 69.7068 4.48239 68.4043 4.48489C65.9831 4.48989 63.5606 4.48239 61.1393 4.49239C60.9131 4.49239 60.6731 4.54114 60.4631 4.62614C58.5131 5.41989 56.5718 6.23614 54.6181 7.01989C54.2681 7.15989 54.1806 7.34864 54.2343 7.69364C54.3531 8.45364 54.7718 8.97614 55.5481 8.97364C56.4243 8.97114 57.3056 8.80614 58.1731 8.64864C58.6906 8.55489 59.1843 8.33489 59.6918 8.17864C60.2281 8.01364 60.6281 8.17864 60.7668 8.61489C60.9068 9.05864 60.7018 9.45489 60.1593 9.59739C58.8806 9.93364 57.6043 10.3174 56.3006 10.5111C54.7743 10.7374 53.4743 10.0161 53.0106 8.75489C52.8106 8.20864 52.7868 7.56364 52.8268 6.97239C52.8668 6.38489 53.2518 5.96489 53.8306 5.72989C55.9406 4.87364 58.0406 3.99364 60.1506 3.13489C60.3743 3.04364 60.6318 2.99614 60.8743 2.99364C62.2181 2.97989 63.5618 2.98739 64.9056 2.98739C64.9056 3.00989 64.9056 3.03364 64.9056 3.05614L64.9031 3.05364Z"
                                                fill="#009688"
                                            />
                                            <path
                                                d="M63.7715 8.31898C63.5402 9.32273 63.8027 10.154 64.5177 10.7802C64.9902 11.1952 65.549 11.5452 66.1227 11.804C67.5865 12.4627 69.0852 13.0427 70.559 13.6802C70.7815 13.7765 71.0202 13.9727 71.124 14.1852C71.959 15.894 73.3728 16.7615 75.1928 17.0552C76.4878 17.2652 77.7402 17.074 78.9677 16.6415C79.184 16.5652 79.419 16.4977 79.6453 16.4965C81.5815 16.4852 83.519 16.4927 85.4552 16.4877C85.854 16.4877 86.1627 16.6115 86.3065 17.0052C86.4952 17.5215 86.1052 17.9865 85.469 17.989C83.6728 17.9952 81.8765 17.9852 80.0802 17.9977C79.8065 17.999 79.524 18.054 79.2628 18.1377C76.5678 19.0027 73.9815 18.9065 71.6602 17.1327C71.019 16.6427 70.564 15.9127 70.0127 15.3027C69.8627 15.1377 69.699 14.9527 69.5027 14.8677C68.129 14.2727 66.7402 13.714 65.3677 13.1177C64.3802 12.689 63.509 12.089 62.8852 11.1877C61.9602 9.84898 62.0027 8.43648 62.6177 7.00023C62.809 6.55398 63.1952 6.45523 63.7277 6.67523C65.4277 7.37773 67.1265 8.08648 68.8252 8.79148C69.8902 9.23398 70.9565 9.67773 72.0227 10.1152C72.3865 10.264 72.639 10.4965 72.6202 10.9165C72.5952 11.4727 72.0615 11.7565 71.4753 11.5152C69.7303 10.799 67.989 10.0715 66.2465 9.34773C65.4402 9.01273 64.6353 8.67898 63.7703 8.31898H63.7715Z"
                                                fill="#009688"
                                            />
                                            <path
                                                d="M63.9343 39.6652C64.1618 38.6152 63.8706 37.7652 63.1068 37.1377C62.5968 36.7177 62.0031 36.3714 61.3981 36.1002C59.9893 35.4702 58.5481 34.9127 57.1293 34.3064C56.9306 34.2214 56.7056 34.0614 56.6156 33.8752C55.5993 31.7777 53.8268 30.8927 51.6131 30.8764C50.6668 30.8689 49.7168 31.1714 48.7693 31.3352C48.4656 31.3877 48.1631 31.4889 47.8593 31.4914C45.9693 31.5064 44.0793 31.5027 42.1893 31.4964C41.6756 31.4952 41.3493 31.1877 41.3506 30.7464C41.3506 30.3052 41.6768 30.0152 42.1918 29.9989C42.3006 29.9952 42.4106 29.9989 42.5193 29.9989C44.2068 29.9989 45.8931 30.0052 47.5806 29.9927C47.8693 29.9902 48.1693 29.9377 48.4443 29.8477C50.6031 29.1402 52.7343 29.0952 54.8281 30.0789C56.0193 30.6389 56.9381 31.5014 57.6543 32.6039C57.8093 32.8427 58.0718 33.0602 58.3343 33.1752C59.6043 33.7339 60.8956 34.2439 62.1718 34.7902C63.2193 35.2389 64.1581 35.8489 64.8193 36.8064C65.7431 38.1464 65.6956 39.5602 65.0806 40.9952C64.8893 41.4414 64.5018 41.5352 63.9681 41.3152C62.1381 40.5577 60.3106 39.7952 58.4818 39.0352C57.5606 38.6514 56.6381 38.2689 55.7181 37.8839C55.1731 37.6564 54.9618 37.2739 55.1356 36.8402C55.3081 36.4102 55.7418 36.2727 56.2806 36.4952C58.6293 37.4677 60.9756 38.4439 63.3231 39.4189C63.5093 39.4964 63.6981 39.5702 63.9368 39.6664L63.9343 39.6652Z"
                                                fill="#009688"
                                            />
                                            <path
                                                d="M79.5906 24.0848C79.5556 27.4773 78.5581 30.556 76.5594 33.306C76.3406 33.606 76.0694 33.8535 75.7031 33.721C75.4731 33.6373 75.1919 33.3923 75.1494 33.1785C75.1019 32.9335 75.2356 32.5998 75.3919 32.3773C76.4456 30.881 77.2269 29.2648 77.6694 27.4873C78.1706 25.4748 78.2406 23.4473 77.8594 21.406C77.8419 21.3135 77.8256 21.2223 77.8169 21.1285C77.7644 20.6023 77.9919 20.261 78.4369 20.1935C78.8594 20.1298 79.2206 20.4098 79.2981 20.9223C79.4144 21.6935 79.5031 22.4685 79.5844 23.2435C79.6131 23.521 79.5894 23.8048 79.5894 24.086L79.5906 24.0848Z"
                                                fill="#009688"
                                            />
                                            <path
                                                d="M48.013 23.95C48.1342 20.5463 49.1205 17.4638 51.1205 14.715C51.4692 14.235 51.893 14.1325 52.273 14.4213C52.6492 14.7075 52.6705 15.1213 52.3155 15.615C51.2567 17.0863 50.4867 18.6913 50.0417 20.4525C49.5255 22.4963 49.4555 24.5513 49.8467 26.6238C49.8705 26.7463 49.8892 26.87 49.898 26.995C49.9317 27.4613 49.6967 27.7888 49.2905 27.8475C48.8692 27.9088 48.5155 27.6963 48.443 27.2363C48.2742 26.145 48.1517 25.045 48.0117 23.9488L48.013 23.95Z"
                                                fill="#009688"
                                            />
                                            <path
                                                d="M54.9633 12.6975C54.9583 13.1238 54.5508 13.5313 54.1245 13.5338C53.7233 13.5363 53.3758 13.2013 53.3683 12.8038C53.3608 12.3788 53.8133 11.9325 54.242 11.9425C54.6533 11.9525 54.9683 12.2813 54.9633 12.6975Z"
                                                fill="#009688"
                                            />
                                            <path
                                                d="M74.4468 35.2602C74.4493 35.6539 74.0343 36.0477 73.6193 36.0439C73.2168 36.0414 72.8743 35.7027 72.8731 35.3052C72.8706 34.8914 73.2593 34.5239 73.6981 34.5239C74.0943 34.5239 74.4443 34.8677 74.4481 35.2602H74.4468Z"
                                                fill="#009688"
                                            />
                                            <path
                                                d="M65.35 29.9786H62.3487C62.3487 29.2223 62.3487 28.4798 62.3487 27.7361C62.3487 27.2836 62.3537 26.8298 62.3475 26.3773C62.3387 25.7698 62.0662 25.4998 61.45 25.4961C60.42 25.4911 59.3887 25.4948 58.3587 25.4948C58.2062 25.4948 58.0537 25.4948 57.875 25.4948V22.4936C58.01 22.4936 58.1587 22.4936 58.3062 22.4936C59.3362 22.4936 60.3675 22.4961 61.3975 22.4936C62.0925 22.4911 62.3475 22.2311 62.3487 21.5248C62.3512 20.3711 62.3487 19.2161 62.3487 18.0273H65.35C65.35 18.6886 65.35 19.3548 65.35 20.0198C65.35 20.5348 65.3463 21.0511 65.35 21.5661C65.355 22.2323 65.6175 22.4911 66.295 22.4936C67.31 22.4973 68.325 22.4936 69.34 22.4936C69.4925 22.4936 69.645 22.4936 69.8237 22.4936V25.4948C69.6875 25.4948 69.54 25.4948 69.3925 25.4948C68.3625 25.4948 67.3313 25.4923 66.3013 25.4948C65.605 25.4973 65.3525 25.7548 65.35 26.4636C65.3475 27.6173 65.35 28.7723 65.35 29.9773V29.9786Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M54.3398 67V67.625C54.3398 68.4844 54.2279 69.2552 54.0039 69.9375C53.7799 70.6198 53.4596 71.2005 53.043 71.6797C52.6315 72.1589 52.1367 72.526 51.5586 72.7812C50.9805 73.0312 50.3398 73.1562 49.6367 73.1562C48.9388 73.1562 48.3008 73.0312 47.7227 72.7812C47.1497 72.526 46.6523 72.1589 46.2305 71.6797C45.8086 71.2005 45.4805 70.6198 45.2461 69.9375C45.0169 69.2552 44.9023 68.4844 44.9023 67.625V67C44.9023 66.1406 45.0169 65.3724 45.2461 64.6953C45.4753 64.013 45.7982 63.4323 46.2148 62.9531C46.6367 62.4688 47.1341 62.1016 47.707 61.8516C48.2852 61.5964 48.9232 61.4688 49.6211 61.4688C50.3242 61.4688 50.9648 61.5964 51.543 61.8516C52.1211 62.1016 52.6185 62.4688 53.0352 62.9531C53.4518 63.4323 53.7721 64.013 53.9961 64.6953C54.2253 65.3724 54.3398 66.1406 54.3398 67ZM52.3789 67.625V66.9844C52.3789 66.349 52.3164 65.7891 52.1914 65.3047C52.0716 64.8151 51.8919 64.4062 51.6523 64.0781C51.418 63.7448 51.1289 63.4948 50.7852 63.3281C50.4414 63.1562 50.0534 63.0703 49.6211 63.0703C49.1888 63.0703 48.8034 63.1562 48.4648 63.3281C48.1263 63.4948 47.8372 63.7448 47.5977 64.0781C47.3633 64.4062 47.1836 64.8151 47.0586 65.3047C46.9336 65.7891 46.8711 66.349 46.8711 66.9844V67.625C46.8711 68.2604 46.9336 68.8229 47.0586 69.3125C47.1836 69.8021 47.3659 70.2161 47.6055 70.5547C47.8503 70.888 48.1419 71.1406 48.4805 71.3125C48.819 71.4792 49.2044 71.5625 49.6367 71.5625C50.0742 71.5625 50.4622 71.4792 50.8008 71.3125C51.1393 71.1406 51.4258 70.888 51.6602 70.5547C51.8945 70.2161 52.0716 69.8021 52.1914 69.3125C52.3164 68.8229 52.3789 68.2604 52.3789 67.625ZM59.9883 64.5469V65.9219H55.2227V64.5469H59.9883ZM56.5977 62.4766H58.4805V70.6641C58.4805 70.9245 58.5169 71.125 58.5898 71.2656C58.668 71.401 58.7747 71.4922 58.9102 71.5391C59.0456 71.5859 59.2044 71.6094 59.3867 71.6094C59.5169 71.6094 59.6419 71.6016 59.7617 71.5859C59.8815 71.5703 59.9779 71.5547 60.0508 71.5391L60.0586 72.9766C59.9023 73.0234 59.7201 73.0651 59.5117 73.1016C59.3086 73.138 59.0742 73.1562 58.8086 73.1562C58.3763 73.1562 57.9935 73.0807 57.6602 72.9297C57.3268 72.7734 57.0664 72.5208 56.8789 72.1719C56.6914 71.8229 56.5977 71.3594 56.5977 70.7812V62.4766ZM63.3008 61V73H61.4258V61H63.3008ZM62.9727 68.4609L62.3633 68.4531C62.3685 67.8698 62.4492 67.3307 62.6055 66.8359C62.7669 66.3411 62.9909 65.9115 63.2773 65.5469C63.569 65.1771 63.918 64.8932 64.3242 64.6953C64.7305 64.4922 65.181 64.3906 65.6758 64.3906C66.0924 64.3906 66.4674 64.4479 66.8008 64.5625C67.1393 64.6771 67.431 64.862 67.6758 65.1172C67.9206 65.3672 68.1055 65.6953 68.2305 66.1016C68.3607 66.5026 68.4258 66.9922 68.4258 67.5703V73H66.5352V67.5547C66.5352 67.1484 66.4753 66.8255 66.3555 66.5859C66.2409 66.3464 66.0716 66.1745 65.8477 66.0703C65.6237 65.9609 65.3503 65.9062 65.0273 65.9062C64.6888 65.9062 64.3893 65.974 64.1289 66.1094C63.8737 66.2448 63.6602 66.4297 63.4883 66.6641C63.3164 66.8984 63.1862 67.1693 63.0977 67.4766C63.0143 67.7839 62.9727 68.112 62.9727 68.4609ZM74.0586 73.1562C73.4336 73.1562 72.8685 73.0547 72.3633 72.8516C71.8633 72.6432 71.4362 72.3542 71.082 71.9844C70.7331 71.6146 70.4648 71.1797 70.2773 70.6797C70.0898 70.1797 69.9961 69.6406 69.9961 69.0625V68.75C69.9961 68.0885 70.0924 67.4896 70.2852 66.9531C70.4779 66.4167 70.7461 65.9583 71.0898 65.5781C71.4336 65.1927 71.8398 64.8984 72.3086 64.6953C72.7773 64.4922 73.2852 64.3906 73.832 64.3906C74.4362 64.3906 74.9648 64.4922 75.418 64.6953C75.8711 64.8984 76.2461 65.1849 76.543 65.5547C76.8451 65.9193 77.069 66.3542 77.2148 66.8594C77.3659 67.3646 77.4414 67.9219 77.4414 68.5312V69.3359H70.9102V67.9844H75.582V67.8359C75.5716 67.4974 75.5039 67.1797 75.3789 66.8828C75.2591 66.5859 75.0742 66.3464 74.8242 66.1641C74.5742 65.9818 74.2409 65.8906 73.8242 65.8906C73.5117 65.8906 73.2331 65.9583 72.9883 66.0938C72.7487 66.224 72.5482 66.4141 72.3867 66.6641C72.2253 66.9141 72.1003 67.2161 72.0117 67.5703C71.9284 67.9193 71.8867 68.3125 71.8867 68.75V69.0625C71.8867 69.4323 71.9362 69.776 72.0352 70.0938C72.1393 70.4062 72.2904 70.6797 72.4883 70.9141C72.6862 71.1484 72.9258 71.3333 73.207 71.4688C73.4883 71.599 73.8086 71.6641 74.168 71.6641C74.6211 71.6641 75.0247 71.5729 75.3789 71.3906C75.7331 71.2083 76.0404 70.9505 76.3008 70.6172L77.293 71.5781C77.1107 71.8438 76.8737 72.099 76.582 72.3438C76.2904 72.5833 75.9336 72.7786 75.5117 72.9297C75.0951 73.0807 74.6107 73.1562 74.0586 73.1562ZM80.8008 66.1562V73H78.918V64.5469H80.7148L80.8008 66.1562ZM83.3867 64.4922L83.3711 66.2422C83.2565 66.2214 83.1315 66.2057 82.9961 66.1953C82.8659 66.1849 82.7357 66.1797 82.6055 66.1797C82.2826 66.1797 81.9987 66.2266 81.7539 66.3203C81.5091 66.4089 81.3034 66.5391 81.1367 66.7109C80.9753 66.8776 80.8503 67.0807 80.7617 67.3203C80.6732 67.5599 80.6211 67.8281 80.6055 68.125L80.1758 68.1562C80.1758 67.625 80.2279 67.1328 80.332 66.6797C80.4362 66.2266 80.5924 65.8281 80.8008 65.4844C81.0143 65.1406 81.2799 64.8724 81.5977 64.6797C81.9206 64.487 82.293 64.3906 82.7148 64.3906C82.8294 64.3906 82.9518 64.401 83.082 64.4219C83.2174 64.4427 83.319 64.4661 83.3867 64.4922Z"
                                                fill="#009688"
                                            />
                                        </svg>
                                    </div>
                                ) : (
                                    <div
                                        className="p-5 flex flex-col bg-white text-teal-500 justify-center items-center gap-2 border border-gray-500 cursor-pointer rounded-lg"
                                        onClick={() => setOtherDisease(true)}
                                    >
                                        <svg
                                            width="128"
                                            height="79"
                                            viewBox="0 0 128 79"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M66.85 26.9952C66.85 28.2165 66.8525 29.3715 66.85 30.5252C66.8488 31.2327 66.5938 31.494 65.8988 31.4952C64.54 31.499 63.1813 31.4977 61.8213 31.4952C61.0963 31.494 60.85 31.2415 60.8488 30.499C60.8463 29.3465 60.8488 28.194 60.8488 26.994C59.6875 26.994 58.5675 26.994 57.4475 26.994C56.5563 26.994 56.3488 26.784 56.3488 25.8902C56.3488 24.5777 56.3463 23.2652 56.3488 21.9527C56.35 21.2477 56.6038 20.994 57.3088 20.9927C58.4638 20.9902 59.6188 20.9927 60.8488 20.9927C60.8488 20.8277 60.8488 20.6802 60.8488 20.5327C60.8488 19.4865 60.845 18.439 60.85 17.3927C60.8538 16.774 61.1213 16.4965 61.7288 16.494C63.135 16.4877 64.54 16.489 65.9463 16.494C66.5813 16.4965 66.8463 16.769 66.8488 17.4177C66.8538 18.5877 66.8488 19.7577 66.8488 20.9715C67.0213 20.9802 67.17 20.9927 67.32 20.9927C68.3825 20.9952 69.445 20.9877 70.5063 20.9965C71.0588 21.0015 71.3438 21.284 71.3463 21.839C71.3538 23.2765 71.355 24.714 71.3463 26.1515C71.3425 26.7202 71.0513 26.9915 70.4588 26.9952C69.275 27.0015 68.09 26.9965 66.8488 26.9965L66.85 26.9952ZM65.35 29.979C65.35 28.774 65.3475 27.619 65.35 26.4652C65.3513 25.7577 65.605 25.499 66.3013 25.4965C67.3313 25.4927 68.3625 25.4965 69.3925 25.4965C69.54 25.4965 69.6875 25.4965 69.8238 25.4965V22.4952C69.645 22.4952 69.4925 22.4952 69.34 22.4952C68.325 22.4952 67.31 22.4977 66.295 22.4952C65.6175 22.4927 65.355 22.234 65.35 21.5677C65.3463 21.0527 65.35 20.5365 65.35 20.0215C65.35 19.3565 65.35 18.6902 65.35 18.029H62.3488C62.3488 19.2177 62.3513 20.3715 62.3488 21.5265C62.3475 22.234 62.0925 22.4927 61.3975 22.4952C60.3675 22.499 59.3363 22.4952 58.3063 22.4952C58.1588 22.4952 58.0113 22.4952 57.875 22.4952V25.4965C58.0538 25.4965 58.2063 25.4965 58.3588 25.4965C59.3888 25.4965 60.42 25.4927 61.45 25.4977C62.0663 25.5015 62.3388 25.7702 62.3475 26.379C62.3538 26.8315 62.3488 27.2852 62.3488 27.7377C62.3488 28.4815 62.3488 29.2252 62.3488 29.9802H65.35V29.979Z"
                                                fill="#98A2B3"
                                            />
                                            <path
                                                d="M62.8084 44.9348C61.2471 44.9348 59.6846 44.9798 58.1259 44.9198C56.9284 44.8748 55.8096 44.4485 54.7346 43.926C53.0646 43.1135 51.3959 42.3011 49.7246 41.4936C48.3234 40.8173 46.8446 40.486 45.2871 40.4985C44.2871 40.506 43.2871 40.5023 42.2871 40.4985C41.6946 40.496 41.3521 40.2198 41.3496 39.7523C41.3471 39.2835 41.6909 38.9873 42.2796 39.0023C43.9634 39.0473 45.6609 39.001 47.3259 39.206C48.4009 39.3385 49.4634 39.771 50.4696 40.211C52.1546 40.9485 53.7921 41.796 55.4471 42.6023C56.6746 43.1998 57.9646 43.5085 59.3334 43.5035C61.7396 43.4948 64.1459 43.5035 66.5521 43.496C66.7784 43.496 67.0196 43.4523 67.2296 43.366C69.1796 42.5723 71.1196 41.7535 73.0746 40.971C73.4521 40.8198 73.5196 40.611 73.4571 40.256C73.3309 39.536 72.9309 39.116 72.2071 38.9948C71.2671 38.8373 70.3784 39.101 69.4896 39.3423C68.9934 39.4773 68.5084 39.6535 68.0171 39.8048C67.4771 39.971 67.0809 39.8123 66.9359 39.3785C66.7884 38.936 66.9921 38.536 67.5321 38.3935C68.7946 38.0585 70.0546 37.6685 71.3421 37.4823C73.0921 37.2285 74.5096 38.1498 74.8396 39.661C74.9509 40.1735 74.8859 40.7448 74.8009 41.2735C74.7284 41.7185 74.4009 42.0348 73.9646 42.2148C71.7871 43.111 69.6121 44.0148 67.4309 44.9048C67.2496 44.9785 67.0359 44.9973 66.8371 44.9985C65.4934 45.006 64.1496 45.0023 62.8059 45.0023C62.8059 44.9798 62.8059 44.9573 62.8059 44.9348H62.8084Z"
                                                fill="#98A2B3"
                                            />
                                            <path
                                                d="M64.9031 3.05364C66.4643 3.05364 68.0268 3.01114 69.5856 3.06739C70.7193 3.10864 71.7856 3.49239 72.8068 3.98489C74.6056 4.85239 76.3968 5.73364 78.2018 6.58989C79.5056 7.20864 80.8893 7.48864 82.3318 7.48739C83.3631 7.48739 84.3943 7.48489 85.4256 7.48739C86.0118 7.48989 86.3581 7.77614 86.3531 8.24364C86.3481 8.70864 86.0043 8.99989 85.4118 8.98364C83.7281 8.93739 82.0306 8.98364 80.3656 8.77739C79.2906 8.64364 78.2281 8.21114 77.2218 7.76989C75.4943 7.01114 73.8181 6.13864 72.1168 5.31989C70.9443 4.75489 69.7068 4.48239 68.4043 4.48489C65.9831 4.48989 63.5606 4.48239 61.1393 4.49239C60.9131 4.49239 60.6731 4.54114 60.4631 4.62614C58.5131 5.41989 56.5718 6.23614 54.6181 7.01989C54.2681 7.15989 54.1806 7.34864 54.2343 7.69364C54.3531 8.45364 54.7718 8.97614 55.5481 8.97364C56.4243 8.97114 57.3056 8.80614 58.1731 8.64864C58.6906 8.55489 59.1843 8.33489 59.6918 8.17864C60.2281 8.01364 60.6281 8.17864 60.7668 8.61489C60.9068 9.05864 60.7018 9.45489 60.1593 9.59739C58.8806 9.93364 57.6043 10.3174 56.3006 10.5111C54.7743 10.7374 53.4743 10.0161 53.0106 8.75489C52.8106 8.20864 52.7868 7.56364 52.8268 6.97239C52.8668 6.38489 53.2518 5.96489 53.8306 5.72989C55.9406 4.87364 58.0406 3.99364 60.1506 3.13489C60.3743 3.04364 60.6318 2.99614 60.8743 2.99364C62.2181 2.97989 63.5618 2.98739 64.9056 2.98739C64.9056 3.00989 64.9056 3.03364 64.9056 3.05614L64.9031 3.05364Z"
                                                fill="#98A2B3"
                                            />
                                            <path
                                                d="M63.7715 8.31898C63.5402 9.32273 63.8027 10.154 64.5177 10.7802C64.9902 11.1952 65.549 11.5452 66.1227 11.804C67.5865 12.4627 69.0852 13.0427 70.559 13.6802C70.7815 13.7765 71.0202 13.9727 71.124 14.1852C71.959 15.894 73.3728 16.7615 75.1928 17.0552C76.4878 17.2652 77.7402 17.074 78.9677 16.6415C79.184 16.5652 79.419 16.4977 79.6453 16.4965C81.5815 16.4852 83.519 16.4927 85.4552 16.4877C85.854 16.4877 86.1627 16.6115 86.3065 17.0052C86.4952 17.5215 86.1052 17.9865 85.469 17.989C83.6728 17.9952 81.8765 17.9852 80.0802 17.9977C79.8065 17.999 79.524 18.054 79.2628 18.1377C76.5678 19.0027 73.9815 18.9065 71.6602 17.1327C71.019 16.6427 70.564 15.9127 70.0127 15.3027C69.8627 15.1377 69.699 14.9527 69.5027 14.8677C68.129 14.2727 66.7402 13.714 65.3677 13.1177C64.3802 12.689 63.509 12.089 62.8852 11.1877C61.9602 9.84898 62.0027 8.43648 62.6177 7.00023C62.809 6.55398 63.1952 6.45523 63.7277 6.67523C65.4277 7.37773 67.1265 8.08648 68.8252 8.79148C69.8902 9.23398 70.9565 9.67773 72.0227 10.1152C72.3865 10.264 72.639 10.4965 72.6202 10.9165C72.5952 11.4727 72.0615 11.7565 71.4753 11.5152C69.7303 10.799 67.989 10.0715 66.2465 9.34773C65.4402 9.01273 64.6353 8.67898 63.7703 8.31898H63.7715Z"
                                                fill="#98A2B3"
                                            />
                                            <path
                                                d="M63.9343 39.6652C64.1618 38.6152 63.8706 37.7652 63.1068 37.1377C62.5968 36.7177 62.0031 36.3714 61.3981 36.1002C59.9893 35.4702 58.5481 34.9127 57.1293 34.3064C56.9306 34.2214 56.7056 34.0614 56.6156 33.8752C55.5993 31.7777 53.8268 30.8927 51.6131 30.8764C50.6668 30.8689 49.7168 31.1714 48.7693 31.3352C48.4656 31.3877 48.1631 31.4889 47.8593 31.4914C45.9693 31.5064 44.0793 31.5027 42.1893 31.4964C41.6756 31.4952 41.3493 31.1877 41.3506 30.7464C41.3506 30.3052 41.6768 30.0152 42.1918 29.9989C42.3006 29.9952 42.4106 29.9989 42.5193 29.9989C44.2068 29.9989 45.8931 30.0052 47.5806 29.9927C47.8693 29.9902 48.1693 29.9377 48.4443 29.8477C50.6031 29.1402 52.7343 29.0952 54.8281 30.0789C56.0193 30.6389 56.9381 31.5014 57.6543 32.6039C57.8093 32.8427 58.0718 33.0602 58.3343 33.1752C59.6043 33.7339 60.8956 34.2439 62.1718 34.7902C63.2193 35.2389 64.1581 35.8489 64.8193 36.8064C65.7431 38.1464 65.6956 39.5602 65.0806 40.9952C64.8893 41.4414 64.5018 41.5352 63.9681 41.3152C62.1381 40.5577 60.3106 39.7952 58.4818 39.0352C57.5606 38.6514 56.6381 38.2689 55.7181 37.8839C55.1731 37.6564 54.9618 37.2739 55.1356 36.8402C55.3081 36.4102 55.7418 36.2727 56.2806 36.4952C58.6293 37.4677 60.9756 38.4439 63.3231 39.4189C63.5093 39.4964 63.6981 39.5702 63.9368 39.6664L63.9343 39.6652Z"
                                                fill="#98A2B3"
                                            />
                                            <path
                                                d="M79.5906 24.0848C79.5556 27.4773 78.5581 30.556 76.5594 33.306C76.3406 33.606 76.0694 33.8535 75.7031 33.721C75.4731 33.6373 75.1919 33.3923 75.1494 33.1785C75.1019 32.9335 75.2356 32.5998 75.3919 32.3773C76.4456 30.881 77.2269 29.2648 77.6694 27.4873C78.1706 25.4748 78.2406 23.4473 77.8594 21.406C77.8419 21.3135 77.8256 21.2223 77.8169 21.1285C77.7644 20.6023 77.9919 20.261 78.4369 20.1935C78.8594 20.1298 79.2206 20.4098 79.2981 20.9223C79.4144 21.6935 79.5031 22.4685 79.5844 23.2435C79.6131 23.521 79.5894 23.8048 79.5894 24.086L79.5906 24.0848Z"
                                                fill="#98A2B3"
                                            />
                                            <path
                                                d="M48.013 23.95C48.1342 20.5463 49.1205 17.4638 51.1205 14.715C51.4692 14.235 51.893 14.1325 52.273 14.4213C52.6492 14.7075 52.6705 15.1213 52.3155 15.615C51.2567 17.0863 50.4867 18.6913 50.0417 20.4525C49.5255 22.4963 49.4555 24.5513 49.8467 26.6238C49.8705 26.7463 49.8892 26.87 49.898 26.995C49.9317 27.4613 49.6967 27.7888 49.2905 27.8475C48.8692 27.9088 48.5155 27.6963 48.443 27.2363C48.2742 26.145 48.1517 25.045 48.0117 23.9488L48.013 23.95Z"
                                                fill="#98A2B3"
                                            />
                                            <path
                                                d="M54.9633 12.6975C54.9583 13.1238 54.5508 13.5313 54.1245 13.5338C53.7233 13.5363 53.3758 13.2013 53.3683 12.8038C53.3608 12.3788 53.8133 11.9325 54.242 11.9425C54.6533 11.9525 54.9683 12.2813 54.9633 12.6975Z"
                                                fill="#98A2B3"
                                            />
                                            <path
                                                d="M74.4468 35.2602C74.4493 35.6539 74.0343 36.0477 73.6193 36.0439C73.2168 36.0414 72.8743 35.7027 72.8731 35.3052C72.8706 34.8914 73.2593 34.5239 73.6981 34.5239C74.0943 34.5239 74.4443 34.8677 74.4481 35.2602H74.4468Z"
                                                fill="#98A2B3"
                                            />
                                            <path
                                                d="M65.35 29.9786H62.3487C62.3487 29.2223 62.3487 28.4798 62.3487 27.7361C62.3487 27.2836 62.3537 26.8298 62.3475 26.3773C62.3387 25.7698 62.0662 25.4998 61.45 25.4961C60.42 25.4911 59.3887 25.4948 58.3587 25.4948C58.2062 25.4948 58.0537 25.4948 57.875 25.4948V22.4936C58.01 22.4936 58.1587 22.4936 58.3062 22.4936C59.3362 22.4936 60.3675 22.4961 61.3975 22.4936C62.0925 22.4911 62.3475 22.2311 62.3487 21.5248C62.3512 20.3711 62.3487 19.2161 62.3487 18.0273H65.35C65.35 18.6886 65.35 19.3548 65.35 20.0198C65.35 20.5348 65.3463 21.0511 65.35 21.5661C65.355 22.2323 65.6175 22.4911 66.295 22.4936C67.31 22.4973 68.325 22.4936 69.34 22.4936C69.4925 22.4936 69.645 22.4936 69.8237 22.4936V25.4948C69.6875 25.4948 69.54 25.4948 69.3925 25.4948C68.3625 25.4948 67.3313 25.4923 66.3013 25.4948C65.605 25.4973 65.3525 25.7548 65.35 26.4636C65.3475 27.6173 65.35 28.7723 65.35 29.9773V29.9786Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M54.3398 67V67.625C54.3398 68.4844 54.2279 69.2552 54.0039 69.9375C53.7799 70.6198 53.4596 71.2005 53.043 71.6797C52.6315 72.1589 52.1367 72.526 51.5586 72.7812C50.9805 73.0312 50.3398 73.1562 49.6367 73.1562C48.9388 73.1562 48.3008 73.0312 47.7227 72.7812C47.1497 72.526 46.6523 72.1589 46.2305 71.6797C45.8086 71.2005 45.4805 70.6198 45.2461 69.9375C45.0169 69.2552 44.9023 68.4844 44.9023 67.625V67C44.9023 66.1406 45.0169 65.3724 45.2461 64.6953C45.4753 64.013 45.7982 63.4323 46.2148 62.9531C46.6367 62.4688 47.1341 62.1016 47.707 61.8516C48.2852 61.5964 48.9232 61.4688 49.6211 61.4688C50.3242 61.4688 50.9648 61.5964 51.543 61.8516C52.1211 62.1016 52.6185 62.4688 53.0352 62.9531C53.4518 63.4323 53.7721 64.013 53.9961 64.6953C54.2253 65.3724 54.3398 66.1406 54.3398 67ZM52.3789 67.625V66.9844C52.3789 66.349 52.3164 65.7891 52.1914 65.3047C52.0716 64.8151 51.8919 64.4062 51.6523 64.0781C51.418 63.7448 51.1289 63.4948 50.7852 63.3281C50.4414 63.1562 50.0534 63.0703 49.6211 63.0703C49.1888 63.0703 48.8034 63.1562 48.4648 63.3281C48.1263 63.4948 47.8372 63.7448 47.5977 64.0781C47.3633 64.4062 47.1836 64.8151 47.0586 65.3047C46.9336 65.7891 46.8711 66.349 46.8711 66.9844V67.625C46.8711 68.2604 46.9336 68.8229 47.0586 69.3125C47.1836 69.8021 47.3659 70.2161 47.6055 70.5547C47.8503 70.888 48.1419 71.1406 48.4805 71.3125C48.819 71.4792 49.2044 71.5625 49.6367 71.5625C50.0742 71.5625 50.4622 71.4792 50.8008 71.3125C51.1393 71.1406 51.4258 70.888 51.6602 70.5547C51.8945 70.2161 52.0716 69.8021 52.1914 69.3125C52.3164 68.8229 52.3789 68.2604 52.3789 67.625ZM59.9883 64.5469V65.9219H55.2227V64.5469H59.9883ZM56.5977 62.4766H58.4805V70.6641C58.4805 70.9245 58.5169 71.125 58.5898 71.2656C58.668 71.401 58.7747 71.4922 58.9102 71.5391C59.0456 71.5859 59.2044 71.6094 59.3867 71.6094C59.5169 71.6094 59.6419 71.6016 59.7617 71.5859C59.8815 71.5703 59.9779 71.5547 60.0508 71.5391L60.0586 72.9766C59.9023 73.0234 59.7201 73.0651 59.5117 73.1016C59.3086 73.138 59.0742 73.1562 58.8086 73.1562C58.3763 73.1562 57.9935 73.0807 57.6602 72.9297C57.3268 72.7734 57.0664 72.5208 56.8789 72.1719C56.6914 71.8229 56.5977 71.3594 56.5977 70.7812V62.4766ZM63.3008 61V73H61.4258V61H63.3008ZM62.9727 68.4609L62.3633 68.4531C62.3685 67.8698 62.4492 67.3307 62.6055 66.8359C62.7669 66.3411 62.9909 65.9115 63.2773 65.5469C63.569 65.1771 63.918 64.8932 64.3242 64.6953C64.7305 64.4922 65.181 64.3906 65.6758 64.3906C66.0924 64.3906 66.4674 64.4479 66.8008 64.5625C67.1393 64.6771 67.431 64.862 67.6758 65.1172C67.9206 65.3672 68.1055 65.6953 68.2305 66.1016C68.3607 66.5026 68.4258 66.9922 68.4258 67.5703V73H66.5352V67.5547C66.5352 67.1484 66.4753 66.8255 66.3555 66.5859C66.2409 66.3464 66.0716 66.1745 65.8477 66.0703C65.6237 65.9609 65.3503 65.9062 65.0273 65.9062C64.6888 65.9062 64.3893 65.974 64.1289 66.1094C63.8737 66.2448 63.6602 66.4297 63.4883 66.6641C63.3164 66.8984 63.1862 67.1693 63.0977 67.4766C63.0143 67.7839 62.9727 68.112 62.9727 68.4609ZM74.0586 73.1562C73.4336 73.1562 72.8685 73.0547 72.3633 72.8516C71.8633 72.6432 71.4362 72.3542 71.082 71.9844C70.7331 71.6146 70.4648 71.1797 70.2773 70.6797C70.0898 70.1797 69.9961 69.6406 69.9961 69.0625V68.75C69.9961 68.0885 70.0924 67.4896 70.2852 66.9531C70.4779 66.4167 70.7461 65.9583 71.0898 65.5781C71.4336 65.1927 71.8398 64.8984 72.3086 64.6953C72.7773 64.4922 73.2852 64.3906 73.832 64.3906C74.4362 64.3906 74.9648 64.4922 75.418 64.6953C75.8711 64.8984 76.2461 65.1849 76.543 65.5547C76.8451 65.9193 77.069 66.3542 77.2148 66.8594C77.3659 67.3646 77.4414 67.9219 77.4414 68.5312V69.3359H70.9102V67.9844H75.582V67.8359C75.5716 67.4974 75.5039 67.1797 75.3789 66.8828C75.2591 66.5859 75.0742 66.3464 74.8242 66.1641C74.5742 65.9818 74.2409 65.8906 73.8242 65.8906C73.5117 65.8906 73.2331 65.9583 72.9883 66.0938C72.7487 66.224 72.5482 66.4141 72.3867 66.6641C72.2253 66.9141 72.1003 67.2161 72.0117 67.5703C71.9284 67.9193 71.8867 68.3125 71.8867 68.75V69.0625C71.8867 69.4323 71.9362 69.776 72.0352 70.0938C72.1393 70.4062 72.2904 70.6797 72.4883 70.9141C72.6862 71.1484 72.9258 71.3333 73.207 71.4688C73.4883 71.599 73.8086 71.6641 74.168 71.6641C74.6211 71.6641 75.0247 71.5729 75.3789 71.3906C75.7331 71.2083 76.0404 70.9505 76.3008 70.6172L77.293 71.5781C77.1107 71.8438 76.8737 72.099 76.582 72.3438C76.2904 72.5833 75.9336 72.7786 75.5117 72.9297C75.0951 73.0807 74.6107 73.1562 74.0586 73.1562ZM80.8008 66.1562V73H78.918V64.5469H80.7148L80.8008 66.1562ZM83.3867 64.4922L83.3711 66.2422C83.2565 66.2214 83.1315 66.2057 82.9961 66.1953C82.8659 66.1849 82.7357 66.1797 82.6055 66.1797C82.2826 66.1797 81.9987 66.2266 81.7539 66.3203C81.5091 66.4089 81.3034 66.5391 81.1367 66.7109C80.9753 66.8776 80.8503 67.0807 80.7617 67.3203C80.6732 67.5599 80.6211 67.8281 80.6055 68.125L80.1758 68.1562C80.1758 67.625 80.2279 67.1328 80.332 66.6797C80.4362 66.2266 80.5924 65.8281 80.8008 65.4844C81.0143 65.1406 81.2799 64.8724 81.5977 64.6797C81.9206 64.487 82.293 64.3906 82.7148 64.3906C82.8294 64.3906 82.9518 64.401 83.082 64.4219C83.2174 64.4427 83.319 64.4661 83.3867 64.4922Z"
                                                fill=" #98A2B3"
                                            />
                                        </svg>
                                    </div>
                                )}

                                {otherDisease && (
                                    <div className=" relative bg-teal-100 bg-opacity-50 w-full rounded-lg  h-[3rem] mt-16 border border-solid border-teal-600 focus:outline-none px-5">
                                        <label className=" text-teal-500 block">
                                            Type your other disease
                                        </label>
                                        <input
                                            className=" bg-transparent focus:outline-none w-full"
                                            placeholder="e.g Ulcer"
                                            name="other"
                                            value={formData.other}
                                            onChange={setFormData}
                                        ></input>
                                    </div>
                                )}
                            </div>

                            <p className=" mt-3">
                                any current or past medical conditions?
                            </p>
                            <p className=" mt-3">HEALTH HABITS</p>
                            <div className=" flex space-x-3 w-full">
                                {smoking.map((x) => (
                                    <button
                                        className={` ${
                                            selectedSmoke === x
                                                ? " bg-[#009688] text-white h-[3.5rem] w-[10rem] border border-solid  border-gray-400 hover:bg-teal-600 rounded-lg mx-3"
                                                : "h-[3.5rem] mx-3 w-[10rem] border border-solid border-gray-400 bg-white text-black hover:bg-teal-600 rounded-lg"
                                        }  `}
                                        onClick={() => setSelectedSmoke(x)}
                                        name="healthHabits"
                                    >
                                        {x}
                                            
                                    </button>
                                ))}
                            </div>

                            <p className=" mt-3">Alcohol Consumption</p>
                            <div className=" flex space-x-3 w-full mt-2">
                                <div className=" flex space-x-3 w-full">
                                    {alcoholFrequency.map((x) => (
                                        <button
                                            className={` ${
                                                selectedalcoholFrequency === x
                                                    ? " bg-[#009688] text-white h-[3.5rem] w-[10rem] border border-solid  border-gray-400 hover:bg-teal-600 rounded-lg mx-"
                                                    : "h-[3.5rem] mx-3 w-[10rem] border border-solid border-gray-400 bg-white text-black hover:bg-teal-600 rounded-lg "
                                            }  `}
                                            onClick={() =>
                                                setalcoholFrequency(x)
                                            }
                                            name="alcoholFrequency"
                                        >
                                            {x}
                                                
                                        </button>
                                    ))}
                                </div>

                                <div
                                    className={` relative   w-[40%] rounded-lg  h-[3.5rem]  border border-solid  border-gray-400 focus:outline-none px-5 hover:bg-teal-600 ${
                                        alcohol &&
                                        "bg-teal-600 bg-opacity-100 text-white  hover:bg-teal-600"
                                    }`}
                                >
                                    <div className="flex items-center justify-between  ">
                                        <input
                                            // onChange={(e) => {
                                            //     setAlcoholText(e.target.value);
                                            // }}
                                            type="text"
                                            placeholder="Everyday"
                                            value={alcohol}
                                            required
                                            className={`placeholder:text-black p-[8px 24px] rounded-[8px] outline-none w-[7rem] pt-5 
                                            ${
                                                alcohol
                                                    ? "bg-teal-600 text-white  "
                                                    : "bg-transparent text-black"
                                            }
                                            `}
                                        />

                                        <MdKeyboardArrowDown
                                            cursor={"pointer"}
                                            fontSize={"20px"}
                                            onClick={() =>
                                                setAlcoholDropDown(
                                                    !AlcoholDropDown,
                                                )
                                            }
                                        />
                                        {AlcoholDropDown && (
                                            <div className="absolute bg-gray-100 p-1 w-[100%] left-0 top-[50px]   rounded-lg z-50 ">
                                                {Alcohol.map((alcohol) => (
                                                    <p
                                                        className="cursor-pointer my-2 hover:bg-white text-black "
                                                        onClick={() => {
                                                            setAlcoholGroup(
                                                                alcohol,
                                                            );
                                                            setAlcoholDropDown(
                                                                false,
                                                            );
                                                        }}
                                                        name="alcoholDuration"
                                                        value={
                                                            formData.alcoholDuration
                                                        }
                                                        onChange={setFormData}
                                                    >
                                                        {alcohol}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                   

                                    
                                </div>
                            </div>
                        </div>
                        <button
                            className=" mt-20 rounded-full bg-teal-600 cursor-pointer mx-auto w-[21.25rem] h-[2.5rem]  absolute left-20 text-white"
                            onClick={() => nextForm()}
                        >
                            CONTINUE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};




// const CreatePatientForm2 = ({ formData, setFormData, setStage }) => {
//     return (
//         <div>
//             <div>

//                 <label>Last Name</label>
//                 <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={setFormData}
//                 />
//             </div>
//             <div>
//                 <button className="input" onClick={() => setStage(3)}>
//                     Continue
//                 </button>
//             </div>
//         </div>
//     );
// };

export default CreatePatientForm2;
