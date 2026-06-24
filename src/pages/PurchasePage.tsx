import { useMemo, useState } from "react";

import { usePurchaseStore } from "../stores/purchaseStore";
import { usePurchaseLotStore } from "../stores/purchaseLotStore";

import { PurchaseInvoice } from "../types/PurchaseInvoice";
import { PurchaseLot } from "../types/PurchaseLot";

type LotForm = {
  fishName: string;
  weightKg: string;
  ratePerKg: string;
  totalAmount: string;
};

export default function PurchasePage() {
  const addPurchase = usePurchaseStore(
    (state) => state.addPurchase
  );

  const archivePurchase =
    usePurchaseStore(
      (state) => state.archivePurchase
    );

  const deletePurchase =
    usePurchaseStore(
      (state) => state.deletePurchase
    );

  const purchases = usePurchaseStore(
    (state) => state.purchases
  );

  const addLot =
    usePurchaseLotStore(
      (state) => state.addLot
    );

  const [supplierName, setSupplierName] =
    useState("");

  const [supplierPhone, setSupplierPhone] =
    useState("");

  const [lots, setLots] = useState<
    LotForm[]
  >([
    {
      fishName: "গলদা",
      weightKg: "",
      ratePerKg: "",
      totalAmount: "",
    },
  ]);

  const [error, setError] =
    useState("");

  const invoiceNumber =
    useMemo(() => {
      return `PI-${Date.now()}`;
    }, []);

  const addLotRow = () => {
    setLots([
      ...lots,
      {
        fishName: "গলদা",
        weightKg: "",
        ratePerKg: "",
        totalAmount: "",
      },
    ]);
  };

  const updateLot = (
    index: number,
    field: keyof LotForm,
    value: string
  ) => {
    const updatedLots = [...lots];

    updatedLots[index] = {
      ...updatedLots[index],
      [field]: value,
    };

    setLots(updatedLots);
  };

  const invoiceTotal =
    lots.reduce(
      (sum, lot) =>
        sum +
        Number(
          lot.totalAmount || 0
        ),
      0
    );

  const handleSave = () => {
    const invalidLot =
      lots.some(
        (lot) =>
          !lot.totalAmount.trim()
      );

    if (invalidLot) {
      setError(
        "প্রতিটি দাগে মোট মূল্য দিতে হবে"
      );

      return;
    }

    const lotIds: string[] = [];

    lots.forEach((lot) => {
      const lotId =
        crypto.randomUUID();

      const purchaseLot: PurchaseLot =
        {
          id: lotId,

          fishName:
            lot.fishName ||
            "গলদা",

          totalAmount:
            Number(
              lot.totalAmount
            ),
                    totalWeightKg:
            lot.weightKg
              ? Number(
                  lot.weightKg
                )
              : undefined,

          ratePerKg:
            lot.ratePerKg
              ? Number(
                  lot.ratePerKg
                )
              : undefined,

          status:
            "available",

          createdAt:
            new Date().toISOString(),

          updatedAt:
            new Date().toISOString(),

          archived: false,

          deleted: false,
        };

      addLot(purchaseLot);

      lotIds.push(lotId);
    });

    const purchase: PurchaseInvoice =
      {
        id:
          crypto.randomUUID(),

        invoiceNumber,

        purchaseDate:
          new Date().toISOString(),

        supplierName:
          supplierName ||
          undefined,

        supplierPhone:
          supplierPhone ||
          undefined,

        totalAmount:
          invoiceTotal,

        lotIds,

        status:
          "available",

        createdAt:
          new Date().toISOString(),

        updatedAt:
          new Date().toISOString(),

        archived: false,

        deleted: false,
      };

    addPurchase(purchase);

    setSupplierName("");

    setSupplierPhone("");

    setLots([
      {
        fishName: "গলদা",
        weightKg: "",
        ratePerKg: "",
        totalAmount: "",
      },
    ]);

    setError("");
  };

  const visiblePurchases =
    purchases.filter(
      (purchase) =>
        !purchase.archived &&
        !purchase.deleted
    );

  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <h1>নতুন ক্রয়</h1>

      <p>
        চালান নং:
        {" "}
        {invoiceNumber}
      </p>

      <div>
        <label>
          Supplier /
          Vendor Name
        </label>

        <input
          value={
            supplierName
          }
          onChange={(e) =>
            setSupplierName(
              e.target.value
            )
          }
        />
      </div>

      <br />

      <div>
        <label>
          Supplier Phone
        </label>

        <input
          inputMode="numeric"
          value={
            supplierPhone
          }
          onChange={(e) =>
            setSupplierPhone(
              e.target.value
            )
          }
        />
      </div>

      <br />

      <h2>
        দাগসমূহ
      </h2>
            {lots.map(
        (lot, index) => {
          const calculatedAmount =
            Number(
              lot.weightKg || 0
            ) *
            Number(
              lot.ratePerKg || 0
            );

          return (
            <div
              key={index}
              style={{
                border:
                  "1px solid #ccc",
                borderRadius: 8,
                padding: 12,
                marginBottom: 12,
              }}
            >
              <h3>
                দাগ {index + 1}
              </h3>

              <div>
                <label>
                  মাছের নাম
                </label>

                <input
                  value={
                    lot.fishName
                  }
                  onChange={(e) =>
                    updateLot(
                      index,
                      "fishName",
                      e.target.value
                    )
                  }
                />
              </div>

              <br />

              <div>
                <label>
                  ওজন (KG)
                </label>

                <input
                  inputMode="decimal"
                  value={
                    lot.weightKg
                  }
                  onChange={(e) =>
                    updateLot(
                      index,
                      "weightKg",
                      e.target.value
                    )
                  }
                />
              </div>

              <br />

              <div>
                <label>
                  দর
                </label>

                <input
                  inputMode="decimal"
                  value={
                    lot.ratePerKg
                  }
                  onChange={(e) =>
                    updateLot(
                      index,
                      "ratePerKg",
                      e.target.value
                    )
                  }
                />
              </div>

              <br />

              <div>
                <label>
                  ক্যালকুলেটেড মূল্য
                </label>

                <input
                  value={
                    calculatedAmount
                  }
                  readOnly
                />
              </div>

              <br />

              <div>
                <label>
                  মোট মূল্য *
                </label>

                <input
                  inputMode="decimal"
                  value={
                    lot.totalAmount
                  }
                  onChange={(e) =>
                    updateLot(
                      index,
                      "totalAmount",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          );
        }
      )}

      <button
        type="button"
        onClick={addLotRow}
      >
        + নতুন দাগ
      </button>

      <br />
      <br />

      <div>
        <label>
          চালানের মোট মূল্য
        </label>

        <input
          value={
            invoiceTotal
          }
          readOnly
        />
      </div>

      <br />

      {error && (
        <p
          style={{
            color: "red",
          }}
        >
          {error}
        </p>
      )}

      <button
        onClick={handleSave}
      >
        চালান সংরক্ষণ
      </button>

      <hr />

      <h2>
        ক্রয় চালানসমূহ
      </h2>

      {visiblePurchases.map(
        (purchase) => (
          <div
            key={
              purchase.id
            }
            style={{
              border:
                "1px solid #ccc",
              borderRadius: 8,
              padding: 12,
              marginTop: 12,
            }}
          >
            <div>
              <strong>
                {
                  purchase.invoiceNumber
                }
              </strong>
            </div>

            <div>
              মোট টাকা:
              {" "}
              {
                purchase.totalAmount
              }
            </div>

            <div>
              সরবরাহকারী:
              {" "}
              {purchase.supplierName ||
                "N/A"}
            </div>

            <div>
              Lots:
              {" "}
              {
                purchase.lotIds
                  .length
              }
            </div>

            <div
              style={{
                display:
                  "flex",
                gap: 8,
                marginTop: 8,
              }}
            >
              <button
                onClick={() =>
                  archivePurchase(
                    purchase.id
                  )
                }
              >
                Archive
              </button>

              <button
                onClick={() =>
                  deletePurchase(
                    purchase.id
                  )
                }
              >
                Delete
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
