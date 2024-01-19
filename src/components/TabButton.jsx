export default function TabButton({ children, isSelected, ...props }) {
  console.log("TUBBUTON COMPONENT EXECUTING");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
