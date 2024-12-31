import '../styles/globals.css'; // Correct path based on your directory structure

export const metadata = {
  metadataBase: new URL("https://thiagolopes.cv"), // Replace with your live domain
  title: 'Thiago Lopes | Experience, Design, Explore!',
  description: 'Explore the work of Thiago Lopes, blending design, technology, and adventure.',
  openGraph: {
    type: 'website',
    url: 'https://thiagolopes.cv',
    title: 'Thiago Lopes | Experience, Design, Explore!',
    description: 'Explore the work of Thiago Lopes, blending design, technology, and adventure.',
    images: '/profile.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thiago Lopes | Experience, Design, Explore!',
    description: 'Explore the work of Thiago Lopes, blending design, technology, and adventure.',
    images: '/profile.jpg',
  },
  icons: {
    icon: '/favicon.ico', // Path to your favicon (in public folder)
    shortcut: '/favicon.ico', // Optional: For older browsers
    apple: '/favicon.png', // Optional: For Apple devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional head elements (if needed) */}
      </head>
      <body>{children}</body>
    </html>
  );
}
