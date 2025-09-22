import CaseStudyLayout from "../CaseStudyLayout";

export default function UIComponentsCaseStudy() {
  return (
    <CaseStudyLayout
      title="UI Components Library"
      subtitle="Reusable design system built from Figma"
    >
      <p className="text-gray-700 mb-4">
        Built a library of reusable UI components (Footer, Forms, Carousel, 
        Header with Megamenu) based on Figma designs and implemented in 
        Next.js for consistency and scalability.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Components Built</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Header with Megamenu</li>
        <li>Carousel & Hero Banners</li>
        <li>Responsive Forms with Validation</li>
        <li>Footer with Social Links</li>
      </ul>
    </CaseStudyLayout>
  );
}
