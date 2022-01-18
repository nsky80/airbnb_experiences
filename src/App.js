import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero"
import Card from "./components/Card"
// import katie_zaferes from "../images/katie-zaferes.png"

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
// To use images from public folder, we are using URLs instead of importing it from images folder.
// https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory
function App() {
	return (
		<div>
			<Navbar />
			{/* <Hero /> */}
			<Card
				img="/images/katie-zaferes.png"
				rating={5.0}
				reviewCount={6}
				country="USA"
				title="Life Lessons with Katie Zaferes"
				price={136}
			/>
		</div>
	)
}
export default App;
