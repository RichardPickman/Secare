import { getSavedState } from '@/lib/utils';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/popup/components/ui/accordion';
import { Moon, Scissors, Sun } from 'lucide-react';
import { useEffectEvent, useLayoutEffect, useState } from 'react';
import {
    channelControls,
    description,
    essentials,
    header,
    mainContent,
    menu,
    settings,
    sidebar,
    type Setting,
} from '../lib/constants';
import { Option } from './components/Option';
import { Button } from './components/ui/button';
import { useTheme } from './hooks/useTheme';

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
    'main-content': mainContent,
    'channel-controls': channelControls,
    description,
};

type Settings = Record<Setting | keyof object, boolean>;

function App() {
    const [settings, setSettings] = useState<Settings>(initialState);
    const { theme, setTheme } = useTheme();

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

                setSettings({
                    ...settings,
                    [key]: value,
                });
            })
            .catch(() => {
                console.log('Saving state failed');
            })
            .finally(() => {});
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className="w-84 space-y-2 bg-background text-foreground">
            <div className="flex items-center justify-between border-b border-border p-3">
                <div className="flex gap-2 items-center">
                    <Scissors className="h-5 w-5" aria-hidden="true" />
                    <h1 className="text-xl font-bold">Secare</h1>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="h-8 w-8"
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    {theme === 'light' ? (
                        <Moon className="h-4 w-4" aria-hidden="true" />
                    ) : (
                        <Sun className="h-4 w-4" aria-hidden="true" />
                    )}
                </Button>
            </div>
            <div className="p-2 max-h-[500px] overflow-y-auto">
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
                <Accordion type="single" collapsible className="space-y-2">
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
                                        {prepareSetting(key)}
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6">
                                <ul className="space-y-3 pt-2">
                                    {value.map((item) => (
                                        <li key={item}>
                                            <Option
                                                label={prepareSetting(
                                                    item.replace(key, ''),
                                                )}
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
