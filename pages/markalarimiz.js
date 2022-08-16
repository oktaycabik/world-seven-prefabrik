import React from 'react'
import Head from 'next/head'
import ContainerInto from "../components/ContainerInto";
import introContainer from "../data/containerIntro.json"
const brands = () => {
  const {containHaus} =introContainer
  const {wolfTiny} =introContainer
  return (
    <div>
          <Head>
      <title>World Seven Prefabrik | Markalarımız </title>
     
    </Head>
    <ContainerInto data={containHaus}></ContainerInto>
    <ContainerInto data={wolfTiny}></ContainerInto>
    </div>
  )
}

export default brands