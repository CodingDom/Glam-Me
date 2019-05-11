import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class StarRating extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          rating: 1,
          rating_custom_icon: 6,
          rating_half_star: 3.5,
          rating_empty_initial: 0
        };
      }
    
      onStarClick(nextValue, prevValue, name) {
        console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
        this.setState({rating: nextValue});
      }
    
      onStarClickCustomIcon(nextValue, prevValue, name) {
        console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
        this.setState({rating_custom_icon: nextValue});
      }
    
      onStarClickHalfStar(nextValue, prevValue, name, e) {
        const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;
    
        if (xPos <= 0.5) {
          nextValue -= 0.5;
        }
    
        console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
        // console.log(e);
        this.setState({rating_half_star: nextValue});
      }
    
      onStarClickEmptyInitial(nextValue, prevValue, name) {
        console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
        this.setState({rating_empty_initial: nextValue});
      }
      render(){
          return (
            <StarRatingComponent
            name="app4"
            editing={false}
            starCount={5}
            value={this.props.value}
            emptyStarColor={this.props.emptyStarColor} />
          )
      }
}
 
export default StarRating;