import { ObjectConfig } from "@/content/siteConfig";

export default function FAQPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center border-b border-gray-200 pb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">How does your staff augmentation process work?</h2>
            <p className="text-gray-600">We begin by understanding your technical requirements and team culture. We then handpick candidates from our vetted pool of top 1% global engineering talent. You interview and select the best fit, and we handle the HR, payroll, and onboarding.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What tech stacks do you specialize in?</h2>
            <p className="text-gray-600">We provide experts in modern web and mobile frameworks (React, Next.js, Angular, React Native), backend technologies (Node.js, Python, Java, .NET), cloud platforms (AWS, Azure, GCP), data engineering, and AI/ML.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Do you provide project-based development?</h2>
            <p className="text-gray-600">Yes, in addition to staff augmentation, we offer end-to-end software development services. We can take your project from the requirements gathering phase all the way to deployment and managed support.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Where are your developers located?</h2>
            <p className="text-gray-600">{ObjectConfig.name} operates global delivery centers and remote teams across 3+ continents, ensuring we can provide talent that overlaps with your time zone for seamless communication.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
