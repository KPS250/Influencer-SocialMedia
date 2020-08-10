import {Icons} from './Icons';

export const attachmentConstants = {
  photo: 'photo',
  video: 'video',
  audio: 'audio',
  googleDoc: 'googleDoc',
  googleSheet: 'googleSheet',
};

export const postAttachments = [
  {
    type: attachmentConstants.photo,
    icon: Icons.photograph,
  },
  {
    type: attachmentConstants.video,
    icon: Icons.videoCamera,
  },
  {
    type: attachmentConstants.audio,
    icon: Icons.audio,
  },
  {
    type: attachmentConstants.googleDoc,
    icon: Icons.googleDoc,
  },
  {
    type: attachmentConstants.googleSheet,
    icon: Icons.googleSheet,
  },
];

export const bottomBarConstants = {
  posts: 'posts',
  search: 'search',
  messages: 'messages',
  profile: 'profile',
};

export const bottomBarOptions = [
  {
    type: bottomBarConstants.posts,
    icon: Icons.compass,
  },
  {
    type: bottomBarConstants.search,
    icon: Icons.search,
  },
  {
    type: bottomBarConstants.messages,
    icon: Icons.email,
  },
  {
    type: bottomBarConstants.profile,
    icon: Icons.user,
  },
];
