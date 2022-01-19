import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
// import katie_zaferes from "../images/katie-zaferes.png"

/*
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

function App() {
	const dataArray = data.map(prod => <Card
		key={prod.id}
		title={prod.title}
		description={prod.description}
		price={prod.price}
		coverImg={prod.coverImg}
		stats={prod.stats}
		location={prod.location}
		openSpots={prod.openSpots}
	/>)

	// console.log
	return (
		<div>
			<Navbar />
			<Hero />
			<div className='cards-list'>
				{dataArray}
			</div>
		</div>
	)
}
export default App;
