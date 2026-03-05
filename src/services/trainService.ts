import {
  getCollection,
  addDocument,
  updateDocument,
  deleteDocument,
  queryCollection,
} from "@/firebase/firestore";

export interface Train {
  id: string;
  trainNumber: string;
  trainName: string;
  source: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  fare: number;
  totalSeats: number;
  seatsAvailable: number;
}

export const getAllTrains = () => getCollection("trains") as Promise<Train[]>;

export const searchTrains = async (source: string, destination: string) =>
  queryCollection("trains", "source", "==", source).then((trains) =>
    trains.filter((t: any) => t.destination === destination)
  ) as Promise<Train[]>;

export const addTrain = (data: Omit<Train, "id">) =>
  addDocument("trains", data as Record<string, unknown>);

export const updateTrain = (id: string, data: Partial<Train>) =>
  updateDocument("trains", id, data as Record<string, unknown>);

export const deleteTrain = (id: string) => deleteDocument("trains", id);
