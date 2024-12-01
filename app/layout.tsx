"use client";

import "./globals.css";
import NavBar from "./components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <NavBar />
            <main>
              <div className="container">{children}</div>
            </main>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
