import { ContactCTACopy } from "@/webContents/contactPageCopy";
import { Body, Title } from "../text";
import BtnWithForm from "../btn/btnWithForm";

export default function ContactCTA() {
    return (
        <>
            <Title 
                title={ContactCTACopy.title}
            />
            <Body 
                text={ContactCTACopy.text}
            />
            <div className="grid__center">
                <BtnWithForm 
                    text={ContactCTACopy.btnText}
                />
            </div>            
        </>
    )
}
