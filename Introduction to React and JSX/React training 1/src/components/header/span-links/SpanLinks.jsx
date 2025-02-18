export default function SpanLinks({className,spanLabel,link}){
    console.log(className);
    console.log(spanLabel)
    return(
        <>
        <a href="">
          <i className={className} aria-hidden="true" />
          <span>{spanLabel}</span>
        </a>
        </>
    )
}