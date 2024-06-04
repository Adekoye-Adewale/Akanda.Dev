'use client'
import style from './socialIcons.module.css'

export const Icon = ({ children }) =>{
    return(
        <div className={style.icon__wrap}>
            {children}
        </div>
    )
}

export const Facebook = () => {

    const handleFacebookShare = () => {
        const url = encodeURIComponent(window.location.href);
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        window.open(facebookShareUrl, '_blank');
      };

    return (
        <Icon>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleFacebookShare}>
                <rect width="44" height="44" rx="22"/>
                <path d="M19.0462 15.865V18.613H17.0322V21.973H19.0462V31.959H23.1802V21.974H25.9552C25.9552 21.974 26.2152 20.363 26.3412 18.601H23.1972V16.303C23.1972 15.96 23.6472 15.498 24.0932 15.498H26.3472V12H23.2832C18.9432 12 19.0462 15.363 19.0462 15.865Z" fill="white"/>
            </svg>
        </Icon>
    )
}

export const X = () => {

    const handleTwitterShare = () => {
        const text = encodeURIComponent('Check out this blog from Akanda Dev');
        const url = encodeURIComponent(window.location.href);
        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        window.open(twitterShareUrl, '_blank');
      };

    return (
        <Icon>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleTwitterShare}>
                <rect width="44" height="44" rx="22" fill="black"/>
                <path d="M23.4822 20.6219L30.039 13H28.4851L22.792 19.6178L18.2448 13H13L19.8763 23.0074L13 31H14.5539L20.5662 24.0114L25.3683 31H30.613L23.4818 20.6219H23.4822ZM21.354 23.0955L20.6572 22.099L15.1137 14.1697H17.5004L21.9738 20.569L22.6705 21.5655L28.4858 29.8834H26.0994L21.354 23.0959V23.0955Z" fill="white"/>
            </svg>
        </Icon>
    )
}

export const LinkedIn = () => {

    const handleLinkedInShare = () => {
        const url = encodeURIComponent(window.location.href);
        const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        window.open(linkedInShareUrl, '_blank');
      };

    return (
        <Icon>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleLinkedInShare}>
                <rect width="44" height="44" rx="22" fill="black"/>
                <path d="M31.959 23.7189V31.0979H27.681V24.2129C27.681 22.4829 27.062 21.3029 25.514 21.3029C24.332 21.3029 23.628 22.0989 23.319 22.8679C23.206 23.1429 23.177 23.5259 23.177 23.9109V31.0979H18.897C18.897 31.0979 18.955 19.4379 18.897 18.2289H23.177V20.0529L23.149 20.0949H23.177V20.0529C23.745 19.1779 24.76 17.9269 27.033 17.9269C29.848 17.9269 31.959 19.7669 31.959 23.7189ZM14.421 12.0259C12.958 12.0259 12 12.9859 12 14.2489C12 15.4839 12.93 16.4729 14.365 16.4729H14.393C15.886 16.4729 16.813 15.4839 16.813 14.2489C16.787 12.9859 15.886 12.0259 14.421 12.0259ZM12.254 31.0979H16.532V18.2289H12.254V31.0979Z" fill="white"/>
            </svg>
        </Icon>
    )
}

