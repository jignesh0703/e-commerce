import React, { useContext } from 'react'
import Product from './Product'
import { StoreContext } from '../context/Context'

const All_product = ({category_filter}) => {

  const { product } = useContext(StoreContext)

  return (
    <>
      <div className='w-[100%] mt-4 flex justify-center'>
        <p className='w-[80%] flex bg-white font-semibold pl-[10rem] text-2xl pt-4 pb-4'>All Products</p>
      </div>
      <div className='w-[100%] flex justify-center items-center mb-[5rem]'>
        <div className='w-[80%] bg-white flex gap-8 flex-wrap justify-center'>
          {
            product.map(
              (item,index)=>{
                if (category_filter==="All" || category_filter===item.category){
              return  <Product id={item.id} name={item.name} img={item.img[0]} old_price={item.old_price} new_price={item.new_price} offer={item.offer} key={index}/>
              }
            }
            )
          }
        </div>
      </div>
    </>
  )
}

export default All_product