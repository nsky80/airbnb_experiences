1. What do props help us accomplish?
Using props we can pass the parameters to the component function.
Make a component more reusable.


2. How do you pass a prop into a component?
By giving a name.
<MyAwesomeHeader title="???" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
Native elements have predefined properties in HTML so may no.   


4. How do I receive props in a component?
function Navbar(props) {
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
object