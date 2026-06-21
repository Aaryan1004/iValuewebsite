import { ObjectConfig } from "@/content/siteConfig";
import { CheckCircle2, Globe2, Lightbulb, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:py-32 lg:px-8 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            About {ObjectConfig.name}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a global IT consulting and software development company dedicated to transforming businesses through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-50 rounded-lg text-indigo-700">
                <Globe2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To empower enterprises with scalable, secure, and cutting-edge software solutions that drive growth, streamline operations, and deliver exceptional value to their customers.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-50 rounded-lg text-indigo-700">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To be the world&apos;s most trusted technology partner, recognized for our commitment to engineering excellence, agile delivery, and fostering innovation globally.
            </p>
          </div>
        </div>
      </section>

      {/* Stats/Image Section */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Built on engineering excellence.</h2>
              <p className="text-gray-400 text-lg mb-8">
                Since our inception, we have been obsessed with delivering high-quality software architectures. We don&apos;t just write code; our consultants understand business metrics and align technology to drive ROI.
              </p>
              <ul className="space-y-4 mb-8">
                {["10+ Years of Enterprise Experience", "Global Delivery Centers in 3 Continents", "Rigorous Talent Vetting (Top 1%)", "ISO 27001 Certified Security Practices"].map((item, i) => (
                  <li key={i} className="flex flex-row items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
               <img 
                 src="https://picsum.photos/seed/office2/800/800" 
                 alt="Our global team"
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Placeholder */}
      <section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Leadership Team</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Guided by industry veterans with decades of experience leading global technology transformations.</p>
         </div>
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1,2,3,4].map((i) => (
               <div key={i} className="text-center">
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 bg-gray-100">
                     <img src={`https://picsum.photos/seed/portrait${i}/400/400`} alt="Leader" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all"/>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Leader Name</h3>
                  <p className="text-indigo-700 font-medium">Executive Title</p>
               </div>
            ))}
         </div>
      </section>
    </div>
  );
}
