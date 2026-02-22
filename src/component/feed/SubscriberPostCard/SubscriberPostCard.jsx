import { MoreHorizontal, MessageCircle, Smile } from 'lucide-react';
import ConfettiHeader from './ConfettiHeader';
import Badge from '../../ui/Badge';
import IconButton from '../../ui/IconButton';

function SubscriberPostCard({ post }) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#E6F6EB] dark:bg-[#132D21] rounded-2xl sm:rounded-4xl border border-[#14003527]">
      <ConfettiHeader title={post.headerTitle} />
      <div className="relative bg-[#FFFFFF] dark:bg-[#1A191B] text-[#211F26] dark:text-white rounded-2xl sm:rounded-4xl shadow-lg overflow-hidden">
        <div className="flex items-start justify-between gap-2 p-3 sm:p-4">
          <div className="flex gap-2 sm:gap-3 min-w-0">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0"
            />
            <div className="min-w-0">
              <p className="font-semibold text-sm sm:text-base truncate">
                {post.author.name}
              </p>
              <p className="text-xs sm:text-sm text-[#0400119C] dark:text-[#A3A1AA]">
                {post.author.time}
              </p>
            </div>
          </div>
          <MoreHorizontal className="w-4 h-4 text-[#EEEEF0] cursor-pointer shrink-0" />
        </div>
        <p className="px-3 pb-3 sm:px-4 sm:pb-4 text-sm sm:text-base text-[#211F26] dark:text-gray-200">
          {post.caption}
        </p>
        <div className="relative">
          <img
            src={post.media.src}
            alt="post media"
            className="w-full h-[200px] sm:h-[280px] md:h-[350px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/30 backdrop-blur-md p-4 rounded-full">
              <div className="w-0 h-0 border-l-[14px] border-l-white border-y-[10px] border-y-transparent ml-1"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-3">
          <div className="flex items-center gap-1 flex-wrap">
            <Badge className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm bg-[#F2EFF3] dark:bg-[#2A292C] border border-none dark:border-[#2A2A2D]">
              <span>{post.reactions.emojis}</span>
              <span className="text-[#211F26] dark:text-[#EEEEF0]">
                {post.reactions.count}
              </span>
            </Badge>
            <IconButton className="h-8 w-8 sm:h-9 sm:w-9 bg-[#F2EFF3] dark:bg-[#2A292C] border dark:border-white/10 hover:bg-white/5">
              <Smile className="text-[#211F26] dark:text-[#EEEEF0]" size={18} />
            </IconButton>
            <IconButton className="h-8 w-8 sm:h-9 sm:w-9 bg-[#F2EFF3] dark:bg-[#2A292C] border dark:border-white/10 hover:bg-white/5">
              <MessageCircle
                className="text-[#211F26] dark:text-[#EEEEF0]"
                size={18}
              />
            </IconButton>
          </div>
          <Badge className="bg-transparent text-xs sm:text-sm">
            {post.commentsCount} Comments
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default SubscriberPostCard;
