export function MainHeading({ title, styles }) {
    return (
        <h1 className={`text-3xl md:text-5xl sm:text-5xl font-bold ${styles}`}>{title}</h1>
    )
}
export function SubHeading({ title, styles }) {
    return (
        <h3 className={`text-3xl md:text-5xl sm:text-5xl  ${styles}`}>{title}</h3>
    )
}