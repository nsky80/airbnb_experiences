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
        {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
          <img src={props.coverImg} alt="Avatar" className="card--image"/>
          <div className="card--stats">
            <img src="/images/star.png" alt="rating" className="card--star" />
            <span>{props.stats.rating}</span>
            <span className="gray">({props.stats.reviewCount}) • </span>
            <span className="gray">{props.location}</span>
          </div>
          <p className="card--title">{props.title}</p>
          <p className="card--price"><b>From ${props.price}</b>/person</p>
        </div>

      </section>
    )
}