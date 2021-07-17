import React from 'react'
import './SubscribeCTA.css'
import { Container } from '../layouts/Container'
import { Button } from '../elements/Button'
import { LoremIpsum } from 'react-lorem-ipsum'
import { RiMailSendFill } from 'react-icons/ri'

export const SubscribeCTA = () => {
    return (
        <Container className="SubscribeCTA">
            <div className="grid">
                <RiMailSendFill className="icon" />
                <div className="text-wrapper">
                    <LoremIpsum p={1} avgSentencesPerParagraph={1} avgWordsPerSentence={6} />
                </div>
                <form className="form">
                    <input placeholder="Enter Email"/>
                    <Button type="outline__large">Subscribe</Button>  
                </form>  
            </div>
        </Container>
    )
}