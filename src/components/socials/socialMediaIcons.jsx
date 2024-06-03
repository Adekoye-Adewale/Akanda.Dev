import Link from 'next/link'
import style from './socialIcons.module.css'
import { fbLink, xLink, linkedinLink, mailLink, mediumLink } from '@/webContents/socialLinks'

export default function SocialIcon() {
    return (
        <div className={style.icons__wrap}>
            <X/>
            <LinkedIn/>
            <Facebook/>
            <Email/>
            <Medium/>
        </div>
    )
}

const Icon = ({ children, link }) =>{
    return(
        <div className={style.icon__wrap}>
            <Link {...link}>
                {children}
            </Link>
        </div>
    )
}

const Facebook = () => {

    return (
        <Icon link={fbLink}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22"/>
                <path d="M19.0462 15.865V18.613H17.0322V21.973H19.0462V31.959H23.1802V21.974H25.9552C25.9552 21.974 26.2152 20.363 26.3412 18.601H23.1972V16.303C23.1972 15.96 23.6472 15.498 24.0932 15.498H26.3472V12H23.2832C18.9432 12 19.0462 15.363 19.0462 15.865Z" fill="white"/>
            </svg>
        </Icon>
    )
}

const X = () => {

    return (
        <Icon link={xLink}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22" fill="black"/>
                <path d="M23.4822 20.6219L30.039 13H28.4851L22.792 19.6178L18.2448 13H13L19.8763 23.0074L13 31H14.5539L20.5662 24.0114L25.3683 31H30.613L23.4818 20.6219H23.4822ZM21.354 23.0955L20.6572 22.099L15.1137 14.1697H17.5004L21.9738 20.569L22.6705 21.5655L28.4858 29.8834H26.0994L21.354 23.0959V23.0955Z" fill="white"/>
            </svg>
        </Icon>
    )
}
const LinkedIn = () => {

    return (
        <Icon link={linkedinLink}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22" fill="black"/>
                <path d="M31.959 23.7189V31.0979H27.681V24.2129C27.681 22.4829 27.062 21.3029 25.514 21.3029C24.332 21.3029 23.628 22.0989 23.319 22.8679C23.206 23.1429 23.177 23.5259 23.177 23.9109V31.0979H18.897C18.897 31.0979 18.955 19.4379 18.897 18.2289H23.177V20.0529L23.149 20.0949H23.177V20.0529C23.745 19.1779 24.76 17.9269 27.033 17.9269C29.848 17.9269 31.959 19.7669 31.959 23.7189ZM14.421 12.0259C12.958 12.0259 12 12.9859 12 14.2489C12 15.4839 12.93 16.4729 14.365 16.4729H14.393C15.886 16.4729 16.813 15.4839 16.813 14.2489C16.787 12.9859 15.886 12.0259 14.421 12.0259ZM12.254 31.0979H16.532V18.2289H12.254V31.0979Z" fill="white"/>
            </svg>
        </Icon>
    )
}

const Email = () => {

    return (
        <Icon link={mailLink}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22" fill="black"/>
                <path d="M15 15H28C28.7956 15 29.5587 15.3161 30.1213 15.8787C30.6839 16.4413 31 17.2044 31 18V27C31 27.7956 30.6839 28.5587 30.1213 29.1213C29.5587 29.6839 28.7956 30 28 30H15C14.2044 30 13.4413 29.6839 12.8787 29.1213C12.3161 28.5587 12 27.7956 12 27V18C12 17.2044 12.3161 16.4413 12.8787 15.8787C13.4413 15.3161 14.2044 15 15 15ZM15 16C14.5 16 14.06 16.17 13.72 16.47L21.5 21.5L29.28 16.47C28.94 16.17 28.5 16 28 16H15ZM21.5 22.71L13.13 17.28C13.05 17.5 13 17.75 13 18V27C13 27.5304 13.2107 28.0391 13.5858 28.4142C13.9609 28.7893 14.4696 29 15 29H28C28.5304 29 29.0391 28.7893 29.4142 28.4142C29.7893 28.0391 30 27.5304 30 27V18C30 17.75 29.95 17.5 29.87 17.28L21.5 22.71Z" fill="white"/>
            </svg>
        </Icon>
    )
}

const Medium = () => {
    return (
        <Icon link={mediumLink}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22" fill="black"/>
                <path d="M14.2851 17.269C14.2967 17.1542 14.2809 17.0384 14.2392 16.9308C14.1975 16.8232 14.131 16.727 14.0451 16.65L12.2751 14.517V14.197H17.7731L22.0231 23.517L25.7591 14.197H31.0001V14.516L29.4851 15.967C29.4217 16.0164 29.3727 16.0819 29.3432 16.1566C29.3136 16.2313 29.3046 16.3126 29.3171 16.392V27.058C29.3044 27.1374 29.3133 27.2188 29.3429 27.2936C29.3724 27.3683 29.4216 27.4338 29.4851 27.483L30.9641 28.934V29.253H23.5281V28.934L25.0571 27.447C25.2091 27.297 25.2091 27.252 25.2091 27.023V18.401L20.9501 29.218H20.3751L15.4171 18.401V25.65C15.3761 25.955 15.4771 26.262 15.6921 26.483L17.6841 28.9V29.219H12.0361V28.9L14.0281 26.483C14.1329 26.3738 14.2107 26.2416 14.2554 26.097C14.3 25.9524 14.3102 25.7993 14.2851 25.65V17.269Z" fill="white"/>
            </svg>
        </Icon>
    )
}
