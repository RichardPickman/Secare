import type { ChangeEvent } from 'react';

interface Props {
    label: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
}

export const Option = ({ label, onChange, checked }: Props) => (
    <div key={label} className="flex gap-2 items-center">
        <input
            id={label}
            type="checkbox"
            onChange={onChange}
            checked={checked}
        />
        <label htmlFor={label} className="space-x-2 w-fit capitalize">
            {label}
        </label>
    </div>
);
