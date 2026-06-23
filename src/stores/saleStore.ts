import { create } from "zustand";
import { SaleInvoice } from "../types/SaleInvoice";

interface SaleStore {
  sales: SaleInvoice[];

  addSale: (
    sale: SaleInvoice
  ) => void;

  updateSale: (
    id: string,
    sale: Partial<SaleInvoice>
  ) => void;

  archiveSale: (
    id: string
  ) => void;

  deleteSale: (
    id: string
  ) => void;
}

export const useSaleStore =
  create<SaleStore>((set) => ({
    sales: [],

    addSale: (sale) =>
      set((state) => ({
        sales: [
          ...state.sales,
          sale,
        ],
      })),

    updateSale: (
      id,
      updatedSale
    ) =>
      set((state) => ({
        sales:
          state.sales.map((sale) =>
            sale.id === id
              ? {
                  ...sale,
                  ...updatedSale,
                }
              : sale
          ),
      })),

    archiveSale: (id) =>
      set((state) => ({
        sales:
          state.sales.map((sale) =>
            sale.id === id
              ? {
                  ...sale,
                  archived: true,
                }
              : sale
          ),
      })),

    deleteSale: (id) =>
      set((state) => ({
        sales:
          state.sales.map((sale) =>
            sale.id === id
              ? {
                  ...sale,
                  deleted: true,
                }
              : sale
          ),
      })),
  }));
