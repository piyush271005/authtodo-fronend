
import { useSelector } from "react-redux";

function CompletedTasksCard() {
  const { todos } = useSelector((state) => state.todos);

  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.isComplete).length;

  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-lg p-5
                transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

  {/* HEADER */}
  <div className="flex justify-between items-center mb-3">
    <p className="font-semibold text-gray-800 tracking-wide">
      Completed Tasks
    </p>

    <span className="text-sm font-medium text-indigo-600">
      {completedTasks}
      <span className="text-gray-400"> / {totalTasks}</span>
    </span>
  </div>

  {/* PROGRESS BAR */}
  <div className="w-full bg-gray-200/70 rounded-full h-2.5 overflow-hidden">
    <div
      className="h-2.5 rounded-full
                 bg-gradient-to-r from-indigo-500 to-violet-500
                 transition-all duration-500 ease-out"
      style={{ width: `${progress}%` }}
    />
  </div>

  {/* OPTIONAL MICRO COPY */}
  <p className="mt-2 text-xs text-gray-500">
    Productivity momentum
  </p>
</div>

  );
}

export default CompletedTasksCard;

