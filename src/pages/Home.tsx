import SearchForm from "@/components/SearchForm";
import { Train, Shield, Clock, CreditCard } from "lucide-react";

const features = [
  { icon: Train, title: "500+ Trains", desc: "Extensive network across the country" },
  { icon: Shield, title: "Secure Booking", desc: "Your data is always protected" },
  { icon: Clock, title: "Instant Confirmation", desc: "Get your e-ticket in seconds" },
  { icon: CreditCard, title: "Easy Payments", desc: "Multiple payment options" },
];

const RunningTrain = () => (
  <div className="relative mt-8 h-20 overflow-hidden">
    {/* Track */}
    <div className="absolute bottom-4 left-0 right-0 h-[2px] bg-primary-foreground/30" />
    <div className="absolute bottom-[14px] left-0 right-0 flex gap-8">
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="h-[2px] w-4 bg-primary-foreground/20" style={{ marginLeft: i === 0 ? 0 : undefined }} />
      ))}
    </div>

    {/* Train */}
    <div className="train-running absolute bottom-5">
      <svg width="180" height="50" viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Engine */}
        <rect x="0" y="10" width="50" height="30" rx="4" fill="currentColor" className="text-primary-foreground/90" />
        <rect x="5" y="15" width="15" height="12" rx="2" fill="currentColor" className="text-primary/60" />
        <polygon points="50,15 65,10 65,40 50,40" fill="currentColor" className="text-primary-foreground" />
        {/* Chimney */}
        <rect x="10" y="2" width="8" height="10" rx="2" fill="currentColor" className="text-primary-foreground/80" />
        {/* Smoke puffs */}
        <circle cx="14" cy="0" r="4" fill="currentColor" className="text-primary-foreground/30 animate-pulse" />
        <circle cx="6" cy="-4" r="3" fill="currentColor" className="text-primary-foreground/20 animate-pulse" style={{ animationDelay: "0.3s" }} />
        {/* Car 1 */}
        <rect x="68" y="12" width="45" height="28" rx="3" fill="currentColor" className="text-primary-foreground/80" />
        <rect x="73" y="17" width="10" height="10" rx="1" fill="currentColor" className="text-primary/50" />
        <rect x="86" y="17" width="10" height="10" rx="1" fill="currentColor" className="text-primary/50" />
        <rect x="99" y="17" width="10" height="10" rx="1" fill="currentColor" className="text-primary/50" />
        {/* Car 2 */}
        <rect x="116" y="12" width="45" height="28" rx="3" fill="currentColor" className="text-primary-foreground/70" />
        <rect x="121" y="17" width="10" height="10" rx="1" fill="currentColor" className="text-primary/50" />
        <rect x="134" y="17" width="10" height="10" rx="1" fill="currentColor" className="text-primary/50" />
        <rect x="147" y="17" width="10" height="10" rx="1" fill="currentColor" className="text-primary/50" />
        {/* Wheels */}
        <circle cx="15" cy="42" r="5" fill="currentColor" className="text-primary-foreground" />
        <circle cx="38" cy="42" r="5" fill="currentColor" className="text-primary-foreground" />
        <circle cx="80" cy="42" r="5" fill="currentColor" className="text-primary-foreground" />
        <circle cx="100" cy="42" r="5" fill="currentColor" className="text-primary-foreground" />
        <circle cx="128" cy="42" r="5" fill="currentColor" className="text-primary-foreground" />
        <circle cx="148" cy="42" r="5" fill="currentColor" className="text-primary-foreground" />
      </svg>
    </div>
  </div>
);

const Home = () => (
  <div className="animate-fade-in">
    {/* Hero */}
    <section className="hero-gradient px-4 py-20 text-center text-primary-foreground overflow-hidden">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
          Book Your Train Journey
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Fast, reliable, and hassle-free train ticket booking
        </p>
        <RunningTrain />
      </div>
    </section>

    {/* Search */}
    <section className="container mx-auto -mt-10 max-w-4xl px-4">
      <SearchForm />
    </section>

    {/* Features */}
    <section className="container mx-auto max-w-5xl px-4 py-20">
      <h2 className="mb-10 text-center text-2xl font-bold">Why RailBook?</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="card-shadow rounded-xl border bg-card p-6 text-center transition-all hover:card-shadow-hover"
          >
            <div className="mx-auto mb-3 w-fit rounded-xl bg-primary/10 p-3">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="hero-gradient px-4 py-16 text-center text-primary-foreground">
      <h2 className="text-2xl font-bold md:text-3xl">Ready to travel?</h2>
      <p className="mt-2 opacity-90">Join thousands of happy travelers today.</p>
    </section>
  </div>
);

export default Home;
