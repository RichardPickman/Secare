import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { getSavedState } from '@/lib/utils';
import { CircleX } from 'lucide-react';
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
    'channel-controls': channelControls,
    description,
};

type Settings = Record<Setting | keyof object, boolean>;

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

    const updateSetting = async (key: Setting, value: boolean) => {
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
        <div className="w-84 space-y-4 p-2 rounded">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-foreground">Secare</h1>
                <button className="p-2 rounded">
                    <CircleX className="w-6 h-6" />
                </button>
            </div>
            <div>
                <div className="px-6 pb-6">
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
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                    {Object.entries(object).map(([key, value]) => (
                        <AccordionItem
                            value={key}
                            className="rounded-lg border border-border bg-card"
                        >
                            <AccordionTrigger className="px-6 hover:no-underline capitalize">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        className="border-2"
                                        onChange={(event) => {
                                            console.log(event);
                                            updateSetting(
                                                key as keyof object,
                                                event.currentTarget.checked,
                                            );
                                        }}
                                        onClick={(e) => e.stopPropagation()}
                                        checked={settings[key as keyof object]}
                                    />
                                    <span className="text-card-foreground">
                                        {key}
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6">
                                <ul className="space-y-3 pt-2">
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
