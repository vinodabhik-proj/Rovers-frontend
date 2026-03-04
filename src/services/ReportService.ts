import type { ReportItem } from "../models";
import getApiUrl from "../hooks/apiUrl";

export async function getReports() : Promise<ReportItem[]> {
  const API_URL = getApiUrl();

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