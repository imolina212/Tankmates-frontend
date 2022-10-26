import { BsStarFill, BsStarHalf, BsStar} from "react-icons/bs";

const getStars = (rating) => {
    let starsToAdd = rating;
    let ratingStars = [];
    

    while (ratingStars.length < 5){
      if (starsToAdd >= 1){
        ratingStars.push(<BsStarFill />)
        starsToAdd--;
      }
      if (starsToAdd > 0 && starsToAdd < 1){
        ratingStars.push(<BsStarHalf />)
        starsToAdd = 0;
      } 
      // else push empty starts until ratingStars length is equal to 5
      if (starsToAdd === 0 && ratingStars.length < 5){
        ratingStars.push(<BsStar />)
      }
    }
    return ratingStars;
  }

export default getStars;