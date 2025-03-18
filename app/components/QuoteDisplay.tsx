interface QuoteDisplayProps {
    quote: string;
  }
  
  export default function QuoteDisplay({ quote }: QuoteDisplayProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <p className="text-lg font-semibold">{quote}</p>
      </div>
    );
  }