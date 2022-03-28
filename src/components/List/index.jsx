import './style.css'

const List = (props) => {

    const onChange = (id) => {
        return (e) => {
            props.onChecked(id, e.target.checked)
        }
    }

    const onClick = (id) => {
        return () => {
            props.hapus(id);
        }
    }

    return ( 
        <div className="todolist-list">
            {props.list.map((todo) => {
                return <ul key={todo.id} style={{textDecoration: todo.completed ? 'line-through'  : 'none', 
                fontStyle: todo.completed ? 'italic' : 'normal' }}>
                    
                    <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    onChange={onChange(todo.id)}  />
                        
                    {todo.title}

                    <button onClick={onClick(todo.id)} >Delete</button>
                    </ul>
            })}
        </div>
     );
}
 
export default List;