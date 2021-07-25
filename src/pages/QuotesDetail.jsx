import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const QuotesDetail = () => {
	const DUMMY_QUOTES = [
		{
			id: 'q1',
			author: 'Buzz Lightyear',
			text: "This Isn't Flying, This Is Falling With Style",
		},
		{ id: 'q2', author: 'Buzz Lightyear', text: 'To Infinity, And Beyond!' },
	]

	const param = useParams()

	const match = useRouteMatch()


	const quote = DUMMY_QUOTES.find(q => q.id === param.quoteId)

	if (!quote) {
		return (
			<HighlightedQuote
				text={
					'Better to remain silent and be thought a fool than to speak out and remove all doubt.'
				}
				author={'Abraham Lincoln'}
			/>
		)
	}

	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
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
