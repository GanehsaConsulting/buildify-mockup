import { Title } from "./Title"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { postJobPageData } from "@/app/system"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const FormJob = () => {
    return (
        <section className="mx-5 min-h-screen py-24">
            {/* Header */}
            <div className="mb-10 space-y-2">
                <Title>{postJobPageData.title}</Title>
                <p className="text-gray-600 dark:text-gray-300">
                    {postJobPageData.description}
                </p>
            </div>
            <div className="flex md:flex-row flex-col gap-5">
                <div className="md:w-[70%] space-y-5">
                    {/* Form Job */}
                    <div className="p-5 rounded-xl dark:bg-darkColor bg-lightColor shadow-secondary border space-y-6">
                        <h2 className="text-lg font-semibold mb-4">
                            Job Details
                        </h2>
                        <form className="space-y-3">
                            {Object.entries(postJobPageData.formFields).map(([key, field]) => (
                                <div key={key} className="flex flex-col md:flex-row gap-1.5">
                                    <Label className="md:w-1/3 !bg-mainColor/30 shadow-main" variant={"main"} htmlFor={key}>{field.label}</Label>
                                    <Input className="dark:bg-black/40 bg-white/30 shadow-main" id={key} type="text" placeholder={field.placeholder} />
                                </div>
                            ))}
                        </form>
                    </div>

                    {/* Form Sender (Data Pengirim) */}
                    <div className="p-5 rounded-xl dark:bg-darkColor bg-lightColor shadow-secondary border space-y-6">
                        <h2 className="text-lg font-semibold mb-4">
                            Your Information

                        </h2>
                        <form className="space-y-4">
                            {Object.entries(postJobPageData.formSender).map(([key, field]) => (
                                <div key={key} className="flex flex-col md:flex-row gap-1.5">
                                    <Label className="w-1/3 !bg-mainColor/30 shadow-main" variant={"main"} htmlFor={key}>{field.label}</Label>
                                    <Input className="dark:bg-black/40 bg-white/30 shadow-main" id={key} type="text" placeholder={field.placeholder} />
                                </div>
                            ))}
                        </form>
                    </div>
                    <Button className="w-full rounded-full">{postJobPageData.cta.buttonLabel}</Button>

                </div>
                <div className="md:w-[30%] space-y-5 mt-10 md:mt-0">
                    <Title className="md:hidden block">
                        How It Works
                    </Title>
                    <div className="grid gap-6">
                        {postJobPageData.steps.map((step) => (
                            <div key={step.step} className="p-6 bg-gradient-to-tr from-lightColor dark:from-darkColor to-mainColor/60 dark:to-mainColor/30 dark:bg-darkColor rounded-xl hover:invert duration-300 ease-in-out">
                                <p className="text-5xl mb-5 text-mainColor drop-shadow-lg brightness-75 dark:brightness-105">
                                    0{step.step}
                                </p>
                                <h3 className="text-lg font-semibold">{step.title}</h3>
                                <p className="text-neutral-500 dark:text-neutral-400">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Section */}
                    <div className="p-6 border rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="w-full duration-300">
                            {postJobPageData.faq.map((faq, index) => (
                                <AccordionItem key={index} value={`faq-${index}`}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    )
}
