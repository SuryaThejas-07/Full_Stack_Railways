import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, Search, ArrowRight } from "lucide-react";
import { getAllStations, Station } from "@/services/stationService";

const SearchForm = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [stations, setStations] = useState<Station[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllStations().then(setStations);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!source || !destination || !date) return;
    navigate(`/search?source=${source}&destination=${destination}&date=${date}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="card-shadow rounded-2xl bg-card p-6"
    >
      <div className="grid gap-4 md:grid-cols-4">
        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> From
          </label>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-full rounded-lg border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Select source</option>
            {stations.map((s) => (
              <option key={s.id} value={s.stationCode}>
                {s.stationName} ({s.stationCode})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> To
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full rounded-lg border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Select destination</option>
            {stations.map((s) => (
              <option key={s.id} value={s.stationCode}>
                {s.stationName} ({s.stationCode})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" /> Travel Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            <Search className="h-4 w-4" />
            Search Trains
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
