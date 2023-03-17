import { Carousel } from 'react-bootstrap'
import React from 'react'
import { FlipedCard } from '../Components/Flipedcard/FlipedCard'

export const BootstrapSlider = () => {
  return (
    <Carousel>
        <Carousel.Item>
            <FlipedCard/>
        </Carousel.Item>
        <Carousel.Item>
            <FlipedCard/>
        </Carousel.Item>
        <Carousel.Item>
            <FlipedCard/>
        </Carousel.Item>
        <Carousel.Item>
            <FlipedCard/>
        </Carousel.Item>
        <Carousel.Item>
            <FlipedCard/>
        </Carousel.Item>
    </Carousel>
  )
}
