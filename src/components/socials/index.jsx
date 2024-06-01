import { X, Facebook, LinkedIn, Medium, Email, PrintPage, ShareLink } from './shareIcons'
import SocialIcon from './socialMediaIcons';
import dynamic from 'next/dynamic';

const Share = dynamic(() => import('./share'), {
    ssr: false,
});

export { X, Facebook, LinkedIn, Medium, Email, PrintPage, ShareLink, SocialIcon, Share };