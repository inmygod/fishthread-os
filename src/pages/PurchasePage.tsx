import { useMemo, useState } from "react";

import { usePurchaseStore } from "../stores/purchaseStore";
import { PurchaseInvoice } from "../types/PurchaseInvoice";

export default function PurchasePage() {
  const addPurchase = usePurchaseStore(
    (state) => state.addPurchase
  );

  const purchases = usePurchaseStore(
    (state) => state.purchases
  );

  const [supplierName, setSupplierName] =
    useState("");

  const [supplierPhone, setSupplierPhone] =
    useState("");

  const [weight, setWeight] =
    useState("");

  const [rate, setRate] =
    useState("");

  const [totalAmount, setTotalAmount] =
    useState("");

  const [error, setError] =
    useState("");

  const invoiceNumber = useMemo(() => {
    return `PI-${Date.now()}`;
  }, []);

  const calculatedAmount =
    Number(weight || 0) *
    Number(rate || 0);

  const handleSave = () => {
    if (!totalAmount.trim()) {
      setError(
        "মোট টাকা অবশ্যই দিতে হবে"
      );

      return;
    }

    const purchase: PurchaseInvoice = {
      id: crypto.randomUUID(),

      invoiceNumber,

      purchaseDate:
        new Date().toISOString(),

      supplierName:
        supplierName || undefined,

      supplierPhone:
        supplierPhone || undefined,

      totalWeightKg: weight
        ? Number(weight)
        : undefined,

      ratePerKg: rate
        ? Number(rate)
        : undefined,

      totalAmount:
        Number(totalAmount),

      status: "available",

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),

      archived: false,

      deleted: false,
    };

    addPurchase(purchase);

    setError("");

    alert(
      "চালান সংরক্ষণ করা হয়েছে"
    );

    setSupplierName("");
    setSupplierPhone("");
    setWeight("");
    setRate("");
    setTotalAmount("");
  };

  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <h1>নতুন ক্রয়</h1>

      <p>
        চালান নং: {invoiceNumber}
      </p>

      <div>
        <label>
          Supplier / Vendor Name
        </label>

        <input
          value={supplierName}
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
          value={supplierPhone}
          onChange={(e) =>
            setSupplierPhone(
              e.target.value
            )
          }
        />
      </div>

      <br />

      <div>
        <label>
          Weight (KG)
        </label>

        <input
          inputMode="decimal"
          value={weight}
          onChange={(e) =>
            setWeight(
              e.target.value
            )
          }
        />
      </div>

      <br />

      <div>
        <label>
          Rate Per KG
        </label>

        <input
          inputMode="decimal"
          value={rate}
          onChange={(e) =>
            setRate(
              e.target.value
            )
          }
        />
      </div>

      <br />

      <div>
        <label>
          Calculated Amount
        </label>

        <input
          value={calculatedAmount}
          readOnly
        />
      </div>

      <br />

      <div>
        <label>
          Total Amount *
        </label>

        <input
          inputMode="decimal"
          value={totalAmount}
          onChange={(e) =>
            setTotalAmount(
              e.target.value
            )
          }
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

      <h3>
        Saved Purchase Invoices
      </h3>

      {purchases.map((purchase) => (
        <div
          key={purchase.id}
          style={{
            border:
              "1px solid #ccc",
            padding: 12,
            marginTop: 8,
          }}
        >
          <div>
            {purchase.invoiceNumber}
          </div>

          <div>
            Amount:{" "}
            {purchase.totalAmount}
          </div>

          <div>
            Supplier:{" "}
            {purchase.supplierName ||
              "N/A"}
          </div>
        </div>
      ))}
    </div>
  );
}
