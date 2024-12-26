import { Poppins } from 'next/font/google';

// Configure the Poppins font
const poppins = Poppins({
  subsets: ['latin'], // Include Latin character subset
  weight: ['400', '500', '600', '700'], // Specify font weights
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        {/* Meta Tags */}
        <title>Thiago Lopes | Links</title>
        <meta name="description" content="Connect with Thiago Lopes through my curated links." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}
