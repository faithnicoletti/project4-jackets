const Jacket = (props) => {
    return (
        <>
        <h3>Name: {props.jacket.name} </h3>
        <p>Price: {props.jacket.price}</p>
        <p>Size: {props.jacket.size}</p>
        <p>Description: {props.jacket.description}</p>
        </>
    )
}

export default Jacket