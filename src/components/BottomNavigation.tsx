export default function BottomNavigation() {
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
        background: "#fff"
      }}
    >
      <span>ড্যাশবোর্ড</span>
      <span>ক্রয়</span>
      <span>বিক্রয়</span>
      <span>চালান</span>
      <span>সেটিংস</span>
    </nav>
  );
}
