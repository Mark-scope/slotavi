// app/layout.tsx
'use client';

import { UserProvider } from '@/context/UserContext';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider defaultRole="professional">
          {children}
        </UserProvider>
      </body>
    </html>
  );
}