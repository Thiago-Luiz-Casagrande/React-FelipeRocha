import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
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
            <button className="bg-slate-400 margin text-white rounded-md ml-4 p-2">
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(tasks.id)}
              className="bg-slate-400 margin text-white rounded-md ml-4 p-2"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Tasks;
