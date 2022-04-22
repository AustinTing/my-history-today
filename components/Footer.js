// import styled from 'styled-components'
import Heart from 'components/icons/Heart'

const Footer = () => {
  return (
    <footer className='flex flex-1 p-8 border-t-2 border-gray-50 justify-center items-center'>
      <a href='https://github.com/AustinTing/my-history-today' className='flex justify-center items-center grow'>
        Made with
        <Heart className='h-5 w-5 ml-1 mr-1 text-rose-600 fill-current' viewBox='0 0 20 20' />
        by Austin Ting
      </a>
    </footer>
  )
}

export default Footer
