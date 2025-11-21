import type { ReportItem } from "../models";

const API_URL = import.meta.env.VITE_API_URL;

export async function getReports() : Promise<ReportItem[]> {

  const res = await fetch(`${API_URL}/api/reports`);

  if (!res.ok) {
    throw new Error("Failed to Fetch Reports");
  }

  const reports = await res.json();

  return reports.map((r: ReportItem) => ({
		...r,
		date: new Date(r.date)
	}));
}