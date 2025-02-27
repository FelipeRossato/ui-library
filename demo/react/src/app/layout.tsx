export const metadata = {
  title: 'React + WebComponents Demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'whitesmoke' }}>{children}</body>
    </html>
  );
}
