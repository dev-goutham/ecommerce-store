import React from 'react'
import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer/>', () => {
	it('renders without any issues', () => {
		render(<Footer />)
		expect(screen.getByText(/copyright/i)).toBeInTheDocument()
	})
})
