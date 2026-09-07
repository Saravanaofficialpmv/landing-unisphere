import { NoiseBackground } from "@/components/ui/noise-background";

export default function NoiseBackgroundDemo() {
  return (
    <div className="flex justify-center">
      <NoiseBackground
        containerClassName="w-fit p-2 rounded-full mx-auto"
        gradientColors={[
          "rgb(255, 100, 150)",
          "rgb(100, 150, 255)",
          "rgb(255, 200, 100)",
        ]}
      >
        <button className="h-full w-full cursor-pointer rounded-full bg-gradient-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_rgba(255,255,255,0.8)_inset,0px_0.5px_1px_0px_rgba(0,0,0,0.2)] transition-all duration-100 active:scale-98">
          Start publishing &rarr;
        </button>
      </NoiseBackground>
    </div>
  );
}
