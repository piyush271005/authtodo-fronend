
import { useSelector } from "react-redux";

function CompletedTasksCard() {
  const { todos } = useSelector((state) => state.todos);

  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.isComplete).length;

  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  let motivationalMessage = "Let's kickstart your day! Add a task below.";
  if (totalTasks === 0) {
    motivationalMessage = "No tasks in your queue. Enjoy the peace!";
  } else if (progress > 0 && progress < 40) {
    motivationalMessage = "Off to a solid start! Keep the momentum going.";
  } else if (progress >= 40 && progress < 80) {
    motivationalMessage = "Outstanding progress! You are in absolute flow.";
  } else if (progress >= 80 && progress < 100) {
    motivationalMessage = "Almost there! Finish strong.";
  } else if (progress === 100) {
    motivationalMessage = "Workspace Zen! You conquered everything today! 🚀";
  }

  return (
    <div className="bg-slate-900/25 backdrop-blur-xl rounded-2xl border border-slate-800 p-5
                transition-all duration-300 hover:border-slate-700/60 shadow-xl">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-800/60">
        <p className="font-bold text-slate-200 tracking-wide text-sm">
          Completed Tasks
        </p>

        <span className="text-xs font-bold text-violet-400 bg-violet-950/30 border border-violet-800/40 px-2.5 py-1 rounded-lg">
          {completedTasks} <span className="text-slate-500 font-medium">/ {totalTasks}</span>
        </span>
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full bg-slate-950 rounded-full h-3 overflow-hidden border border-slate-800/60 p-[1.5px]">
        <div
          className="h-full rounded-full
                     bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600
                     shadow-[0_0_10px_rgba(139,92,246,0.45)]
                     transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* DYNAMIC MOTIVATIONAL COPY */}
      <div className="mt-4 space-y-1">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          Productivity Status
        </p>
        <p className="text-xs text-slate-300 font-semibold leading-relaxed">
          {motivationalMessage}
        </p>
      </div>
    </div>
  );
}

export default CompletedTasksCard;

