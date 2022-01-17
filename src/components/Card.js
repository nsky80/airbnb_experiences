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
import katie_zaferes from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card() {
    return (
      <section>
        <div className="card">
          <img src={katie_zaferes} alt="Avatar" className="card--image"/>
          <div className="card--stats">
            <img src={star} alt="rating" className="card--star" />
            <span>5</span>
            <span className="gray">(6) • </span>
            <span className="gray">USA</span>
          </div>
          <p>Life lessions with katie_zaferes</p>
          <p><b>From $136</b>/person</p>
        </div>

      </section>
    )
}