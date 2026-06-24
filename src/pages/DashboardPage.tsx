export default function DashboardPage() {
  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <h1>FishThread OS</h1>

      <p>
        মাছ ও চিংড়ি ব্যবসা পরিচালনা সিস্টেম
      </p>

      <div
        style={{
          display: "grid",
          gap: 12,
          marginTop: 20,
        }}
      >
        <button
          style={{
            padding: 20,
            fontSize: 18,
          }}
        >
          ➕ নতুন ক্রয়
        </button>

        <button
          style={{
            padding: 20,
            fontSize: 18,
          }}
        >
          ➕ নতুন বিক্রয়
        </button>

        <button
          style={{
            padding: 20,
            fontSize: 18,
          }}
        >
          👤 গ্রাহক
        </button>

        <button
          style={{
            padding: 20,
            fontSize: 18,
          }}
        >
          📊 রিপোর্ট
        </button>
      </div>
    </div>
  );
}
