

import '@/style/globals.css'


export const metadata = {
  title: "Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className='container-1'>
        {children}
        </div>
      </body>
    </html>
  );
}
