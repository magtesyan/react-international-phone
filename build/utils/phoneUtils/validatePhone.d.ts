import { CountryData, CountryIso2, ParsedCountry } from '../../types';
export interface ValidatePhoneConfig {
    /**
     * Country to validate
     */
    country?: CountryIso2;
    /**
     * Custom countries list
     */
    countries?: CountryData[];
    prefix?: string;
    charAfterDialCode?: string;
    defaultMask?: string;
    defaultMaskMinPhoneLength?: number;
}
export interface ValidatePhoneReturn {
    country: ParsedCountry | undefined;
    isValid: boolean;
    /**
     * Phone number overflow is allowed:
     * +1 (999) 999-99999 will set `lengthMatch: true`.
     *
     * This is needed for countries that does not have format,
     * and share same dial code with another countries (like 'do')
     * For example: +1 999999999999 will be parsed as 'us', but we need to mark it as valid phone
     */
    lengthMatch: boolean;
    areaCodeMatch: boolean | undefined;
    dialCodeMatch: boolean;
    formatMatch: boolean;
}
export declare const validatePhone: (phone: string, config?: ValidatePhoneConfig) => ValidatePhoneReturn;
