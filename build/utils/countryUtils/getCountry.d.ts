import { CountryData, ParsedCountry } from '../../types';
export declare const getCountry: ({ value, field, countries, }: {
    value: CountryData[number];
    field: keyof ParsedCountry;
    countries: CountryData[];
}) => ParsedCountry | undefined;
