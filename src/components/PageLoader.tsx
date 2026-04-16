import { useEffect, useState } from "react";

const PageLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 60 ? 3 : prev < 90 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setPhase("revealing"), 300);
      setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 1200);
    }
  }, [progress, onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary transition-all duration-700 ${
        phase === "revealing" ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      <div className="relative mb-8">
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary-foreground tracking-tight">
          MÒREMI<span className="text-secondary">.</span>
        </h1>
        <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mt-2 text-center">
          Techstars Foundation
        </p>
      </div>

      <div className="w-48 h-[2px] bg-primary-foreground/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-secondary rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="text-primary-foreground/40 text-xs mt-4 tabular-nums">
        {progress}%
      </span>
    </div>
  );
};

export default PageLoader;
