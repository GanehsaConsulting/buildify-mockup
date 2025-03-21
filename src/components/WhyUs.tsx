import { whyUs } from "@/app/system"
import { Title } from "./Title"

export const WhyUs = () => {
    return (
        <section className="mx-5 my-24 max-h-screen md:overflow-hidden rounded-xl">
            <div className="relative">
                <img
                    className="h-[85lvh] md:h-[85lvh] w-full rounded-xl object-cover"
                    src="https://images.unsplash.com/photo-1670719560498-775296fa1cbf?q=80&w=3136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-darkColor/80 via-darkColor/50 to-transparent rounded-xl" />
                <div className="absolute inset-0 md:p-5 grid md:grid-cols-2 gap-3 rounded-xl">
                    <div className="flex flex-col gap-3 md:justify-between p-5 md:p-0">
                        <Title className="text-3xl md:text-5xl tracking-tighter text-balance text-white">
                            Why Choose Us
                        </Title>
                        <p className="text-white opacity-85">
                            Finding the right contractor or interior designer for your project can be challenging. That's why we provide a seamless and secure platform to connect you with the best professionals in the industry.
                        </p>
                    </div>

                    <div className="hidden md:grid md:grid-cols-2 gap-3">
                        {whyUs.map((el, idx) => (
                            <div key={idx} className={`flex flex-col p-4 rounded-xl bg-lightColor/50 dark:bg-darkColor/50 backdrop-blur-2xl duration-300 ease-in-out hover:scale-95 hover:invert`}>
                                <div className="text-3xl p-3 bg-darkColor/20 dark:bg-lightColor/20 w-fit rounded-full">
                                    {el.icon}
                                </div>

                                <div className="mt-auto">
                                    <h1 className="text-xl font-medium">
                                        {el.title}
                                    </h1>
                                    <p className="text-sm opacity-90">
                                        {el.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="md:hidden carousel !snap-align-none gap-3 mb-5">
                        {whyUs.map((el, idx) => (
                            <div key={idx} className={`${idx === 0 && "ml-5"} ${idx === whyUs.length - 1 && "mr-5"} min-w-[70lvw] flex flex-col p-4 rounded-xl bg-lightColor/50 dark:bg-darkColor/50 backdrop-blur-2xl duration-300 ease-in-out hover:scale-95 hover:invert`}>
                                <div className="text-3xl p-3 bg-darkColor/20 dark:bg-lightColor/20 w-fit rounded-full">
                                    {el.icon}
                                </div>

                                <div className="mt-auto">
                                    <h1 className="text-xl font-medium">
                                        {el.title}
                                    </h1>
                                    <p className="text-sm opacity-90">
                                        {el.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}