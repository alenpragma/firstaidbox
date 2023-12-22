import React from 'react'
import Topbar from './_components/_topbar/Topbar'
import Nav from './_components/_nav/Nav'
import Banner from './_components/_banner/Banner'
import WhyFristAid from './_components/_whyFirstAid/WhyFristAid'
import WhyBuy from './_components/_whyBuy/WhyBuy'


const page = () => {
  return (
    <div>
      <div className="">
        <Topbar/>
        <Nav/>
      </div>
      <Banner/>
      <WhyFristAid/>
      <WhyBuy/>
    </div>
  )
}

export default page
