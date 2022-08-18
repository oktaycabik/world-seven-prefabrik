import Link from "next/link";

import { useRouter } from "next/router";
import windowSize from "../utils/windowSize";
import Image from "next/image";
import useMediaQuery from "../utils/useMediaQuery";
import { useState, useEffect } from "react";
const ProductIntro = ({ data, className }) => {
  let [isDesktop, setIsDesktop] = useState(true);
  isDesktop = useMediaQuery("(min-width: 768px)");

  const imageWidth = () => {
    if (isDesktop) {
      return data.image;
    } else {
      return data.mobileImage;
    }
  };

  const router = useRouter();

  return (
    <>
      <div className="intro-img">
        <Image layout="fill" src={imageWidth()} priority />
        <div className="intro-content">
          <h5 className={`mt-1 text-dark} fw-600`}>{data?.content?.first}</h5>
          <h1 className={`text-dark fw-600`}>{data?.title?.second}</h1>
          <h5 className={`text-dark fw-600`}>{data?.content?.Third}</h5>
        </div>
      </div>
    </>
  );
};

export default ProductIntro;
