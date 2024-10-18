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
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900 dark:text-white"
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
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 dark:text-white p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <motion.div
                    initial={false}
                    animate={{ color: ["#2563eb", "#4f46e5"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="flex items-center"
                  >
                    <span className="mr-2">Q:</span>
                    {faq.question}
                  </motion.div>
                </AccordionTrigger>
                <AnimatePresence>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 p-4 bg-gray-50 dark:bg-gray-800">
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mb-2"><span className="font-semibold text-gray-800 dark:text-white">A:</span> {faq.answer}</p>
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