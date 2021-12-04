import { NextSeo } from 'next-seo'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ body, heading }: PageTemplateProps) => (
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
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  </>
)

export default PageTemplate
