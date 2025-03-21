import { ctaData } from "@/app/system"
import { Title } from "./Title"
import { Button } from "./ui/button"

export const CTA = () => {
    return (
        <section className="mx-5 my-24">
            <div className="relative rounded-xl overflow-hidden">
                <img
                    className="w-full h-[80lvh] md:h-[50lvh] object-cover"
                    src={ctaData.image}
                    alt=""
                />
                <div className="absolute inset-0 bg-darkColor/20"></div>
                <div className="absolute left-2 md:left-auto right-2 bottom-2 md:right-5 md:bottom-5 md:w-[30%] ">
                    <div className="p-5 backdrop-blur-xl bg-lightColor/50 dark:bg-darkColor/50 rounded-xl h-fit border border-neutral-500/50 dark:border-neutral-200/30">
                        <div className="flex flex-col gap-2">
                            <Title>
                                {ctaData.title}
                            </Title>
                            <p className="opacity-70">
                                {ctaData.description}
                            </p>
                            <a href="/post-job">
                                <Button className="w-fit rounded-full">
                                    Post a Job
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}