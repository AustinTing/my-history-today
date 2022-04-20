import styled from 'styled-components'
// import Heart from 'components/icons/Heart'

const Footer = () => {
  return (
    <footer className='flex flex-1 p-8 border-y-2'>
      <a href='https://github.com/AustinTing/my-history-today'>
        Made with
        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 ml-1 mr-1 text-rose-600 fill-current' viewBox='0 0 20 20'>
          <path
            fillRule='evenodd'
            d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
            clipRule='evenodd'
          />
        </svg>
        by Austin Ting
      </a>
    </footer>
  )
}

const styledFooter = styled(Footer)`
  .footer {
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
  }

  .footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`

export default Footer
