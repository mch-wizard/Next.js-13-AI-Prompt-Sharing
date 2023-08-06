import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@components/Footer';

export const metadata = {
  title: "AI Helpers - Prompts & Tools",
  description: "Discover & Share AI prompts, tools, etc.",
  icons: {
    icon: '/favicon.png',
  },
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
          <body>
            <Provider>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Nav />
                    {children}
                    <Footer />
                </main>
            </Provider>      
        </body>
          
    </html>
  )
}

export default RootLayout;