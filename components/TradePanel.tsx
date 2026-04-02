"use client";

import { useState } from "react";
import { buyStake, sellStake } from "@/services/market";

export default function TradePanel({ team }: any) {
  const [amount, setAmount] = useState(1);

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <button onClick={() => buyStake(team, amount)}>
        Buy
      </button>

      <button onClick={() => sellStake(team, amount)} style={{ marginLeft: 10 }}>
        Sell
      </button>
    </div>
  );
}
