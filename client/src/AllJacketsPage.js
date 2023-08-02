import {useState, useEffect } from 'react';
import axios from 'axios';
import Jacket from './components/jacket';
import Add from './components/add';
import Edit from './components/edit';
import React from 'react';

export default function AllJacketsPage() {
    const [jackets, setJackets] = useState([]);
  
    const getJackets = () => {
      axios.get('https://project4-jackets-emmanuel.onrender.com')
      .then((response ) => setJackets(response.data), (err) => console.log(err))
      .catch((error) => console.log(error))
    }
  
    const handleCreate = (createdJacket) => {
      console.log(createdJacket)
      axios.post('https://project4-jackets-emmanuel.onrender.com', createdJacket)
      .then((response) => {
        setJackets([...jackets, response.data])
      })
    }
  
    const handleEdit = (editedJacket) => {
      axios.put('https://project4-jackets-emmanuel.onrender.com' + editedJacket._id, editedJacket)
      .then((response) => {
        let newJackets = jackets.map((jacket) => {
          return jacket._id !== editedJacket._id ? jacket : editedJacket
        })
        setJackets(newJackets)
      })
    }
  
    const handleDelete = (deletedJacket) => {
      axios.delete('https://project4-jackets-emmanuel.onrender.com' + deletedJacket._id)
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
        <React.Fragment key={jacket._id}>
          <Jacket jacket={jacket} />
          <Edit jacket={jacket} handleEdit={handleEdit} />
          <button onClick={() => { handleDelete(jacket) }}>Delete</button>
        </React.Fragment>
      );
    })}
  </>
);
}
