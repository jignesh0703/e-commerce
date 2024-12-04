import React, { useContext } from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/Context'

const Navbar = ({ setwishlist, wishlist, setshowlogin }) => {

    const HandleWishlist = () => {
        if (wishlist) {
            setwishlist(false);  // If wishlist is true, set it to false
        } else {
            setwishlist(true);   // If wishlist is false, set it to true
        }
    }


    return (
        <>
            <div className='flex justify-center items-center py-4 bg-white'>
                <div className='flex gap-4 sm:gap-10 items-center justify-center bg-white'>
                    <button className='md:hidden'><FaBars className='text-[1.3rem]' /></button>
                    <h1 className='text-[#006aaf] font-bold text-[1.5rem] italic bg-white'>Style Haus</h1>
                    <div>
                        <input type="text" placeholder='Search for products, Brands and More' className='hidden md:flex w-[19rem] lg:w-[30rem] xl:w-[30rem] 2xl:w-[50rem] h-[2.5rem] bg-[#f0ffff] pl-6 outline-none'/>
                    </div>
                    <div className='flex items-center gap-1 sm:gap-2 lg:gap-4 xl:gap-6 2xl:gap-10 bg-white'>
                        <button onClick={() => setshowlogin(true)} className="flex gap-1 md:gap-2 items-center h-[2.5rem] px-2 rounded-[8px] hover:bg-[#006aaf] hover:text-white text-[18px] group bg-white"><IoPersonCircleOutline className="text-[1.5rem] group-hover:bg-[#006aaf]" /><span className='hidden sm:flex group-hover:bg-[#006aaf] bg-white'>Login</span><FaAngleDown className="hidden sm:flex transition-transform duration-400 transform group-hover:rotate-180 group-hover:bg-[#006aaf] bg-white" /></button>
                        <Link to="/Cart"><button className='hidden lg:flex items-center gap-2 text-[1.2rem] bg-white'><BsCart3 className='text-[1.5rem]' />Cart</button></Link>
                        <Link to="/Cart"><button className='lg:hidden flex items-center gap-2 text-[1.2rem]'><BsCart3 className='text-[1.5rem]' /></button></Link>
                        <div>
                        <button className='flex ml-2 sm:ml-0' onClick={HandleWishlist}><HiOutlineDotsVertical className='flex text-[1.3rem] bg-white' /></button>
                        {
                            wishlist ? <></> :
                                <div className='absolute ml-[-5rem] mt-1' onClick={() => setwishlist(true)}>
                                    <Link to="wishlist">
                                        <button className='bg-white border py-2 px-4 font-medium'>Wishlist</button>
                                    </Link>
                                </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex md:hidden justify-center items-center w-[100%]'>
                <input type="text" placeholder='Search for products, Brands and More' className=' w-[95%] h-[2.5rem] bg-[#f0ffff] pl-6 outline-none' />
            </div>
        </>
    )
}

export default Navbar