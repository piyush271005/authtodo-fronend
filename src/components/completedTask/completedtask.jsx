
import { useSelector } from "react-redux";

function CompletedTasksCard() {
  const { todos } = useSelector((state) => state.todos);

  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.isComplete).length;

  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <div className="flex justify-between mb-2">
        <p className="font-medium">Completed Tasks</p>
        <p className="text-sm text-gray-500">
          {completedTasks}/{totalTasks}
        </p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default CompletedTasksCard;

