import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { createBooking } from "@/services/bookingService";
import { Train } from "@/services/trainService";
import { CreditCard, Loader2 } from "lucide-react";

interface Passenger {
  name: string;
  age: number;
  gender: string;
}

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { train, date, passenger } = (location.state as {
    train: Train;
    date: string;
    passenger: Passenger;
  }) || {};

  const [processing, setProcessing] = useState(false);

  if (!train || !passenger || !user) {
    navigate("/");
    return null;
  }

  const handlePay = async () => {
    setProcessing(true);
    try {
      const result = await createBooking(
        user.uid,
        train.id,
        train.trainNumber,
        train.trainName,
        passenger.name,
        passenger.age,
        passenger.gender,
        date,
        train.fare
      );
      navigate("/ticket", {
        state: {
          ...result,
          train,
          date,
          passenger,
        },
      });
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="container mx-auto max-w-lg animate-fade-in px-4 py-10">
      <div className="card-shadow rounded-2xl border bg-card p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-2">
            <CreditCard className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-xl font-bold">Payment</h1>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between border-b pb-3">
            <span className="text-muted-foreground">Train</span>
            <span className="font-medium">{train.trainName}</span>
          </div>
          <div className="flex justify-between border-b pb-3">
            <span className="text-muted-foreground">Route</span>
            <span className="font-medium">{train.source} → {train.destination}</span>
          </div>
          <div className="flex justify-between border-b pb-3">
            <span className="text-muted-foreground">Passenger</span>
            <span className="font-medium">{passenger.name}</span>
          </div>
          <div className="flex justify-between border-b pb-3">
            <span className="text-muted-foreground">Date</span>
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex justify-between pt-2 text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">₹{train.fare}</span>
          </div>
        </div>

        <button
          onClick={handlePay}
          disabled={processing}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
        >
          {processing ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <CreditCard className="h-4 w-4" />
              Pay ₹{train.fare}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Payment;
