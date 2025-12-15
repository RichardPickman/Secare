type Essentials = 'shorts' | 'comments' | 'ads' | 'tags' | 'sponsor';

type Header =
    | 'header-menu'
    | 'header-logo'
    | 'header-country'
    | 'header-search-bar'
    | 'header-voice-search'
    | 'header-create'
    | 'header-notifications'
    | 'header-profile';

type Menu =
    | 'menu-home'
    | 'menu-shorts'
    | 'menu-you'
    | 'menu-history'
    | 'menu-playlists'
    | 'menu-watch-later'
    | 'menu-liked-videos'
    | 'menu-your-videos'
    | 'menu-downloads'
    | 'menu-courses'
    | 'menu-clips'
    | 'menu-show-less'
    | 'menu-explore'
    | 'menu-music'
    | 'menu-movies'
    | 'menu-live'
    | 'menu-gaming'
    | 'menu-news'
    | 'menu-sports'
    | 'menu-podcasts'
    | 'menu-more-from-youtube'
    | 'menu-youtube-premium'
    | 'menu-youtube-studio'
    | 'menu-youtube-music'
    | 'menu-youtube-kids'
    | 'menu-settings'
    | 'menu-report-history'
    | 'menu-help'
    | 'menu-send-feedback'
    | 'menu-footer';

type Sidebar =
    | 'sidebar-panels'
    | 'sidebar-live-chat'
    | 'sidebar-donation-shelf'
    | 'sidebar-tags'
    | 'sidebar-related';

type ChannelControls =
    | 'channel-controls'
    | 'channel-controls-title'
    | 'channel-controls-avatar'
    | 'channel-controls-channel'
    | 'channel-controls-join'
    | 'channel-controls-subscribe'
    | 'channel-controls-like'
    | 'channel-controls-share'
    | 'channel-controls-download'
    | 'channel-controls-thanks'
    | 'channel-controls-more';

type Description =
    | 'description-merch'
    | 'description-people-mentioned'
    | 'description-teaser-carousel'
    | 'description-video-summary'
    | 'description-music'
    | 'description-ticket'
    | 'description-transcript'
    | 'description-how-this-was-made'
    | 'description-infocard'
    | 'description-game-cards'
    | 'description-chat-replay'
    | 'description-ai-summary';

export type Setting =
    | Essentials
    | Header
    | Menu
    | Sidebar
    | ChannelControls
    | Description;

export const essentials: Essentials[] = [
    'shorts',
    'comments',
    'ads',
    'tags',
    'sponsor',
];

export const header: Header[] = [
    'header-menu',
    'header-logo',
    'header-country',
    'header-search-bar',
    'header-voice-search',
    'header-create',
    'header-notifications',
    'header-profile',
];

export const menu: Menu[] = [
    'menu-home',
    'menu-shorts',
    'menu-you',
    'menu-history',
    'menu-playlists',
    'menu-watch-later',
    'menu-liked-videos',
    'menu-your-videos',
    'menu-downloads',
    'menu-courses',
    'menu-clips',
    'menu-show-less',
    'menu-explore',
    'menu-music',
    'menu-movies',
    'menu-live',
    'menu-gaming',
    'menu-news',
    'menu-sports',
    'menu-podcasts',
    'menu-more-from-youtube',
    'menu-youtube-premium',
    'menu-youtube-studio',
    'menu-youtube-music',
    'menu-youtube-kids',
    'menu-settings',
    'menu-report-history',
    'menu-help',
    'menu-send-feedback',
    'menu-footer',
];

export const sidebar: Sidebar[] = [
    'sidebar-panels',
    'sidebar-live-chat',
    'sidebar-donation-shelf',
    'sidebar-tags',
    'sidebar-related',
];

export const channelControls: ChannelControls[] = [
    'channel-controls-title',
    'channel-controls-avatar',
    'channel-controls-channel',
    'channel-controls-join',
    'channel-controls-subscribe',
    'channel-controls-like',
    'channel-controls-share',
    'channel-controls-download',
    'channel-controls-thanks',
    'channel-controls-more',
];

export const description: Description[] = [
    'description-merch',
    'description-people-mentioned',
    'description-teaser-carousel',
    'description-video-summary',
    'description-music',
    'description-ticket',
    'description-transcript',
    'description-how-this-was-made',
    'description-infocard',
    'description-game-cards',
    'description-chat-replay',
    'description-ai-summary',
];

export const settings: Setting[] = [
    ...essentials,
    ...header,
    ...menu,
    ...sidebar,
    ...channelControls,
    ...description,
];
