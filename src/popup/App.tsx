import { useState, type ChangeEvent } from 'react';
import type { Settings } from '../types';
import { Checkbox } from './shared/components/Checkbox';

const initialState: Settings = {
    shorts: false,
    recommends: false,
    description: false,
    comments: false,
    sidebar: false,
};

function App() {
    const [settings, setSettings] = useState<Settings>(initialState);

    const onChange = async (key: keyof Settings, value: boolean) => {
        console.log(key, value);

        await chrome.storage.local.set({ [key]: value });

        setSettings({
            ...settings,
            [key]: value,
        });
    };

    return (
        <div className="w-96 space-y-4 p-2">
            <div className="flex items-center justify-between">
                <label>Secare</label>
                <button className="p-2 rounded border border-cyan-700 hover:cursor-pointer hover:border-cyan-600">
                    Disable extension
                </button>
            </div>
            <hr className="h-px border-t-0 bg-transparent bg-linear-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            <ul className="[&_li]:w-fit">
                <li>
                    <Checkbox
                        label={'shorts'}
                        checked={settings['shorts']}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            onChange('shorts', event.target.checked)
                        }
                    />
                </li>
                <li>
                    <Checkbox
                        label={'sidebar'}
                        checked={settings['sidebar']}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            onChange('sidebar', event.target.checked)
                        }
                    />
                </li>
                <li>
                    <Checkbox
                        label={'comments'}
                        checked={settings['comments']}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            onChange('comments', event.target.checked)
                        }
                    />
                </li>
                <li>
                    <Checkbox
                        label={'description'}
                        checked={settings['description']}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            onChange('description', event.target.checked)
                        }
                    />
                </li>
            </ul>
        </div>
    );
}

export default App;
