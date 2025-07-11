import React from "react";
import Header from "../components/Header";
import bannerImg from "../assets/banner-img.jpg";
import propertyImg1 from "../assets/property-1.jpg";
import propertyImg2 from "../assets/property-2.jpg";
import propertyImg3 from "../assets/property-3.jpg";
import aboutImg3 from "../assets/about-3.jpg";
import { FaHome } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const HomePage = () => {
  const featuredData = [
    {
      image: propertyImg1,
      name: "Seaside Bungalow",
      address: "3517W. Gray St. Utica, Pennysylvania 57867",
    },
    {
      image: propertyImg2,
      name: "Skyline Apartment",
      address: "3517W. Gray St. Utica, Pennysylvania 57867",
    },
    {
      image: propertyImg3,
      name: "Seaside Bungalow",
      address: "3517W. Gray St. Utica, Pennysylvania 57867",
    },
  ];

  const AboutData = [
    {
        icon: <FaHome size={35} />, 
        title: 'Advanced Property Search',
        description: "Easily find properties based on location, price, size, and amenities with our intuitive search filters."
    },
    {
        icon: <BsGraphUp size={30} />, 
        title: 'Real-Time Market Insights',
        description: "Get up-to-date market trends, property values, and investment insights to make informed decisions."
    },
  ]

  return (
    <>
      {/* ---------- navigation ----------- */}
      <Header />
      {/* ---------- navigation ----------- */}

      <section id="heroSection">
        <div className="container px-28 py-15 h-full w-full">
          <div className="grid grid-cols-2">
            <div className="heroSection-item mt-20">
              <h1 className="text-6xl font-semibold">
                Realtyr connects <br />
                you to best real <br />
                estate opportunities
              </h1>
              <button className="bg-black text-white hover:bg-white hover:text-black border duration-300 cursor-pointer py-2 px-4 rounded-lg mt-15">
                Explore our properties &gt;
              </button>
            </div>
            <div className="heroSection-item mt-20">
              <p className="text-end font-semibold">
                LET US HELP YOU FIND THE PERFECT <br />
                PROPERTY FOR YOUR GOALS.
              </p>
              <p className="text-end mt-48">
                Realtyr connects you with exclusive real estate opportunities,
                offering a seamless way to explore, and invest in properties
                that match your goals.
              </p>
            </div>
          </div>
          <div className="heroSection-img mt-20">
            <img
              src={bannerImg}
              className="rounded-[2vw] hover:shadow-2xl duration-300 w-full h-full"
              alt="banner-img"
            />
          </div>
        </div>
      </section>

      <section id="properties">
        <div className="container px-28 py-15">
          <div className="properties-title mb-10">
            <h2 className="text-5xl">Featured Properties</h2>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {featuredData.map((val, index) => {
              const { name, image, address } = val;

              return (
                <div className="property-items" key={index}>
                  <img src={image} className="rounded-[1vw]" alt="property-1" />
                  <p className="font-semibold text-xl my-2">{name}</p>
                  <p>{address}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="About Us">
        <div className="container px-28 py-15">
          <div className="grid grid-cols-2">
            <div className="left-side">
              <div className="about-title mb-10">
                <h2 className="text-5xl">About Us</h2>
              </div>
              {AboutData.map((val, index)=>{

                const {icon, description, title} = val
                
                return(
                <div className="about-us-item mb-5" key={index}>
                {icon}
                <h2 className="text-2xl my-3 font-medium">{title}</h2>
                <p className="text-lg">
                  {description}
                </p>
              </div>)})}
            </div>
            <div className="right-side">
              <img
                src={aboutImg3}
                className="w-150 mx-auto rounded-[2vw]"
                alt="about-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
