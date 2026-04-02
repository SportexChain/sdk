"use client";

import TradePanel from "./TradePanel";

export default function TeamCard({ team }: any) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: 20,
      borderRadius: 10,
      width: 250
    }}>
      <h3>{team.name}</h3>
      <p>Price: ${team.price}</p>
      <p>Performance: {team.performance}</p>

      <TradePanel team={team} />
    </div>
  );
}
