

const LinkWithIcons = ({ link, type, src, alt, className, onClick }) => {
  return (
    <div className={className + "__wraper"}>
      {(type === "btn") ? <btn onClick={onClick} className={className}><img src={src} alt={alt} /></btn> : <a className={className} href={link}><img src={src} alt={alt} /></a>}
    </div>
  )
}

export default LinkWithIcons