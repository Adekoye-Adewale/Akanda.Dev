import { ContactCTACopy } from "@/webContents/contactPageCopy";
import { Body, Title } from "../text";
import BtnWithForm from "../btn/btnWithForm";
import { FadeIn } from "../ui/enteranceAnimation";

export default function ContactCTA() {
    return (
        <>
            <FadeIn>
                <Title 
                    title={ContactCTACopy.title}
                />
                <Body 
                    text={ContactCTACopy.text}
                />
            </FadeIn>
            <div className="grid__center">
                <BtnWithForm 
                    text={ContactCTACopy.btnText}
                />
            </div>            
        </>
    )
}
