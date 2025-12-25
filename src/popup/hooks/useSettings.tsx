import type { Setting } from '@/lib/constants';
import { createContext, useContext } from 'react';

type SettingsProviderState = {
    settings: Record<string, boolean>;
    setSetting: (key: Setting, value: boolean) => void;
};

const initialState: SettingsProviderState = {
    settings: {},
    setSetting: () => null,
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
