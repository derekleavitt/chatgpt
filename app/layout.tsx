import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Khumbu Valley | Free ChatGPT 4.0',
  description: 'Khumbu Valley (Everest Region) Community Platform',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
