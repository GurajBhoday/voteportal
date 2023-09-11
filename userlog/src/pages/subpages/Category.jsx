import React from 'react'
import Heart from "../../assets/heart.svg"
import PieChartWithCenteralLabel from '../../components/PieChartWithCenteralLabel'
import SimpleLineChart from '../../components/SimpleLineChart'

const Category = () => {
  return (
    <div className='px-5 w-full space-y-10'>
        <div className='w-full flex justify-between'>
            <h1 className='text-[24px]'>Dashboard</h1>
            <div className='flex space-x-3'>
                <div className='bg-white p-2'>
                <select name="" id="" className='bg-white'>
                    <option value="">10-06-2021</option>
                </select>
                </div>
                <div className='bg-white p-2'>
                <select name="" id="" className='bg-white'>
                    <option value="">10-10-2021</option>
                </select>
                </div>
            </div>
        </div>
        <div className='flex justify-between'>
            <div className='bg-white p-5 rounded w-[276px]'>
                <div className='flex space-x-4'>
                    <div className='w-[60px] h-[60px] bg-[#5B93FF] bg-opacity-10 rounded-full flex justify-center items-center'>
                        <img className='w-[24px] h-[24px]' src={Heart} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-[22px] font-[800]'>178+</h1>
                        <p>Save Products</p>
                    </div>
                </div>
            </div>

            <div className='bg-white p-5 rounded w-[276px]'>
                <div className='flex space-x-4'>
                    <div className='w-[60px] h-[60px] bg-[#5B93FF] bg-opacity-10 rounded-full flex justify-center items-center'>
                        <img className='w-[24px] h-[24px]' src={Heart} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-[22px] font-[800]'>20+</h1>
                        <p>Stock Products</p>
                    </div>
                </div>
            </div>

            <div className='bg-white p-5 rounded w-[276px]'>
                <div className='flex space-x-4'>
                    <div className='w-[60px] h-[60px] bg-[#5B93FF] bg-opacity-10 rounded-full flex justify-center items-center'>
                        <img className='w-[24px] h-[24px]' src={Heart} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-[22px] font-[800]'>190+</h1>
                        <p>Sales Products</p>
                    </div>
                </div>
            </div>

            <div className='bg-white p-5 rounded w-[276px]'>
                <div className='flex space-x-4'>
                    <div className='w-[60px] h-[60px] bg-[#5B93FF] bg-opacity-10 rounded-full flex justify-center items-center'>
                        <img className='w-[24px] h-[24px]' src={Heart} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-[22px] font-[800]'>12+</h1>
                        <p>Job Application</p>
                    </div>
                </div>
            </div>

            <div className='bg-white p-5 rounded w-[276px]'>
                <div className='flex space-x-4'>
                    <div className='w-[60px] h-[60px] bg-[#5B93FF] bg-opacity-10 rounded-full flex justify-center items-center'>
                        <img className='w-[24px] h-[24px]' src={Heart} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-[22px] font-[800]'>12+</h1>
                        <p>Job Application</p>
                    </div>
                </div>
            </div>

            <div className='bg-white p-5 rounded w-[276px]'>
                <div className='flex space-x-4'>
                    <div className='w-[60px] h-[60px] bg-[#5B93FF] bg-opacity-10 rounded-full flex justify-center items-center'>
                        <img className='w-[24px] h-[24px]' src={Heart} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-[22px] font-[800]'>12+</h1>
                        <p>Job Application</p>
                    </div>
                </div>
            </div>

        </div>


        <div className='flex justify-between space-x-10' >
            <div className='w-2/3 h-[408px] bg-white rounded'>
                <SimpleLineChart />
            </div>

            <div className='w-1/3 h-[408px] bg-white rounded flex items-center'>
                <PieChartWithCenteralLabel />
            </div>
        </div>
        

        </div>
  )
}

export default Category