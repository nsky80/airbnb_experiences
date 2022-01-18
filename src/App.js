import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero"
import Card from "./components/Card"
import katie_zaferes from "./images/katie-zaferes.png"
import JokesData from "./components/JokesData"
import Joke from "./components/Joke"
/*
Challenge: See if you can correctly pass the necessary props to the 
Joke component in the .map() (and render the jokeElements array) so 
the jokes show up on the page again
*/



function App() {
	const jokeElements = JokesData.map(joke => <Joke 
		setup={joke.setup}
		punchline={joke.punchline}
		/>
	)
	console.log(jokeElements)
	return (
		<div>
			<Navbar />
			{jokeElements}
			{/* <Hero />
			<Card
				img={katie_zaferes}
				rating={5.0}
				reviewCount={6}
				country = "USA"
				title="Life Lessons with Katie Zaferes"
				price={136}
			/> */}
		</div>
	)
}
export default App;
