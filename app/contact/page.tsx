"use client";

import { CONTACT_INFO } from "@/content/siteConfig";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate server action
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
           <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">Let&apos;s talk about your project</h1>
              <p className="text-lg text-gray-600 mb-12">
                 Whether you need a dedicated team, custom software development, or strategic IT consulting, our experts are ready to help you scale.
              </p>
              
              <div className="space-y-8">
                 <div className="flex items-start">
                    <div className="flex-shrink-0">
                       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                          <Mail className="h-6 w-6" />
                       </div>
                    </div>
                    <div className="ml-4">
                       <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                       <p className="mt-1 text-gray-600">Our team will respond within 24 hours.</p>
                       <p className="mt-2 font-medium text-indigo-700">{CONTACT_INFO.email}</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start">
                    <div className="flex-shrink-0">
                       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                          <Phone className="h-6 w-6" />
                       </div>
                    </div>
                    <div className="ml-4">
                       <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                       <p className="mt-1 text-gray-600">Mon-Fri from 9am to 6pm EST.</p>
                       <p className="mt-2 font-medium text-indigo-700">{CONTACT_INFO.phone}</p>
                    </div>
                 </div>

                 <div className="flex items-start">
                    <div className="flex-shrink-0">
                       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                          <MapPin className="h-6 w-6" />
                       </div>
                    </div>
                    <div className="ml-4">
                       <h3 className="text-lg font-medium text-gray-900">Global Headquarters</h3>
                       <p className="mt-1 text-gray-600 whitespace-pre-wrap">{CONTACT_INFO.address}</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Contact Form */}
           <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
              {submitted ? (
                 <div className="text-center py-16">
                    <div className="mx-auto w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent</h3>
                    <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
                 </div>
              ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                          <input type="text" id="firstName" required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                       </div>
                       <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                          <input type="text" id="lastName" required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                       </div>
                    </div>
                    
                    <div className="space-y-2">
                       <label htmlFor="email" className="text-sm font-medium text-gray-700">Work Email</label>
                       <input type="email" id="email" required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                    </div>

                    <div className="space-y-2">
                       <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
                       <input type="text" id="company" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                    </div>

                    <div className="space-y-2">
                       <label htmlFor="message" className="text-sm font-medium text-gray-700">Project Details</label>
                       <textarea id="message" rows={4} required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full text-base">Send Inquiry</Button>
                    <p className="text-xs text-center text-gray-500 mt-4">By submitting this form, you agree to our Privacy Policy.</p>
                 </form>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
