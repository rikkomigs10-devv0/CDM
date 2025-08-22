"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", contactNumber: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Reach Us</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to partner with CDM Enterprise? Contact us today to discuss your business needs and discover our
            tailored solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="bg-input border-border min-h-[200px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="border-border">
              <CardContent className="p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4">Contact Information</h4>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        9407 CDM Bldg. Maharlika Highway Ibabang Iyam
                        <br />
                        Lucena City, Quezon 4301
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">
                        (042) 373-1984
                        <br />
                        0908-8116353
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary">✉️</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">
                        cdm_enterprise@yahoo.com
                        <br />
                        moratolyrek@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-3 sm:p-4">
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">Business Hours</h4>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-sm sm:text-base text-muted-foreground">
            © 2024 CDM Enterprise. All rights reserved. | Committed. Diligent. Meaningful.
          </p>
        </div>
      </div>
    </section>
  )
}
