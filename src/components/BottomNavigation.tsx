interface BottomNavigationProps {
  activePage: string;

  onNavigate: (
    page: string
  ) => void;
}

export default function BottomNavigation({
  activePage,
  onNavigate,
}: BottomNavigationProps) {
  const items = [
    {
      key: "dashboard",
      label: "ড্যাশবোর্ড",
    },
    {
      key: "purchase",
      label: "ক্রয়",
    },
    {
      key: "sale",
      label: "বিক্রয়",
    },
    {
      key: "customers",
      label: "গ্রাহক",
    },
    {
      key: "settings",
      label: "সেটিংস",
    },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-around",
        padding: "12px",
        borderTop: "1px solid #ddd",
        background: "#fff",
      }}
    >
      {items.map((item) => (
        <button
          key={item.key}
          onClick={() =>
            onNavigate(item.key)
          }
          style={{
            fontWeight:
              activePage === item.key
                ? "bold"
                : "normal",
          }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
