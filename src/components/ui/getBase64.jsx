import { getPlaiceholder } from 'plaiceholder'

export default async function GetBase64() {
    try{
        const res = await fetch(url);
        if(!res.ok){
            throw new Error('Failed to load image');
        }
        const buffer = await res.arrayBuffer();
        const {base64} = await getPlaiceholder(Buffer.from(buffer));
        return base64
    }catch(e){
        if (e) console.log(e.stack)
    }
}
