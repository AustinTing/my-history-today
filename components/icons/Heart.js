
const Heart = ({ className, viewBox }) => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={className}
      viewBox={viewBox}
    >
      <path
        fillRule='evenodd'
        d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default Heart
