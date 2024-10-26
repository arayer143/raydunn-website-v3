"use client"

import { useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you offer ongoing maintenance and support after the website is launched?",
    answer: "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally. Our support plans include regular updates, security checks, backups, and technical assistance."
  },
  {
    question: "Can you help with search engine optimization (SEO) for my website?",
    answer: "We integrate SEO best practices throughout the development process. Additionally, we offer comprehensive SEO services to improve your website's visibility in search engines, including keyword research, on-page optimization, and content strategy."
  },
  {
    question: "Do you create responsive websites that work on mobile devices?",
    answer: "Yes, all our websites are built with a mobile-first approach, ensuring they are fully responsive and function seamlessly across all devices, including smartphones, tablets, and desktop computers."
  },
  {
    question: "Can you integrate third-party tools or APIs into my website?",
    answer: "We have extensive experience integrating various third-party tools and APIs, such as payment gateways, CRM systems, marketing automation tools, and more. We'll work with you to determine the best integrations for your specific needs."
  },
  {
    question: "What content management system (CMS) do you use?",
    answer: "We work with various CMS platforms, including WordPress, Shopify, and custom solutions. The choice depends on your specific requirements, but we often recommend WordPress for its flexibility and ease of use. We'll help you choose the best CMS for your needs during our consultation."
  }
]

export default function FAQSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-4 rounded-lg border border-border bg-card">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground px-6 py-4 hover:bg-muted/50 transition-colors rounded-t-lg">
                  <span className="mr-2 text-primary">Q:</span>
                  {faq.question}
                </AccordionTrigger>
                <AnimatePresence>
                  <AccordionContent className="text-muted-foreground px-6 pb-4">
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mt-2">
                        <span className="font-semibold text-foreground mr-2">A:</span>
                        {faq.answer}
                      </p>
                    </motion.div>
                  </AccordionContent>
                </AnimatePresence>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}