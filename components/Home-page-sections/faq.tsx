"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of web development services including custom website design, e-commerce solutions, web application development, and ongoing maintenance and support."
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines can vary depending on the complexity and scope of work. A simple website might take 4-6 weeks, while a more complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer hosting services?",
    answer: "Yes, we offer reliable hosting solutions tailored to your website's needs. We can also work with your existing hosting provider if you prefer."
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer: "We integrate SEO best practices into all our web development projects. We also offer additional digital marketing services to help improve your online presence and drive traffic to your site."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on the specific requirements of each client. We provide detailed quotes after our initial consultation where we discuss your needs and goals."
  }
]

export default function FAQSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary-100 dark:bg-secondary-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-secondary-900 dark:text-secondary-50">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border border-secondary-300 dark:border-secondary-700 rounded-lg overflow-hidden shadow-sm"
      initial={false}
      animate={{ 
        backgroundColor: isOpen ? "var(--secondary-50)" : "var(--secondary-100)",
        boxShadow: isOpen ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none"
      }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-secondary-900 dark:text-secondary-50">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-secondary-600 dark:text-secondary-400 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-4 pt-0 text-secondary-700 dark:text-secondary-300 bg-secondary-50 dark:bg-secondary-800">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}