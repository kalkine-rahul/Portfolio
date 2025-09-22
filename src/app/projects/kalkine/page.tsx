import CaseStudyLayout from "../CaseStudyLayout";

export default function KalkineCaseStudy() {
  return (
    <CaseStudyLayout
      title="Kalkine Stock Market Platform"
      subtitle="Global multi-country stock analysis & insights"
    >
      <p className="text-gray-700 mb-4">
        Kalkine offers expert stock market analysis and insights into the Indian markets, 
        focusing on Sensex, Nifty 50, and major trends affecting NSE & BSE stocks. 
        It also covers US, UK, Canada, Australia, and New Zealand markets.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Tech Stack</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Next.js, Tailwind CSS, Bootstrap</li>
        <li>Node.js, Express, REST APIs</li>
        <li>MySQL & MongoDB for data storage</li>
      </ul>
    </CaseStudyLayout>
  );
}
