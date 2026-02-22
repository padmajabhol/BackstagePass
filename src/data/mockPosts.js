import AvatarImg from '../assets/images/Avatar.png';
import FrameImg from '../assets/images/frame.png';

export const subscriberPostData = {
  headerTitle: 'Your Submission',

  author: {
    name: 'Ashraf Idrishi',
    avatar: AvatarImg,
    time: '1s',
  },

  caption: 'Today’s challenge workout completed—feeling stronger already',

  media: {
    type: 'image',
    src: FrameImg,
  },

  reactions: {
    emojis: '🙏 😍',
    count: 18,
  },

  commentsCount: 10,
};
