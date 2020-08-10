import {Colors} from '../../../utils/Colors';

export const posts = [
  {
    image_url:
      'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=50',
    username: 'Sayantan Chandra',
    timestamp: '1 hour ago',
    profile_image: require('../../../assets/images/icons/avatar.png'),
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    views: 10,
    likes: 1,
    comments: 0,
  },
  {
    image_url:
      'https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=50',
    username: 'Sayantan Chandra',
    timestamp: '2 hour ago',
    profile_image: require('../../../assets/images/icons/avatar.png'),
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    views: 10,
    likes: 3,
    comments: 2,
  },
];

export const todos = [
  {
    label: 'Video Shoutout',
    total: 23,
    pending: 15,
    background_image: require('../../../assets/images/backgrounds/orange.png'),
    color: Colors.white40,
  },
  {
    label: 'Video Call',
    total: 56,
    pending: 15,
    background_image: require('../../../assets/images/backgrounds/blue.png'),
    color: Colors.white40,
  },
  {
    label: 'Conferencing',
    total: 11,
    pending: 15,
    background_image: require('../../../assets/images/backgrounds/brown.png'),
    color: Colors.white40,
  },
  {
    label: 'Review',
    total: 110,
    pending: 15,
    background_image: require('../../../assets/images/backgrounds/yellow.png'),
    color: Colors.black40,
  },
  {
    label: 'Comment',
    total: 11,
    pending: 15,
    background_image: require('../../../assets/images/backgrounds/red.png'),
    color: Colors.white40,
  },
  {
    label: 'Messaging',
    total: 56,
    pending: 15,
    background_image: require('../../../assets/images/backgrounds/violet.png'),
    color: Colors.white40,
  },
];
