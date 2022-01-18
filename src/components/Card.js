/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

// import star from ".../images/star.png"

export default function Card(props) {
    return (
      <section>
        <div className="card">
          <img src={props.img} alt="Avatar" className="card--image"/>
          <div className="card--stats">
            <img src="/images/star.png" alt="rating" className="card--star" />
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.country}</span>
          </div>
          <p>{props.title}</p>
          <p><b>From ${props.price}</b>/person</p>
        </div>

      </section>
    )
}