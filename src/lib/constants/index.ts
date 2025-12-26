export type Essentials = 'disable-shorts' | 'disable-ads';

type Header =
    | 'disable-header'
    | 'disable-header-menu'
    | 'disable-header-logo'
    | 'disable-header-country'
    | 'disable-header-search-bar'
    | 'disable-header-voice-search'
    | 'disable-header-create'
    | 'disable-header-notifications'
    | 'disable-header-profile';

type Menu =
    | 'disable-menu'
    | 'disable-menu-home'
    | 'disable-menu-mini'
    | 'disable-menu-shorts'
    | 'disable-menu-subscriptions'
    | 'disable-menu-you'
    | 'disable-menu-history'
    | 'disable-menu-playlists'
    | 'disable-menu-watch-later'
    | 'disable-menu-liked-videos'
    | 'disable-menu-your-videos'
    | 'disable-menu-downloads'
    | 'disable-menu-courses'
    | 'disable-menu-clips'
    | 'disable-menu-show-less'
    | 'disable-menu-explore'
    | 'disable-menu-music'
    | 'disable-menu-movies'
    | 'disable-menu-live'
    | 'disable-menu-gaming'
    | 'disable-menu-news'
    | 'disable-menu-sports'
    | 'disable-menu-podcasts'
    | 'disable-menu-more-from-youtube'
    | 'disable-menu-youtube-premium'
    | 'disable-menu-youtube-studio'
    | 'disable-menu-youtube-music'
    | 'disable-menu-youtube-kids'
    | 'disable-menu-settings'
    | 'disable-menu-report-history'
    | 'disable-menu-help'
    | 'disable-menu-send-feedback'
    | 'disable-menu-footer';

type Sidebar =
    | 'disable-sidebar-shorts'
    | 'disable-sidebar-panels'
    | 'disable-sidebar-live-chat'
    | 'disable-sidebar-donation-shelf'
    | 'disable-sidebar-tags'
    | 'disable-sidebar-related';

type MainContent =
    | 'disable-main-content-tags'
    | 'disable-main-content-explore-more-topics'
    | 'disable-main-content-shorts'
    | 'center-videos';

type ChannelControls =
    | 'disable-channel-controls'
    | 'disable-channel-controls-title'
    | 'disable-channel-controls-avatar'
    | 'disable-channel-controls-channel'
    | 'disable-channel-controls-join'
    | 'disable-channel-controls-subscribe'
    | 'disable-channel-controls-like'
    | 'disable-channel-controls-share'
    | 'disable-channel-controls-download'
    | 'disable-channel-controls-thanks'
    | 'disable-channel-controls-more';

type Description =
    | 'disable-description-description'
    | 'disable-description-merch'
    | 'disable-description-people-mentioned'
    | 'disable-description-teaser-carousel'
    | 'disable-description-video-summary'
    | 'disable-description-cards'
    | 'disable-description-gaming'
    | 'disable-description-music'
    | 'disable-description-ticket'
    | 'disable-description-transcript'
    | 'disable-description-how-this-was-made'
    | 'disable-description-infocard'
    | 'disable-description-game-cards'
    | 'disable-description-chat-replay'
    | 'disable-description-ai-summary';

export type Setting =
    | Essentials
    | Header
    | Menu
    | MainContent
    | Sidebar
    | ChannelControls
    | Description;

export const essentials: Essentials[] = ['disable-shorts', 'disable-ads'];
export const header: Header[] = [
    'disable-header',
    'disable-header-menu',
    'disable-header-logo',
    'disable-header-country',
    'disable-header-search-bar',
    'disable-header-voice-search',
    'disable-header-create',
    'disable-header-notifications',
    'disable-header-profile',
];

export const menu: Menu[] = [
    'disable-menu-home',
    'disable-menu-mini',
    'disable-menu-shorts',
    'disable-menu-subscriptions',
    'disable-menu-you',
    // 'menu-history',
    // 'menu-playlists',
    // 'menu-watch-later',
    // 'menu-liked-videos',
    // 'menu-your-videos',
    // 'menu-downloads',
    // 'menu-courses',
    // 'menu-clips',
    // 'menu-show-less',
    'disable-menu-explore',
    // 'menu-music',
    // 'menu-movies',
    // 'menu-live',
    // 'menu-gaming',
    // 'menu-news',
    // 'menu-sports',
    // 'menu-podcasts',
    'disable-menu-more-from-youtube',
    // 'menu-youtube-premium',
    // 'menu-youtube-studio',
    // 'menu-youtube-music',
    // 'menu-youtube-kids',
    'disable-menu-settings',
    // 'menu-report-history',
    // 'menu-help',
    // 'menu-send-feedback',
    'disable-menu-footer',
];

export const mainContent: MainContent[] = [
    'disable-main-content-tags',
    'disable-main-content-explore-more-topics',
    'disable-main-content-shorts',
    'center-videos',
];

export const sidebar: Sidebar[] = [
    'disable-sidebar-shorts',
    'disable-sidebar-panels',
    'disable-sidebar-live-chat',
    'disable-sidebar-donation-shelf',
    'disable-sidebar-tags',
    'disable-sidebar-related',
];

export const channelControls: ChannelControls[] = [
    'disable-channel-controls-title',
    'disable-channel-controls-avatar',
    'disable-channel-controls-channel',
    'disable-channel-controls-join',
    'disable-channel-controls-subscribe',
    'disable-channel-controls-like',
    'disable-channel-controls-share',
    'disable-channel-controls-download',
    'disable-channel-controls-thanks',
    'disable-channel-controls-more',
];

export const description: Description[] = [
    'disable-description-description',
    'disable-description-merch',
    'disable-description-people-mentioned',
    'disable-description-teaser-carousel',
    'disable-description-video-summary',
    'disable-description-cards',
    'disable-description-gaming',
    'disable-description-ticket',
    'disable-description-transcript',
    'disable-description-how-this-was-made',
    'disable-description-infocard',
    'disable-description-game-cards',
    'disable-description-chat-replay',
    'disable-description-ai-summary',
];

export const settings: Setting[] = [
    ...header,
    ...menu,
    ...mainContent,
    ...sidebar,
    ...channelControls,
    ...description,
];
