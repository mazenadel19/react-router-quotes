import { Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'

const QuotesDetail = () => {
	const param = useParams()
	console.log(param)
	return (
		<div>
			<h1>QuotesDetail</h1>
			<p>{param.quoteId}</p>
			<Route path={`/quotes/${param.quoteId}/comments`}>
				<Comments />
			</Route>
		</div>
	)
}

export default QuotesDetail
