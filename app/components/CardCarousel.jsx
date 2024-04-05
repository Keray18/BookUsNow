import { Flex } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useState } from 'react';
import CardComponent from './CardComponent';

const CardCarousel = () => {
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = process.env.NEXT_PUBLIC_URL;
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setGetData(data.events);
                } else {
                    console.error("Failed to fetch.");
                }
            } catch (err) {
                console.error("Error: ", err);
            }
        };
        fetchData();
    }, []);

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
    };

    const formatDistance = (distance) => {
        return Math.round(distance);
    };

    const degree = (weather) => {
        const parts = weather.split(' ');
        const mausam = parts[0];
        const temp = parts[1];
        const tempWithDegree = `${temp.slice(0, -1)}°${temp.slice(-1)}`;
        const changedWeather = mausam + ', ' + tempWithDegree;
        return changedWeather;
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 3000,
    } 

    return (
        <Slider {...settings}>
            {getData.length > 0 &&
                getData.map((event, index) => (
                    <Flex key={index}>
                        <CardComponent
                            date={formatDate(event.date)}
                            eventName={event.eventName}
                            cityName={event.cityName}
                            weather={degree(event.weather)}
                            distanceKm={formatDistance(event.distance)}
                        />
                    </Flex>
                ))}
        </Slider>
    );
};

export default CardCarousel;
