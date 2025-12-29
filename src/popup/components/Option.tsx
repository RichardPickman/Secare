import type { Option as OptionType } from '@/lib/constants';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface Props {
    item: OptionType;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const Option = ({ item, checked, onChange }: Props) => (
    <div key={item.id} className="flex items-center gap-3">
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
            {item.label}
        </Label>
    </div>
);
