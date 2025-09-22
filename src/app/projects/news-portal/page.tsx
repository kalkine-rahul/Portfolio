"use client";

import { useEffect, useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ✅ Mock News Data (replace with API later)
  useEffect(() => {
    const demoNews: NewsItem[] = [
      {
        id: 1,
        title: "Sensex Surges 500 Points",
        description: "Indian markets rally as global cues remain positive...",
        image: "https://source.unsplash.com/400x250/?stock,market",
        category: "Stocks",
      },
      {
        id: 2,
        title: "RBI Keeps Repo Rate Unchanged",
        description: "Reserve Bank of India maintains interest rates steady...",
        image: "https://source.unsplash.com/400x250/?finance,economy",
        category: "Economy",
      },
      {
        id: 3,
        title: "Tech Giants Lead Nasdaq Higher",
        description: "US markets rebound as tech sector shows strength...",
        image: "https://source.unsplash.com/400x250/?technology,stocks",
        category: "Technology",
      },
      {
        id: 4,
        title: "Gold Prices Decline",
        description: "Gold prices fall amid strengthening dollar index...",
        image: "https://source.unsplash.com/400x250/?gold,investment",
        category: "Economy",
      },
      {
        id: 5,
        title: "Nifty at Record High",
        description: "Nifty 50 touches all-time high on strong earnings...",
        image: "https://source.unsplash.com/400x250/?business,india",
        category: "Stocks",
      },
      {
        id: 6,
        title: "AI Disrupting Financial Sector",
        description: "Artificial Intelligence driving innovation in trading...",
        image: "https://source.unsplash.com/400x250/?ai,finance",
        category: "Technology",
      },
    ];
    setNews(demoNews);
  }, []);

  const filteredNews =
    category === "All" ? news : news.filter((item) => item.category === category);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="news" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Latest <span className="text-green-500">Market News</span>
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {["All", "Stocks", "Economy", "Technology"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition 
                ${
                  category === cat
                    ? "bg-green-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700"
                }`}
              onClick={() => {
                setCategory(cat);
                setCurrentPage(1);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedNews.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold mt-3 mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg border transition 
                ${
                  currentPage === i + 1
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-700"
                }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
