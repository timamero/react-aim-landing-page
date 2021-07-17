import React from 'react'
import './Features.css'
import budgetting from '../assets/budgetting.svg'
import finances from '../assets/finances.svg'
import income from '../assets/income.svg'
import { Container } from '../layouts/Container'
import { Button } from '../elements/Button'
import { LoremIpsum } from 'react-lorem-ipsum'
import Roll from 'react-reveal/Roll';

export const Features = () => {
    return (
        <Container 
            className="Features"
            bgimg={'radial-gradient(#26CF83 0.55px, #202121 0.55px)'}
            bgcolor="#202121">
            <h2>Features</h2>
            <div className="grid">
                <Roll>
                    <div className="card">
                        <h3>Lorem ipsum dolor sit amet, consectetur.</h3>
                        <div className="large-text">
                            <LoremIpsum p={1} avgSentencesPerParagraph={2} avgWordsPerSentence={4}/>
                        </div>
                        <img className="img" src={budgetting} alt="Vector drawing of two figures making a budget"/>
                        <div className="btn-container">
                            <Button type="outline__large">View Documentation</Button>
                        </div>   
                    </div>
                </Roll>
                <Roll>
                    <div className="card">
                        <h3>Lorem ipsum dolor sit.</h3>
                        <div className="large-text">
                            <LoremIpsum p={1} avgSentencesPerParagraph={2} avgWordsPerSentence={4}/>
                        </div>
                        <img className="img" src={finances} alt="Vector drawing of two figures making a budget"/>
                        <div className="btn-container">
                            <Button type="outline__large">View Documentation</Button>
                        </div>
                    </div>
                </Roll>
                <Roll>
                    <div className="card">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <div className="large-text">
                            <LoremIpsum p={1} avgSentencesPerParagraph={2} avgWordsPerSentence={4}/>
                        </div>
                        <img className="img" src={income} alt="Vector drawing of two figures making a budget"/>
                        <div className="btn-container">
                            <Button type="outline__large">View Documentation</Button>
                        </div>
                    </div>
                </Roll>
            </div>
        </Container>
    )
}