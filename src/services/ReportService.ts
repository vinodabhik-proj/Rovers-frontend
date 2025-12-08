import type { ReportItem } from "../models";

function getApiUrl() {
  try {
    // Vite
    return (import.meta as any)?.env?.VITE_API_URL;
  } catch {
    // Jest / Node / fallback
    return (globalThis as any).importMetaEnv?.VITE_API_URL;
  }
}

const API_URL = getApiUrl();


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