import {
    useEffectEvent,
    useLayoutEffect,
    useState,
    type ChangeEvent,
} from 'react';
import type { Settings } from '../types';
import { Checkbox } from './shared/components/Checkbox';

const initialState: Settings = {
    shorts: false,
    recommends: false,
    description: false,
    comments: false,
    sidebar: false,
    ads: false,
};

function App() {
    const [settings, setSettings] = useState<Settings>(initialState);

    const onFirstRender = useEffectEvent((obj: Settings) => {
        setSettings(obj);
    });

    useLayoutEffect(() => {
        chrome.storage.local
            .get(null)
            .then((res) => {
                const result: Settings = {
                    ...initialState,
                    ...res,
                };

                onFirstRender(result);
            })
            .catch(() => {
                console.log('Storage retrieval failed, doing nothing');
            });
    }, []);

    const onChange = async (key: keyof Settings, value: boolean) => {
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
                {Object.keys(settings).map((item) => (
                    <li key={item}>
                        <Checkbox
                            label={item}
                            checked={settings[item as keyof Settings]}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                onChange(
                                    item as keyof Settings,
                                    event.target.checked,
                                )
                            }
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
