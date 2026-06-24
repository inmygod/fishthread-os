import { useMemo, useState } from "react";

import { useSaleStore } from "../stores/saleStore";
import { usePurchaseStore } from "../stores/purchaseStore";

import { SaleInvoice } from "../types/SaleInvoice";

export default function SalePage() {
  const addSale = useSaleStore(
    (state) => state.addSale
  );

  const sales = useSaleStore(
    (state) => state.sales
  );

  const purchases =
    usePurchaseStore(
      (state) => state.purchases
    );

  const markAsSold =
    usePurchaseStore(
      (state) => state.markAsSold
    );

  const [selectedPurchases, setSelectedPurchases] =
    useState<string[]>([]);

  const [customerName, setCustomerName] =
    useState("");

  const [customerPhone, setCustomerPhone] =
    useState("");

  const [weight, setWeight] =
    useState("");

  const [rate, setRate] =
    useState("");

  const [totalAmount, setTotalAmount] =
    useState("");

  const [error, setError] =
    useState("");

  const invoiceNumber =
    useMemo(() => {
      return `SI-${Date.now()}`;
    }, []);

  const calculatedAmount =
    Number(weight || 0) *
    Number(rate || 0);

  const availablePurchases =
    purchases.filter(
      (purchase) =>
        !purchase.archived &&
        !purchase.deleted &&
        purchase.status ===
          "available"
    );

  const togglePurchase = (
    purchaseId: string
  ) => {
    if (
      selectedPurchases.includes(
        purchaseId
      )
    ) {
      setSelectedPurchases(
        selectedPurchases.filter(
          (id) => id !== purchaseId
        )
      );

      return;
    }

    setSelectedPurchases([
      ...selectedPurchases,
      purchaseId,
    ]);
  };

  const handleSave = () => {
    if (!totalAmount.trim()) {
      setError(
        "মোট টাকা অবশ্যই দিতে হবে"
      );

      return;
    }

    const saleId =
      crypto.randomUUID();

    const sale: SaleInvoice = {
      id: saleId,

      invoiceNumber,

      saleDate:
        new Date().toISOString(),

      customerName:
        customerName || undefined,

      customerPhone:
        customerPhone || undefined,

      customerId: undefined,

      purchaseInvoiceIds:
        selectedPurchases,

      totalWeightKg: weight
        ? Number(weight)
        : undefined,

      ratePerKg: rate
        ? Number(rate)
        : undefined,

      totalAmount:
        Number(totalAmount),

      notes: undefined,

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),

      archived: false,

      deleted: false,
    };

    addSale(sale);

    if (
      selectedPurchases.length > 0
    ) {
      markAsSold(
        selectedPurchases,
        saleId
      );
    }

    setCustomerName("");
    setCustomerPhone("");
    setWeight("");
    setRate("");
    setTotalAmount("");
    setSelectedPurchases([]);
    setError("");
  };

  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <h1>নতুন বিক্রয়</h1>

      <p>
        চালান নং: {invoiceNumber}
      </p>

      <h3>
        Available Purchase
        Invoices
      </h3>

      {availablePurchases.map(
        (purchase) => (
          <div
            key={purchase.id}
          >
            <label>
              <input
                type="checkbox"
                checked={selectedPurchases.includes(
                  purchase.id
                )}
                onChange={() =>
                  togglePurchase(
                    purchase.id
                  )
                }
              />

              {" "}
              {purchase.invoiceNumber}
              {" "}
              (
              {purchase.totalAmount}
              )
            </label>
          </div>
        )
      )}

      <br />

      <div>
        <label>
          Customer Name
        </label>

        <input
          value={customerName}
          onChange={(e) =>
            setCustomerName(
              e.target.value
            )
          }
        />
      </div>

      <br />

      <div>
        <label>
          Customer Phone
        </label>

        <input
          inputMode="numeric"
          value={customerPhone}
          onChange={(e) =>
            setCustomerPhone(
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
        বিক্রয় সংরক্ষণ
      </button>

      <hr />

      <h2>
        বিক্রয় চালানসমূহ
      </h2>

      {sales.map((sale) => (
        <div
          key={sale.id}
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
              {sale.invoiceNumber}
            </strong>
          </div>

          <div>
            টাকা: {sale.totalAmount}
          </div>

          <div>
            ক্রেতা:{" "}
            {sale.customerName ||
              "N/A"}
          </div>

          <div>
            Linked Purchases:{" "}
            {
              sale
                .purchaseInvoiceIds
                .length
            }
          </div>
        </div>
      ))}
    </div>
  );
}
