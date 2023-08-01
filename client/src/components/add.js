import {useState} from 'react'

const Add = (props) => {
    const [jacket, setJacket] = useState({name: '', price: 0, size: '', description: ''})

    const handleChange = (event) => {
        setJacket({...jacket, [event.target.name]: event.target.value})
    }
const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(jacket)
}

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='name' name='name' onChnage={handleChange} />
                <br />
                <br />
                <input type='number' placeholder='price' name='price' onChange={handleChange} />
                <br />
                <br />
                <input type='text' placeholder='size' name='size' onChange={handleChange} />
                <br />
                <br />
                <input type='text' placeholder='description' name='description' onChange={handleChange} />
                <br />
                <br />
                <input type='submit' />
            </form>
        </>
    )
}

export default Add