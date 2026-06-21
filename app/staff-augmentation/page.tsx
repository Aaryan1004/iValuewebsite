import { CheckCircle2, Globe, Laptop, Users2, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StaffAugmentationPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
       {/* Hero Hero */}
       <div className="bg-gray-950 text-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">Staff Augmentation & Dedicated Teams</h1>
                <p className="text-xl text-gray-300 mb-8">
                   Scale your engineering capacity instantly with our top 1% global talent. Seamlessly integrate our developers into your workflow to accelerate delivery.
                </p>
                <div className="flex gap-4">
                   <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-0">
                      Hire Developers
                   </Button>
                   <Button size="lg" variant="outline" className="text-black border-gray-700 hover:bg-gray-800">
                      Learn the Process
                   </Button>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">
                   <p className="text-4xl font-bold text-indigo-400 mb-2">14+</p>
                   <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Days to Onboard</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">
                   <p className="text-4xl font-bold text-indigo-400 mb-2">250+</p>
                   <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Vetted Engineers</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center col-span-2">
                   <p className="text-3xl font-bold text-indigo-400 mb-2">95%</p>
                   <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Client Retention Rate</p>
                </div>
             </div>
          </div>
       </div>

       {/* Engagement Models */}
       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl font-bold text-gray-900">Flexible Engagement Models</h2>
             <p className="mt-4 text-lg text-gray-600">Choose the hiring model that perfectly aligns with your project scope and budget.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
             <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                <Users2 className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Team</h3>
                <p className="text-gray-600 mb-6">A fully autonomous team of developers, QA, and project managers working exclusively on your project.</p>
                <ul className="text-left space-y-3 mb-8">
                   <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2" /> Full control over the team</li>
                   <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2" /> Direct communication</li>
                   <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2" /> Scalable up or down</li>
                </ul>
             </div>
             <div className="p-8 rounded-2xl border-2 border-indigo-600 shadow-md relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
                <Users2 className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Staff Augmentation</h3>
                <p className="text-gray-600 mb-6">Add specific skill sets to your existing in-house team to fill talent gaps quickly.</p>
                <ul className="text-left space-y-3 mb-8">
                   <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2" /> Fill skill gaps instantly</li>
                   <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2" /> No recruitment overhead</li>
                   <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2" /> Integrate with your workflow</li>
                </ul>
             </div>
             <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                <Laptop className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project-Based</h3>
                <p className="text-gray-600 mb-6">Fixed-price or T&M contracts for delivering specific projects or milestones from end-to-end.</p>
                <ul className="text-left space-y-3 mb-8">
                   <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2" /> Predictable budget</li>
                   <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2" /> Clear deliverables</li>
                   <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2" /> Managed by us</li>
                </ul>
             </div>
          </div>
       </div>
       
       <div className="bg-indigo-50 mt-24 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-indigo-950">
             <h2 className="text-3xl font-bold mb-6">Ready to expand your capabilities?</h2>
             <p className="text-lg mb-8 max-w-2xl mx-auto text-indigo-800">Get in touch to review resumes of our available engineers and start your trial period.</p>
             <Link href="/contact">
                <Button size="lg" className="bg-indigo-700 hover:bg-indigo-800 text-white">Contact Us Today</Button>
             </Link>
          </div>
       </div>
    </div>
  );
}
