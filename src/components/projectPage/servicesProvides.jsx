import { Body, Title } from "../text";
import style from './projectPage.module.css';

export default function ServicesProvided() {
    return (
        <section className={`${style.services__provided__sec} inline__pad`}>
            <Title title={'Services Provided'}/>
            <Body text={'Business & Competitor Research, UX and UI Website Design, Frontend Development, Mobile First Design,  Fully Responsive Design, Tailor Made Design, Search Engine Optimisation, CRM Integration, GA4 Integration, WooCommerce Integration, QUIC CDN x Cloudflare, Caching & Optimisation, Advance Search Feature, Payment Gateway, Security Configuration, High Traffic Campaigns.'}/>
        </section>
    )
}
