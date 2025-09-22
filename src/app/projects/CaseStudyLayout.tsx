"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function CaseStudyLayout({ title, subtitle, children }: Props) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="bg-blue-600 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg opacity-90">{subtitle}</p>
      </div>

      {/* Breadcrumbs + Back */}
      <div className="max-w-5xl mx-auto px-6 mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/#projects" className="hover:underline">
            Projects
          </Link>{" "}
          / <span className="text-gray-700 font-medium">{title}</span>
        </div>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 rounded-lg bg-gray-200 text-sm font-medium hover:bg-gray-300"
        >
          ← Back
        </button>
      </div>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-12 bg-white shadow rounded-xl mt-6">
        {children}
      </section>
    </div>
  );
}
