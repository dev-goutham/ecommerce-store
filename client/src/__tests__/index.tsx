import React from 'react'
import Index from '../pages/index'
import { render, screen } from '@testing-library/react'

describe('<Index/>', () => {
	it('renders as expected', () => {
		render(<Index />)
		// screen.debug()
		expect(screen.getByText(/hello/i)).toBeInTheDocument()
	})
})
