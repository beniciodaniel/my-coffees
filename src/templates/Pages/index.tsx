import { NextSeo } from 'next-seo'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import Image from 'next/image'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ body, heading }: PageTemplateProps) => {
  const isAboutPage = heading === 'About'
  
  return (
  <>
    <NextSeo
      title={heading}
      description="A simple project to show in a map the places that I went and show more informations and photos when clicked"
      canonical="https://coffees2.vercel.app"
    />
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={28} />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        {isAboutPage ? (
          <div style={{ marginTop: '10rem'}} dangerouslySetInnerHTML={{ __html: body }} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: body }} />
        )}
        
        {isAboutPage && (
          <div style={{ textAlign: 'center', marginTop: '2rem'}}>
            <p style={{'marginTop': '5rem', 'marginBottom': '3rem'}}>Would you like to buy me a coffee?</p>
            <Image
              src="/pix.png"
              alt="Pix"
              width={200}
              height={200}
              quality={75}
              objectPosition="top"
              objectFit="cover"
            />
            <p style={{fontSize: '12px', marginTop: '-1rem'}}>PIX</p>
          </div>
      )}
      </S.Body>

      
    </S.Content>
  </>
)}

export default PageTemplate
