import React from 'react'
import Hero from '../components/Home/Hero'
import RecentProduct from '../components/Home/RecentProduct'
import Information from '../components/Home/Information'
import ProductCataegories from '../components/Home/ProductCataegories'
import SalesProduct from '../components/Home/SalesProduct'
import TopBrands from '../components/Home/TopBrands'

function Home() {
  return (
    <div className='container'>
      <Hero/>
      <RecentProduct/>
      <Information />
      <ProductCataegories/>
      <SalesProduct />
      <TopBrands/>
    </div>
  )
}

export default Home
