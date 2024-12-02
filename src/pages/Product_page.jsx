import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../context/Context';
import { FaHeart, FaStar } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { AiOutlineThunderbolt } from 'react-icons/ai';

const ProductDetail = () => {
  const { id } = useParams();
  const { product , addToCart } = useContext(StoreContext);
  const selectedProduct = product.find((item) => item.id.toString() === id);

  const [MainPhoto, setMainPhoto] = useState(0)

  useEffect(() => {
    if (selectedProduct && selectedProduct.img.length > 0) {
      setMainPhoto(selectedProduct.img[0]);
    }
  }, [selectedProduct]);

  const handleImageClick = (index) => {
    setMainPhoto(selectedProduct.img[index]);
    setimageindex(index);
  };

  const [imageindex, setimageindex] = useState(0)

  const { addToWishlist, change_heart } = useContext(StoreContext);

  const handleHeartClick = (e) => {
    e.preventDefault();
    addToWishlist(id);
  };

  const HandleAddToCart = (itemid) => {
    addToCart(itemid);
  }

  return (
    <div className='w-[100%] flex justify-center'>
      <div className='w-[80%] bg-white mt-2 flex'>
        <div className='border-[1px] border-slate-200 flex mt-2 ml-4'>
          <div className='flex flex-col gap-1 bg-white h-[25rem] overflow-hidden overflow-y-auto scroll w-max'>
            {
              selectedProduct.img.map((image, index) => {
                return <div className={`border-[1px] border-slate-200 flex justify-center items-center bg-white p-1 cursor-pointer ${imageindex === index ? 'border-2 border-blue-600' : ''}`} key={index} onClick={() => handleImageClick(index)} >
                  <img src={image} alt="image_name" className='w-[3.5rem] h-[4rem]' />
                </div>
              })
            }
          </div>
          <div className='h-[25rem] w-[22rem] flex justify-center items-center bg-white'>
            <img src={MainPhoto} alt="" className='w-[20rem] h-[23rem] overflow-hidden object-fill' />
          </div>
          <div className='absolute w-[3rem] h-[3rem] ml-[21rem] mt-[1.5rem] flex justify-center items-center rounded-full overflow-hidden' onClick={handleHeartClick}>
            <FaHeart className={`text-[1.5rem] cursor-pointer bg-transparent ${change_heart[id] ? 'text-red-500' : 'text-slate-300'}`}/>
          </div>
        </div>
        <div className='bg-white mt-6 ml-8'>
          <div className='bg-white'>
            <p className='text-[1.5rem] bg-white font-medium w-[40rem]'>{selectedProduct.name}</p>
            <p className='mt-2 bg-[#388e3c] w-max flex justify-center items-center text-white font-bold py-[0.2rem] px-[0.4rem] text-[0.8rem] gap-1 rounded-[3px]'>{selectedProduct.rating}<FaStar className='bg-transparent text-[white]' /></p>
            <div className='bg-white flex gap-4 justify-center items-center w-max mt-2'>
              <p className='bg-white text-[2rem] font-medium'>₹{selectedProduct.old_price}</p>
              <p className='bg-white text-[1.5rem] font-medium line-through text-[#555555]'>₹{selectedProduct.new_price}</p>
              <p className='bg-white text-[#388e3c] font-medium text-[1.3rem]'>{selectedProduct.offer}% off</p>
            </div>
          </div>
          <div className='w-max bg-white mt-4 flex gap-4'>
            <button className='bg-[#e95930] text-white py-2 px-4 flex justify-center items-center gap-1 font-bold rounded-[5px]' onClick={()=>HandleAddToCart(selectedProduct.id)}><BsCart3 className='bg-transparent text-[1.2rem]'/>Add to Cart</button>
            <button className='bg-[#ff9f00] text-white py-2 px-4 flex justify-center items-center gap-1 font-bold rounded-[5px]'><AiOutlineThunderbolt  className='bg-transparent text-[1.2rem]'/>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductDetail;
