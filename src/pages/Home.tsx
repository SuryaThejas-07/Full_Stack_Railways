import SearchForm from "@/components/SearchForm";
import { Train, Shield, Clock, CreditCard } from "lucide-react";

const features = [
  { icon: Train, title: "500+ Trains", desc: "Extensive network across the country" },
  { icon: Shield, title: "Secure Booking", desc: "Your data is always protected" },
  { icon: Clock, title: "Instant Confirmation", desc: "Get your e-ticket in seconds" },
  { icon: CreditCard, title: "Easy Payments", desc: "Multiple payment options" },
];

const Home = () => (
  <div className="animate-fade-in">
    {/* Hero */}
    <section className="hero-gradient px-4 py-20 text-center text-primary-foreground">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
          Book Your Train Journey
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Fast, reliable, and hassle-free train ticket booking
        </p>
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
