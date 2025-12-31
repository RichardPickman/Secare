import { Home, Info, Play } from 'lucide-react';
import type { JSX } from 'react';

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

type Shorts =
    | 'disable-menu-shorts'
    | 'disable-sidebar-shorts'
    | 'disable-main-content-shorts'
    | 'disable-channel-shorts'
    | 'disable-history-shorts';

type Menu =
    | 'disable-menu'
    | 'disable-menu-home'
    | 'disable-menu-mini'
    // | 'disable-menu-shorts'
    | 'disable-menu-subscriptions'
    | 'disable-menu-you'
    | 'disable-menu-explore'
    | 'disable-menu-more-from-youtube'
    | 'disable-menu-settings'
    | 'disable-menu-footer';

type Sidebar =
    // | 'disable-sidebar-shorts'
    | 'disable-sidebar-panels'
    | 'disable-sidebar-live-chat'
    | 'disable-sidebar-donation-shelf'
    | 'disable-sidebar-tags'
    | 'disable-sidebar-related';

type MainContent =
    | 'disable-main-content-tags'
    | 'disable-main-content-explore-more-topics'
    // | 'disable-main-content-shorts'
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
    | 'disable-channel-controls-save'
    | 'disable-channel-controls-clip'
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

type Comments =
    | 'disable-comments'
    | 'disable-comments-amount'
    | 'disable-comments-sorting';

export type Setting =
    | Essentials
    | Header
    | Menu
    | MainContent
    | Sidebar
    | ChannelControls
    | Description
    | Comments
    | Shorts;

export interface Option {
    id: Setting;
    label: string;
}

export interface SettingsGroup {
    groupTitle: string;
    items: { id: Setting; label: string }[];
}

export interface Settings {
    id: string;
    title: string;
    description: string;
    icon: JSX.ElementType;
    groups: SettingsGroup[];
}

export const essentials: SettingsGroup = {
    groupTitle: 'Essentials',
    items: [{ id: 'disable-ads', label: 'Hide ads' }],
};

const headerGroup: SettingsGroup = {
    groupTitle: 'Header',
    items: [
        {
            id: 'disable-header',
            label: 'Hide entire header',
        },
        {
            id: 'disable-header-menu',
            label: 'Hide menu button',
        },
        {
            id: 'disable-header-logo',
            label: 'Hide YouTube logo',
        },
        {
            id: 'disable-header-country',
            label: 'Hide country selector',
        },
        {
            id: 'disable-header-search-bar',
            label: 'Hide search bar',
        },
        {
            id: 'disable-header-voice-search',
            label: 'Hide voice search',
        },
        {
            id: 'disable-header-create',
            label: 'Hide create button',
        },
        {
            id: 'disable-header-notifications',
            label: 'Hide notifications',
        },
        {
            id: 'disable-header-profile',
            label: 'Hide profile menu',
        },
    ],
};

const shortsGroup: SettingsGroup = {
    groupTitle: 'Shorts',
    items: [
        {
            id: 'disable-menu-shorts',
            label: 'Hide shorts in menu',
        },
        {
            id: 'disable-sidebar-shorts',
            label: 'Hide shorts in player sidebar',
        },
        {
            id: 'disable-main-content-shorts',
            label: 'Hide shorts in main feed',
        },
        {
            id: 'disable-channel-shorts',
            label: 'Hide shorts on channel',
        },
        {
            id: 'disable-history-shorts',
            label: 'Hide shorts in history',
        },
    ],
};

