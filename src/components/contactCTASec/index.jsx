import { ContactCTACopy } from "@/webContents/contactPageCopy";
import PopUpBtn from "../btn/popUpBtn";
import { Body, Title } from "../text";

export default function ContactCTA() {
    return (
        <>
            <Title title={ContactCTACopy.title}/>
            <Body text={ContactCTACopy.text}/>
            <PopUpBtn onClick={''} text={ContactCTACopy.btnText}/>
        </>
    )
}
