import { useEffect, useState } from "react";
import { getAllTrains, addTrain, updateTrain, deleteTrain, Train } from "@/services/trainService";
import { getAllBookings, Booking } from "@/services/bookingService";
import Loader from "@/components/Loader";
import { Plus, Pencil, Trash2, X, TicketCheck } from "lucide-react";

const emptyTrain = {
  trainNumber: "",
  trainName: "",
  source: "",
  destination: "",
  departureTime: "",
  arrivalTime: "",
  fare: 0,
  totalSeats: 0,
  seatsAvailable: 0,
};

const Admin = () => {
  const [trains, setTrains] = useState<Train[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"trains" | "bookings">("trains");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Train | null>(null);
  const [form, setForm] = useState(emptyTrain);

  const loadData = () => {
    setLoading(true);
    Promise.all([getAllTrains(), getAllBookings()])
      .then(([t, b]) => {
        setTrains(t);
        setBookings(b);
      })
      .finally(() => setLoading(false));
  };

  useEffect(loadData, []);

  const handleSave = async () => {
    if (editing) {
      await updateTrain(editing.id, form);
    } else {
      await addTrain({ ...form, seatsAvailable: form.totalSeats });
    }
    setShowForm(false);
    setEditing(null);
    setForm(emptyTrain);
    loadData();
  };

  const handleEdit = (t: Train) => {
    setEditing(t);
    setForm({
      trainNumber: t.trainNumber,
      trainName: t.trainName,
      source: t.source,
      destination: t.destination,
      departureTime: t.departureTime,
      arrivalTime: t.arrivalTime,
      fare: t.fare,
      totalSeats: t.totalSeats,
      seatsAvailable: t.seatsAvailable,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this train?")) return;
    await deleteTrain(id);
    loadData();
  };

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto max-w-5xl animate-fade-in px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold">Admin Panel</h1>

      {/* Tabs */}
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setTab("trains")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${tab === "trains" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
        >
          Trains
        </button>
        <button
          onClick={() => setTab("bookings")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${tab === "bookings" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
        >
          Bookings
        </button>
      </div>

      {tab === "trains" && (
        <>
          <button
            onClick={() => { setShowForm(true); setEditing(null); setForm(emptyTrain); }}
            className="mb-4 flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            <Plus className="h-4 w-4" /> Add Train
          </button>

          {showForm && (
            <div className="card-shadow mb-6 rounded-xl border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-bold">{editing ? "Edit Train" : "Add Train"}</h2>
                <button onClick={() => setShowForm(false)}><X className="h-4 w-4" /></button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {(["trainNumber", "trainName", "source", "destination", "departureTime", "arrivalTime"] as const).map((k) => (
                  <div key={k} className="space-y-1">
                    <label className="text-xs font-medium capitalize text-muted-foreground">{k.replace(/([A-Z])/g, " $1")}</label>
                    <input
                      value={form[k]}
                      onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                ))}
                {(["fare", "totalSeats"] as const).map((k) => (
                  <div key={k} className="space-y-1">
                    <label className="text-xs font-medium capitalize text-muted-foreground">{k.replace(/([A-Z])/g, " $1")}</label>
                    <input
                      type="number"
                      value={form[k]}
                      onChange={(e) => setForm({ ...form, [k]: Number(e.target.value) })}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                ))}
              </div>
              <button onClick={handleSave} className="mt-4 rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
                {editing ? "Update" : "Add"} Train
              </button>
            </div>
          )}

          <div className="space-y-3">
            {trains.map((t) => (
              <div key={t.id} className="flex items-center justify-between rounded-xl border bg-card p-4">
                <div>
                  <p className="font-bold">{t.trainName} <span className="text-xs text-muted-foreground">#{t.trainNumber}</span></p>
                  <p className="text-sm text-muted-foreground">{t.source} → {t.destination} • ₹{t.fare} • {t.seatsAvailable}/{t.totalSeats} seats</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(t)} className="rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"><Pencil className="h-4 w-4" /></button>
                  <button onClick={() => handleDelete(t.id)} className="rounded-lg p-2 text-destructive hover:bg-destructive/10"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === "bookings" && (
        <div className="space-y-3">
          {bookings.length === 0 ? (
            <p className="py-10 text-center text-muted-foreground">No bookings yet.</p>
          ) : (
            bookings.map((b) => (
              <div key={b.id} className="flex items-center justify-between rounded-xl border bg-card p-4">
                <div className="flex items-center gap-3">
                  <TicketCheck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{b.passengerName} <span className="text-xs text-muted-foreground">PNR: {b.PNR}</span></p>
                    <p className="text-sm text-muted-foreground">Train: {b.trainNumber} • {b.travelDate} • {b.coach}-{b.seatNumber}</p>
                  </div>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${b.bookingStatus === "confirmed" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                  {b.bookingStatus}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