export const Email = ({ title }) => {

    const handleEmailShare = () => {
        const subject = encodeURIComponent(title);
        const body = encodeURIComponent(`I found this interesting: ${window.location.href}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
      };

    return (
        <Icon>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={handleEmailShare}>
                <rect width="44" height="44" rx="22" fill="black"/>
                <path d="M15 15H28C28.7956 15 29.5587 15.3161 30.1213 15.8787C30.6839 16.4413 31 17.2044 31 18V27C31 27.7956 30.6839 28.5587 30.1213 29.1213C29.5587 29.6839 28.7956 30 28 30H15C14.2044 30 13.4413 29.6839 12.8787 29.1213C12.3161 28.5587 12 27.7956 12 27V18C12 17.2044 12.3161 16.4413 12.8787 15.8787C13.4413 15.3161 14.2044 15 15 15ZM15 16C14.5 16 14.06 16.17 13.72 16.47L21.5 21.5L29.28 16.47C28.94 16.17 28.5 16 28 16H15ZM21.5 22.71L13.13 17.28C13.05 17.5 13 17.75 13 18V27C13 27.5304 13.2107 28.0391 13.5858 28.4142C13.9609 28.7893 14.4696 29 15 29H28C28.5304 29 29.0391 28.7893 29.4142 28.4142C29.7893 28.0391 30 27.5304 30 27V18C30 17.75 29.95 17.5 29.87 17.28L21.5 22.71Z" fill="white"/>
            </svg>
        </Icon>
    )
}

export const Medium = () => {
   return (
        <Icon>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22" fill="black"/>
                <path d="M14.2851 17.269C14.2967 17.1542 14.2809 17.0384 14.2392 16.9308C14.1975 16.8232 14.131 16.727 14.0451 16.65L12.2751 14.517V14.197H17.7731L22.0231 23.517L25.7591 14.197H31.0001V14.516L29.4851 15.967C29.4217 16.0164 29.3727 16.0819 29.3432 16.1566C29.3136 16.2313 29.3046 16.3126 29.3171 16.392V27.058C29.3044 27.1374 29.3133 27.2188 29.3429 27.2936C29.3724 27.3683 29.4216 27.4338 29.4851 27.483L30.9641 28.934V29.253H23.5281V28.934L25.0571 27.447C25.2091 27.297 25.2091 27.252 25.2091 27.023V18.401L20.9501 29.218H20.3751L15.4171 18.401V25.65C15.3761 25.955 15.4771 26.262 15.6921 26.483L17.6841 28.9V29.219H12.0361V28.9L14.0281 26.483C14.1329 26.3738 14.2107 26.2416 14.2554 26.097C14.3 25.9524 14.3102 25.7993 14.2851 25.65V17.269Z" fill="white"/>
            </svg>
        </Icon>
    )
}

export const ShareLink = () => {

    const handleShare = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: 'Check out this blog post!',
              text: 'Here is something interesting I found.',
              url: window.location.href,
            });
            
          } catch (error) {
            alert( error );
            console.error('Error sharing content:', error);
          }
        } else {
          alert('Web Share API is not supported in your browser.');
        }
    };

    return (
        <Icon>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={handleShare}>
                <rect width="44" height="44" rx="22" fill="black"/>
                <g clipPath="url(#clip0_767_415)">
                <path d="M27.625 18.2499H22.75V25.0468C22.75 25.2457 22.671 25.4364 22.5303 25.5771C22.3897 25.7178 22.1989 25.7968 22 25.7968C21.8011 25.7968 21.6103 25.7178 21.4697 25.5771C21.329 25.4364 21.25 25.2457 21.25 25.0468V18.2499H16.375C15.679 18.2506 15.0118 18.5274 14.5197 19.0196C14.0275 19.5117 13.7507 20.1789 13.75 20.8749V29.8749C13.7507 30.5709 14.0275 31.2381 14.5197 31.7302C15.0118 32.2224 15.679 32.4992 16.375 32.4999H27.625C28.321 32.4992 28.9882 32.2224 29.4803 31.7302C29.9725 31.2381 30.2493 30.5709 30.25 29.8749V20.8749C30.2493 20.1789 29.9725 19.5117 29.4803 19.0196C28.9882 18.5274 28.321 18.2506 27.625 18.2499ZM22.75 14.0607L25.2198 16.5301C25.3616 16.6648 25.5505 16.7388 25.746 16.7363C25.9416 16.7338 26.1285 16.6549 26.2668 16.5166C26.4051 16.3783 26.4839 16.1915 26.4864 15.9959C26.4889 15.8003 26.4149 15.6115 26.2802 15.4697L22.5302 11.7197C22.3895 11.5792 22.1988 11.5002 22 11.5002C21.8012 11.5002 21.6105 11.5792 21.4698 11.7197L17.7198 15.4697C17.5851 15.6115 17.5111 15.8003 17.5136 15.9959C17.5161 16.1915 17.5949 16.3783 17.7332 16.5166C17.8715 16.6549 18.0584 16.7338 18.254 16.7363C18.4495 16.7388 18.6384 16.6648 18.7802 16.5301L21.25 14.0607V18.2499H22.75V14.0607Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_767_415">
                        <rect width="24" height="24" fill="white" transform="translate(10 10)"/>
                    </clipPath>
                </defs>
            </svg>
        </Icon>
    )
}

export const PrintPage = () => {

    const handlePrint = () => {
        window.print();
    };

    return (
        <Icon>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={handlePrint}>
                <rect width="44" height="44" rx="22" fill="black"/>
                <path d="M17.0001 17.846V14.616H27.0001V17.846H17.0001ZM27.6161 22.116C27.8995 22.116 28.1368 22.02 28.3281 21.828C28.5195 21.636 28.6155 21.3986 28.6161 21.116C28.6168 20.8333 28.5208 20.5956 28.3281 20.403C28.1355 20.2103 27.8981 20.1143 27.6161 20.115C27.3341 20.1156 27.0965 20.2116 26.9031 20.403C26.7098 20.5943 26.6141 20.832 26.6161 21.116C26.6181 21.4 26.7138 21.6373 26.9031 21.828C27.0925 22.0186 27.3301 22.1146 27.6161 22.116ZM18.0001 29H26.0001V24.462H18.0001V29ZM17.0001 30V26H13.5771V18.616H30.4231V26H27.0001V30H17.0001Z" fill="white"/>
            </svg>
        </Icon>
    )
}
