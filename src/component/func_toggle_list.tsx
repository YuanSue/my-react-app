import { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Toggle({ title, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "10px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ▶ {title}
      </div>

      {open && (
        <div style={{ marginLeft: "20px", marginTop: "5px" }}>
          {children}
        </div>
      )}
    </div>
  );
}