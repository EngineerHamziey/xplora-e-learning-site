

const LinkWithIcons = ({ link, src, alt }) => {
  return (
    <a href={link}>
      <img src={src} alt={alt} />
    </a>
  )
}

export default LinkWithIcons