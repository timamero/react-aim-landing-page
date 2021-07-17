import React from 'react'
import './Hero.css'
import economy_analysis from '../assets/economy_analysis.svg'
import { Container } from '../layouts/Container'
import { Button } from '../elements/Button'
import { LoremIpsum } from 'react-lorem-ipsum'

export const Hero = () => {
    return (
        <Container
            className="Hero"
            bgimg={'radial-gradient(#26CF83 0.55px, #202121 0.55px)'}
            bgcolor="#202121">
            <div className="grid">
                <div className="hero-content-container">
                    <img src={economy_analysis} alt="Vector drawing of economy analysis"/>
                    <div className="text-wrapper">
                        <LoremIpsum p={1} avgSentencesPerParagraph={1} avgWordsPerSentence={6} />
                        <Button type="primary__large">Learn More</Button>
                    </div>
                </div>
                
                <div className="btn-container">
                    <Button type="primary__large">Sign Up</Button>
                    <Button type="outline__large">Log In</Button>
                </div>
            </div>
        </Container>
    )
}