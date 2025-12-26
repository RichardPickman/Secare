import type { Setting } from '@/lib/constants';
import type { ChangeEvent } from 'react';

interface Props {
    label: string;
    setting: Setting;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
}

export const Option = ({ label, setting, onChange, checked }: Props) => (
    <div key={label} className="flex items-center gap-3 text-card-foreground">
        <input
            id={setting}
            type="checkbox"
            className="border-2"
            onChange={onChange}
            checked={checked}
        />
        <label htmlFor={setting} className="space-x-2 text-sm w-fit capitalize">
            {label}
        </label>
    </div>
);
