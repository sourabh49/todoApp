import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { ListBox } from 'primereact/listbox';
import { ToastContainer } from 'primereact/toast';
import { submitTask,getTaskList } from '../Services/TodoApi/Services';


function Todo() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const toast = React.useRef(null);

  const handleAddTask = () => {
    if (task) {
      //setTasks([...tasks, task]);
      submitTask(task);
      setTask('');
      toast.current.show({ severity: 'success', summary: 'Task Added', detail: 'Your task has been added' });
    } else {
      toast.current.show({ severity: 'warn', summary: 'Input Required', detail: 'Please enter a task' });
    }
  };

  const handleRemoveTask = () => {
    if (selectedTask) {
      setTasks(tasks.filter((t) => t !== selectedTask));
      setSelectedTask(null);
      toast.current.show({ severity: 'success', summary: 'Task Removed', detail: 'The task has been removed' });
    } else {
      toast.current.show({ severity: 'warn', summary: 'Select a Task', detail: 'Please select a task to remove' });
    }
  };

  return (
    <div className="App">
      <Toast ref={toast} />
      <div className="p-grid p-dir-col" style={{ width: '300px', margin: 'auto', paddingTop: '50px' }}>
        <div className="p-field">
          <InputText
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
            style={{ width: '100%' }}
          />
        </div>
        <br/>
        <div className="p-field">
          <InputText
            value={task}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a Description"
            style={{ width: '100%' }}
          />
        </div>
        <br/>
        <Button label="Add Task" icon="pi pi-check" onClick={handleAddTask} className="p-button-primary" />
        <ListBox
          value={selectedTask}
          options={tasks}
          onChange={(e) => setSelectedTask(e.value)}
          style={{ marginTop: '20px', width: '100%' }}
        />
        <Button
          label="Remove Task"
          icon="pi pi-trash"
          onClick={handleRemoveTask}
          className="p-button-danger"
          style={{ marginTop: '10px' }}
        />
      </div>
    </div>
  );
}

export default Todo;
