interface PokballProps {
  className?: string;
}

export default function Pokeball({ className = "" }: PokballProps) {
  return (
    <div className={`relative h-44 w-44 rounded-full animate-float ${className}`}>
      <div className="absolute inset-0 rounded-full animate-slowspin">
        {/* Pokeball */}
        <div className="absolute inset-0 rounded-full bg-white"></div>
        <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-full bg-red-600"></div>

        <div className="absolute left-0 right-0 top-1/2 h-3 -translate-y-1/2 bg-slate-900"></div>

        <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 shadow-[0_0_0_6px_rgba(15,23,42,0.9)]"></div>
        <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
      </div>
    </div>
  );
}
