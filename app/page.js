import React from "react";
import Topbar from "./_components/_topbar/Topbar";
import Nav from "./_components/_nav/Nav";
import Banner from "./_components/_banner/Banner";
import WhyFristAid from "./_components/_whyFirstAid/WhyFristAid";
import WhyBuy from "./_components/_whyBuy/WhyBuy";
import Order from "./_components/_order/Order";
import FirstAidBox from "./_components/_firstAdiBox/FirstAidBox";
import ProductDetails from "./_components/_productDetails/ProductDetails";
import Faq from "./_components/_faq/Faq";
import CheckOut from "./_components/_checkOutPage/CheckOut";
import Footer from "./_components/_footer/Footer";
import Email from "./_components/_email/Email";
import FirstAidBoxBenefits from "./_components/_firstAidBoxBenefits/FirstAidBoxBenefits";

const page = () => {
  return (
    <div>
      <div className="">
        <Topbar />
        <Nav />
      </div>
      <Banner />
      <WhyFristAid />
      <FirstAidBox />
      <Order />
      <WhyBuy />
      <ProductDetails />
      <FirstAidBoxBenefits />
      <CheckOut />
      <Faq />
      <Email />
      <Footer />
    </div>
  );
};

export default page;
