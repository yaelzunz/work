import React, {useState, useEffect} from 'react'
import { collection,getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'
import Task from './Task';
import AddTask from './AddTask'


export default function TaskManager() {

    const [jewelry,setjewelry] = useState([]);
    const [addNewTask, setAddNewTask] = useState(false); 


    useEffect(()=>{

        const getTasks = async (db) =>{

            const TaskCol = collection(db,'jewelry');

            console.log(TaskCol)

            const tasksSnapshot = await getDocs(TaskCol);

            console.log(tasksSnapshot)

            const tasksList = await tasksSnapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            ))
            setjewelry(tasksList)

        }
        getTasks(db)
    },[jewelry]);

  return (
    <div className='container'>
         <h2 className='text-center'>jewelry</h2>
        <hr/>
        {<button className='btn' style={{backgroundColor:'cadetblue'}}
        onClick={()=>setAddNewTask(true)}>Add a new task</button>}

        {addNewTask && <AddTask onClose={()=>setAddNewTask(false)}/>}
        
        {jewelry.length > 0 && jewelry.map(jewelry=>(
            <div key={jewelry.id}>
                <Task 
                id={jewelry.id}
                name={jewelry.data.name}
                image={jewelry.data.image}
                category={jewelry.data.category}
                price={jewelry.data.price}
                isInStock={jewelry.data.isInStock}/> 
                </div>
        ))}
        </div>
  )
}
