import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const prepareSetting = (item: string) =>
    item.includes('-') ? item.split('-').join(' ') : item;
