import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import type { ChangeEvent } from 'react';

interface Props {
    label: string;
    onChange: (event: ChangeEvent<HTMLButtonElement>) => void;
}

export const Option = ({ label, onChange }: Props) => (
    <>
        <Checkbox id="label" onChange={onChange} />
        <Label htmlFor="label">{label}</Label>
    </>
);
