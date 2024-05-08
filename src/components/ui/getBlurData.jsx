'use server'
import GetBase64 from '../ui/getBase64'

export default async function GetBlurData(imgSrc) {
    const blurData = await GetBase64(imgSrc);
    return blurData;
}