import './globals.css';
import {ReactNode} from 'react';

export const metadata = {
    title : "Demo App",
    description : "A Sample app for learning Next.js"
};

export default function RootLayout({children} : {children : ReactNode}) {
    return (
        <html lang='en'>
            <body>
                {/* Navbar here */}
                {children}
                {/* Footer here */}
            </body>
        </html>
    )
}