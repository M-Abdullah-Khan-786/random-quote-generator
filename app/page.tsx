"use client";

import { useState } from "react";
import QuoteDisplay from "./components/QuoteDisplay";
import { Button } from "./components/ui/Button";

const quotes = [
  "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don’t let yesterday take up too much of today. - Will Rogers",
  "Everything you’ve ever wanted is on the other side of fear. - George Addair",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Success is how high you bounce when you hit bottom. - George S. Patton",
  "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. - William James",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
];

export default function Home() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <QuoteDisplay quote={quote} />
      <Button onClick={getRandomQuote} className="mt-4">
        Generate Quote
      </Button>
    </div>
  );
}
