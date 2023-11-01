import React from 'react'
import '../../App.css'
import { Formik, useFormik } from 'formik';
import { validationSchema } from '../../schemas';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddStudent = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        fatherName: '',
        phone: '',
        password: '',
        confirmPass: '',
        email: '',
        city: '',
        country: '',
        university: '',
        campus: '',
        fieldStudy: '',
        degree: '',
        gpa: '',
        cgpa: '',
        age: '',
        martailStatus: '',
        bloodGroup: '',
        height: '',
        weight: '',
        hairColor: '',
    }


    const { errors, values, handleChange, touched, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values)
            const data = await fetch('http://localhost:5000/studentData', {
                method: 'Post',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await data.json()
            console.log(result)
            toast.success('Form submitted successfully!', { position: toast.POSITION.TOP_RIGHT });
            resetForm()
           
        }
    });


    return (
        <>
            <div className='w-full h-full bg-[#fbede0]' >
                <ToastContainer />
                <div className='w-full flex flex-col sm:h-full xl:px-24 lg:px-16 sm:px-8 px-4 sm:py-6 py-3 sm:pb-0 pb-4'>

                    <Link to="/" className='flex gap-3 fixed left-4 cursor-pointer top-2 text-xl font-semibold items-center'>
                        <BsArrowLeft className='mt-0.5' /> Back
                    </Link>

                    <div>
                        <h1 className='text-3xl text-center font-manrope font-bold'>Add Student Data</h1>
                    </div>

                    <form onSubmit={handleSubmit} className='my-8' >
                        <div className='grid grid-cols-3 gap-x-10 gap-y-10'>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="firstName">First Name</label>
                                <input
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="Fname" name="firstName" type="text" placeholder="eg: John" />
                                {errors.firstName && touched.firstName ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.firstName}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="lastName">Last Name</label>
                                <input
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="Lname" name="lastName" type="text" placeholder="eg: Doe" />
                                {errors.lastName && touched.lastName ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.lastName}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="fatherName">Father Name</label>
                                <input
                                    value={values.fatherName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="" name="fatherName" type="text" placeholder="eg: Randy Doe" />
                                {errors.fatherName && touched.fatherName ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.fatherName}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="phone">Phone</label>
                                <input
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="" name="phone" type="tel" placeholder="eg: 03108599455" />
                                {errors.phone && touched.phone ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.phone}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="password">Password</label>
                                <input
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="" name="password" type="password" placeholder="eg: xrns449" />
                                {errors.password && touched.password ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.password}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="confirmPass">Confirm Password</label>
                                <input
                                    value={values.adress}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="password" name="confirmPass" type="password" placeholder="eg: streat #4 New York" />
                                {errors.confirmPass && touched.confirmPass ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.confirmPass}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="email">Email Adress</label>
                                <input
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="email" name="email" type="email" placeholder="eg: John@gmail.com" />
                                {errors.email && touched.email ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.email}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="city">City</label>
                                <input
                                    value={values.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="city" name="city" type="text" placeholder="eg: New York" />
                                {errors.city && touched.city ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.city}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="country">Country</label>
                                <select
                                    value={values.country}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='py-1 px-2  rounded-md' name="country" id="">
                                    <option value="" className="text-gray-400">Select a Country</option>
                                    <option value="pakistan" className="text-black checked:text-black">Pakistan</option>
                                    <option value="india" className="text-black">India</option>
                                    <option value="america" className="text-black">America</option>
                                    <option value="england" className="text-black">England</option>
                                </select>
                                {errors.country && touched.country ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.country}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="university">University</label>
                                <input
                                    value={values.university}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="university" name="university" type="text" placeholder="eg: Oxford" />
                                {errors.university && touched.university ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.university}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="campus">Campus</label>
                                <select
                                    value={values.campus}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='py-1 px-2 rounded-md' name="campus" id="">
                                    <option value="" className="text-gray-400">Select Campus</option>
                                    <option value="Old Campus" className="text-black">Old Campus</option>
                                    <option value="New Campus" className="text-black">New Campus</option>
                                </select>
                                {errors.campus && touched.campus ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.campus}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="fieldStudy">Field of study</label>
                                <input
                                    value={values.fieldStudy}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="degree" name="fieldStudy" type="text" placeholder="eg: Zologoy" />
                                {errors.fieldStudy && touched.fieldStudy ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.fieldStudy}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="degree">Degree</label>
                                <select
                                    value={values.degree}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='py-1 px-2 rounded-md' name="degree" id="">
                                    <option value="" className="text-gray-400">Select Degree</option>
                                    <option value="B.A" className="text-black">B.A</option>
                                    <option value="BSC" className="text-black">BSC</option>
                                    <option value="BS" className="text-black">BS</option>
                                    <option value="MS" className="text-black">MS</option>
                                    <option value="M-Phil" className="text-black">M-Phil</option>
                                    <option value="PHD" className="text-black">PHD</option>
                                </select>
                                {errors.degree && touched.degree ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.degree}</p> : null}
                            </div>

                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="gpa">GPA(last semester)</label>
                                <input
                                    value={values.gpa}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="" name="gpa" type="text" placeholder="eg: 2.5" />
                                {errors.gpa && touched.gpa ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.gpa}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="cgpa">CGPA(Overall semesters)</label>
                                <input
                                    value={values.cgpa}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="" name="cgpa" type="text" placeholder="eg: 3.1" />
                                {errors.cgpa && touched.cgpa ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.cgpa}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="age">Age</label>
                                <input
                                    value={values.age}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="" name="age" type="text" placeholder="eg: 20" />
                                {errors.age && touched.age ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.age}</p> : null}
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="martailStatus">Martial Status</label>
                                <select
                                    value={values.martailStatus}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='py-1 px-2 rounded-md' name="martailStatus" id="">
                                    <option value="" className="text-gray-400">Martail Status</option>
                                    <option value="married" className="text-black">Married</option>
                                    <option value="unmarried" className="text-black">Un Married</option>
                                    <option value="divorced" className="text-black">Divorced</option>
                                </select>
                                {errors.martailStatus && touched.martailStatus ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.martailStatus}</p> : null}
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="bloodGroup">Blood Group</label>
                                <input
                                    value={values.bloodGroup}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="" name="bloodGroup" type="text" placeholder="eg: B+" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="height">Height</label>
                                <input
                                    value={values.height}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="" name="height" type="text" placeholder="eg: 6 Feet" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="weight">Weight</label>
                                <input
                                    value={values.weight}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='px-2 py-1 rounded-md' id="" name="weight" type="text" placeholder="eg: 40 kg" />
                            </div>
                            <div className='flex flex-col relative'>
                                <label className='text-sm text-gray-700 font-medium' htmlFor="hairColor">Hair Color</label>
                                <select
                                    value={values.hairColor}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='py-1 px-2 rounded-md' name="hairColor" id="">
                                    <option value="" className="text-gray-400">Hair Color</option>
                                    <option value="red" className="text-black">Red</option>
                                    <option value="green" className="text-black">Green</option>
                                    <option value="balck" className="text-black">Black</option>
                                    <option value="brown" className="text-black">Brown</option>
                                </select>
                                {errors.hairColor && touched.hairColor ? <p className='text-red-600 text-sm absolute bottom-[-1.2rem] font-semibold left-0'>{errors.hairColor}</p> : null}
                            </div>
                        </div>

                        <div className='w-full flex justify-center mt-12'>
                            <button type="submit" className='bg-red-500 text-white hover:scale-105 duration-200 rounded-md w-72 px-2 py-1 text-lg font-medium'>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default AddStudent
