import React, { useEffect, useState } from 'react'
import '../../App.css'
import { Link, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs';


const CompleteData = () => {

    const [studentData, setStudentData] = useState({})
    const params = useParams()


    const completeData = async () => {
        const data = await fetch(`http://localhost:5000/completeData/${params.id}`)
        const result = await data.json()
        setStudentData(result);
    }

    useEffect(() => {
        completeData()
        console.log(studentData)
    }, [])

    console.log(studentData)

    return (
        <>
            <div className='w-full h-full px-6 bg-[#fbede0] py-12' >

                <Link to="/historyStudent" className='flex gap-3 fixed left-6 cursor-pointer top-2 text-xl font-semibold items-center'>
                    <BsArrowLeft className='mt-0.5' /> Back
                </Link>

                <div>
                    <h1 className='text-3xl text-center font-manrope font-bold'>Complete Student Data</h1>
                </div>


                <div className='flex justify-center gap-12 my-10'>
                    <div className='flex flex-col w-fit divide-y-2 divide-white'>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Name </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Father Name </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Phone Number </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Email Adress </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >City </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Country </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >University </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Campus </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Field Of Study </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Degree </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >GPA </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >CGPA </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Age </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Martial Status </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Blood Group </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Height </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Weight </div>
                        <div className='whitespace-nowrap bg-green-600 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >Hair Color </div>
                    </div>
                    <div className='flex flex-col w-fit divide-y-2 divide-white'>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.firstName + " " + studentData.lastName}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.fatherName}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.phone}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.email}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.city}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.country}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.university}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.campus}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.field}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.degree}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.gpa}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.cgpa}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.age}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.martailStatus}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.bloodGroup}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.height}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.weight}</div>
                        <div className='bg-gray-500 text-lg font-semibold px-4 py-4 flex-grow text-center text-white' >{studentData.hairColor}</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CompleteData
