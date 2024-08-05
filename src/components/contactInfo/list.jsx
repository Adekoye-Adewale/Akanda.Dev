import { Body, Title } from "../text";

export default function List({ Lists }) {
    return (
        <>
            {Lists.map(( copy, index ) => (
                <div key={index} title={copy.info}>
                    <Title title={copy.title}/>
                    <Body text={copy.text}/>
                </div>
            ))}
        </>
    )
}
