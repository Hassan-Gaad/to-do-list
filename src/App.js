import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Footer from './components/footer';
import Tasks from './components/Tasks';
import SignUp from './components/SignUp';
import Login from './components/Login';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState(
    [
      {
        "id": 1,
        "text": "الورد اليومي من القرءان",
      },
      {
        "text": "Angular",
        "id": 2
      },
      {
        "text": "React",
        "id": 3
      }
    ]);

  const deleteTask = async (id) => {

    setTasks(tasks.filter((task) => {
      return task.id !== id;
    }));
  }


  const addTask = async (task) => {

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  return (
    <Router>
      <div className="container">

        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header title="To-Do-List" onAdd={() => { setShowAdd(!showAdd) }} isAddShow={showAdd} />
            {showAdd && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ?
              <Tasks tasks={tasks} onDelete={deleteTask} />
              : 'No Tasks'}
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
