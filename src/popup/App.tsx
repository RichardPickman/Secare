import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { getSavedState } from '@/lib/utils';
import { useEffectEvent, useLayoutEffect, useState } from 'react';
import {
    channelControls,
    description,
    essentials,
    header,
    menu,
    settings,
    sidebar,
    type Setting,
} from '../lib/constants';
import { Option } from './components/Option';

type Settings = Record<Setting, boolean>;

const initialState: Settings = settings.reduce(
    (prev, item) => ({ ...prev, [item]: false }),
    {} as Settings,
);

const prepareSetting = (item: string) =>
    item.includes('-') ? item.split('-').join(' ') : item;

const object = {
    header,
    menu,
    sidebar,
    channelControls,
    description,
};

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

    const updateSetting = async (key: keyof Settings, value: boolean) => {
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
        <div className="w-84 space-y-4 p-2">
            <div className="flex items-center justify-between">
                <label>Secare</label>
                <button className="p-2 rounded border border-cyan-700 hover:cursor-pointer hover:border-cyan-600">
                    Disable
                </button>
            </div>
            <div>
                {essentials.map((item) => (
                    <Option
                        key={item}
                        label={prepareSetting(item)}
                        onChange={(event) =>
                            updateSetting(item, event.target.checked)
                        }
                        checked={settings[item]}
                    />
                ))}
                <Accordion type="single" collapsible className="w-full">
                    {Object.entries(object).map(([key, value]) => (
                        <AccordionItem value={key}>
                            <AccordionTrigger className="capitalize">
                                {key}
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <ul className="p-2">
                                    {value.map((item) => (
                                        <li key={item}>
                                            <Option
                                                label={prepareSetting(item)}
                                                onChange={(event) =>
                                                    updateSetting(
                                                        item,
                                                        event.currentTarget
                                                            .checked,
                                                    )
                                                }
                                                checked={settings[item]}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}

export default App;
