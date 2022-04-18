import Head from 'next/head'
import styled from 'styled-components'
import Footer from 'components/Footer'

const Container = styled.div`
padding: 0 2rem;
`
const Main = styled.div`
min-height: 100vh;
padding: 4rem 0;
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export default function Layout ({ children }) {
  return (
    <Container>
      <Head>
        <title>One This Day...</title>
        <meta name='description' content='My History Today' />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <Main>
        {children}
      </Main>

      <Footer />
    </Container>
  )
}
