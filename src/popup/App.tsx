import { useEffectEvent, useLayoutEffect, useState } from 'react';
import { getSavedState } from '../lib';
import { settings, type Setting } from '../lib/constants';
import { Option } from './shared/components/Option';

type Settings = Record<Setting, boolean>;

const initialState: Settings = settings.reduce(
    (prev, item) => ({ ...prev, [item]: false }),
    {} as Settings,
);

const prepareSetting = (item: string) =>
    item.includes('-') ? item.split('-').join(' ') : item;

function App() {
    const [settings, setSettings] = useState<Settings>(initialState);

    const setSavedSettings = useEffectEvent((obj: Settings) => {
        setSettings(obj);
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

    const updateSetting = async (key: keyof Settings, value: string) => {
        chrome.storage.local
            .set({ [key]: value })
            .then(() => {
                console.log('State saved successfully');
            })
            .catch(() => {
                console.log('Saving state failed');
            })
            .finally(() => {
                setSettings({
                    ...settings,
                    [key]: value,
                });
            });
    };

    return (
        <div className="w-96 space-y-4 p-2">
            <div className="flex items-center justify-between">
                <label>Secare</label>
                <button className="p-2 rounded border border-cyan-700 hover:cursor-pointer hover:border-cyan-600">
                    Disable
                </button>
            </div>
            <ul className="[&_li]:w-fit">
                {Object.keys(settings).map((item) => (
                    <li key={item}>
                        <Option
                            label={prepareSetting(item)}
                            onChange={(event) =>
                                updateSetting(
                                    item as keyof Settings,
                                    event.target.value,
                                )
                            }
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
