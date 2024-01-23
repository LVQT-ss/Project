import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/App.css';
const TimeshareCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src="https://media.gettyimages.com/id/1393885905/photo/real-estate-agent-showing-a-mature-couple-a-new-house.jpg?s=612x612&w=0&k=20&c=uSziAtn73HvrWJxE8UR1HZlLkfjfvruhvgxZOPFDDzM=" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src="https://media.gettyimages.com/id/1315157591/photo/young-multi-ethnic-family-walking-outdoors-at-beach-house.jpg?s=612x612&w=0&k=20&c=PkUrs7OHF39yDij4E5KeJhsn9suWvKKFSkU7UXDehBo=" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src="https://media.gettyimages.com/id/116377067/photo/brother-and-sister-with-beach-ball-running-on-driveway.jpg?s=612x612&w=0&k=20&c=uut3i7F3nUmcfiu0qUF4jhkxV4S7zDsrRZz_Lc5Fzc4=" alt="First slide" />
            </Carousel.Item>
        </Carousel>
    );
};

export default TimeshareCarousel;
