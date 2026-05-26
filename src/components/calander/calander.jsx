import { useState } from "react";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-based

  // First day of the month (0 = Sunday)
  const firstDay = new Date(year, month, 1).getDay();

  // Total days in current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Today (for highlight)
  const today = new Date();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="bg-slate-900/25 backdrop-blur-xl rounded-2xl border border-slate-800 p-5
                transition-all duration-300 hover:border-slate-700/60 shadow-xl">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-800/60">
        <p className="font-bold text-slate-200 tracking-wide text-sm">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="flex items-center gap-3 text-violet-400 font-bold text-xs select-none">
          <span
            onClick={prevMonth}
            className="cursor-pointer transition-all duration-200
                       hover:text-violet-300 hover:bg-slate-800/50 px-2 py-0.5 rounded-lg border border-transparent hover:border-slate-800"
          >
            ◀
          </span>
          <span
            onClick={nextMonth}
            className="cursor-pointer transition-all duration-200
                       hover:text-violet-300 hover:bg-slate-800/50 px-2 py-0.5 rounded-lg border border-transparent hover:border-slate-800"
          >
            ▶
          </span>
        </div>
      </div>

      {/* DAYS */}
      <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-500 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      {/* DATES */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {/* EMPTY SPACES */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <span key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const date = i + 1;
          const isToday =
            date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <span
              key={date}
              className={`w-8 h-8 flex items-center justify-center rounded-xl text-xs font-bold
                          cursor-pointer transition-all duration-200
                ${
                  isToday
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(139,92,246,0.4)] scale-105 border border-violet-500/20"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
            >
              {date}
            </span>
          );
        })}
      </div>

      {/* MICRO COPY */}
      <p className="mt-4 text-[10px] text-slate-600 text-center font-bold tracking-wide uppercase">
        Calendar reference
      </p>
    </div>
  );
}

export default Calendar;

