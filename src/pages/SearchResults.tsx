import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchTrains, Train } from "@/services/trainService";
import TrainCard from "@/components/TrainCard";
import Loader from "@/components/Loader";
import { useAuth } from "@/contexts/AuthContext";
import { AlertTriangle } from "lucide-react";

const SearchResults = () => {
  const [params] = useSearchParams();
  const [trains, setTrains] = useState<Train[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  const source = params.get("source") || "";
  const destination = params.get("destination") || "";
  const date = params.get("date") || "";

  useEffect(() => {
    setLoading(true);
    searchTrains(source, destination)
      .then(setTrains)
      .finally(() => setLoading(false));
  }, [source, destination]);

  const handleBook = (train: Train) => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate("/passenger-details", { state: { train, date } });
  };

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto max-w-4xl animate-fade-in px-4 py-10">
      <h1 className="mb-2 text-2xl font-bold">
        {source} → {destination}
      </h1>
      <p className="mb-6 text-sm text-muted-foreground">Travel date: {date}</p>

      {trains.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-20 text-center">
          <AlertTriangle className="h-10 w-10 text-warning" />
          <p className="text-lg font-semibold">No trains found</p>
          <p className="text-sm text-muted-foreground">Try a different route or date.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {trains.map((t) => (
            <TrainCard key={t.id} train={t} onBook={handleBook} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
