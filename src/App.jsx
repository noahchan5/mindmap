import { useState } from "react";

export default function App() {
  const [text, setText] = useState("Central Idea");

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Mind Map (Starter Version)</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: 10, fontSize: 16 }}
      />
      <div style={{
        marginTop: 40,
        padding: 20,
        border: "2px solid #6366f1",
        borderRadius: 10,
        display: "inline-block"
      }}>
        {text}
      </div>
    </div>
  );
}
