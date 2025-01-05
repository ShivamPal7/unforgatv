"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { PhoneIcon, MailIcon, MapPinIcon, Instagram, Linkedin, Twitter } from "lucide-react"
import { DiscordLogoIcon } from "@radix-ui/react-icons"
import { toast } from "sonner"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/unforgatv",
    color: "hover:text-pink-500"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/unforgatv",
    color: "hover:text-blue-500"
  },
  {
    name: "Discord",
    icon: DiscordLogoIcon,
    href: "https://discord.gg/unforgatv",
    color: "hover:text-blue-400"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/unforgatv",
    color: "hover:text-blue-400"
  }
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        message: formData.get('message'),
      }

      console.log('Sending data:', data)

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      toast.success('Message sent successfully!')
      e.currentTarget.reset()
    } catch (error: any) {
      console.error('Error:', error)
      toast.error(error.message || 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="grid gap-16 lg:grid-cols-2"
      >
        {/* Left side - Contact Information */}
        <motion.div 
          variants={fadeInUp}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg text-lg">
              Have questions or want to discuss a project? We&apos;re here to help.
            </p>
          </div>

          <motion.div 
            variants={staggerChildren}
            className="space-y-6"
          >
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <div className="bg-background/10 p-2 rounded-full border">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <span className="text-lg">+91 8976417423</span>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <div className="bg-background/10 p-2 rounded-full border">
                <MailIcon className="w-6 h-6" />
              </div>
              <span className="text-lg">unforgatv@gmail.com</span>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <div className="bg-background/10 p-2 rounded-full border">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <span className="text-lg">Andheri, Mumbai, India</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transform transition-all duration-200 hover:scale-110 ${social.color}`}
                >
                  <div className="bg-background/10 p-2 rounded-full border hover:border-current">
                    <social.icon className="w-6 h-6" />
                  </div>
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side - Contact Form */}
        <motion.div variants={fadeInUp}>
          <Card className="p-8 backdrop-blur-sm bg-card/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First name
                    </label>
                    <Input 
                      id="firstName"
                      name="firstName"
                      placeholder="John" 
                      required 
                      className="bg-background/50 focus:bg-background transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last name
                    </label>
                    <Input 
                      id="lastName"
                      name="lastName"
                      placeholder="Doe" 
                      required 
                      className="bg-background/50 focus:bg-background transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    placeholder="john@example.com" 
                    type="email" 
                    required 
                    className="bg-background/50 focus:bg-background transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    className="min-h-[150px] resize-none bg-background/50 focus:bg-background transition-colors"
                    placeholder="Enter your message here..."
                    required
                  />
                </div>
              </div>
              <Button 
                className="w-full gradient-button text-white font-semibold"
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                    Sending...
                  </motion.div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}