import React from 'react';

const Calendar = ({date, dayNames, setSelectDate}) => {
  const handleClick = (e) => {
    const { innerText } = e.target;
    setSelectDate(innerText)
  }

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  }

  const getDayOfWeek = (year, month, day) => {
    return new Date(year, month, day).getDay();
  }

  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfWeek = getDayOfWeek(year, month, 1);
    const calendarDays = [];

    // 빈 칸 추가
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(
        <div
          key={`empty-${i}`}
          className="empty-day">
        </div>
      );
    }

    // 날짜 추가
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(
        <div
          key={day}
          className="day"
          onClick={handleClick}
        >{day}
        </div>
      );
    }

    return calendarDays;
  }

  return (
    <div className='calendar-con'>
      <div className="day-names">
        {dayNames.map(day => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="calendar">
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
