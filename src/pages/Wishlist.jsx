import React, { useContext } from 'react';
import { StoreContext } from '../context/Context';
import { FaStar } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const { product, wishlist, addToWishlist } = useContext(StoreContext);

    if (typeof wishlist !== 'object' || !wishlist) {
        return <p>Error: Wishlist is not properly initialized.</p>;
    }

    const wishlistItems = product.filter(item => wishlist[item.id] > 0);

    const handleRemoveFromWishlist = (itemId) => {
        addToWishlist(itemId);
    };

    return (
        <>
            <div className='w-[100%] flex justify-center'>
                <div className='w-[80%] bg-white mt-2'>
                    {wishlistItems.length === 0 ? (
                        <p className='bg-white flex justify-center items-center text-[1.5rem] font-semibold'>Your Wishlist is Empty!</p>
                    ) : (
                        <>
                            <p className='bg-white flex justify-center items-center text-[1.5rem] font-semibold py-4'>Your Wishlist</p>
                            {
                                wishlistItems.map((item, index) => (
                                    <div key={index}>
                                        <div className='bg-white sm:flex p-2 py-8 border border-slate-200 justify-center'>
                                            <Link to={`/product/${item.id}`}>
                                                <div className='bg-white flex justify-center'>
                                                    <img src={item.img[0]} alt="image" className="w-[8rem] md:ml-[5rem]" />
                                                </div>
                                            </Link>
                                            <div className='bg-white ml-4 sm:ml-8'>
                                                <div className='bg-white'>
                                                <Link to={`/product/${item.id}`}>
                                                    <p className='text-[1.5rem] bg-white font-medium sm:w-[12rem] md:w-[17rem] lg:w-[25rem] xl:w-[40rem] mt-2 sm:mt-0'>{item.name}</p>
                                                    </Link>
                                                    <p className='mt-2 bg-[#388e3c] w-max flex justify-center items-center text-white font-bold py-[0.2rem] px-[0.4rem] text-[0.8rem] gap-1 rounded-[3px]'>{item.rating}<FaStar className='bg-transparent text-[white]' /></p>
                                                    <div className='bg-white flex gap-4 justify-center items-center w-max mt-2'>
                                                        <p className='bg-white text-[2rem] font-medium'>₹{item.old_price}</p>
                                                        <p className='bg-white text-[1.5rem] font-medium line-through text-[#555555]'>₹{item.new_price}</p>
                                                        <p className='bg-white text-[#388e3c] font-medium text-[1.3rem]'>{item.offer}% off</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bg-white sm:static absolute mt-[-24rem] ml-[65%] sm:mt-0 sm:ml-0'>
                                                <MdDelete
                                                    onClick={() => handleRemoveFromWishlist(item.id)}  // Trigger remove from wishlist
                                                    className="bg-white text-[1.5rem] text-[#555555] cursor-pointer"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    )}
                    {wishlistItems.length > 0 && <hr className="h-[1px] border-none bg-[#e2e2e2] mt-[10px]" />}
                </div>
            </div>
        </>
    );
};

export default Wishlist;
