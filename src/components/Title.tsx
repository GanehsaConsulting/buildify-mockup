export const Title = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
    return (
        <h1 className={`${className} text-3xl md:text-5xl tracking-tighter text-balance`}>
            {children}
        </h1>
    )
}