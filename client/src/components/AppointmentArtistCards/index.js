import React from "react";
import Button from 'react-bootstrap/Button';
import images from "../../images.json";
import StarRating from "../StarRating/index";
import "./style.css";

class ArtistCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: images
        }
    }

    render() {
        return ( <
            span >
            <
            div className = "artistCardWrapper" > {
                this.state.images.map(image => ( <
                    div className = "card" >
                    <
                    div className = "img-container" >
                    <
                    img alt = { image.alt }
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Square_200x200.svg/200px-Square_200x200.svg.png" / >

                    <
                    /div> <
                    div className = "content" >
                    <
                    ul >
                    <
                    li >
                    <
                    strong > Artist Name: < /strong> {image.name} <
                    /li> <
                    li >
                    <
                    strong > Specialties < /strong> {image.occupation} <
                    /li> <
                    li >
                    <
                    strong > Rating < /strong> <StarRating / >
                    <
                    /li> <
                    li >

                    <
                    Button variant = "danger" >
                    View Artist <
                    /Button> <
                    /li> <
                    /ul> <
                    /div> {
                        /*} <span onClick={() => props.removeFriend(props.id)} className="remove">
                                𝘅
                            </span> */
                    } <
                    /div>
                ))
            } <
            /div>


        )
    }
}


export default ArtistCard;

