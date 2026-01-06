import { useTranslation } from 'react-i18next';
import { NativeSelect, NativeSelectOption } from './ui/native-select';

export const LanguageSelect = () => {
    const { i18n } = useTranslation();

    return (
        <NativeSelect
            onChange={(event) => {
                i18n.changeLanguage(event.currentTarget.value);

                console.log(event.currentTarget.value);
            }}
        >
            <NativeSelectOption value="en">English</NativeSelectOption>
            <NativeSelectOption value="es">Española</NativeSelectOption>
            <NativeSelectOption value="ru">Русский</NativeSelectOption>
        </NativeSelect>
    );
};
