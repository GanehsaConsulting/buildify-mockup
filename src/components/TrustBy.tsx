import { trustedBy } from "@/app/system"
import { Title } from "./Title"

export const TrustBy = () => {
    return (
        <section className="mx-5 my-24 space-y-3">
            <div className="px-6 py-5 dark:bg-darkColor bg-lightColor rounded-xl w-fit">
                <Title className="font-medium tracking-normal bg-gradient-to-br from-blue-500/50 to-darkColor dark:to-lightColor text-transparent bg-clip-text pr-1">
                    Our Trusted Partner
                </Title>
            </div>
            <div className="w-full md:h-full h-fit dark:bg-darkColor bg-lightColor py-6 md:py-16 space-y-10 rounded-xl">
                <div className="flex flex-wrap md:flex-nowrap p-3 md:p-0 items-center justify-evenly gap-10 h-fit">
                    {trustedBy.map((el, idx) => (
                        <div key={idx} className="flex flex-col items-center text-5xl md:text-7xl space-y-2 duration-300 ease-in-out hover:scale-105">
                            {el.logo}
                            <h1 className="text-sm md:text-xl font-black text-center text-balance tracking-tighter opacity-95">
                                {el.name}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}