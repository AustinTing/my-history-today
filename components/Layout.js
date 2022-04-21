import Header from './Header'
import Footer from './Footer'

// const Container = styled.div`
// padding: 0 2rem;
// `
// const Main = styled.div`
// min-height: 100vh;
// padding: 4rem 0;
// flex: 1;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// `

const Layout = ({ children }) => {
  return (
    <container className='p-8'>
      <Header />
      <main className='min-h-screen p-16 flex flex-col justify-center items-center'>
        {children}
      </main>
      <Footer />
    </container>
  )
}
export default Layout
