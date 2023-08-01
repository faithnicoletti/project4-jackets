import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Jacket from './components/jacket';
import Add from './components/add';
import Edit from './components/edit';


function App() {
  const [jackets, setJackets] = useState([]);

  const getJackets = () => {
    axios.get('http://localhost:3000/jackets')
    .then((response ) => setJackets(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  const handleCreate = (createdJacket) => {
    console.log(createdJacket)
    axios.post('http://localhost:3000/jackets', createdJacket)
    .then((response) => {
      setJackets([...jackets, response.data])
    })
  }

  const handleEdit = (editedJacket) => {
    axios.put('http://localhost:3000/jackets/' + editedJacket._id, editedJacket)
    .then((response) => {
      let newJackets = jackets.map((jacket) => {
        return jacket._id !== editedJacket._id ? jacket : editedJacket
      })
      setJackets(newJackets)
    })
  }

  const handleDelete = (deletedJacket) => {
    axios.delete('http://localhost:3000/jackets/' + deletedJacket._id)
    .then((response) => {
      let newJackets = jackets.filter((jacket) => {
        return jacket._id !== deletedJacket._id
      })
      setJackets(newJackets)
    })
  }

useEffect(() => {
  getJackets()
}, [])


  return (
    <>
    <h1>All Available Jackets</h1>
    <Add handleCreate={handleCreate} />
    {jackets.map((jacket) => {
      return (
        <>
        <Jacket jacket={jacket} />
        <Edit jacket= {jacket} handleEdit={handleEdit}/>
        <button onClick={() => {handleDelete(jacket)}}>Delete</button> 
        </>
      )
    })}
    </>
  );
}

export default App;
