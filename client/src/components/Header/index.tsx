import React from 'react'
import Link from 'next/link'
import tw from 'twin.macro'
import { HiShoppingCart, HiUsers } from 'react-icons/hi'

interface Props {
	menuItems: string[]
}

const StyledHeader = tw.header`w-full bg-white shadow-md`
const StyledNavContainer = tw.div`flex flex-col w-4/5 py-3 mx-auto`
const StyledNav = tw.nav`flex items-baseline justify-between`
const StyledLogo = tw.h1`font-mono text-lg font-bold text-indigo-500 lg:text-xl`
const StyledMenu = tw.ul`flex items-baseline space-x-3 font-semibold text-indigo-500 lg:space-x-5`
const StyledMenuItem = tw.li`flex items-baseline px-3 py-1 space-x-2 capitalize rounded-lg hover:bg-indigo-50 focus:bg-indigo-50 focus:outline-none`

const Header: React.FC<Props> = () => {
	return (
		<StyledHeader>
			<StyledNavContainer>
				<StyledNav>
					<StyledLogo>E-commerce</StyledLogo>
					<StyledMenu>
						<StyledMenuItem>
							<HiShoppingCart />
							<Link href={`/`}>Cart</Link>
						</StyledMenuItem>
						<StyledMenuItem>
							<HiUsers />
							<Link href={`/`}>sign in</Link>
						</StyledMenuItem>
					</StyledMenu>
				</StyledNav>
			</StyledNavContainer>
		</StyledHeader>
	)
}

export default Header
