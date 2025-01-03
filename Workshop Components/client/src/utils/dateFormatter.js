export default function dateFormatter(date){
    const d = new Date(date);

    

    const dateOptions = {year:'numeric',month:'long',day:'numeric'}

    return d.toLocaleDateString('en-US',dateOptions)
}