import type { Setting } from '@/lib/constants';
import { useMemo } from 'react';
import { useSettings } from '../hooks/useSettings';
import { prepareSetting } from '../utils';
import { Option } from './Option';
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';

interface Props {
    settingKey: string;
    arr: Setting[];
}

export const AccordionGroup = ({ settingKey, arr }: Props) => {
    const { settings, setSetting } = useSettings();
    const isAllSelected = useMemo(
        () => arr.map((key) => settings[key]).every(Boolean),
        [settings, arr],
    );

    const onGroupSelect = () => {
        if (isAllSelected) {
            for (const key of arr) {
                setSetting(key, false);
            }
        } else {
            for (const key of arr) {
                setSetting(key, true);
            }
        }
    };

    return (
        <AccordionItem
            value={settingKey}
            className="rounded-lg border border-border bg-card"
        >
            <AccordionTrigger className="px-6 hover:no-underline capitalize">
                <div className="flex items-center gap-3">
                    <span className="text-card-foreground">
                        {prepareSetting(settingKey)}
                    </span>
                    <Button
                        variant="link"
                        onClick={(e) => {
                            e.stopPropagation();

                            onGroupSelect();
                        }}
                        size="sm"
                    >
                        {isAllSelected ? 'Deselect all' : 'Select all'}
                    </Button>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
                <ul className="space-y-3 pt-2">
                    {arr.map((item) => (
                        <li key={item}>
                            <Option
                                label={prepareSetting(
                                    // Remove group prefix from nested settings, which surrounded with -
                                    item.replace(`-${settingKey}-`, ' '),
                                )}
                                onChange={(event) =>
                                    setSetting(
                                        item,
                                        event.currentTarget.checked,
                                    )
                                }
                                checked={settings[item]}
                            />
                        </li>
                    ))}
                </ul>
            </AccordionContent>
        </AccordionItem>
    );
};
