import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/UI/LoadingSpinner'

const NewQuote = React.lazy(() => import('./pages/NewQuote'))
const QuotesDetail = React.lazy(() => import('./pages/QuotesDetail'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Quotes = React.lazy(() => import('./pages/AllQuotes'))

const loading = (
	<div className='centered'>
		<LoadingSpinner />
	</div>
)

function App() {
	return (
		<>
			<Layout>
				<Suspense fallback={loading}>
					<Switch>
						{/* switch leads to have only one active route at a time */}
						<Route path='/' exact>
							<Redirect to='/quotes' />
						</Route>
						<Route path='/quotes' exact>
							<Quotes />
						</Route>
						<Route path='/newquote'>
							<NewQuote />
						</Route>
						<Route path='/quotes/:quoteId'>
							<QuotesDetail />
						</Route>
						<Route path='*'>
							<NotFound />
						</Route>
					</Switch>
				</Suspense>
			</Layout>
		</>
	)
}

export default App
