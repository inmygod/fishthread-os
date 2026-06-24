import { useMemo, useState } from "react";

import { useSaleStore } from "../stores/saleStore";
import { usePurchaseStore } from "../stores/purchaseStore";
import { usePurchaseLotStore } from "../stores/purchaseLotStore";

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

  const lots =
    usePurchaseLotStore(
      (state) => state.lots
    );

  const markLotAsSold =
    usePurchaseLotStore(
      (state) =>
        state.markLotAsSold
    );

  const [selectedLotIds, setSelectedLotIds] =
    useState<string[]>([]);

  const [customerName, setCustomerName] =
    useState("");

  const [customerPhone, setCustomerPhone] =
    useState("");

  const [error, setError] =
    useState("");

  const invoiceNumber =
    useMemo(() => {
      return `SI-${Date.now()}`;
    }, []);

  const availableLots =
    lots.filter(
      (lot) =>
        !lot.archived &&
        !lot.deleted &&
        lot.status ===
          "available"
    );

  const toggleLot = (
    lotId: string
  ) => {
    if (
      selectedLotIds.includes(
        lotId
      )
    ) {
      setSelectedLotIds(
        selectedLotIds.filter(
          (id) => id !== lotId
        )
      );

      return;
    }

    setSelectedLotIds([
      ...selectedLotIds,
      lotId,
    ]);
  };

  const selectedLots =
    availableLots.filter(
      (lot) =>
        selectedLotIds.includes(
          lot.id
        )
    );

  const saleTotal =
    selectedLots.reduce(
      (sum, lot) =>
        sum +
        lot.totalAmount,
      0
    );

  const handleSave = () => {
    if (
      selectedLotIds.length === 0
    ) {
      setError(
        "অন্তত একটি দাগ নির্বাচন করতে হবে"
      );

      return;
    }

    const saleId =
      crypto.randomUUID();
        const selectedPurchaseInvoiceIds =
      Array.from(
        new Set(
          selectedLots
            .map(
              (lot) =>
                lot.purchaseInvoiceId
            )
            .filter(
              Boolean
            )
        )
      ) as string[];

    const sale: SaleInvoice = {
      id: saleId,

      invoiceNumber,

      saleDate:
        new Date().toISOString(),

      customerId:
        undefined,

      customerName:
        customerName ||
        undefined,

      customerPhone:
        customerPhone ||
        undefined,

      purchaseInvoiceIds:
        selectedPurchaseInvoiceIds,

      purchaseLotIds:
        selectedLotIds,

      totalAmount:
        saleTotal,

      notes:
        undefined,

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),

      archived:
        false,

      deleted:
        false,
    };

    addSale(sale);

    markLotAsSold(
      selectedLotIds,
      saleId
    );

    setCustomerName("");

    setCustomerPhone("");

    setSelectedLotIds([]);

    setError("");
  };

  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <h1>
        নতুন বিক্রয়
      </h1>

      <p>
        চালান নং:
        {" "}
        {
          invoiceNumber
        }
      </p>

      <div>
        <label>
          Customer Name
        </label>

        <input
          value={
            customerName
          }
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
          value={
            customerPhone
          }
          onChange={(e) =>
            setCustomerPhone(
              e.target.value
            )
          }
        />
      </div>

      <br />

      <h3>
        Available Lots
      </h3>
            {availableLots.map(
        (lot) => (
          <div
            key={lot.id}
            style={{
              border:
                "1px solid #ccc",
              borderRadius: 8,
              padding: 12,
              marginBottom: 8,
            }}
          >
            <label>
              <input
                type="checkbox"
                checked={selectedLotIds.includes(
                  lot.id
                )}
                onChange={() =>
                  toggleLot(
                    lot.id
                  )
                }
              />

              {" "}

              <strong>
                {lot.fishName ||
                  "গলদা"}
              </strong>

              {" "}|

              {" "}ওজন:
              {" "}
              {lot.weightKg ??
                "-"}

              {" "}|

              {" "}দর:
              {" "}
              {lot.ratePerKg ??
                "-"}

              {" "}|

              {" "}মূল্য:
              {" "}
              {
                lot.totalAmount
              }
            </label>
          </div>
        )
      )}

      <br />

      <div>
        <label>
          বিক্রয় মোট মূল্য
        </label>

        <input
          value={saleTotal}
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
        বিক্রয় সংরক্ষণ
      </button>

      <hr />

      <h2>
        বিক্রয় চালানসমূহ
      </h2>

      {sales.map(
        (sale) => (
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
                {
                  sale.invoiceNumber
                }
              </strong>
            </div>

            <div>
              মোট টাকা:
              {" "}
              {
                sale.totalAmount
              }
            </div>

            <div>
              ক্রেতা:
              {" "}
              {sale.customerName ||
                "N/A"}
            </div>

            <div>
              Lots:
              {" "}
              {
                sale
                  .purchaseLotIds
                  .length
              }
            </div>

            <div>
              Linked Purchases:
              {" "}
              {
                sale
                  .purchaseInvoiceIds
                  .length
              }
            </div>
          </div>
        )
      )}
    </div>
  );
}
