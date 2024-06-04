import TagLine from "./TagLine"

const Heading = ({className, title, text, tag}) => {
  return (
    <div className={`${className}mam-w-[50rem] mx-auto mb-12 lg:mb-20` }>
        {tag && <TagLine>{tag}</TagLine>}
        {title && <h2 className = "h2">{title}</h2>}
        {text && <p className= "mt-4 body-2 text-n-4">{text}</p>}
    </div>
  )
}

export default Heading 