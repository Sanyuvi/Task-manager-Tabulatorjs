import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Component/Table';
import axios from 'axios';

function App() {
   const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
      const retriveTask = response.data.slice(0,20).map((task) => ({
        id: task.id,
        title: task.title,
        description: task.title,
        status: task.completed
      }));
      console.log(retriveTask);
      
      setTasks(retriveTask)
    })
  },[])


  return (
    <>
      <Table tasks={tasks} />
    </>
  )
}

export default App
