import React from 'react'

const TodoesList = ({todoes, setTodoes}) => {
    const handleDelete = ({id}) => {
        setTodoes(todoes.filter((todo)=>todo.id !== id));
    };
const handleComplete = (todo) => {
    setTodoes(
        todoes.map((item) => {
            if (item.id === todo.id) {
                return {...item, completed: !item.completed}
            }
            return item;
        })
    );
};

    return (
        <div>
            {todoes.map((todo) => (
                <li className="todo-list" key="{todo.id}">
                    <input
                        type="text"
                        value={todo.title}
                        className="list"
                        onChange={(event) => event.preventDefault()}
                    />
                    {/* Botones para las acciones */}
                    <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button">
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TodoesList;