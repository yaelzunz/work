import { deleteDoc, doc } from 'firebase/firestore';
import React ,{ useState} from 'react'
import { db } from '../firebase-config';
import EditTask from './EditTask';

export default function Task({id, name, image, category, price, isInStock}) {

    const [edit,setedit] = useState(false);

    const handleDelete = async() => {
      let docRef = doc(db, 'jewelry', id);
      try {
        await deleteDoc(docRef);
      } catch (error) {
        alert(error)
      }
    }

  return (
    <div className='container alert alert-info'>
        <h3>{name}</h3>
        <p>{image}</p>
        <p>{category}</p>
        <p>{price}</p>
        <p>{isInStock}</p>
        <button className='btn btn-primary' onClick={()=>setedit(true)}>Edit</button>
        <button className='btn btn-danger m-1' onClick={handleDelete}>Delete</button>

        {edit && <EditTask 
        id={id}
        editName={name}
        editImage= {image}
        editCategory= {category}
        editPrice= {price}
        editIsInstock= {isInStock}
        finishEdit={()=> setedit(false)}
        />}
    </div>
  )
}
