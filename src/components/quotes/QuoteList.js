import { Fragment } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import QuoteItem from './QuoteItem'
import classes from './QuoteList.module.css'

const sortQuotes = (quotes, ascending) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA > quoteB ? 1 : -1
		} else {
			return quoteA < quoteB ? 1 : -1
		}
	})
}

const QuoteList = props => {
	const history = useHistory()
	const location = useLocation()

	console.log(location.search)

	const queryParams = new URLSearchParams(location.search) //convert the param string into object
	const isSortingAscending = queryParams.get('sort') === 'asc'

	console.log(isSortingAscending)

	const sortedQuotes = sortQuotes(props.quotes, isSortingAscending)

	const changeSortHandler = () => {
		history.push('/quotes?sort=' + (isSortingAscending ? 'decs' : 'asc'))
	}

	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSortHandler}>
					Sort {isSortingAscending ? 'Descending' : 'Ascending'}
				</button>
			</div>
			<ul className={classes.list}>
				{sortedQuotes.map(quote => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</Fragment>
	)
}

export default QuoteList
