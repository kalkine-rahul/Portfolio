import CaseStudyLayout from "../CaseStudyLayout";

export default function EmailTemplatesCaseStudy() {
  return (
    <CaseStudyLayout
      title="Email Templates"
      subtitle="Responsive reusable templates for campaigns"
    >
      <p className="text-gray-700 mb-4">
        Designed and implemented responsive, reusable email templates 
        ensuring consistent branding across marketing and customer 
        communications. Built designs in Figma, then converted into HTML 
        for real-world campaigns.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Use Cases</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Marketing Campaigns: Newsletters, product launches</li>
        <li>Customer Communications: Welcome emails, updates</li>
        <li>Internal Announcements</li>
        <li>Automated Workflows: Trigger-based messaging</li>
      </ul>
    </CaseStudyLayout>
  );
}
