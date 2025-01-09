import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDedailClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((tasks) => (
          <li key={tasks.id} className="flex">
            <button
              onClick={() => onTaskClick(tasks.id)}
              className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
                tasks.isCompleted && "line-through"
              }`}
            >
              {tasks.title}
            </button>
            <Button
              text={<ChevronRightIcon />}
              onClick={() => onSeeDedailClick(tasks)}
            ></Button>
            <Button
              text={<TrashIcon />}
              onClick={() => onDeleteTaskClick(tasks.id)}
            ></Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Tasks;
