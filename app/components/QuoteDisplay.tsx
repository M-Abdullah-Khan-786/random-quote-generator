interface QuoteDisplayProps {
  quote: string;
}

export default function QuoteDisplay({ quote }: QuoteDisplayProps) {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-8 rounded-2xl shadow-lg max-w-md text-center text-white border-2 border-white">
      <p className="text-2xl font-extrabold italic drop-shadow-lg">{quote}</p>
    </div>
  );
}