"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faq from "@/assets/home/faq.png";
import Image from "next/image";
const faqs = [
  {
    question: "How do I sell an item on SellItForword?",
    answer:
      "To sell an item, simply create an account, list your item with details and images, set a price, and publish it. Interested buyers can then reach out to you.",
  },
  {
    question: "Is it free to list items on SellItForword?",
    answer: "Yes! Listing your items on SellItForword is free. However, there may be optional premium features for increased visibility.",
  },
  {
    question: "How can I ensure a safe transaction?",
    answer: "Always communicate through the platform, verify the buyer/seller before meeting, and prefer secure payment methods to avoid scams.",
  },
  {
    question: "Can I return a purchased item?",
    answer: "Since items are sold by individual sellers, returns depend on the seller’s policy. Be sure to clarify this before making a purchase.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach out to our support team via the 'Contact Us' page or email us at support@sellitforword.com.",
  },
];

export default function FAQ() {
  return (
    <div className="py-20">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-5">Frequently Asked Questions</h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5">
        <div className="w-full md:w-1/2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem className="w-full" key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-lg font-semibold text-light-primary-txt dark:text-dark-primary-txt hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-md text-base text-light-secondary-txt dark:text-dark-secondary-txt ">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="w-full md:w-1/2 hidden md:block">
          <Image src={faq} alt="faq" width={500} height={500} priority className="mx-auto w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
