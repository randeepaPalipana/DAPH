import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

export const metadata = {
  title: "Department of Animal Production and Health",
  description: "DAPH Government Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
