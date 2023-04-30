import EachReview from "./EachReview"

import BoluBala from "./herosImages/BoluBala.png"
import camelWilmer from "./herosImages/camelWilmer.png"
import IshayaBello from "./herosImages/IshayaBello.png"
import paulSillas from "./herosImages/paulSillas.png"
import vivianJohnson from "./herosImages/vivianJohnson.png"
import DustinHan from "./herosImages/DustinHan.png"
 
// paulSillas //second shayo was changed to paul silla, since shayo was repeated twice

const Reviews = () => {
  return (
    <div className="home__review">
      <h5 className="home__heading--five">What Our Clients Say</h5>
      <p className=" home__heading home__review--trusted">
        Trusted by Many Students around the world
        </p>
      <p className="home__review--testimony">
        Here are testimonies from our users stating why they use our product and why they would recommend it to everyone.
      </p>
      <EachReview  
        userName="Bolu Bala" 
      img={BoluBala} 
      />

      <EachReview  
        userName="Vivian Johnson" 
      img={vivianJohnson} 
      />

      <EachReview  
        userName="Dustin Henderson" 
      img={DustinHan} 
      />

      <EachReview  
        userName="Paul Sillas" 
      img={paulSillas} 
      />

      <EachReview  
        userName="Carmen Wilmer" 
      img={camelWilmer} 
      />

      <EachReview  
        userName="Ishaya Bello" 
      img={IshayaBello} 
      />

    </div>
  )
}

export default Reviews