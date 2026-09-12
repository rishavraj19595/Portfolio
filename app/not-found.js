import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] flex items-center justify-center px-4">
      <div className="max-w-md w-full glass-card p-8 rounded-2xl border border-[#3F1111] text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-950/60 border border-[#3F1111] text-red-500 font-mono text-2xl font-bold">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#8A8A8A] leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-800 to-red-600 text-white font-semibold text-sm shadow-lg shadow-red-900/30 hover:scale-[1.02] transition-all"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
