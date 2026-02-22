// data/headerData.js

import logo from '../assets/images/logo.png';
import flame from '../assets/images/flame.png';
import avatarImg from '../assets/images/Avatar.png';

export const headerData = {
  brand: {
    logo,
    name: 'Backstage',
    highlight: 'Pass',
  },

  streak: {
    icon: flame,
    count: 30,
  },

  user: {
    avatar: avatarImg,
  },

  navigation: {
    backText: 'Back',
    dayText: 'Day 1 of 9',
    challengeTitle: '9-Day Fitness Challenge',
  },
};
