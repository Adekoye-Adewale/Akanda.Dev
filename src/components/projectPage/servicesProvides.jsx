import { Fragment } from "react";
import { Body, Title } from "../text";
import style from './projectPage.module.css';

export default function ServicesProvided({ projectTechnologies }) {
    return (
        <section className={`${style.services__provided__sec} inline__pad`}>
            <Title title={'Services Provided'}/>
            <div className={`${style.services__provided__list}`}>
                {projectTechnologies.map(( list, index ) => (
                    <Fragment key={index}>
                        <span>{list}</span>
                    </Fragment>
                ))}
            </div>
        </section>
    )
}
