export interface PurchaseLot {
  id: string;

  purchaseInvoiceId: string;

  lotNumber: string;

  fishName?: string;

  weightKg?: number;

  ratePerKg?: number;

  totalAmount?: number;

  status:
    | "available"
    | "sold"
    | "archived";

  soldAt?: string;

  saleInvoiceId?: string;

  notes?: string;

  createdAt: string;

  updatedAt: string;

  archived: boolean;

  deleted: boolean;
}
