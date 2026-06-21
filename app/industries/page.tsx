import { Building2, HeartPulse, Truck, ShoppingCart, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    description: "HIPAA-compliant telemedicine platforms, EHR integrations, and patient portals.",
  },
  {
    id: "finance",
    name: "Finance & FinTech",
    icon: Target,
    description: "Secure payment gateways, high-frequency trading platforms, and banking portals.",
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "Scalable omni-channel e-commerce platforms handling millions of transactions.",
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    description: "Real-time supply chain tracking, predictive maintenance, and fleet management.",
  },
  {
    id: "technology",
    name: "Technology & SaaS",
    icon: Building2,
    description: "Accelerating product roadmaps for independent software vendors and startups.",
  }
];

export default function IndustriesPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">Industries We Serve</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Deep domain expertise across verticals. We build software that respects industry regulations and solves vertical-specific challenges.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => {
               const Icon = ind.icon;
               return (
                  <div key={ind.id} className="bg-white border text-center border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow flex flex-col items-center group">
                     <div className="w-16 h-16 bg-indigo-50 text-indigo-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8" />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-4">{ind.name}</h3>
                     <p className="text-gray-600 mb-8">{ind.description}</p>
                     
                     <div className="mt-auto">
                        <Link href={`/contact`}>
                           <span className="text-indigo-700 font-medium inline-flex items-center hover:text-indigo-800">
                              Discuss your project <ArrowRight className="w-4 h-4 ml-1" />
                           </span>
                        </Link>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
    </div>
  );
}
