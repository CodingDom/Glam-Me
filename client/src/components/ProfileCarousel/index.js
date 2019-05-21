import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import { Row, Container} from "../Grid/index";
import Swiper from 'react-id-swiper';
// Need to add Pagination, Navigation modules
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm';

const params = {
  modules: [Pagination, Navigation],
  slidesPerView: window.innerWidth < 992 ? 2 : 3,
  spaceBetween: 10,
  slidesPerGroup: window.innerWidth < 992 ? 2 : 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  renderPrevButton: () => <div className="swiper-button-prev" style={{backgroundImage:`url("https://img.icons8.com/plasticine/100/000000/chevron-left.png")`}}></div>,
  renderNextButton: () => <div className="swiper-button-next" style={{backgroundImage:`url("https://img.icons8.com/plasticine/100/000000/chevron-right.png")`}}></div>,
};

export default class ProfileCarousel extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
      // console.log(this.props);
      let id = 0;
      return (
          <Row>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.css"></link>
            <div className="profileImageShowCase">
              <Swiper {...params}>
                {this.props.workImages.map(currImage => (
                  <div key={id++} style={{height:"200px",backgroundImage:`url(${currImage.image})`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
                ))}
              </Swiper>
          </div>
          </Row>
      )
    }
}