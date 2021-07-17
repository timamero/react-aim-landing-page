import React from 'react'
import './WhyAim.css'
import { FaMoneyBillWave, FaWallet } from 'react-icons/fa'
import { AiOutlineStock } from 'react-icons/ai'
import { Container } from '../layouts/Container'
import { LoremIpsum } from 'react-lorem-ipsum'
import Zoom from 'react-reveal/Zoom';

export const WhyAim = () => {
    return (
        <Container className="WhyAim">
            <h2>Why Aim</h2>
            
            <div className="grid">
                <Zoom>
                    <div className="card">
                        <h3>Lorem ipsum dolor sit.</h3>
                        <FaMoneyBillWave className="icon"/>
                        <div className="text-wrapper">
                            <LoremIpsum p={1} avgSentencesPerParagraph={5} avgWordsPerSentence={8} />
                        </div>
                    </div>
                </Zoom>
                <Zoom>
                <div className="card">
                    <h3>Lorem ipsum dolor sit.</h3>
                    <AiOutlineStock className="icon"/>
                    <div className="text-wrapper">
                        <LoremIpsum p={1} avgSentencesPerParagraph={5} avgWordsPerSentence={8} />
                    </div>
                </div>
                </Zoom>
                <Zoom>
                <div className="card">
                    <h3>Lorem ipsum dolor sit.</h3>
                    <FaWallet className="icon"/>
                    <div className="text-wrapper">
                        <LoremIpsum p={1} avgSentencesPerParagraph={5} avgWordsPerSentence={8} />
                    </div>
                </div>
                </Zoom>
            </div>
            
        </Container>
    )
}