
const Btn = ({ text, link, className }) => {
  const classNames = "btn " + className;
  return (
    <a href={link} className={classNames}>{text}</a>    
  )
}

export default Btn