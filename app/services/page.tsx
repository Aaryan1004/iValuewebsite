import { services } from "@/content/services";
import { ArrowRight, Code, ShieldQuestion, Cloud, Brain, Database, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, any> = {
  "ShieldQuestion": ShieldQuestion,
  "Code": Code,
  "Cloud": Cloud,
  "Brain": Brain,
  "Database": Database,
  "Users": Users
};

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-indigo-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-indigo-100">
            From strategic consulting to robust software engineering and managed IT services, we deliver end-to-end solutions that drive enterprise success.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
             const IconComponent = iconMap[service.icon] || Code;
             return (
               <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                 <div className="p-4 bg-indigo-50 rounded-xl w-fit text-indigo-700 mb-6">
                   <IconComponent className="h-8 w-8" />
                 </div>
                 <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                 <p className="text-gray-600 mb-8 flex-grow">{service.description}</p>
                 
                 <div className="mb-8">
                   <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Key Benefits</h3>
                   <ul className="space-y-2">
                     {service.benefits.map((b, i) => (
                       <li key={i} className="text-gray-600 text-sm flex items-center">
                         <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                         {b}
                       </li>
                     ))}
                   </ul>
                 </div>

                 <Link href={`/services/${service.slug}`} className="mt-auto">
                    <Button variant="outline" className="w-full">
                       View Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                 </Link>
               </div>
             );
          })}
        </div>
      </div>
    </div>
  );
}
