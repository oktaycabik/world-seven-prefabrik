import Link from "next/link";
import { useRouter } from "next/router";
import windowSize from "../utils/windowSize";
import Image from "next/image";

const ProductIntro = ({ data, className }) => {
  const [width] = windowSize();

  const router = useRouter();

  return (
    <>
      <div className="intro-img">
        <Image
          layout="fill"
          src={width < 768 ? data.mobileImage : data.image}
          priority
        />
        <div className="intro-content">
          <h5 className={`mt-1 text-dark} fw-600`}>{data?.content?.first}</h5>
          <h1 className={`text-dark fw-600`}>{data?.title?.second}</h1>
          <h5 className={`text-dark fw-400`}>{data?.content?.Third}</h5>
        </div>
      </div>
    </>
  );
};

export default ProductIntro;
