import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PhoneInput } from '../components/PhoneInput/PhoneInput';
import { defaultCountries } from '../data/countryData';
import { CountryIso2 } from '../types';
import { parseCountry } from '../utils';

export default {
  title: 'PhoneInput',
  component: PhoneInput,
} as ComponentMeta<typeof PhoneInput>;

const Template: ComponentStory<typeof PhoneInput> = (args) => (
  <PhoneInput {...args} />
);

const initialCountryArgType = {
  options: defaultCountries.map((c) => parseCountry(c).iso2),
  control: {
    type: 'select',
    labels: defaultCountries.reduce((acc: Record<string, string>, c) => {
      const { name, iso2 } = parseCountry(c);
      acc[iso2] = `${name} (${iso2})`;
      return acc;
    }, {}),
  },
};

export const Default = Template.bind({});
Default.argTypes = {
  initialCountry: initialCountryArgType,
};

Default.args = {
  disabled: false,
  hideDropdown: false,
  initialCountry: 'us',
  placeholder: 'Phone number',
  defaultMask: '............',
  hideSpaceAfterDialCode: false,
  disableCountryGuess: false,
  disableDialCodePrefill: false,
  forceDialCode: false,
  disableDialCodeAndPrefix: false,
  showDisabledDialCodeAndPrefix: false,
  style: {},
  inputStyle: {},
  countrySelectorStyleProps: {},
  dialCodePreviewStyleProps: {},
};

export const ForcedDialCode = Template.bind({});
ForcedDialCode.argTypes = {
  initialCountry: initialCountryArgType,
};

ForcedDialCode.args = {
  initialCountry: 'ua',
  forceDialCode: true,
};

export const DisabledPrefill = Template.bind({});
DisabledPrefill.argTypes = {
  initialCountry: initialCountryArgType,
};

DisabledPrefill.args = {
  initialCountry: 'pl',
  disableDialCodePrefill: true,
  placeholder: 'Phone number',
};

export const DisabledCountryGuess = Template.bind({});
DisabledCountryGuess.argTypes = {
  initialCountry: initialCountryArgType,
};

DisabledCountryGuess.args = {
  initialCountry: 'gb',
  disableCountryGuess: true,
};

export const WithoutDropdown = Template.bind({});
WithoutDropdown.argTypes = {
  initialCountry: initialCountryArgType,
};

WithoutDropdown.args = {
  initialCountry: 'ee',
  disableCountryGuess: true,
  hideDropdown: true,
  forceDialCode: true,
};

export const WithCodePreview = Template.bind({});
WithCodePreview.argTypes = {
  initialCountry: initialCountryArgType,
};

WithCodePreview.args = {
  initialCountry: 'lv',
  disableDialCodeAndPrefix: true,
  showDisabledDialCodeAndPrefix: true,
};

export const CustomStyles = Template.bind({});
CustomStyles.argTypes = {
  initialCountry: initialCountryArgType,
};

CustomStyles.args = {
  initialCountry: 'ca',
  style: {
    '--react-international-phone-border-radius': 0,
    '--react-international-phone-border-color': 'gray',
    '--react-international-phone-background-color': '#282c34',
    '--react-international-phone-text-color': 'white',
    '--react-international-phone-selected-dropdown-item-background-color':
      'black',
    '--react-international-phone-country-selector-background-color-hover':
      'black',
  } as React.CSSProperties,
};

export const OnlyEuropeCountries = Template.bind({});
OnlyEuropeCountries.argTypes = {
  initialCountry: initialCountryArgType,
};

OnlyEuropeCountries.args = {
  initialCountry: 'fi',
  countries: defaultCountries.filter((c) =>
    parseCountry(c).regions.includes('europe'),
  ),
};

export const OnlyBalticCountries = Template.bind({});
OnlyBalticCountries.argTypes = {
  initialCountry: initialCountryArgType,
};

const balticCountries: CountryIso2[] = ['lt', 'lv', 'ee'];

OnlyBalticCountries.args = {
  initialCountry: 'lt',
  countries: defaultCountries.filter((c) => {
    return balticCountries.includes(parseCountry(c).iso2);
  }),
};