export const metadata = {
  title: 'Nexus',
  description: 'Nexgen Community',
}

export default function RootLayout({ children }) {
  return (
    <>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Michroma&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        `}
      </style>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        `}
      </style>
    </head>
    <html lang="en">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
    </>
  )
}
