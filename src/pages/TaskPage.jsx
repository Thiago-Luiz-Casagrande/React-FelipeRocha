import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div>
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="p-6 text-white absolute left-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes das tarefas</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-white font-bold text-slate-700">
            {title}
          </h2>
          <p className="text-white text-slate-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
