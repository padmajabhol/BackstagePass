import { useState } from 'react';
import './mobilebar.css';
import DayItemM from './DayItemM';

const MobileBar = () => {
  const [activeDay, setActiveDay] = useState(1);
  const days = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <div className="mobilebar bg-no-repeat bg-cover h-fit relative sm:hidden block">
      <div className="relative z-10 px-3 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="text-2xl text-gray-900 dark:text-white">
              <i className="bi bi-chevron-left"></i>
            </button>
            <h2 className="text-[20px] font-semibold text-[#211F26] dark:text-white">
              9-Day Fitness Challenge
            </h2>
          </div>
          <div className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center">
            <i className="bi bi-info-circle text-[16px] leading-none text-gray-800 dark:text-white"></i>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-1 relative z-10 pt-5 px-10">
        {days.map((day) => (
          <DayItemM
            key={day}
            day={day}
            active={activeDay === day}
            completed={day < activeDay}
            locked={day > activeDay}
            onClick={() => setActiveDay(day)}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileBar;
