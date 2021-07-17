import React from 'react'
import Slider from 'react-slick'
import './GettingStarted.css'
import logo_altered from '../assets/logo_altered.svg'
import { Container } from '../layouts/Container'
import { LoremIpsum } from 'react-lorem-ipsum'
import Flip from 'react-reveal/Flip';

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

export const GettingStarted = () => {
    return (
        <Container 
            className="GettingStarted"
            bgcolor="transparent">
            <h2>Getting Started</h2>
            <Slider {...sliderSettings} className="grid">
                <div className="card">
                    <Flip><p className="step-number">1</p></Flip>
                    <div className="text-wrapper">
                        <LoremIpsum p={1} avgSentencesPerParagraph={1} avgWordsPerSentence={5} />
                    </div>
                    <img className="img" src={logo_altered} alt=""/>
                </div>

                <div className="card">
                    <p className="step-number">2</p>
                    <div className="text-wrapper">
                        <LoremIpsum p={1} avgSentencesPerParagraph={1} avgWordsPerSentence={5} />
                    </div>
                    <img className="img" src={logo_altered} alt=""/>
                </div>

                <div className="card">
                    <p className="step-number">3</p>
                    <div className="text-wrapper">
                        <LoremIpsum p={1} avgSentencesPerParagraph={1} avgWordsPerSentence={5} />
                    </div>
                    <img className="img" src={logo_altered} alt=""/>
                </div>

                <div className="card">
                    <p className="step-number">4</p>
                    <div className="text-wrapper">
                        <LoremIpsum p={1} avgSentencesPerParagraph={1} avgWordsPerSentence={5} />
                    </div>
                    <img className="img" src={logo_altered} alt=""/>
                </div>
                
            </Slider>
        </Container>
    )
}