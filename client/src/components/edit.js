import {useState} from 'react'

const Edit = (props) => {
    const [jacket, setJacket] = useState({...props.jacket})

    const handleChange = (event) => {
        setJacket({...jacket, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(jacket)
    }

    return (
        <>
            <details>
                <summary>Edit Jacket</summary>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' value={jacket.name} onChange={handleChange} />
                    <br />
                    <br />
                    <input type='number' name='price' value={jacket.price} onChange={handleChange} />
                    <br />
                    <br />
                    <input type='text' name='size' value={jacket.size} onChange={handleChange} />
                    <br />
                    <br />
                    <input type='text' name='description' value={jacket.description} onChange={handleChange} />
                    <br />
                    <br />
                    <input type='submit' />
                </form>
            </details>
        </>
    )
}

export default Edit