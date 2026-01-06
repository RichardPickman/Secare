import type { Option as OptionType } from '@/lib/constants';
import { useTranslation } from 'react-i18next';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface Props {
    item: OptionType;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const Option = ({ item, checked, onChange }: Props) => {
    const { t } = useTranslation(['common']);

    return (
        <div key={item.id} className="flex items-start gap-3">
            <Checkbox
                id={item.id}
                checked={checked}
                onCheckedChange={onChange}
                aria-describedby={`${item.id}-description`}
            />
            <Label
                htmlFor={item.id}
                className="flex-1 cursor-pointer text-sm leading-relaxed text-foreground/90"
            >
                {t(item.id)}
            </Label>
        </div>
    );
};
