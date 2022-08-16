import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
import Link from "next/link";

const HomePageShop = ({ data }) => {


  return (
    <div className="container  mb-5">
      <div className="pe-5 ps-5">
        <Splide
          classes={{
            prev: 'splide__arrow--prev ArowPrevOut',
            next: 'splide__arrow--next ArowNextOut',
            pagination: 'splide__pagination Pagintaion',

          }}

          options={{
            rewind: true,
            gap: '0.5rem',
            perPage: 4,
            speed:3000,
            breakpoints: {
              1400: {
                perPage: 3,
              },

              994: {
                perPage: 2,
              },
              769: {
                perPage: 1,
              },
            },
            lazyLoad: 'nearby',

          }}
          aria-label="My Favorite Images"
        >

          {data.map((Val) => {
            return (
              
              <SplideSlide key={Val.id}>
                 <Link href={`/container/${Val.slug}`}> 
                <div
                  className="card my-3 py-3 col-12 shadow-product"
                  key={Val.id}
                >
                  <div className="card-img-top text-center ">
                    <Splide
                      options={{
                        rewind: true,
                        gap: '1rem',
                        arrows: false,
                        pagination: false,
                        height: "200px"
                      }}
                      aria-label="My Favorite Images"


                    >
                      <SplideSlide>
                        <Image
                          layout="fill"
                          className="d-block w-100"
                          src={Val.image.ima1}
                          alt="First slide"
                          priority
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <Image
                          layout="fill"
                          className="d-block w-100"
                          src={Val.image.ima2}
                          alt="Second slide"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <Image
                          layout="fill"
                          className="d-block w-100"
                          src={Val.image.ima3}
                          alt="Third slide"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <Image
                          layout="fill"
                          className="d-block w-100"
                          src={Val.image.ima4}
                          alt="Third slide"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <Image
                          layout="fill"
                          className="d-block w-100"
                          src={Val.image.ima5}
                          alt="Third slide"
                        />
                      </SplideSlide>
                    </Splide>
                  </div>
                  <div className="card-body card-info">
                    <div className=" mt-1 ">
                      <h4 className="card-title fw-600">{Val.title}</h4>
                      <h6 className="text-dark mb-1 pb-1  fz-10">{Val.content.text1}</h6>
                    
                      <h6 className="card-title mb-1 pb-1 fw-600">{Val.content.text2}</h6>
                      <h6 className="card-title mb-1 pb-1">{Val.content.text3}</h6>
                      <h6 className="card-title fz-15 display-1 mb-1 pb-1">{Val.content.text6}</h6>
                    </div>
                    <div className="d-flex bottom-btn">
                      <Link href="/iletisim">
                        <button
                          type="button"
                          className="btn btn-md btn-contact-color rounded-pill flex-fill ps-4 pe-4 "
                          data-mdb-ripple-color="dark"
                        >
                          İletişim
                        </button>
                      </Link>
                      <Link href={`/container/${Val.slug}`}>
                        <button className="btn btn-ms btn-color ps-4 pe-4 rounded-pill text-light detail-btn flex-fill ms-1">
                          Satın Al
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                </Link>
              </SplideSlide>

            );
          })}

        </Splide >
      </div>
    </div >
  );
};
export default HomePageShop;