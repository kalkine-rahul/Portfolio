import { NextApiRequest, NextApiResponse } from "next";

const news = [
  {
    id: 1,
    title: "Sensex Gains 300 Points Amid Market Rally",
    description: "Indian stock markets saw a positive uptrend today...",
    image: "https://via.placeholder.com/400x250.png?text=Sensex",
    category: "Stocks",
  },
  {
    id: 2,
    title: "Tech Giants Report Record Profits",
    description: "Major technology companies reported Q2 results...",
    image: "https://via.placeholder.com/400x250.png?text=Tech",
    category: "Technology",
  },
  {
    id: 3,
    title: "RBI Policy Update Sparks Market Optimism",
    description: "The Reserve Bank of India announced new measures...",
    image: "https://via.placeholder.com/400x250.png?text=Economy",
    category: "Economy",
  },
  // Add more news here...
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(news);
}
