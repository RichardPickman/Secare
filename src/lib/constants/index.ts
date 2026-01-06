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
    | 'disable-menu-subscriptions'
    | 'disable-menu-you'
    | 'disable-menu-explore'
    | 'disable-menu-more-from-youtube'
    | 'disable-menu-settings'
    | 'disable-menu-footer';

type Sidebar =
    | 'disable-sidebar-panels'
    | 'disable-sidebar-live-chat'
    | 'disable-sidebar-donation-shelf'
    | 'disable-sidebar-tags'
    | 'disable-sidebar-related';

type MainContent =
    | 'disable-main-content-tags'
    | 'disable-main-content-explore-more-topics'
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
    groupId: string;
    items: { id: Setting }[];
}

export interface Settings {
    id: string;
    title: string;
    description: string;
    icon: JSX.ElementType;
    groups: SettingsGroup[];
}

export const essentials: SettingsGroup = {
    groupId: 'Essentials',
    items: [{ id: 'disable-ads' }],
};

const headerGroup: SettingsGroup = {
    groupId: 'settings.home-browse.groupId.header',
    items: [
        { id: 'disable-header' },
        { id: 'disable-header-menu' },
        { id: 'disable-header-logo' },
        { id: 'disable-header-country' },
        { id: 'disable-header-search-bar' },
        { id: 'disable-header-voice-search' },
        { id: 'disable-header-create' },
        { id: 'disable-header-notifications' },
        { id: 'disable-header-profile' },
    ],
};

const shortsGroup: SettingsGroup = {
    groupId: 'settings.shorts.groupId.shorts',
    items: [
        { id: 'disable-menu-shorts' },
        { id: 'disable-sidebar-shorts' },
        { id: 'disable-main-content-shorts' },
        { id: 'disable-channel-shorts' },
        { id: 'disable-history-shorts' },
    ],
};

const leftSidebarMenuGroup: SettingsGroup = {
    groupId: 'settings.home-browse.groupId.left-sidebar-menu',
    items: [
        { id: 'disable-menu' },
        { id: 'disable-menu-home' },
        { id: 'disable-menu-mini' },
        { id: 'disable-menu-subscriptions' },
        { id: 'disable-menu-you' },
        { id: 'disable-menu-explore' },
        { id: 'disable-menu-more-from-youtube' },
        { id: 'disable-menu-settings' },
        { id: 'disable-menu-footer' },
    ],
};
const videoGridFeedGroup: SettingsGroup = {
    groupId: 'settings.home-browse.groupId.video-grid-and-feed',
    items: [
        { id: 'disable-main-content-tags' },
        { id: 'disable-main-content-explore-more-topics' },
        { id: 'center-videos' },
    ],
};
const rightSidebarGroup: SettingsGroup = {
    groupId: 'settings.watch-page.groupId.right-sidebar',
    items: [
        { id: 'disable-sidebar-panels' },
        { id: 'disable-sidebar-live-chat' },
        { id: 'disable-sidebar-donation-shelf' },
        { id: 'disable-sidebar-tags' },
        { id: 'disable-sidebar-related' },
    ],
};
const channelActionsGroup: SettingsGroup = {
    groupId: 'settings.watch-page.groupId.channel-and-actions',
    items: [
        { id: 'disable-channel-controls-title' },
        { id: 'disable-channel-controls' },
        { id: 'disable-channel-controls-avatar' },
        { id: 'disable-channel-controls-channel' },
        { id: 'disable-channel-controls-join' },
        { id: 'disable-channel-controls-subscribe' },
        { id: 'disable-channel-controls-like' },
        { id: 'disable-channel-controls-share' },
        { id: 'disable-channel-controls-save' },
        { id: 'disable-channel-controls-clip' },
        { id: 'disable-channel-controls-download' },
        { id: 'disable-channel-controls-thanks' },
        { id: 'disable-channel-controls-more' },
    ],
};
const descriptionInfoGroup: SettingsGroup = {
    groupId: 'settings.watch-page.groupId.description-info',
    items: [
        { id: 'disable-description-description' },
        { id: 'disable-description-merch' },
        { id: 'disable-description-people-mentioned' },
        { id: 'disable-description-teaser-carousel' },
        { id: 'disable-description-video-summary' },
        { id: 'disable-description-cards' },
        { id: 'disable-description-gaming' },
        { id: 'disable-description-music' },
        { id: 'disable-description-ticket' },
        { id: 'disable-description-transcript' },
        { id: 'disable-description-how-this-was-made' },
        { id: 'disable-description-infocard' },
        { id: 'disable-description-game-cards' },
        { id: 'disable-description-chat-replay' },
        { id: 'disable-description-ai-summary' },
    ],
};

const commentsGroup: SettingsGroup = {
    groupId: 'settings.watch-page.groupId.comments',
    items: [
        { id: 'disable-comments' },
        { id: 'disable-comments-amount' },
        { id: 'disable-comments-sorting' },
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
        title: 'settings.shorts.title',
        description: 'settings.shorts.description',
        icon: Info,
        groups: [shortsGroup],
    },
    {
        id: 'home-browse',
        title: 'settings.home-browse.title',
        description: 'settings.home-browse.description',
        icon: Home,
        groups: [headerGroup, leftSidebarMenuGroup, videoGridFeedGroup],
    },
    {
        id: 'watch-page',
        title: 'settings.watch-page.title',
        description: 'settings.watch-page.description',
        icon: Play,
        groups: [
            rightSidebarGroup,
            channelActionsGroup,
            descriptionInfoGroup,
            commentsGroup,
        ],
    },
];
