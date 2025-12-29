import type { Setting } from '@/lib/constants';
import { createContext, useContext } from 'react';

type SettingsProviderState = {
    settings: Record<string, boolean>;
    setSetting: (key: Setting, value: boolean) => void;
    getEnabledCount: (sectionId: string) => number;
    getTotalCount: (sectionId: string) => number;
};

const initialState: SettingsProviderState = {
    settings: {},
    setSetting: () => null,
    getEnabledCount: () => 0,
    getTotalCount: () => 0,
};

export const SettingsProviderContext =
    createContext<SettingsProviderState>(initialState);

export const useSettings = () => {
    const context = useContext(SettingsProviderContext);

    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }

    return context;
};
