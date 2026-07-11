import Image from "next/image";

export function AppMockup() {
  return (
    <div className="w-full max-w-245 mx-auto bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
      </div>
      <Image
        src="/images/hero.png"
        alt="App screenshot"
        width={980}
        height={600}
        className="w-full h-auto"
      />
    </div>
  );
}
