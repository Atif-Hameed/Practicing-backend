import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HistoryStudent = () => {

    const [history, setHistory] = useState([])

    const studentHistory = async () => {
        const data = await fetch('http://localhost:5000/history')
        const result = await data.json()
        setHistory(result)
        console.log(result)
    }

    const deleteData = async (id) => {
        const data = await fetch(`http://localhost:5000/delete/${id}`, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        toast.error('Data Deleted Successfully')
        studentHistory()
    }

    useEffect(() => {
        studentHistory();
    }, [])

    return (
        <>
            <div className='w-full h-screen bg-[#fbede0]' >
                <ToastContainer />
                <div className='w-full flex flex-col sm:h-full xl:px-12 lg:px-16 sm:px-8 px-4 sm:py-6 py-3 sm:pb-0 pb-4'>

                    <Link to="/" className='flex gap-3 fixed left-6 cursor-pointer top-2 text-xl font-semibold items-center'>
                        <BsArrowLeft className='mt-0.5' /> Back
                    </Link>

                    <div>
                        <h1 className='text-3xl text-center font-manrope font-bold'>Add Student Data</h1>
                    </div>

                    <div className='my-8'>


                        <table className='w-full border-2 border-black divide-y-2 divide-black'>
                            <tr className='divide-x-2 divide-white' >
                                <th className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>Sr.</th>
                                <th className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>Name</th>
                                <th className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>Father Name</th>
                                <th className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>Age</th>
                                <th className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>Phone</th>
                                <th className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>University</th>
                                <th className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>Email</th>
                                <th className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>Operations</th>
                            </tr>

                            {
                                history.map((value, index) => {
                                    return (
                                        <tr key={index} className='divide-x-2 divide-black' >
                                            <td className='h-10 text-lg px-2 py-1 flex-grow text-center text-black'>{index + 1}</td>
                                            <td className='h-10 text-lg px-2 py-1 flex-grow text-center text-black'>{value.firstName + ' ' + value.lastName}</td>
                                            <td className='h-10 text-lg px-2 py-1 flex-grow text-center text-black'>{value.fatherName}</td>
                                            <td className='h-10 text-lg px-2 py-1 flex-grow text-center text-black'>{value.age}</td>
                                            <td className='h-10 text-lg px-2 py-1 flex-grow text-center text-black'>{value.phone}</td>
                                            <td className='h-10 text-lg px-2 py-1 flex-grow text-center text-black'>{value.university}</td>
                                            <td className='h-10 text-lg px-2 py-1 flex-grow text-center text-black'>{value.email}</td>
                                            <td className='h-10 text-xl px-2 py-1 flex-grow text-center text-black'>
                                                <div className='flex items-center gap-2 mx-auto' >
                                                    <AiOutlineDelete onClick={() => deleteData(value._id)} className='cursor-pointer hover:text-red-500 hover:scale-110' />
                                                    <AiOutlineEdit className='cursor-pointer hover:text-yellow-500 hover:scale-110' />
                                                    <Link to={"/completeData/" + value._id}><BsBoxArrowInUpRight className='cursor-pointer hover:text-green-500 hover:scale-110' /></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </table>



                        {/* <ul className='flex w-full justify-evenly divide-x-2 divide-white'>
                            <li className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>Name</li>
                            <li className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>Father Name</li>
                            <li className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>Age</li>
                            <li className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>Phone</li>
                            <li className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>University</li>
                            <li className='h-10 bg-green-600 text-lg font-semibold px-2 py-1 flex-grow text-center text-white'>Email</li>
                        </ul>
                        {
                            history.map((value, index) => {
                                return (
                                    <ul key={index} className='flex w-full justify-evenly divide-x-2 divide-white'>
                                        <li className='h-10 text-lg px-2 py-1 flex-grow text-center text-black'>{value.firstName + '' + value.lastName}</li>
                                        <li className='h-10 text-lg px-2 py-1 flex-grow text-center text-black'>{value.fatherName}</li>
                                        <li className='h-10 text-lg px-2 py-1 flex-grow text-center text-black'>{value.age}</li>
                                        <li className='h-10 text-lg px-2 py-1 flex-grow text-center text-black'>{value.phone}</li>
                                        <li className='h-10 text-lg px-2 py-1 flex-grow text-center text-black'>{value.university}</li>
                                        <li className='h-10 text-lg px-2 py-1 flex-grow text-center text-black'>{value.email}</li>
                                    </ul>
                                )
                            })
                        } */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default HistoryStudent
