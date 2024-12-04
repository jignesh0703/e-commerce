import React, { useContext } from 'react';
import { StoreContext } from '../context/Context';
import red_minus from '../assets/remove_red.png'
import green_plus from '../assets/add_icon_green.png'
import { FaStar } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { product, cart, addToCart, removeFromCart , removeall } = useContext(StoreContext);

  const HandleAddToCart = (itemid) => {
    addToCart(itemid);
  }

  const HandleRemoveCart = (itemid) => {
    removeFromCart(itemid)
  }

  const HandleremoveAll = (itemid) => {
    removeall(itemid)
  }

  // Filter products based on whether they are in the cart
  const Cartfilter = product.filter(item => cart[item.id] > 0);

  // Calculate total price for the cart
  const totalCartValue = Cartfilter.reduce((total, item) => {
    return total + item.old_price * cart[item.id]; // Total = price * quantity
  }, 0);

  return (
    <>
      <div className='w-[100%] flex justify-center mb-2'>
        <div className='w-[80%] bg-white mt-2'>
          {Cartfilter.length === 0 ? (
            <p className='bg-white flex justify-center items-center text-[1.5rem] font-semibold py-4'>Your Cart is Empty!</p>
          ) : (
            <>
              <p className='bg-white flex justify-center items-center text-[1.5rem] font-semibold py-4'>Your Cart ({Cartfilter.length})</p>
              {
                Cartfilter.map((item, index) => (
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
                          <div className='bg-white flex gap-4 justify-center items-center w-max mt-2 sm:mt-6'>
                            <p className='bg-white text-[1.5rem] sm:text-[2rem] font-medium'>₹{item.old_price * cart[item.id]}</p>
                            <p className='bg-white text-[1.2rem] sm:text-[1.5rem] font-medium line-through text-[#555555]'>₹{item.new_price * cart[item.id]}</p>
                            <p className='bg-white text-[#388e3c] font-medium text-[1rem] sm:text-[1.3rem]'>{item.offer}% off</p>
                          </div>
                          <div className='flex bg-white gap-[10px] items-center justify-center sm:justify-start sm:ml-[-10rem] sm:mt-0 md:mt-2 xl:mt-[2rem]'>
                            <img src={red_minus} onClick={() => HandleRemoveCart(item.id)} alt="minus_icon" className='w-[30px] cursor-pointer rounded-full' />
                            <p className='font-bold bg-white border border-slate-300 py-1 px-4'>{cart[item.id]}</p>
                            <img src={green_plus} onClick={() => HandleAddToCart(item.id)} alt="plus_icon" className='w-[30px] cursor-pointer rounded-full' />
                          </div>
                        </div>
                      </div>
                      <div className='bg-white sm:static absolute mt-[-25rem] ml-[65%] sm:mt-0 sm:ml-0'>
                        <MdDelete
                          onClick={() => HandleremoveAll(item.id)}  // Trigger remove from wishlist
                          className="bg-white text-[1.5rem] text-[#555555] cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                ))
              }
                <div className="bg-white mt-4 p-4 flex justify-between items-center border-t border-slate-300">
                <p className="text-[2rem] font-semibold bg-white">Total: ₹{totalCartValue.toFixed(2)}</p>
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
};

export default Cart;