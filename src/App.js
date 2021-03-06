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
	// We can pass the object directly by unpacking it as follows:
	// ... will unpack and pass it to the function
	const dataArray = data.map(prod => <Card
		key={prod.id}
		{...prod}
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
