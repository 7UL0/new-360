import ResponsiveAppBar from "./components/navbarComponent"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        <ResponsiveAppBar/>
        {children}
      </body>
    </html>
  )
}
