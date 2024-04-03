import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/layouts/Header";

import "./styles/globals.css";
import "./styles/main.scss";
import './styles/fonts/font.css'
import Sidebar from "./components/layouts/Sidebar";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className="grid grid-cols-[auto_1fr] h-screen">
            <Sidebar />
            <div className="bg-gray-400">
            <Nav />
            <main>{children}</main>
            </div>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
