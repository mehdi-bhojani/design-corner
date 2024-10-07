import { FC } from 'react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection: FC = () => {
    return (
        <section id="faq-section" className="py-16">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <small className="text-primary uppercase tracking-wider text-xl my-4">
                        Work <span className="text-primary tracking-[5px]">price</span>
                    </small>
                    <h2 className="text-3xl font-bold ">Our Pricing Plan</h2>
                    <p className="text-gray-600">
                        We have the best people to overcome obstacles, confidently looking to the future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div className="flex justify-center items-center">
                        <Image
                            src="/faq/1.jpg"
                            alt="FAQ Featured Image"
                            width={500}
                            height={300}
                            className="rounded-md shadow-lg"
                        />
                    </div>

                    {/* Accordion Section */}
                    <div>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold">
                                    1. Standard dummy since the 1500s?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg font-semibold">
                                    2. How do I make a support request with this app?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg font-semibold">
                                    3. Where do I find any detailed documentation?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-lg font-semibold text-left">
                                    4. How and where can we download the latest update?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-lg font-semibold text-left">
                                    5. How and where can we download the latest update?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
