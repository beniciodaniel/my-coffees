import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="YEAH YEAH!"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked"
        canonical="https://coffees2.vercel.app"
      />
      <LinkWrapper href="/about">
        <InfoOutline size={28} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
