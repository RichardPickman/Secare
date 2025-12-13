import type { ChangeEvent } from 'react';

interface Props {
    label: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ label, onChange, checked }: Props) => (
    <label className="space-x-2 w-fit capitalize">
        <input type="checkbox" onChange={onChange} checked={checked} />
        <span>{label}</span>
    </label>
);
