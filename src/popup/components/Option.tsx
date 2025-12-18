import type { ChangeEvent } from 'react';

interface Props {
    label: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
}

export const Option = ({ label, onChange, checked }: Props) => (
    <div key={label} className="flex items-center gap-3 text-card-foreground">
        <input
            id={label}
            type="checkbox"
            className="border-2"
            onChange={onChange}
            checked={checked}
        />
        <label htmlFor={label} className="space-x-2 text-sm w-fit capitalize">
            {label}
        </label>
    </div>
);
