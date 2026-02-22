import Avatar3 from '../../../assets/images/avatar3.png';
import Avatar4 from '../../../assets/images/avatar4.png';
import Avatar5 from '../../../assets/images/avatar5.png';
import PinnedPostCard from './PinnedPostCard';
import Avatar from '../../ui/Avatar';
import { feedCardData } from '../../../data/mockFeedCard';

function FeedPostCard() {
  const avatarMap = {
    avatar3: Avatar3,
    avatar4: Avatar4,
    avatar5: Avatar5,
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-4 sm:mt-6">
      <div className="bg-[#FFFFFF] dark:bg-[#1A191B] rounded-2xl sm:rounded-4xl border border-[#14003527] dark:border-white/10 pt-3 sm:pt-4 px-3 sm:px-4 pb-3 shadow-xl">
        <div className="text-center mb-3 sm:mb-4">
          <h2 className="text-base sm:text-xl text-[#211F26] dark:text-[#FFFFFF] leading-snug sm:leading-7 font-semibold flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {feedCardData.title}
            <div className="flex -space-x-2 order-none">
              {feedCardData.avatars.map((avatar) => (
                <Avatar
                  key={avatar.id}
                  src={avatarMap[avatar.src]}
                  alt={avatar.alt}
                  className="w-6 h-6 sm:w-7 sm:h-7 border border-[#F2EFF3] dark:border-[#232225]"
                />
              ))}
            </div>
            {feedCardData.titleEnd}
          </h2>

          <p className="text-[#211F26] dark:text-[#F1F1F1] font-light mt-1.5 sm:mt-2 text-xs sm:text-sm">
            <span className="font-semibold">
              {feedCardData.participantsCount}+
            </span>{' '}
            {feedCardData.subtitleText}
          </p>
        </div>
        <PinnedPostCard />
      </div>
    </div>
  );
}

export default FeedPostCard;
