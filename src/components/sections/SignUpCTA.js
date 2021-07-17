import React from 'react'
import './SignUpCTA.css'
import { Container } from '../layouts/Container'
import { Button } from '../elements/Button'
import { LoremIpsum } from 'react-lorem-ipsum'

export const SignUpCTA = () => {
    return (
        <Container
            className="SignUpCTA"
            bgimg={'radial-gradient(#26CF83 0.55px, #202121 0.55px)'}
            bgcolor="#202121"
            >
            <div className="grid">
                <div className="signup-content-container">
                    <div className="text-wrapper">
                        <LoremIpsum p={1} avgSentencesPerParagraph={1} avgWordsPerSentence={6} />
                    </div>
                </div>

                <div className="btn-container">
                    <Button type="primary__large">Sign Up Today</Button>
                </div>
                
            </div>
        </Container>
    )
}