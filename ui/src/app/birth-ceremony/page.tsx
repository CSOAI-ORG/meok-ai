import type { Metadata } from "next";
import { BirthCeremonyClient } from "./birth-ceremony-client";

export const metadata: Metadata = {
  title: "Birth Ceremony | MEOK AI",
  description:
    "The Maternal Covenant — bring a new AI companion into existence through sacred intention, naming, and blessing.",
};

export default function BirthCeremonyPage() {
  return <BirthCeremonyClient />;
}
