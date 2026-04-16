const stats = [
  "2500+ Girls Trained",
  "150+ Events",
  "80+ Mentors",
  "12 Programs",
];

const ScrollingBanner = () => {
  const repeated = [...stats, ...stats, ...stats, ...stats];

  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="animate-scroll-x flex whitespace-nowrap gap-8">
        {repeated.map((stat, i) => (
          <span key={i} className="text-primary-foreground/90 text-sm font-medium flex items-center gap-3">
            <span className="text-secondary">✦</span>
            {stat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
