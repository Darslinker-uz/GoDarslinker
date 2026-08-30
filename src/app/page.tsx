import type { Metadata } from "next";
import { GoDarslinkerHome } from "./go-darslinker-home";

export const metadata: Metadata = {
  title: "Go Darslinker — til o‘rganishni bugun boshlang",
  description: "Qisqa va qiziqarli darslar bilan yangi tilda gapirishni boshlang.",
  robots: { index: false, follow: false },
};

export default function Home() {
  return <GoDarslinkerHome />;
}
