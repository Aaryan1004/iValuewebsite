import { clients } from "@/content/clients";
import { Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ClientsPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">Our Success Stories</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Discover how we help global brands, fast-growing startups, and large enterprises achieve their digital transformation goals.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {clients.map(client => (
               <div key={client.id} className="relative group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8 cursor-pointer relative z-10">
                     <div className="text-xl font-bold flex items-center gap-3">
                        <Building2 className="w-8 h-8 text-indigo-600" />
                        {client.name}
                     </div>
                     <span className="text-sm font-medium px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">
                        {client.industry}
                     </span>
                  </div>
                  
                  <p className="text-gray-600 mb-8 flex-grow cursor-pointer relative z-10">{client.description}</p>
                  
                  <div className="mb-8 relative z-10">
                     <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Technologies</h4>
                     <div className="flex flex-wrap gap-2">
                        {client.technologies.map(tech => (
                           <span key={tech} className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                              {tech}
                           </span>
                        ))}
                     </div>
                  </div>

                  {client.caseStudyLink && (
                     <div className="mt-auto relative z-10">
                        <Link href={client.caseStudyLink}>
                           <Button className="w-full justify-between group-hover:bg-indigo-800 transition-colors">
                              Read Case Study <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                           </Button>
                        </Link>
                     </div>
                  )}
                  {/* Decorative background element on hover */}
                  <div className="absolute -inset-10 bg-indigo-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500"></div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
