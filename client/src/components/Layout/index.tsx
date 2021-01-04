import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'

const Layout: React.FC = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header menuItems={['home', 'blog', 'store']} />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
