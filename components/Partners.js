import Link from "next/link";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import techinikaLogo from '../public/Achile.png';

export const Partners = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    };
    return (
        <>
            <div className="bg-gray-200" id="partners">
                <div className="p-8 flex flex-col items-center mx-auto">
                    <div className='w-full items-center md:w-10/12'>
                        <h1 className="text-mainBlue font-bold text-4xl my-4">Our Partners / Our clients</h1>
                        <p className='w-1/2'>
                        {"To deliver high quality service and best experience possible to our clients, we work with the the best companies and individuals who offer the best in their fields."}
                        </p>
                    </div>
                    <div className="my-8 w-full md:w-10/12">
                        <Slider {...settings}>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                            <div className="text-center">
                                <Image src={techinikaLogo} width={100} height={100}/>
                            </div>
                        </Slider>
                    </div>
                    </div>
                </div>    
        </>
    )
}