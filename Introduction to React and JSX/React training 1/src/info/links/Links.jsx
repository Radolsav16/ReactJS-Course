export default function Links({className,link}){
    return (
        <>
          <a href={link}>
        <i className={className} aria-hidden="true" />
      </a>
        </>
    )
}