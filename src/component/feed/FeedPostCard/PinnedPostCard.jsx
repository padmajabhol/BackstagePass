import { MoreHorizontal } from 'lucide-react';
import Image1 from '../../../assets/images/image1.png';
import Image2 from '../../../assets/images/image2.png';
import Image3 from '../../../assets/images/image3.png';
import Avatar2 from '../../../assets/images/avatar2.png';
import Avatar from '../../ui/Avatar';
import { pinnedPostData } from '../../../data/pinnedPostData';

const stepIcons = {
  1: Image1,
  2: Image2,
  3: Image3,
};

const PinnedPostCard = () => {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#1C1C1E] rounded-xl sm:rounded-2xl border border-[#EAE7EC] dark:border-white/5 text-white overflow-hidden">
      <div className="flex items-center gap-2 text-xs sm:text-sm font-normal text-[#211F26] dark:text-[#EEEEF0] px-2.5 sm:px-3 py-2 border-b border-[#EAE7EC] dark:border-white/10">
        <i className="bi bi-pin-angle-fill text-[#211F26] dark:text-[#EEEEF0] text-sm sm:text-base"></i>
        <span>{pinnedPostData.label}</span>
      </div>

      <div className="px-2.5 sm:px-3 py-2.5 sm:py-3">
        <div className="flex items-start justify-between gap-2 mb-3 sm:mb-4">
          <div className="flex gap-2 min-w-0">
            <Avatar
              src={Avatar2}
              alt={pinnedPostData.author.name}
              className="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
            />
            <div className="min-w-0">
              <p className="font-semibold text-sm sm:text-base text-[#211F26] dark:text-[#EEEEF0] truncate">
                {pinnedPostData.author.name}
              </p>
              <p className="text-xs text-[#0400119C] dark:text-gray-400">
                {pinnedPostData.author.time}
              </p>
            </div>
          </div>

          <MoreHorizontal className="text-[#211F26] dark:text-[#EEEEF0] w-4 h-4 opacity-100 cursor-pointer shrink-0" />
        </div>

        <p className="text-[#211F26] dark:text-[#FFFFFF] leading-5 sm:leading-6 mb-3 sm:mb-4 text-sm sm:text-base font-normal">
          {pinnedPostData.content}
        </p>

        <div className="space-y-1.5 sm:space-y-2">
          {pinnedPostData.steps.map((step) => (
            <div key={step.id} className="flex items-start sm:items-center gap-2">
              <img
                src={stepIcons[step.id]}
                alt={`Step ${step.id}`}
                className="w-4 h-4 sm:w-[18px] sm:h-[18px] mt-0.5 sm:mt-0 shrink-0"
              />
              <p className="text-[#211F26] dark:text-[#FFFFFF] text-sm sm:text-base">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PinnedPostCard;
