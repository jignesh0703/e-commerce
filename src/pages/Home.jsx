import React, { useState } from 'react'
import Category from '../Componets/Category'
import Banners from '../Componets/Banners'
import All_product from '../Componets/All_product'

const Home = () => {

  const [category_filter, setcategory_filter] = useState("All")

  return (
    <>
      <Category category_filter={category_filter} setcategory_filter={setcategory_filter}/>
      <Banners />
      <All_product category_filter={category_filter}/>
    </>
  )
}

export default Home