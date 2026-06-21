"use client";

import { jobs } from "@/content/jobs";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function CareersPage() {
  const [filter, setFilter] = useState("All");
  
  const departments = ["All", ...Array.from(new Set(jobs.map((job) => job.department)))];
  
  const filteredJobs = filter === "All" ? jobs : jobs.filter(j => j.department === filter);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-indigo-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">Join Our Global Team</h1>
          <p className="text-xl max-w-3xl mx-auto text-indigo-100">
            Work with top talent, cutting-edge technologies, and enterprise clients all over the world. Build a career that matters.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
         <div className="flex justify-center flex-wrap gap-4 mb-12">
            {departments.map(dep => (
               <button 
                 key={dep}
                 onClick={() => setFilter(dep)}
                 className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === dep ? 'bg-indigo-700 text-white' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'}`}
               >
                 {dep}
               </button>
            ))}
         </div>

         <div className="grid gap-6">
            {filteredJobs.map(job => (
               <div key={job.id} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                     <h2 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h2>
                     <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-md"><Briefcase className="w-4 h-4" /> {job.department}</span>
                        <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-md"><MapPin className="w-4 h-4" /> {job.location}</span>
                        <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-md"><Clock className="w-4 h-4" /> {job.employmentType} ({job.experience})</span>
                     </div>
                     <p className="text-gray-700 max-w-3xl">{job.description}</p>
                  </div>
                  <div className="shrink-0 flex flex-col gap-3">
                     <Button className="w-full sm:w-auto px-8" size="lg">Apply Now</Button>
                     <Button variant="outline" className="w-full sm:w-auto" size="lg">View Details</Button>
                  </div>
               </div>
            ))}
            
            {filteredJobs.length === 0 && (
               <div className="text-center py-12 text-gray-500">
                  No open positions found in this department currently.
               </div>
            )}
         </div>
      </div>
    </div>
  );
}
