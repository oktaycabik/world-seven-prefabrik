

import ContainerInto from "../components/ContainerInto";
import introContainer from "../data/containerIntro.json"
import "swiper/css";
import "swiper/css/pagination";
import Head from 'next/head'
import ProductIntro from "../components/ProductIntro";
import productInto from "../data/productIntro.json"
export default function Home() {
  
  const {container} =productInto
  const {tinyHouse} =productInto
  const {modulerSquare} =productInto

  const {ironHouse} =productInto
  const {bungolov} =productInto
 
  return (
    <>
    <Head>
        <title>World Seven Prefabrik</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ProductIntro data={container}></ProductIntro>
      <ProductIntro data={tinyHouse}></ProductIntro>
      <ProductIntro data={modulerSquare}></ProductIntro>
  
      <ProductIntro data={bungolov}></ProductIntro>
    </>
  );
}
