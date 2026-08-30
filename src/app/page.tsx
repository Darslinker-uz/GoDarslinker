import type { Metadata } from "next";
import { GoDarslinkerHome } from "./go-darslinker-home";

export const metadata: Metadata = {
  title: "Bepul Til O‘rganish Platformasi",
  description:
    "Chet tilini noldan o‘rganish endi oson: bepul, interaktiv til darslari va mashqlar bilan boshlang‘ich darajadan tilda gapirishni tez va mustaqil o‘rganing. Ingliz, rus, arab va koreys tili kurslari.",
  alternates: { canonical: "https://go.darslinker.uz" },
};

export default function Home() {
  return <GoDarslinkerHome />;
}
