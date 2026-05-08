import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DomainShield — Stop Registrar Front-Running',
  description: 'Proxy domain availability searches through multiple registrars simultaneously. Prevent any single registrar from tracking and front-running your domain searches.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1d4d0edf-ac2d-4da3-805d-0d6406cf08f9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
