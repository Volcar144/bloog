import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: "3rem",
        }}
      >
       <header style={{ backgroundColor: '#f0f0f0', padding: '1rem', textAlign: 'center' }}>
        <Link href="/" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>Home</Link>
        |
        <Link href="/posts" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>Posts</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
