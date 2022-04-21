import Header from './Header'
import Footer from './Footer'

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
