import { useState } from "react";

export default function PurchasePage() {
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

  const calculatedAmount =
    Number(weight || 0) *
    Number(rate || 0);

  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <h1>নতুন ক্রয়</h1>

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

      <button>
        চালান সংরক্ষণ
      </button>
    </div>
  );
}
