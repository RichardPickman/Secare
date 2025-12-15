import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import type { ChangeEvent } from 'react';

interface Props {
    label: string;
    onChange: (event: ChangeEvent<HTMLButtonElement>) => void;
}

export const Option = ({ label, onChange }: Props) => (
    <div className="flex space-x-2">
        <Checkbox id={label} onChange={onChange} />
        <Label htmlFor={label} className="capitalize">
            {label}
        </Label>
    </div>
);
