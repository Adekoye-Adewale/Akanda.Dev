

export function Heading({ head }) {
    return (
        <h1 
            dangerouslySetInnerHTML={{ __html: head }}
        >
        </h1>
    )
}

export function Title({ title }) {
    return (
        <h2>
            {title}
        </h2>
    )
}

export function SubTitle({ subTitle}) {
    return (
        <h3>
            {subTitle}
        </h3>
    )
}
