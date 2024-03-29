import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import { useState } from 'react'



const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  const [mapRef, setMapRef] = useState(undefined);

  return (
    <>
      <NextSeo
        title="BENI WALKER"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked"
        canonical="https://beniwalker.vercel.app"
      />
      <LinkWrapper href="/about">
        <InfoOutline size={28} aria-label="about" />
      </LinkWrapper>
      <Map places={places} setMapRef={setMapRef} mapRef={mapRef}  />
    </>
  )
}
