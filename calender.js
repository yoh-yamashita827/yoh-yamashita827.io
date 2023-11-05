const e = React.createElement;
import React, { useState } from 'react';


const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [isWorkingDay, setIsWorkingDay] = useState(false);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleIsWorkingDayChange = (event) => {
    setIsWorkingDay(event.target.checked);
  };

  return (
    <div>
      <label>
        Date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <br />
      <label>
        Working Day:
        <input type="checkbox" checked={isWorkingDay} onChange={handleIsWorkingDayChange} />
      </label>
      <br />
      <p>{isWorkingDay ? 'Working Day' : 'Day Off'}</p>
    </div>
  );
};

export default Calendar;

const domContainer = document.querySelector('#calender');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));