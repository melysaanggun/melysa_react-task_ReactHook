import './App.css';
import { useState } from 'react';
import AddTodo from "./components/AddTodo";
import List from './components/List';

const data = [
  {
    id: 1,
    title: "Mengerjakan Exercise",
    completed: true
  },
  {
    id: 2,
    title: "Mengerjakan Assignment",
    completed: false 
  }
]

  function App (props) {
  
  const [todo,setTodo] = useState(data) 

  const simpan = (value) => {
    const baru = [...todo, 
      {id: (new Date()).getTime(), title: value, completed: false, }]
    setTodo({todo: baru})
  }

  const selesai = (id, checked) => {
    const baru = todo.map(x => {
      if (id === x.id) return {...x, completed: checked}
      return x
    })
    setTodo({todo: baru})
  }

  const hapus = (id) => {
    const baru = todo.filter(x => x.id !== id )
    setTodo({todo: baru})
  }

    return (
      <div className="container">
        <div className="row">
          <h1>todos</h1>
          <AddTodo simpan={simpan}/>
          <List 
          list={todo} 
          onChecked={selesai}
          hapus={hapus} />
        </div>
      </div>
    )
}

export default App;