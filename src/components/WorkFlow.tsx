import { howItWorks } from "@/app/system"
import { Title } from "./Title"

export const WorkFlow = () => {
    return (
        <section className="mx-5 my-24 space-y-10">
            <Title>
                How It Works
            </Title>
            <div className="grid md:grid-cols-4 gap-5">
                {howItWorks.map((el, idx) => (
                    <div key={idx} className="flex flex-col p-3 bg-gradient-to-tr from-lightColor dark:from-darkColor to-mainColor/60 dark:to-mainColor/30 dark:bg-darkColor rounded-xl hover:invert hover:scale-105 origin-bottom duration-300 ease-in-out">
                        <div className="text-5xl h-[25lvh] text-mainColor drop-shadow-lg brightness-75 dark:brightness-105">
                            {el.id}
                        </div>

                        <div className="">
                            <h1 className="text-2xl font-medium">
                                {el.step}
                            </h1>
                            <p>
                                {el.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}