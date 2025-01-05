export default function UncontrolledForm(){

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));

    }

    return(
        <>
        <form onSubmit={onSubmit}>
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" />
            <label htmlFor="email"></label>
            <input type="password" name="password" id="password" />

            <input type="submit" placeholder="Submit" />
        </form>
        </>
    )
}