import { useState} from "react";
import { useEffect } from "react";
import './App.css';
import Footer from "./Footer.jsx";
import About from "./About.jsx";

function App(){
  
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState("all");
  const [users, setUsers] = useState([]);
  const [sort, setSort] = useState('asc');
  const [dateSort, setDateSort] = useState('desc');
  const [PLimit, setPLimit] = useState(10);
  const [DLimit, setDLimit] = useState(10);
  const [page, setPage] = useState("task")

  

  useEffect(() => {
  
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(data => {setTasks(data);});

    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {setUsers(data);
        console.log("Изтеглени потребители:", data); });

  }, []);

  const moveTask = (id) => {
    setTasks(list => list.map(t => {
      if (t.id === id) {
        const isDone = !t.completed;
        return { ...t, completed: isDone, date: isDone ? Date.now() : null };
      }
      return t;
    }));
  };

  let pending = tasks.filter(t => t.completed === false && (user === "all" || t.userId.toString() === user));

  if (sort === 'asc'){
    pending.sort((a, b) => a.title.localeCompare(b.title)); // От А до Я
  } else if (sort === "desc") {
    pending.sort((a, b) => b.title.localeCompare(a.title)); // От Я до А
  }

  const VisibleP = pending.slice(0, PLimit);
  
  const done = tasks.filter(t => t.completed === true && (user === "all" || t.userId.toString() === user));

  if (dateSort === 'asc') {
    done.sort((a,b) => a.date - b.date);
  }else if (dateSort === 'desc') {
    done.sort((a,b) => b.date - a.date);
  }

  const VisibleD = done.slice(0, DLimit);

  return (

    <div> 
      <header className="header">
        <h1 className="header-title" >Todo App</h1>
      </header>

      {page === "task" ? (
        <>
     <div className="filter-div">
        <label className="titleB">User: </label>
        <select className="filter-select" value={user} onChange={(e) => setUser(e.target.value)}>
          <option value="all">All Usars</option>
         
          {users.map(u => (<option key = {u.id} value={u.id}> {u.name} </option> ))} 
         
        </select>
      </div>

      <div className="main">
        
       {/* left side */}
        <div className= "side">
         <div className="side-header"> 
          <h2 className="title">Pending: <span className="count" >{pending.length}</span></h2>

        <div className="sort-div">

          <label className="title">Sort: </label>
          
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="asc">Title (A-Z)</option>
              <option value="desc">Title (Z-A)</option>
            </select>
        </div>
        </div>

          <ul>
            {VisibleP.map(t => (
              <li key={t.id} className="item">

                <div className="task-info">
                  <span>{t.title}</span>
                </div>

                <button onClick={() => moveTask(t.id)}>Complete</button>
              </li>
            ))}
          </ul>

            {PLimit < pending.length && (
            <button className="load-more-btn" onClick={() => setPLimit(PLimit + 10)}>Load more</button>)}
        </div>

        
        {/* right side */}
        <div className="side">
          <div className="side-header">
            <h2 className="title">Completed: <span className="count" >{done.length}</span> </h2>

          <div className="sort-div">
            <label className="title">Sort: </label>
            <select value={dateSort} onChange={(e) => setDateSort(e.target.value)}>
              <option value="desc">Date (New-Old)</option>
              <option value="asc">Date (Old-New)</option>
            </select>
          </div>
          </div>
         <ul>
            {VisibleD.map(t => (
              <li key={t.id} className="item">
                <div>

                 <div className="task-info">
                  <span>{t.title}</span>
                </div>

                  <br />
                  {t.date && (
                    <small className="date-text">
                      Completed on: {new Date(t.date).toLocaleDateString()}
                    </small>
                  )}
                </div>
                <button onClick={() => moveTask(t.id)}>Uncomplete</button>
              </li>
            ))}
          </ul>

            {DLimit < done.length && (
              <button className="load-more-btn" onClick={() =>setDLimit(DLimit + 10)}>Load more</button>
            )}

        </div>
      </div>
      </>
      ) : (
        <About />
      )}
      <Footer page={page} setPage={setPage} />
        
    </div>
  );
}

export default App;