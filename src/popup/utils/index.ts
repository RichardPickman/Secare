import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const stripDashes = (item: string) =>
    item.includes('-') ? item.split('-').join(' ') : item;
