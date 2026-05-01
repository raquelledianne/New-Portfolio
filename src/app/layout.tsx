import "./globals.css";

export const metadata = {
  title: "Raquelle Cadena Portfolio",
  description: "Frontend Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}