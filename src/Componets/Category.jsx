import React from 'react'
import category from '../array/category'

const Category = ({category_filter,setcategory_filter}) => {
    return (
        <>
            <div className='w-full flex justify-center items-center mt-2'>
                <p className='w-[80%] flex bg-white font-semibold pl-[10rem] text-2xl pt-4'>Select Category</p>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='w-[80%] bg-white flex justify-center items-center'>
                    <div className='bg-white flex py-4 gap-[3rem] overflow-hidden overflow-x-scroll scroll'>
                        {
                            category.map((item, index) => {
                                return <div className={`flex flex-col justify-center items-center bg-white cursor-pointer `} key={index} onClick={()=>setcategory_filter(prev=>prev===item.name?"All":item.name)}>
                                    <img src={item.img} alt="category_imgs" className={`bg-white w-[4rem] min-w-[5rem] h-[4.5rem] overflow-hidden ${category_filter===item.name ? 'scale-110' : ''}`} />
                                    <p className='font-bold text-[#333]'>{item.name}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category