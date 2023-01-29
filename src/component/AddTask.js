import { addDoc, collection, Timestamp } from 'firebase/firestore'
import React, {useState} from 'react'
import { db } from '../firebase-config'

export default function AddTask({ onClose }) {

  const [title, settitle] = useState('')
  const [desc, setdesc]   = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      // addDoc(collection, new document)
      await addDoc(collection(db, 'jewelry'), {
        title: title,
        description: desc,
        completed: false, 
        created: Timestamp.now()
      })
      // close the window(component)
      onClose()
    } catch (error) {alert(error)}
  }
  return (
    <div style={{backgroundColor:'lightgray', padding:8, marginTop:5}}>
        <h4 className='text-center'>Add a new task</h4>
        
        <form onSubmit={handleSubmit}>
            <label>Add title</label>
            <input className='form-control' type='text' 
            onChange={(e)=>settitle(e.target.value)} value={title}/>

            <label>Add description</label>
            <textarea className='form-control' type='text' 
            onChange={(e)=>setdesc(e.target.value)} value={desc}></textarea>

            <input type='submit' className='btn btn-success mt-2'/>
        </form>
    </div>
  )
}