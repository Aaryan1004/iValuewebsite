import { ObjectConfig } from "@/content/siteConfig";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-indigo max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-8">Terms of Service</h1>
        
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-gray-700">
           <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using our services at {ObjectConfig.name}, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>
           </section>

           <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property Rights</h2>
              <p>Other than the content you own, under these Terms, {ObjectConfig.name} and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>
           </section>

           <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Restrictions</h2>
              <p>You are specifically restricted from all of the following:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                 <li>Publishing any Website material in any other media.</li>
                 <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
                 <li>Publicly performing and/or showing any Website material.</li>
                 <li>Using this Website in any way that is or may be damaging to this Website.</li>
                 <li>Using this Website in any way that impacts user access to this Website.</li>
              </ul>
           </section>
        </div>
      </div>
    </div>
  );
}
