import { services } from "@/content/services";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-24">
       {/* Hero Section */}
       <div className="bg-gray-950 text-white pt-16 pb-24 border-b border-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <Link href="/services" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
             </Link>
             <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">{service.title}</h1>
             <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                {service.description}
             </p>
          </div>
       </div>

       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid lg:grid-cols-3 gap-16">
             <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
                <div className="space-y-8 mb-16">
                   {service.process.map((step, idx) => (
                      <div key={idx} className="flex">
                         <div className="flex-shrink-0 mr-6">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xl">
                               {idx + 1}
                            </div>
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.step}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                         </div>
                      </div>
                   ))}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies We Use</h2>
                <div className="flex flex-wrap gap-3">
                   {service.technologies.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 font-medium">
                         {tech}
                      </span>
                   ))}
                </div>
             </div>

             <div>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-32">
                   <h3 className="text-xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                   <ul className="space-y-4 mb-8">
                      {service.benefits.map((benefit, i) => (
                         <li key={i} className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                         </li>
                      ))}
                   </ul>
                   <hr className="border-gray-200 mb-8" />
                   <h3 className="text-lg font-bold text-gray-900 mb-4">Ready to start?</h3>
                   <p className="text-gray-600 mb-6 text-sm">Schedule a technical consultation to discuss your specific requirements.</p>
                   <Link href="/contact" className="block w-full">
                      <Button className="w-full bg-indigo-700 text-white" size="lg">Request Consultation</Button>
                   </Link>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
