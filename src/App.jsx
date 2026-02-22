import { useState, useEffect } from 'react';
import Header from './component/layout/Header';
import Sidebar from './component/layout/Sidebar';
import SubscriberPostCard from './component/feed/SubscriberPostCard';
import FeedPostCard from './component/feed/FeedPostCard';
import { subscriberPostData } from './data/mockPosts';
import MobileBar from './component/layout/MobileBar/MobileBar';

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <MobileBar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-4 py-4 sm:p-6 dark:bg-[#030303]">
          <SubscriberPostCard post={subscriberPostData} />
          <FeedPostCard />
        </main>
      </div>
    </div>
  );
}

export default App;
