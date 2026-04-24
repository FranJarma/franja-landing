import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Image
        src="/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[75%_center] md:object-right"
      />
      <div className="absolute inset-0 bg-[#0B0B0B]/74 md:bg-[#0B0B0B]/68" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/98 via-30% to-transparent md:w-[72%] md:via-[#0B0B0B]/90" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
    </div>
  );
}
