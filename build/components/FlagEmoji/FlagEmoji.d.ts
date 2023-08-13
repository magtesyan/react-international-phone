import './FlagEmoji.style.scss';
import React, { CSSProperties } from 'react';
import { ParsedCountry } from '../../types';
interface FlagEmojiProps extends React.HTMLAttributes<HTMLImageElement> {
    iso2?: ParsedCountry['iso2'];
    size?: CSSProperties['width'];
    protocol?: 'http' | 'https';
    disableLazyLoading?: boolean;
}
export declare const FlagEmoji: React.FC<FlagEmojiProps>;
export {};
