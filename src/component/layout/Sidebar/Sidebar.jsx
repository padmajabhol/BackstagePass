import { useState } from 'react';
import DayItem from './DayItem';
import './sidebar.css';

const Sidebar = () => {
  const [activeDay, setActiveDay] = useState(1);
  const days = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <aside
      className="
      sidebar
      bg-no-repeat bg-cover
      w-[258px] min-h-screen
      pl-4 py-4
      relative
      hidden
      sm:block
  "
    >
      <div className="glass-overlay" />
      <div className="flex flex-col gap-3 relative z-10 pt-14">
        {days.map((day) => (
          <DayItem
            key={day}
            day={day}
            active={activeDay === day}
            completed={day < activeDay}
            locked={day > activeDay}
            onClick={() => setActiveDay(day)}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
