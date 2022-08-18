import Link from "next/link";

import { useRouter } from "next/router";
import windowSize from "../utils/windowSize";
import Image from "next/image";
import useMediaQuery from "../utils/useMediaQuery"
import { useState } from "react";
const ContainerInto = ({ data, className }) => {
    const [width] = windowSize();
    const router = useRouter();
     let [isDesktop, setIsDesktop] = useState(true);
    const textColorContent = () => {
        if (width < 768) {
            if (router.asPath === "/") {
                return data.MainpgClass
            }
            if (router.asPath === "/mybigfamily") {
                return "text-light"
            }
            if (router.asPath === "/amazingCountary") {
                return "text-light"
            }
            if (router.asPath === "/feelGood") {
                return "text-light"
            }
            if (router.asPath === "/freedom") {
                return "text-light"
            }
            if (router.asPath === "/MyLittleFamily") {
                return "text-light"
            }
            if (router.asPath === "/Spectecular") {
                return "text-light"
            }
        } else {
            if (router.asPath === "/") {
                return data.MainpgClass
            }
            if (router.asPath === "/mybigfamily") {
                return "text-light"
            }
            else if (router.asPath === "/amazingCountary") {
                return "text-light"
            }
            if (router.asPath === "/feelGood") {
                return "text-light"
            }
            if (router.asPath === "/freedom") {
                return "text-light"
            }
            if (router.asPath === "/MyLittleFamily") {
                return "text-light"
            }
            if (router.asPath === "/Spectecular") {
                return "text-light"
            }
        }

    }
  
  
   
    isDesktop = useMediaQuery("(min-width: 768px)");
  
    const imageWidth = () => {
      if (isDesktop) {
        return data.image;
      } else {
        return data.mobileImage;
      }
    };
    return (
        <>
            <div className="intro-img">
                <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition=" center"
                    src={imageWidth()}
                    priority
                />
                <div className="intro-content ">
                    <h1 className={`${width < 768?data.mobileTitleColor: data.titleColor} fw-600`}>{data.title.second}</h1>
                    <h5 className={`mt-1 ${width < 768 ? "text-dark":"text-light"} fw-600`}>Fabrikadan Üretim</h5>
                    <h5 className={`${textColorContent()} fw-400`}>{data.content.first}</h5>
                    <Link href={`${router.asPath === "/" ? data.homeHref : data.href}`}>
                        <button className="intro-button ">{router.asPath === "/" ? data.homeButton : data.pageButton}</button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default ContainerInto;