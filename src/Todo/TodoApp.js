import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { submitTask,getTaskList } from '../Services/TodoApi/Services';

import 'primereact/resources/themes/saga-blue/theme.css';  // Add theme
import 'primereact/resources/primereact.min.css';          // Add PrimeReact core styles
import 'primeicons/primeicons.css';                        // Add PrimeIcons

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const toast = React.useRef(null);

  const addTodo = () => {
    if (task.trim() && description.trim()) {
      const newTodo = { task, description };
      setTodos([...todos, newTodo]);
      setTask('');
      setDescription('');
      submitTask(newTodo);
      toast.current.show({ severity: 'success', summary: 'Todo Added', detail: 'Task and description added successfully' });
    } else {
      toast.current.show({ severity: 'error', summary: 'Validation Error', detail: 'Please enter both task and description' });
    }
  };

  const deleteTodo = (taskToDelete) => {
    const updatedTodos = todos.filter(todo => todo.task !== taskToDelete);
    setTodos(updatedTodos);
    toast.current.show({ severity: 'info', summary: 'Todo Deleted', detail: `Task "${taskToDelete}" deleted successfully` });
  };

  return (
    <div className="todo-container" style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Toast ref={toast} />
      <h2>Basic To-Do App</h2>
      
      <div className="p-inputgroup" style={{ marginBottom: '10px' }}>
        <span className="p-inputgroup-addon">Task</span>
        <InputText value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task" />
      </div>
      
      <div className="p-inputgroup" style={{ marginBottom: '10px' }}>
        <span className="p-inputgroup-addon">Description</span>
        <InputText value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" />
      </div>
      
      <Button label="Add Todo" icon="pi pi-check" onClick={addTodo} style={{ marginBottom: '20px' }} />
      
      <DataTable value={todos} paginator rows={5} header="Task List" responsiveLayout="scroll">
        <Column field="task" header="Task" />
        <Column field="description" header="Description" />
        <Column
          body={(rowData) => (
            <Button label="Delete" icon="pi pi-times" className="p-button-danger" onClick={() => deleteTodo(rowData.task)} />
          )}
          header="Actions"
        />
      </DataTable>
    </div>
  );
};

export default TodoApp;
