"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Loader from "@/components/loader"

// Zod schema for form validation
const FormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    try {
      console.log(data);
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.message)
      }
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you soon.",
        variant: "default",
        className: "bg-green-500 text-white"
      })
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "Error",
        description: "Failed to send email. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false);
    }
  }
  return (
    <section id="contact-section-two " className="py-16 max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto">
      {loading && <Loader />}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <small className="text-primary uppercase tracking-wide">
              Our <span className="font-semibold">contact</span>
            </small>
            <h2 className="text-3xl font-bold mt-2">Get in touch</h2>
            <p className="text-gray-600 mt-4">
              We have the best people with whom we can overcome all obstacles in our way,
              with whom we confidently look to the future.
            </p>
            <p className="text-gray-800 mt-6">
              <strong>Address:</strong> 651 Fifth Avenue, 36th New York, NY 546
              <br />
              <br />
              <strong>Phone:</strong> <a href="tel:(+080)46893578" className="text-primary">(+080) 4689 35 78</a>
              <br />
              <br />
              <strong>Email:</strong> <a href="mailto:myemail@kyanite.com" className="text-primary">myemail@kyanite.com</a>
            </p>
          </div>

          <div className="md:col-span-2 my-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Name*" className="border border-slate-400/50 rounded-none " {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Email*" className="border border-slate-400/50 rounded-none " {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Phone (Optional)" className="border border-slate-400/50 rounded-none " {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Subject*" className="border border-slate-400/50 rounded-none " {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Insert Message*" className="h-32 border border-slate-400/50 rounded-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button disabled={loading} type="submit" className="btn button-primary">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
