const DayItemM = ({ day, active, locked, onClick }) => {
  const labelClass = `leading-none text-xs whitespace-nowrap ${
    active
      ? 'font-semibold text-gray-900 dark:text-white'
      : 'font-medium text-[#0400119C] dark:text-[#F5F1FFB7]'
  }`;

  return (
    <div
      onClick={!locked ? onClick : undefined}
      className={`custom-nav-item-m relative flex flex-col items-center gap-4 px-4 py-3 rounded-t-full transition-all duration-200 ${
        active
          ? 'bg-[#FFFFFF] dark:bg-[#030303] mr-0 active-with-curve-m'
          : 'hover:bg-white/50 dark:hover:bg-white/5 mr-2'
      }`}
    >
      <span className={labelClass}>{active ? 'Day' : `Day ${day}`}</span>

      {locked ? (
        <i className="bi bi-lock-fill text-[rgba(4,0,17,0.61)] dark:text-[#A3A1AA] text-2xl leading-none flex items-center" />
      ) : (
        <span
          className={`leading-none text-2xl z-10 ${
            active
              ? 'font-semibold text-gray-900 dark:text-white'
              : 'font-medium text-[#0400119C] dark:text-[#F5F1FFB7]'
          }`}
        >
          {day}
        </span>
      )}
    </div>
  );
};

export default DayItemM;
