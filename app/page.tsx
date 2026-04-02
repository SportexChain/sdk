import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import { teams } from "@/data/teams";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>⚽ Sportex Market</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}
