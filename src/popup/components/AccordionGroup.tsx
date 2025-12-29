import type { Setting, SettingsGroup } from '@/lib/constants';
import { useMemo } from 'react';
import { useSettings } from '../hooks/useSettings';
import { Option } from './Option';
import { Button } from './ui/button';

interface AccordionGroup {
    group: SettingsGroup;
    onToggle: (item: Setting, value: boolean) => void;
}

export const AccordionGroup = ({ group, onToggle }: AccordionGroup) => {
    const { settings, setSetting } = useSettings();
    const isAllSelected = useMemo(
        () => group.items.map((key) => settings[key.id]).every(Boolean),
        [settings, group],
    );

    const onGroupSelect = () => {
        if (isAllSelected) {
            for (const item of group.items) {
                setSetting(item.id, false);
            }
        } else {
            for (const item of group.items) {
                setSetting(item.id, true);
            }
        }
    };

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between rounded-md">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.groupTitle}
                </h3>
                <Button
                    onClick={onGroupSelect}
                    size="sm"
                    variant="link"
                    className="text-xs font-medium text-primary"
                    aria-label={
                        isAllSelected
                            ? `Disable all in ${group.groupTitle}`
                            : `Enable all in ${group.groupTitle}`
                    }
                >
                    {isAllSelected ? 'Disable All' : 'Enable All'}
                </Button>
            </div>
            <div className="space-y-2.5">
                {group.items.map((item) => (
                    <Option
                        item={item}
                        checked={settings[item.id]}
                        onChange={(checked) =>
                            onToggle(item.id as Setting, checked as boolean)
                        }
                    />
                ))}
            </div>
        </div>
    );
};
