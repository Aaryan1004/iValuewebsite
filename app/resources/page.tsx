export default function ResourcesPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center pt-32 px-4">
       <h1 className="text-4xl font-bold text-gray-900 mb-6">Resources & Insights</h1>
       <p className="text-lg text-gray-600 text-center max-w-2xl">
         Explore our guides, industry reports, and technical blogs to stay ahead in the digital era.
       </p>
       <div className="mt-16 w-full max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
             <div key={i} className="animate-pulse bg-gray-100 rounded-2xl h-80"></div>
          ))}
       </div>
    </div>
  )
}
