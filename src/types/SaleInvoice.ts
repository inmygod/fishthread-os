export interface SaleInvoice {
  id: string;

  invoiceNumber: string;

  saleDate: string;

  customerId?: string;

  customerName?: string;

  customerPhone?: string;

  purchaseInvoiceIds: string[];

  purchaseLotIds: string[];

  totalWeightKg?: number;

  ratePerKg?: number;

  totalAmount: number;

  notes?: string;

  createdAt: string;

  updatedAt: string;

  archived: boolean;

  deleted: boolean;
}
