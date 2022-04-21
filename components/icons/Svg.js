const Svg = ({ className, viewBox, children }) => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={className}
      viewBox={viewBox}
    >
      {children}
    </svg>
  )
}

export default Svg
