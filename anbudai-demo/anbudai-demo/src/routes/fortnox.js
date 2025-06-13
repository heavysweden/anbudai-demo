
import { Router } from "express";
export const fortnox = Router();

/**
 * GET /fortnox/sync
 * Demo‑endpoint som returnerar dummy‑fakturor.
 */
fortnox.get("/sync", (_req, res) => {
  res.json({
    syncedAt: new Date().toISOString(),
    invoices: [
      { invoiceNo: 1001, amount: 12500, customer: "Acme AB" },
      { invoiceNo: 1002, amount: 8900,  customer: "Beta Oy" }
    ]
  });
});
