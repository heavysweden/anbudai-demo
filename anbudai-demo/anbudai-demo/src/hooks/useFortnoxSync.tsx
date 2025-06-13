
import { useQuery } from "@tanstack/react-query";

export function useFortnoxSync() {
  return useQuery({
    queryKey: ["fortnox", "sync"],
    queryFn: () =>
      fetch("/api/fortnox/sync").then((r) => {
        if (!r.ok) throw new Error("Sync failed");
        return r.json() as Promise<{
          syncedAt: string;
          invoices: { invoiceNo: number; amount: number; customer: string }[];
        }>;
      }),
    staleTime: 60_000 // 1 min
  });
}
