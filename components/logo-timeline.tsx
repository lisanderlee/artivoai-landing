import { clsx } from "clsx";
import { Mark } from "./logo";
import IsoLogo from "@/public/iso_artivo.svg";
import Image from "next/image";
function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative">
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r from-white/15 from-[2px] to-[2px] bg-size-[12px_100%]" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-white/5 from-[2px] to-[2px] bg-size-[12px_100%] group-last:hidden" />
      {children}
    </div>
  );
}

function Logo({
  label,
  src,
  className,
}: {
  label: string;
  src: string;
  className: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap",
        "rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset",
        "[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]"
      )}
    >
      <img alt="" src={src} className="size-4" />
      <span className="text-sm/6 font-medium text-white">{label}</span>
    </div>
  );
}

export function LogoTimeline() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <div className="absolute inset-0 top-8 z-10 flex items-center justify-center">
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            maskImage: `url('data:image/svg+xml,<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="12" fill="black"/></svg>')`,
            maskPosition: "center",
            maskRepeat: "no-repeat",
          }}
        />
        <div className="relative flex size-24 items-center justify-center rounded-xl bg-linear-to-t from-white/5 to-white/25 shadow-sm ring-1 ring-white/10 outline outline-offset-[-5px] outline-white/5 ring-inset">
          <Image src={IsoLogo} alt="Artivo Logo" className="w-13 h-13" />
        </div>
      </div>
      <div className="@container absolute inset-0 grid grid-cols-1 pt-8">
        <Row>
          <Logo
            label="Flux"
            src="/models-icons/Flux.png"
            className="[animation-delay:-26s] [animation-duration:30s]"
          />
          <Logo
            label="Luma Ray 2"
            src="/models-icons/Luma.png"
            className="[animation-delay:-8s] [animation-duration:30s]"
          />
        </Row>
        <Row>
          <Logo
            label="Flux 1.1 Pro"
            src="/models-icons/Flux.png"
            className="[animation-delay:-40s] [animation-duration:40s]"
          />
          <Logo
            label="Ideogram V2.0"
            src="/models-icons/Ideogram.png"
            className="[animation-delay:-20s] [animation-duration:40s]"
          />
        </Row>
        <Row>
          <Logo
            label="Kling 2.0"
            src="/models-icons/Kling.png"
            className="[animation-delay:-10s] [animation-duration:40s]"
          />
          <Logo
            label="Imagen 4"
            src="/models-icons/Kling.png"
            className="[animation-delay:-32s] [animation-duration:40s]"
          />
        </Row>
        <Row>
          <Logo
            label="OpenAi"
            src="/models-icons/OpenAi.png"
            className="[animation-delay:-45s] [animation-duration:45s]"
          />
          <Logo
            label="Luma Ray 2"
            src="/models-icons/Luma.png"
            className="[animation-delay:-23s] [animation-duration:45s]"
          />
        </Row>
        <Row>
          <Logo
            label="Flux 1.1 Pro"
            src="/models-icons/Flux.png"
            className="[animation-delay:-55s] [animation-duration:60s]"
          />
          <Logo
            label="Ideogram V2.0"
            src="/models-icons/Ideogram.png"
            className="[animation-delay:-20s] [animation-duration:60s]"
          />
        </Row>
        <Row>
          <Logo
            label="Kling 2.0"
            src="/models-icons/Kling.png"
            className="[animation-delay:-9s] [animation-duration:40s]"
          />
          <Logo
            label="Imagen 4"
            src="/models-icons/Kling.png"
            className="[animation-delay:-28s] [animation-duration:40s]"
          />
        </Row>
      </div>
    </div>
  );
}
