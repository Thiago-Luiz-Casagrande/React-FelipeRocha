import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <h1 className="text-blue-500 text-center">Gerenciador de tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
