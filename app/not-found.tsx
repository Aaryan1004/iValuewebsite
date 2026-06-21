import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 text-center">
       <h1 className="text-9xl font-extrabold text-indigo-700 mb-4">404</h1>
       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Page not found</h2>
       <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
       </p>
       <Link href="/">
          <Button size="lg" className="bg-indigo-700 text-white hover:bg-indigo-800">
             Return Home
          </Button>
       </Link>
    </div>
  );
}
