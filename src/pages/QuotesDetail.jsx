import { Route, useParams } from 'react-router-dom'
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
	console.log(param)

	const quote = DUMMY_QUOTES.find(q => q.id === param.quoteId)

	if (!quote) {
		return (
			<HighlightedQuote
				text={
					'No Quote Found!'
				}
			/>
		)
	}

	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`/quotes/${param.quoteId}/comments`}>
				<Comments />
			</Route>
		</>
	)
}

export default QuotesDetail
