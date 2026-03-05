import { useLocation, useNavigate } from "react-router-dom";
import { Train } from "@/services/trainService";
import { CheckCircle, Download, ArrowRight } from "lucide-react";

const TicketPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as {
    PNR: string;
    coach: string;
    seatNumber: number;
    train: Train;
    date: string;
    passenger: { name: string; age: number; gender: string };
  } | null;

  if (!state) {
    navigate("/");
    return null;
  }

  const { PNR, coach, seatNumber, train, date, passenger } = state;

  const handleDownload = () => {
    const text = `
===== RAILBOOK E-TICKET =====
PNR: ${PNR}
Train: ${train.trainName} (#${train.trainNumber})
Route: ${train.source} → ${train.destination}
Date: ${date}
Departure: ${train.departureTime}
Arrival: ${train.arrivalTime}
Passenger: ${passenger.name}
Age: ${passenger.age} | Gender: ${passenger.gender}
Coach: ${coach} | Seat: ${seatNumber}
Status: CONFIRMED
=============================
    `.trim();
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ticket-${PNR}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto max-w-lg animate-fade-in px-4 py-10">
      <div className="card-shadow rounded-2xl border bg-card overflow-hidden">
        {/* Success header */}
        <div className="hero-gradient p-6 text-center text-primary-foreground">
          <CheckCircle className="mx-auto h-12 w-12" />
          <h1 className="mt-3 text-xl font-bold">Booking Confirmed!</h1>
          <p className="mt-1 text-sm opacity-90">Your e-ticket is ready</p>
        </div>

        <div className="p-6 space-y-4">
          <div className="rounded-xl border-2 border-dashed border-primary/30 p-4 text-center">
            <p className="text-xs text-muted-foreground">PNR Number</p>
            <p className="text-2xl font-extrabold tracking-widest text-primary">{PNR}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><p className="text-xs text-muted-foreground">Train</p><p className="font-medium">{train.trainName}</p></div>
            <div><p className="text-xs text-muted-foreground">Number</p><p className="font-medium">#{train.trainNumber}</p></div>
            <div><p className="text-xs text-muted-foreground">From</p><p className="font-medium">{train.source} ({train.departureTime})</p></div>
            <div><p className="text-xs text-muted-foreground">To</p><p className="font-medium">{train.destination} ({train.arrivalTime})</p></div>
            <div><p className="text-xs text-muted-foreground">Date</p><p className="font-medium">{date}</p></div>
            <div><p className="text-xs text-muted-foreground">Passenger</p><p className="font-medium">{passenger.name}</p></div>
            <div><p className="text-xs text-muted-foreground">Coach / Seat</p><p className="font-medium">{coach}-{seatNumber}</p></div>
            <div><p className="text-xs text-muted-foreground">Fare</p><p className="font-medium">₹{train.fare}</p></div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleDownload}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border bg-background px-4 py-2.5 text-sm font-medium transition hover:bg-secondary"
            >
              <Download className="h-4 w-4" /> Download
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              My Bookings <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
