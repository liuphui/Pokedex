import Pokeball from "./Pokeball";

export default function PokeballBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div className="absolute left-[10%] top-[15%] opacity-20 animate-drift">
        <Pokeball />
      </div>
      <div className="absolute right-[15%] bottom-[10%] opacity-20 animate-drift">
        <Pokeball />
      </div>
      <div className="absolute left-[10%] bottom-[10%] opacity-20 animate-drift">
        <Pokeball />
      </div>
      <div className="absolute right-[15%] top-[15%] opacity-20 animate-drift">
        <Pokeball />
      </div>
    </div>
  );
}
