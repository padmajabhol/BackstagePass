import { headerData } from '../../../data/headerData';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import IconButton from '../../ui/IconButton';

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header
      className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1A191B] transition-colors duration-300 hidden
      sm:block"
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center gap-2.5 min-w-0">
          <img src={headerData.brand.logo} alt="Logo" className="h-6 w-auto" />
          <h1 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white truncate">
            {headerData.brand.name}
            <span className="text-[#E0B668]">{headerData.brand.highlight}</span>
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <Badge className="hidden sm:flex items-center gap-1 bg-gray-100 dark:bg-[#2A292C] px-2 py-1 rounded-full">
            <img
              src={headerData.streak.icon}
              alt="Streak"
              className="h-5 w-5"
            />
            <span className="text-gray-900 dark:text-white font-medium">
              {headerData.streak.count}
            </span>
          </Badge>
          <IconButton>
            <i className="bi bi-bell text-[14px] text-gray-900 dark:text-white"></i>
          </IconButton>
          <Button onClick={toggleTheme}>{darkMode ? '🌙' : '☀️'}</Button>
          <img
            src={headerData.user.avatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-[#211F26] dark:text-white font-semibold hover:underline transition-colors">
              <i className="bi bi-chevron-left text-[20px] leading-none"></i>
              {headerData.navigation.backText}
            </button>
            <div className="hidden md:block h-5 w-px bg-gray-300 dark:bg-gray-700"></div>
            <span className="font-semibold text-gray-900 dark:text-white">
              {headerData.navigation.dayText}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-white md:justify-end">
            <span className="font-semibold">
              {headerData.navigation.challengeTitle}
            </span>
            <i className="bi bi-info-circle text-[16px] leading-none"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
