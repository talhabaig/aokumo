import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";

export default function IndexPage() {
  return <div>dashboard page</div>;
}

export const metadata: Metadata = {
  title: "dashboard",
};