const leftSidebarMenuGroup: SettingsGroup = {
    groupTitle: 'Left Sidebar Menu',
    items: [
        {
            id: 'disable-menu',
            label: 'Hide entire sidebar menu',
        },
        {
            id: 'disable-menu-home',
            label: 'Hide Home',
        },
        {
            id: 'disable-menu-mini',
            label: 'Hide mini menu',
        },
        {
            id: 'disable-menu-shorts',
            label: 'Hide Shorts',
        },
        {
            id: 'disable-menu-subscriptions',
            label: 'Hide Subscriptions',
        },
        {
            id: 'disable-menu-you',
            label: 'Hide You section',
        },

        {
            id: 'disable-menu-explore',
            label: 'Hide Explore section',
        },

        {
            id: 'disable-menu-more-from-youtube',
            label: 'Hide More from YouTube',
        },

        {
            id: 'disable-menu-settings',
            label: 'Hide Settings',
        },
        {
            id: 'disable-menu-footer',
            label: 'Hide footer',
        },
    ],
};
const videoGridFeedGroup: SettingsGroup = {
    groupTitle: 'Video Grid & Feed',
    items: [
        {
            id: 'disable-main-content-tags',
            label: 'Hide filter tags',
        },
        {
            id: 'disable-main-content-explore-more-topics',
            label: 'Hide explore more topics',
        },
        {
            id: 'disable-main-content-shorts',
            label: 'Hide Shorts from feed',
        },
        {
            id: 'center-videos',
            label: 'Center videos grid',
        },
    ],
};
const rightSidebarGroup: SettingsGroup = {
    groupTitle: 'Right Sidebar',
    items: [
        {
            id: 'disable-sidebar-shorts',
            label: 'Hide Shorts in sidebar',
        },
        {
            id: 'disable-sidebar-panels',
            label: 'Hide sidebar panels',
        },
        {
            id: 'disable-sidebar-live-chat',
            label: 'Hide live chat',
        },
        {
            id: 'disable-sidebar-donation-shelf',
            label: 'Hide donation shelf',
        },
        {
            id: 'disable-sidebar-tags',
            label: 'Hide video tags',
        },
        {
            id: 'disable-sidebar-related',
            label: 'Hide related videos',
        },
    ],
};
const channelActionsGroup: SettingsGroup = {
    groupTitle: 'Channel & Actions',
    items: [
        {
            id: 'disable-channel-controls-title',
            label: 'Hide video title',
        },
        {
            id: 'disable-channel-controls',
            label: 'Hide entire channel section',
        },
        {
            id: 'disable-channel-controls-avatar',
            label: 'Hide channel avatar',
        },
        {
            id: 'disable-channel-controls-channel',
            label: 'Hide channel name',
        },
        {
            id: 'disable-channel-controls-join',
            label: 'Hide Join button',
        },
        {
            id: 'disable-channel-controls-subscribe',
            label: 'Hide Subscribe button',
        },
        {
            id: 'disable-channel-controls-like',
            label: 'Hide Like/Dislike',
        },
        {
            id: 'disable-channel-controls-share',
            label: 'Hide Share button',
        },
        {
            id: 'disable-channel-controls-save',
            label: 'Hide Save button',
        },
        {
            id: 'disable-channel-controls-clip',
            label: 'Hide Clip button',
        },
        {
            id: 'disable-channel-controls-download',
            label: 'Hide Download button',
        },
        {
            id: 'disable-channel-controls-thanks',
            label: 'Hide Thanks button',
        },
        {
            id: 'disable-channel-controls-more',
            label: 'Hide More menu',
        },
    ],
};
const descriptionInfoGroup: SettingsGroup = {
    groupTitle: 'Description & Info',
    items: [
        {
            id: 'disable-description-description',
            label: 'Hide description text',
        },
        {
            id: 'disable-description-merch',
            label: 'Hide merch shelf',
        },
        {
            id: 'disable-description-people-mentioned',
            label: 'Hide people mentioned',
        },
        {
            id: 'disable-description-teaser-carousel',
            label: 'Hide teaser carousel',
        },
        {
            id: 'disable-description-video-summary',
            label: 'Hide video summary',
        },
        {
            id: 'disable-description-cards',
            label: 'Hide info cards',
        },
        {
            id: 'disable-description-gaming',
            label: 'Hide gaming info',
        },
        {
            id: 'disable-description-music',
            label: 'Hide music info',
        },
        {
            id: 'disable-description-ticket',
            label: 'Hide ticket shelf',
        },
        {
            id: 'disable-description-transcript',
            label: 'Hide transcript',
        },
        {
            id: 'disable-description-how-this-was-made',
            label: 'Hide how this was made',
        },
        {
            id: 'disable-description-infocard',
            label: 'Hide infocards',
        },
        {
            id: 'disable-description-game-cards',
            label: 'Hide game cards',
        },
        {
            id: 'disable-description-chat-replay',
            label: 'Hide chat replay',
        },
        {
            id: 'disable-description-ai-summary',
            label: 'Hide AI summary',
        },
    ],
};

const commentsGroup: SettingsGroup = {
    groupTitle: 'Comments',
    items: [
        {
            id: 'disable-comments',
            label: 'Hide comments',
        },
        {
            id: 'disable-comments-amount',
            label: 'Hide amount of comments',
        },
        {
            id: 'disable-comments-sorting',
            label: 'Hide sorting button',
        },
    ],
};

export const settings: Setting[] = [
    ...headerGroup.items.map((item) => item.id),
    ...leftSidebarMenuGroup.items.map((item) => item.id),
    ...videoGridFeedGroup.items.map((item) => item.id),
    ...rightSidebarGroup.items.map((item) => item.id),
    ...channelActionsGroup.items.map((item) => item.id),
    ...descriptionInfoGroup.items.map((item) => item.id),
    ...commentsGroup.items.map((item) => item.id),
];

export const settingsData: Settings[] = [
    {
        id: 'shorts',
        title: 'Shorts Control',
        description: 'History, main feed, channel and menu',
        icon: Info,
        groups: [shortsGroup],
    },
    {
        id: 'home-browse',
        title: 'Home & Browse Page',
        description: 'Header, menu, and video grid controls',
        icon: Home,
        groups: [headerGroup, leftSidebarMenuGroup, videoGridFeedGroup],
    },
    // {
    //     id: 'watch-player',
    //     title: 'Watch Page',
    //     description: 'Sidebar and recommendations',
    //     icon: Play,
    //     groups: [rightSidebarGroup],
    // },
    {
        id: 'watch-page',
        title: 'Watch Page',
        description: 'Channel info, description, sidebar, and actions',
        icon: Play,
        groups: [
            rightSidebarGroup,
            channelActionsGroup,
            descriptionInfoGroup,
            commentsGroup,
        ],
    },
];
