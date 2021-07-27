import { useEffect } from 'react'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'

const QuotesDetail = () => {
	const {
		sendRequest,
		status,
		data: loadedQuotes,
		error,
	} = useHttp(getSingleQuote, true)

	const match = useRouteMatch()
	const param = useParams()
	const { quoteId } = param

	useEffect(() => {
		sendRequest(quoteId)
	}, [sendRequest, quoteId])

	// const quote = DUMMY_QUOTES.find(q => q.id === param.quoteId)

	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		)
	}

	if (error) {
		return <p className='centered focus'>{error}</p>
	}

	//TODO form validation to prenvent posting a quote with no author or text
	if (!loadedQuotes.text || !loadedQuotes.author) {
		return (
			<HighlightedQuote
				text={
					loadedQuotes.text
						? loadedQuotes.text
						: 'Better to remain silent and be thought a fool than to speak out and remove all doubt.'
				}
				author={loadedQuotes.author ? loadedQuotes.author : 'Abraham Lincoln'}
			/>
		)
	}

	return (
		<>
			<HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
			<Route path={`${match.path}/`} exact>
				<div className='centered'>
					<Link className={'btn--flat'} to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</>
	)
}

export default QuotesDetail
