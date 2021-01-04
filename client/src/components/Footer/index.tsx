import React from 'react'

const Footer: React.FC = () => {
	return (
		<footer className="py-4 font-semibold text-center text-gray-200 bg-indigo-500">
			Copyright &copy; e-commerce {new Date().getFullYear()}
		</footer>
	)
}

export default Footer
