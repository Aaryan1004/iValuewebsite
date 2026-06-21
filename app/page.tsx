"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, Users, Globe2, Briefcase } from "lucide-react";
import { services } from "@/content/services";
import { clients } from "@/content/clients";
import { testimonials } from "@/content/testimonials";
import { ObjectConfig } from "@/content/siteConfig";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Enterprise IT Solutions <br className="hidden sm:block"/>
              <span className="text-indigo-700">for the Cloud Era</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
              {ObjectConfig.description} We empower startups, mid-size companies, and global enterprises to build, scale, and transform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-indigo-700 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-800 transition-colors"
               >
                Get Started
              </Link>
              <Link
                href="/services"
                className="rounded-full bg-indigo-50 text-indigo-700 px-8 py-3.5 text-base font-semibold hover:bg-indigo-100 transition-colors flex items-center gap-2"
               >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div>
                 <p className="text-4xl font-extrabold text-white">500+</p>
                 <p className="mt-2 text-sm font-medium text-gray-400">Projects Delivered</p>
              </div>
              <div>
                 <p className="text-4xl font-extrabold text-white">250+</p>
                 <p className="mt-2 text-sm font-medium text-gray-400">Expert Engineers</p>
              </div>
              <div>
                 <p className="text-4xl font-extrabold text-white">15+</p>
                 <p className="mt-2 text-sm font-medium text-gray-400">Countries Served</p>
              </div>
              <div>
                 <p className="text-4xl font-extrabold text-white">99%</p>
                 <p className="mt-2 text-sm font-medium text-gray-400">Client Retention</p>
              </div>
           </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprehensive Services</h2>
            <p className="mt-4 text-lg text-gray-600">End-to-end technology solutions tailored to your business goals.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
             {services.slice(0,6).map((service, idx) => (
                <motion.div 
                   key={service.id}
                   initial={{ opacity:0, y: 20 }}
                   whileInView={{ opacity:1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                   <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-6">
                      {/* Using dynamic icon placeholder, normally you'd map string to Lucide component */}
                       <Briefcase className="h-6 w-6" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                   <p className="text-gray-600 mb-6">{service.description}</p>
                   <Link href={`/services/${service.slug}`} className="text-indigo-700 font-medium inline-flex items-center hover:text-indigo-800">
                     Learn more <ArrowRight className="ml-1 h-4 w-4" />
                   </Link>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                 <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Why iValueLabs?</h2>
                 <p className="text-lg text-gray-600 mb-8">
                   We don&apos;t just write code; we build strategic partnerships. Our managed teams act as an extension of your company, driving innovation and speed-to-market.
                 </p>
                 <ul className="space-y-4">
                    {["Enterprise-grade security and compliance", "Top 1% global engineering talent", "Agile methodologies and transparent reporting", "Scalable managed teams and offshore centers"].map((point, i) => (
                       <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                          <span className="text-gray-700 font-medium">{point}</span>
                       </li>
                    ))}
                 </ul>
              </div>
              <div className="mt-12 lg:mt-0 relative rounded-2xl overflow-hidden shadow-xl">
                 <img src="https://picsum.photos/seed/office1/800/600" alt="Team working" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Clients Showcase */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-sm font-semibold tracking-wider text-indigo-700 uppercase mb-8">Trusted by Industry Leaders</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
               {clients.map((client) => (
                  <div key={client.id} className="flex items-center gap-2 hover:grayscale-0 transition-all cursor-pointer">
                     <Building2 className="h-8 w-8 text-gray-900" />
                     <span className="text-xl font-bold text-gray-900">{client.name}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl mb-16">What Our Clients Say</h2>
           <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, idx) => (
                 <motion.div 
                    key={testimonial.id}
                    initial={{ opacity:0, y: 20 }}
                    whileInView={{ opacity:1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                 >
                    <div className="flex text-yellow-400 mb-6">
                       {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                       ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                    <div>
                       <p className="font-bold text-gray-900">{testimonial.clientName}</p>
                       <p className="text-sm text-gray-500">{testimonial.clientRole}, {testimonial.company}</p>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 py-20">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to scale your engineering team?</h2>
            <p className="max-w-2xl mx-auto text-indigo-100 text-lg mb-10">
               Schedule a free consultation today. Let&apos;s discuss your roadmap and see how our dedicated teams can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/contact" className="rounded-full bg-white text-indigo-700 px-8 py-3.5 text-base font-bold shadow-sm hover:bg-gray-50 transition-colors">
                  Contact Sales
               </Link>
               <Link href="/staff-augmentation" className="rounded-full bg-indigo-600 text-white border border-indigo-500 px-8 py-3.5 text-base font-bold hover:bg-indigo-500 transition-colors">
                  Learn About Staff Augmentation
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
