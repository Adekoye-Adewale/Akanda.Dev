

export function Heading({ head }) {
    return (
        <h1 className="cursor__pointer"
            dangerouslySetInnerHTML={{ __html: head }}
        >
        </h1>
    )
}

export function Title({ title }) {
    return (
        <h2 className="cursor__pointer">
            {title}
        </h2>
    )
}

export function SubTitle({ subTitle}) {
    return (
        <h3 className="cursor__pointer">
            {subTitle}
        </h3>
    )
}
