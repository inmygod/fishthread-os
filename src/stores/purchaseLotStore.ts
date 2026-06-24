import { create } from "zustand";
import { PurchaseLot } from "../types/PurchaseLot";

interface PurchaseLotStore {
  lots: PurchaseLot[];

  addLot: (
    lot: PurchaseLot
  ) => void;

  updateLot: (
    id: string,
    lot: Partial<PurchaseLot>
  ) => void;

  archiveLot: (
    id: string
  ) => void;

  deleteLot: (
    id: string
  ) => void;

  markLotAsSold: (
    lotIds: string[],
    saleInvoiceId: string
  ) => void;
}

export const usePurchaseLotStore =
  create<PurchaseLotStore>(
    (set) => ({
      lots: [],

      addLot: (lot) =>
        set((state) => ({
          lots: [
            ...state.lots,
            lot,
          ],
        })),

      updateLot: (
        id,
        updatedLot
      ) =>
        set((state) => ({
          lots: state.lots.map(
            (lot) =>
              lot.id === id
                ? {
                    ...lot,
                    ...updatedLot,
                  }
                : lot
          ),
        })),

      archiveLot: (id) =>
        set((state) => ({
          lots: state.lots.map(
            (lot) =>
              lot.id === id
                ? {
                    ...lot,
                    archived: true,
                  }
                : lot
          ),
        })),

      deleteLot: (id) =>
        set((state) => ({
          lots: state.lots.map(
            (lot) =>
              lot.id === id
                ? {
                    ...lot,
                    deleted: true,
                  }
                : lot
          ),
        })),

      markLotAsSold: (
        lotIds,
        saleInvoiceId
      ) =>
        set((state) => ({
          lots: state.lots.map(
            (lot) =>
              lotIds.includes(
                lot.id
              )
                ? {
                    ...lot,
                    status: "sold",
                    soldAt:
                      new Date().toISOString(),
                    saleInvoiceId,
                  }
                : lot
          ),
        })),
    })
  );
