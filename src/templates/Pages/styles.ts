import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;

  padding: var(--large) var(--medium);
`

export const Heading = styled.h1`
  font-size: var(--large);
  /* text-transform: uppercase; */
  margin-bottom: var(--large);
`

export const Body = styled.div`
  text-align: justify;
  // serve para estilos do body
  // p, a, ul, li, blockquote
  p,
  a {
    font-size: var(--medium);
    line-height: 4rem;
  }
`
