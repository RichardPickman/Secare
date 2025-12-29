import type { Setting, SettingsGroup } from '@/lib/constants';
import { useSettings } from '../hooks/useSettings';
import { Option } from './Option';

interface AccordionGroup {
    group: SettingsGroup;
    onToggle: (item: Setting, value: boolean) => void;
}

export const AccordionGroup = ({ group, onToggle }: AccordionGroup) => {
    const { settings } = useSettings();

    return (
        <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {group.groupTitle}
            </h3>
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
