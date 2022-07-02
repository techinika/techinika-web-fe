import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import techinikaLogo from '../public/Achile.png';

export const Partners = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    const ps = [
    {
        id: 1,
        image: techinikaLogo,
        url: ""
    },
    {
        id: 2,
        image: techinikaLogo,
        url: ""
    },
    {
        id: 3,
        image: techinikaLogo,
        url: ""
    },
    {
        id: 4,
        image: techinikaLogo,
        url: ""
    },
    {
        id: 5,
        image: techinikaLogo,
        url: ""
    }
    ]
      
    return (
        <>
            <div className="bg-gray-200" id="partners">
                <div className="md:w-10/12 p-8 flex flex-col items-center mx-auto">
                    <div className='w-full items-center'>
                        <h1 className="text-mainBlue font-bold text-4xl my-4">Our Partners / Our clients</h1>
                        <p className='w-1/2'>
                        {"To deliver high quality service and best experience possible to our clients, we work with the the best companies and individuals who offer the best in their fields."}
                        </p>
                    </div>
                    <div className="my-8 w-full md:w-11/12">
                        <Slider {...settings} className="flex">
                            {
                                ps.map(p => (
                                    <div className="relative w-full h-32 border-4 border-gray-200" key={p.id}>
                                        <Image src={p.image} layout="fill" className="absolute object-cover object-center rounded-2xl"/>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    </div>
                </div>    
        </>
    )
}