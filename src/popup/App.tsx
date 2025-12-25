import { Accordion } from '@/popup/components/ui/accordion';
import { Scissors } from 'lucide-react';
import {
    channelControls,
    description,
    essentials,
    header,
    mainContent,
    menu,
    sidebar,
    type Essentials,
    type Setting,
} from '../lib/constants';
import { AccordionGroup } from './components/AccordionGroup';
import { Option } from './components/Option';
import { ThemeButton } from './components/ThemeButton';
import { useSettings } from './hooks/useSettings';
import { prepareSetting } from './utils';

const object = {
    header,
    menu,
    sidebar,
    'main-content': mainContent,
    'channel-controls': channelControls,
    description,
};

function App() {
    const { settings, setSetting } = useSettings();

    const handleEssentialChange = (item: Essentials, value: boolean) => {
        switch (item) {
            case 'disable-shorts': {
                const keys = Object.keys(settings).filter((item) =>
                    item.includes('shorts'),
                ) as Setting[];

                for (const key of keys) {
                    setSetting(key, value);
                }

                break;
            }
            case 'disable-ads': {
                setSetting('disable-ads', value);
            }
        }
    };

    return (
        <div className="w-84 space-y-2 bg-background text-foreground">
            <div className="flex items-center justify-between border-b border-border p-3">
                <div className="flex gap-2 items-center">
                    <Scissors className="h-5 w-5" aria-hidden="true" />
                    <h1 className="text-xl font-bold">Secare</h1>
                </div>
                <ThemeButton />
            </div>
            <div className="p-2 max-h-[500px] overflow-y-auto">
                <div className="px-6 pb-6">
                    {essentials.map((item) => (
                        <Option
                            key={item}
                            label={prepareSetting(item)}
                            onChange={(event) =>
                                handleEssentialChange(
                                    item,
                                    event.target.checked,
                                )
                            }
                            checked={settings[item]}
                        />
                    ))}
                </div>
                <Accordion type="single" collapsible className="space-y-2">
                    {Object.entries(object).map(([key, value]) => (
                        <AccordionGroup settingKey={key} arr={value} />
                    ))}
                </Accordion>
            </div>
        </div>
    );
}

export default App;
