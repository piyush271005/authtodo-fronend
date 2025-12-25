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
    <div className="bg-white rounded-xl shadow p-5">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-medium">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="space-x-3 text-gray-400 cursor-pointer">
          <span onClick={prevMonth}>◀</span>
          <span onClick={nextMonth}>▶</span>
        </div>
      </div>

      {/* DAYS */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <span key={day} className="text-gray-400">
            {day}
          </span>
        ))}

        {/* EMPTY SPACES */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <span key={`empty-${i}`} />
        ))}

        {/* DATES */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const date = i + 1;
          const isToday =
            date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <span
              key={date}
              className={`py-1 rounded-full cursor-pointer
                ${
                  isToday
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {date}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;

