import { create } from "zustand";
import { PurchaseInvoice } from "../types/PurchaseInvoice";

interface PurchaseStore {
  purchases: PurchaseInvoice[];

  addPurchase: (
    purchase: PurchaseInvoice
  ) => void;

  updatePurchase: (
    id: string,
    purchase: Partial<PurchaseInvoice>
  ) => void;

  archivePurchase: (
    id: string
  ) => void;

  deletePurchase: (
    id: string
  ) => void;

  markAsSold: (
    purchaseIds: string[],
    saleInvoiceId: string
  ) => void;
}

export const usePurchaseStore =
  create<PurchaseStore>((set) => ({
    purchases: [],

    addPurchase: (purchase) =>
      set((state) => ({
        purchases: [
          ...state.purchases,
          purchase,
        ],
      })),

    updatePurchase: (
      id,
      updatedPurchase
    ) =>
      set((state) => ({
        purchases:
          state.purchases.map((purchase) =>
            purchase.id === id
              ? {
                  ...purchase,
                  ...updatedPurchase,
                }
              : purchase
          ),
      })),

    archivePurchase: (id) =>
      set((state) => ({
        purchases:
          state.purchases.map((purchase) =>
            purchase.id === id
              ? {
                  ...purchase,
                  archived: true,
                }
              : purchase
          ),
      })),

    deletePurchase: (id) =>
      set((state) => ({
        purchases:
          state.purchases.map((purchase) =>
            purchase.id === id
              ? {
                  ...purchase,
                  deleted: true,
                }
              : purchase
          ),
      })),

    markAsSold: (
      purchaseIds,
      saleInvoiceId
    ) =>
      set((state) => ({
        purchases:
          state.purchases.map((purchase) =>
            purchaseIds.includes(
              purchase.id
            )
              ? {
                  ...purchase,
                  status: "sold",
                  soldAt:
                    new Date().toISOString(),
                  saleInvoiceId,
                }
              : purchase
          ),
      })),
  }));
