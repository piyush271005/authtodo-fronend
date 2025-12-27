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
    <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-lg p-5
                transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

  {/* HEADER */}
  <div className="flex justify-between items-center mb-4">
    <p className="font-semibold text-gray-800 tracking-wide">
      {currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric",
      })}
    </p>

    <div className="flex items-center gap-3 text-indigo-500 font-semibold">
      <span
        onClick={prevMonth}
        className="cursor-pointer transition-transform duration-200
                   hover:scale-110 hover:text-indigo-700"
      >
        ◀
      </span>
      <span
        onClick={nextMonth}
        className="cursor-pointer transition-transform duration-200
                   hover:scale-110 hover:text-indigo-700"
      >
        ▶
      </span>
    </div>
  </div>

  {/* DAYS */}
  <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-gray-400 mb-1">
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
          className={`w-8 h-8 flex items-center justify-center rounded-full
                      cursor-pointer transition-all duration-200
            ${
              isToday
                ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md scale-105"
                : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
            }`}
        >
          {date}
        </span>
      );
    })}
  </div>

  {/* MICRO COPY */}
  <p className="mt-3 text-xs text-gray-500 text-center">
    Today highlighted for quick reference
  </p>
</div>

  );
}

export default Calendar;

