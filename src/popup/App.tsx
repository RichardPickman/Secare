import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/popup/components/ui/accordion';
import { Scissors } from 'lucide-react';
import { essentials, settingsData, type Setting } from '../lib/constants';
import { AccordionGroup } from './components/AccordionGroup';
import { ThemeButton } from './components/ThemeButton';
import { useSettings } from './hooks/useSettings';

function App() {
    const { settings, setSetting, getEnabledCount, getTotalCount } =
        useSettings();

    const handleEssentialChange = (item: string, value: boolean) => {
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
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Scissors className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h1 className="text-xl font-bold">Secare</h1>
                </div>
                <ThemeButton />
            </div>
            <div className="p-2 max-h-[500px] overflow-y-auto">
                <div className="px-6 pb-6">
                    <AccordionGroup
                        group={essentials}
                        onToggle={handleEssentialChange}
                    />
                </div>
                <Accordion
                    type="multiple"
                    className="space-y-2"
                    defaultValue={['home-browse']}
                >
                    {settingsData.map((section) => {
                        const Icon = section.icon;
                        const enabledCount = getEnabledCount(section.id);
                        const totalCount = getTotalCount(section.id);

                        return (
                            <AccordionItem
                                key={section.id}
                                value={section.id}
                                className="rounded-lg border border-border bg-card"
                            >
                                <AccordionTrigger className="px-4 py-3 text-sm font-medium hover:no-underline data-[state=open]:pb-3">
                                    <div className="flex items-start gap-3 text-left">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                                            <Icon
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="flex-1 space-y-0.5">
                                            <div className="text-balance font-semibold">
                                                {section.title}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {section.description}
                                            </div>
                                            <div className="mt-1 text-xs font-medium text-primary">
                                                {enabledCount} of {totalCount}{' '}
                                                hidden
                                            </div>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4 pt-1">
                                    <div
                                        className="space-y-4 pl-11"
                                        role="group"
                                        aria-label={section.title}
                                    >
                                        {section.groups.map(
                                            (group, groupIndex) => (
                                                <AccordionGroup
                                                    key={groupIndex}
                                                    group={group}
                                                    onToggle={setSetting}
                                                />
                                            ),
                                        )}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </div>
    );
}

export default App;
