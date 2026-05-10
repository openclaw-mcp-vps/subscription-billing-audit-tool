import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BillingAudit – Find Revenue Leaks in Your Stripe Subscriptions",
  description: "Analyze your Stripe billing data to uncover failed charges, involuntary churn, and revenue recovery opportunities. Built for SaaS founders and finance teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6cb2bc53-b8ce-460d-9066-f5c161b27b21"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
