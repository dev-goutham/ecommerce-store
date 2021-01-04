/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { extractCritical } from '@emotion/server'

export default class MyDocument extends Document<any> {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx)
		const page = await ctx.renderPage()
		const styles = extractCritical(page.html)
		return { ...initialProps, ...page, ...styles }
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<style
						data-emotion-css={this.props.ids.join(' ')}
						dangerouslySetInnerHTML={{ __html: this.props.css }}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
