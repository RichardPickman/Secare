type Essentials = 'shorts';

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
    | 'menu-mini'
    | 'menu-shorts'
    | 'menu-subscriptions'
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

type MainContent = 'main-content-tags' | 'main-content-explore-more-topics';

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
    | 'description-cards'
    | 'description-gaming'
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
    | MainContent
    | Sidebar
    | ChannelControls
    | Description;

export const essentials: Essentials[] = ['shorts'];
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
    'menu-mini',
    'menu-shorts',
    'menu-subscriptions',
    'menu-you',
    // 'menu-history',
    // 'menu-playlists',
    // 'menu-watch-later',
    // 'menu-liked-videos',
    // 'menu-your-videos',
    // 'menu-downloads',
    // 'menu-courses',
    // 'menu-clips',
    // 'menu-show-less',
    'menu-explore',
    // 'menu-music',
    // 'menu-movies',
    // 'menu-live',
    // 'menu-gaming',
    // 'menu-news',
    // 'menu-sports',
    // 'menu-podcasts',
    'menu-more-from-youtube',
    // 'menu-youtube-premium',
    // 'menu-youtube-studio',
    // 'menu-youtube-music',
    // 'menu-youtube-kids',
    'menu-settings',
    // 'menu-report-history',
    // 'menu-help',
    // 'menu-send-feedback',
    'menu-footer',
];

export const mainContent: MainContent[] = [
    'main-content-tags',
    'main-content-explore-more-topics',
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
    'description-cards',
    'description-gaming',
    'description-ticket',
    'description-transcript',
    'description-how-this-was-made',
    'description-infocard',
    'description-game-cards',
    'description-chat-replay',
    'description-ai-summary',
];

export const settings: Setting[] = [
    ...header,
    ...menu,
    ...mainContent,
    ...sidebar,
    ...channelControls,
    ...description,
];
