import './sidebar.css';

const DayItem = ({ day, active, completed, locked, onClick }) => {
  return (
    <div
      onClick={!locked ? onClick : undefined}
      className={`
        custom-nav-item
        relative
        flex items-center gap-29
        px-4 py-3
        rounded-l-full rounded-r-0
        transition-all duration-200
        ${
          active
            ? 'bg-[#F7F6FC] dark:bg-[#030303] shadow-sm mr-0 active-with-curve'
            : 'hover:bg-white/50 dark:hover:bg-white/5 mr-4'
        }
        ${locked ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
      `}
    >
      <span
        className={`text-base leading-6 tracking-normal ${
          active
            ? 'font-semibold text-gray-900 dark:text-white'
            : 'font-medium text-[#0400119C] dark:text-[#F5F1FFB7]'
        }`}
      >
        Day - {day}
      </span>

      {completed ? (
        <i className="bi bi-check-circle-fill text-green-500 text-lg"></i>
      ) : locked ? (
        <i className="bi bi-lock-fill text-[rgba(4,0,17,0.61)] dark:text-[#A3A1AA] text-lg"></i>
      ) : (
        <i className="bi bi-check-circle-fill text-green-500 text-lg"></i>
      )}
    </div>
  );
};

export default DayItem;
