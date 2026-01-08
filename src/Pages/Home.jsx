import Button from "../Components/Comman/Button";
import GradientText from "../Components/Comman/GradientText";
import FeatureCarousel from "../Components/HomePage/FeatureCarousel";
import { ConstantText } from "../Utils/Constant";
import '../Style/Home.css'
import { BannerBg, FeatureBg, FeatureImg1, FeatureImg2, FeatureImg3, GrowthCircle, GrowthDot1, GrowthDot2, HealthcareIcon, InsuranceIcon, Lending_Icon, LocationIcon } from "../assets/Images/Images";
import Heading from "../Components/Comman/Heading";
import GrowthCard from "../Components/HomePage/GrowthCard";
import FeatureCard from "../Components/HomePage/FeatureCard";
import BlogCard from "../Components/HomePage/BlogCard";
// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "../Components/HomePage/ContactForm";

function SampleNextArrow({ className, onClick }) {
  return (
    <div className={`${className} custom-arrow next`} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function SamplePrevArrow({ className, onClick }) {
  return (
    <div className={`${className} custom-arrow prev`} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}


const Home = () => {
    const settings = {
        dots: false,
        infinite: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint:576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    };

    const growth = [
        {
            icon: InsuranceIcon,
            title: ConstantText.Insurance,
            text: ConstantText.InsuranceText,
        },
        {
            icon: Lending_Icon,
            title: ConstantText.Lending,
            text: ConstantText.LendingText
        },
        {
            icon: HealthcareIcon,
            title: ConstantText.Healthcare,
            text: ConstantText.HealthcareText
        }
    ];

    const featureList1Items1 = [
        "Detects near-duplicates and tampered documents.", 
        "Identifies fraudulent patterns across large repositories.", 
        "Multi-language support for global adaptability."
    ];
    const featureList2Items1 = [
        "Save 30% time on manual checks.", 
        " Reduce document fraud by up to 40%."
    ];
    const featureList1Items2 = [
        "Automates document collection, routing, and task assignments.", 
        "Real-time tracking with advanced dashboards.", 
        "Seamless integration with enterprise systems via APIs."
    ];
    const featureList2Items2 = [
        "Reduce turnaround times by 50%.", 
        "Improve operational efficiency with minimal manual effort."
    ];
    const featureList1Items3 = [
        "OCR and NLP-based data extraction.", 
        " Handles unstructured documents across industries.", 
        "Validates fields using external data sources."
    ];
    const featureList2Items3 = [
        "Process 10,000+ documents in minutes.", 
        " Achieve 99% data accuracy with AI-driven validation."
    ];


    const blogContent = {
        item:  [
            {
                title:"How AI is Revolutionizing Document Management for Enterprises",
                date:"24 July, 2023",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
            },
            {
                title:"How AI is Revolutionizing Document Management for Enterprises",
                date:"24 July, 2023",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
            },
            {
                title:"How AI is Revolutionizing Document Management for Enterprises",
                date:"24 July, 2023",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
            },
            {
                title:"How AI is Revolutionizing Document Management for Enterprises",
                date:"24 July, 2023",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
            },
            {
                title:"How AI is Revolutionizing Document Management for Enterprises",
                date:"24 July, 2023",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
            }
        ],
    }
    return(
        <>
            <div className="banner">
                <div className="banner-bg">
                    <img src={BannerBg} alt="BannerBg img" />
                </div>
                <div className="container">
                    <div className="banner-inner">
                        <div className="banner-content">
                            <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000">
                                <h1>
                                <GradientText gradientText={ConstantText.AIPowered} />
                                {ConstantText.BannerHeading}
                            </h1>
                            <p>{ConstantText.bannerText}</p>
                            </div>
                            <div className="banner-btn">
                                <Button
                                    url="#"
                                    btnText={ConstantText.GetDemo}
                                 />
                                <Button
                                    url="#"
                                    btnText={ConstantText.ExploreSolutions}
                                 />
                            </div>
                        </div>
                        <div className="banner-slider" data-aos="fade-left" data-aos-delay="300" data-aos-duration="2000">
                            <FeatureCarousel />
                        </div>
                    </div>
                </div>
            </div>
            <section className="growth">
                <div className="container">
                    <div className="growth-inner">
                            <Heading headingText={ConstantText.GrowthHeadingText} headingTitle={ConstantText.GrowthHeadingTitle} animation="fade-right"/>
                    
                        <div className="growth-content" data-aos="fade-down-left" data-aos-delay="300" data-aos-duration="2000">
                            {growth.map((item, index) => (

                                <GrowthCard
                                    key={index}
                                    growthIcon={item.icon}
                                    growthBoxTitle={item.title}
                                    growthBoxText={item.text}
                                />
                                ))}
                        </div>
                        <div className="growth-circle" data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000">
                            <img src={GrowthCircle} alt="GrowthCircle" />
                        </div>
                        <div className="growth-dot1" data-aos="fade-down-left" data-aos-delay="300" data-aos-duration="2000">
                            <img src={GrowthDot1} alt="GrowthDot1" />
                        </div>
                        <div className="growth-dot2" data-aos="fade-down-left" data-aos-delay="300" data-aos-duration="2000">
                            <img src={GrowthDot2} alt="GrowthDot2" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature">
                <div className="container">
                    <div className="feature-inner">
                        <Heading headingText={ConstantText.featuresText} headingTitle={ConstantText.featuresTitle} animation="fade-down"/>
                        <FeatureCard
                            badgeText={ConstantText.FeatureBadgeText1}
                            featureTitle={ConstantText.FeatureTitle1}
                            featureSubTitle1={ConstantText.FeatureSubTitle1}
                            featureSubTitle2={ConstantText.FeatureSubTitle2}
                            featureList1={featureList1Items1}
                            featureList2={featureList2Items1}
                            url1="#"
                            url2="#"
                            btnText1={ConstantText.LearnMore}
                            btnText2={ConstantText.ScheduleDemo}
                            featureImg={FeatureImg1}
                            featureImgBg={FeatureBg}
                            animationContent="fade-right"
                            animationContent2="fade-left"
                        />
                        <FeatureCard
                            badgeText={ConstantText.FeatureBadgeText2}
                            featureTitle={ConstantText.FeatureTitle2}
                            featureSubTitle1={ConstantText.FeatureSubTitle1}
                            featureSubTitle2={ConstantText.FeatureSubTitle2}
                            featureList1={featureList1Items2}
                            featureList2={featureList2Items2}
                            url1="#"
                            url2="#"
                            btnText1={ConstantText.LearnMore}
                            btnText2={ConstantText.ScheduleDemo}
                            featureImg={FeatureImg2}
                            featureImgBg={FeatureBg}
                            featureDot1={GrowthDot1}
                            featureDot2={GrowthDot2}
                            animationContent2="fade-right"
                            animationContent="fade-left"
                        />
                        <FeatureCard
                            badgeText={ConstantText.FeatureBadgeText3}
                            featureTitle={ConstantText.FeatureTitle3}
                            featureSubTitle1={ConstantText.FeatureSubTitle1}
                            featureSubTitle2={ConstantText.FeatureSubTitle2}
                            featureList1={featureList1Items3}
                            featureList2={featureList2Items3}
                            url1="#"
                            url2="#"
                            btnText1={ConstantText.LearnMore}
                            btnText2={ConstantText.ScheduleDemo}
                            featureImg={FeatureImg3}
                            featureImgBg={FeatureBg}
                            animationContent="fade-right"
                            animationContent2="fade-left"
                        />
                    </div>
                </div>
            </section>

            <section className="blog">
                <div className="container">
                    <div className="blog-inner">
                        <Heading headingText={ConstantText.BlogText} headingTitle={ConstantText.BlogTitle} animation="fade-down"/>
                        <div className="blog-slider custom-slider-arrows" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
                            <Slider {...settings}>
                                {blogContent.item.map((item, index) => (
                                    <BlogCard
                                        key={index}
                                        blogTitle={item.title}
                                        blogDate={item.date}
                                        blogText={item.text}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-us">
                <div className="container">
                    <div className="contact-inner">
                        <div className="contact-inner-left">
                            <Heading headingText={ConstantText.ContentText} headingTitle={ConstantText.ContactUs} animation="fade-right"/>
                            <div className="contact-address-box" data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000">
                                <p>
                                    <img src={LocationIcon} alt="{LocationIcon}" />
                                    {ConstantText.USOffice}
                                </p>
                                <div className="contact-address">
                                    <span>{ConstantText.USOfficeText1}</span>
                                    <span>{ConstantText.USOfficeText2}</span>
                                </div>
                            </div>
                            <div className="contact-address-box" data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000">
                                <p>
                                    <img src={LocationIcon} alt="{LocationIcon}" />
                                    {ConstantText.IndiaOffice}
                                </p>
                                <div className="contact-address">
                                    <span>{ConstantText.IndiaOfficeText1}</span>
                                    <span>{ConstantText.IndiaOfficeText2}</span>
                                </div>
                            </div>
                        </div>
                         <div className="contact-inner-right-inner" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
                            <div className="contact-inner-right">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;