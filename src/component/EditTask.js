import { doc, updateDoc } from 'firebase/firestore';
import React, {useState} from 'react';
import { db } from '../firebase-config';

export default function EditTask(id, editName, editImage, editCategory, editPrice, editIsInstock, finishEdit) {

    const [name,setName] = useState(editName)
    const [image,setImage] = useState(editImage)

    const hendleUpdate = async(e) => {
        e.preventDefult();

        
        const taskDocRef = doc(db,'jewelry',id);

        try{
            await updateDoc(taskDocRef,{
                name:name,
                image:image
            })
            finishEdit()
        }catch(error){
            alert(error)

        }
    }

  return (
    <div style={{backgroundColor:'lightgray', padding:8, marginTop:5}}>

        <h4>Edit jewelry</h4>
        <form onSubmit={{hendleUpdate}}>
            <label>Edit name</label>
            <input className='form-control' type='text'
            onChange={(e)=>setName(e.target.value)} value={name}/>

            <label>Edit image</label>
            <input className='form-control' type='text'
            onChange={(e)=>setImage(e.target.value)} value={image}/>

            <input type='submit' className='btn btn-success mt-2'/>
            
        </form>
    </div>
  )
}
