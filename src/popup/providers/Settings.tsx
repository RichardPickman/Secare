import { settings, settingsData, type Setting } from '@/lib/constants';
import { getSavedState } from '@/lib/utils';
import { useEffectEvent, useLayoutEffect, useState } from 'react';
import browser from 'webextension-polyfill';
import { SettingsProviderContext } from '../hooks/useSettings';

type ThemeProviderProps = {
    children: React.ReactNode;
};

type Settings = Record<Setting, boolean>;

const initialState: Settings = settings.reduce(
    (state, item) => ({ ...state, [item]: false }),
    {} as Settings,
);

export function SettingProvider({ children, ...props }: ThemeProviderProps) {
    const [settings, setSetting] = useState<Settings>(initialState);

    const setSavedSettings = useEffectEvent((obj: Settings) => {
        for (const [key, value] of Object.entries(obj)) {
            setSetting((prev) => ({ ...prev, [key]: value }));
        }
    });

    useLayoutEffect(() => {
        getSavedState()
            .then((res) => {
                const result: Settings = {
                    ...initialState,
                    ...res,
                };

                setSavedSettings(result);
            })
            .catch(() => {
                console.log('Storage retrieval failed, doing nothing');
            });
    }, []);

    const value = {
        settings,
        setSetting: (key: string, value: boolean) => {
            browser.storage.local
                .set({ [key]: value })
                .then(() => {
                    console.log('State saved successfully');

                    setSetting((prev) => ({
                        ...prev,
                        [key]: value,
                    }));
                })
                .catch(() => {
                    console.log('Saving state failed');
                });
        },
        getEnabledCount: (sectionId: string) => {
            const section = settingsData.find((s) => s.id === sectionId);

            if (!section) return 0;

            let count = 0;

            section.groups.forEach((group) => {
                count += group.items.filter((item) => settings[item.id]).length;
            });

            return count;
        },
        getTotalCount: (sectionId: string) => {
            const section = settingsData.find((s) => s.id === sectionId);

            if (!section) return 0;

            let count = 0;

            section.groups.forEach((group) => {
                count += group.items.length;
            });

            return count;
        },
    };

    return (
        <SettingsProviderContext.Provider {...props} value={value}>
            {children}
        </SettingsProviderContext.Provider>
    );
}
