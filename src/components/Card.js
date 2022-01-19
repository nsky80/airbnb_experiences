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

    
    /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */

        /*
    Challenge: Fix our component! 😱
    */
export default function Card(param) {
  let props = param.item
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  } 
    return (
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
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
    )
}