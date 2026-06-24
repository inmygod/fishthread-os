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
          state.purchases.map(
            (purchase) =>
              purchase.id === id
                ? {
                    ...purchase,
                    ...updatedPurchase,
                    updatedAt:
                      new Date().toISOString(),
                  }
                : purchase
          ),
      })),

    archivePurchase: (id) =>
      set((state) => ({
        purchases:
          state.purchases.map(
            (purchase) =>
              purchase.id === id
                ? {
                    ...purchase,
                    archived: true,
                    updatedAt:
                      new Date().toISOString(),
                  }
                : purchase
          ),
      })),

    deletePurchase: (id) =>
      set((state) => ({
        purchases:
          state.purchases.map(
            (purchase) =>
              purchase.id === id
                ? {
                    ...purchase,
                    deleted: true,
                    updatedAt:
                      new Date().toISOString(),
                  }
                : purchase
          ),
      })),
  }));
