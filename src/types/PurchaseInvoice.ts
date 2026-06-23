export interface PurchaseInvoice {
  id: string;

  invoiceNumber: string;

  purchaseDate: string;

  supplierName?: string;

  supplierPhone?: string;

  totalWeightKg?: number;

  ratePerKg?: number;

  totalAmount: number;

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
