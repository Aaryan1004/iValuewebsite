import { ObjectConfig } from "@/content/siteConfig";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-indigo max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-8">Privacy Policy</h1>
        
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-gray-700">
           <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>Welcome to {ObjectConfig.name}. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
           </section>

           <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                 <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                 <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                 <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                 <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>
           </section>

           <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                 <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                 <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                 <li>Where we need to comply with a legal obligation.</li>
              </ul>
           </section>

           <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at <Link href="/contact" className="text-indigo-600 font-medium hover:underline">our contact page</Link>.</p>
           </section>
        </div>
      </div>
    </div>
  );
}
