import React from 'react'
import { render } from '@testing-library/react'

import Header from '.'

describe('<Header/>', () => {
	it('renders without any issues', () => {
		render(<Header menuItems={[]} />)
		// expect(screen.getAllByText(/contact/i)).toBeInTheDocument()
	})
})
