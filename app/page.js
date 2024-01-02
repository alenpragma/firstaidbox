import React from 'react'
import Topbar from './_components/_topbar/Topbar'
import Nav from './_components/_nav/Nav'
import Banner from './_components/_banner/Banner'
import WhyFristAid from './_components/_whyFirstAid/WhyFristAid'
import WhyBuy from './_components/_whyBuy/WhyBuy'
import Order from './_components/_order/Order'
import FirstAidBox from './_components/_firstAdiBox/FirstAidBox'
import ProductDetails from './_components/_productDetails/ProductDetails'


const page = () => {
  return (
    <div>
      <div className="">
        <Topbar />
        <Nav />
      </div>
      <Banner />
      <WhyFristAid />
      <WhyBuy />
      <Order />
      <FirstAidBox />
      <ProductDetails />
    </div>
  )
}

export default page
