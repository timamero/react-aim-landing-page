import React from 'react'
import './Footer.css'
import { footerMenuItems } from '../content/FooterMenuItems'
import { Container } from '../layouts/Container'
import { FaGithubAlt, FaTwitter, FaDiscord, FaLinkedinIn } from 'react-icons/fa'

export const Footer = () => {
    return (
        <Container className="Footer">
            <div className="grid">
                <div className="grid-item">
                    <p className="links-category">{footerMenuItems[0].name}</p>
                    <ul className="links-wrapper">
                        {footerMenuItems[0].links.map(item => {
                            return (
                                <li key={item.id}><a href={item.link}>{item.name}</a></li>
                            )
                        })}
                    </ul>
                </div>

                <div className="grid-item">
                    <p className="links-category">{footerMenuItems[1].name}</p>
                    <ul className="links-wrapper">
                        {footerMenuItems[1].links.map(item => {
                            return (
                                <li key={item.id}><a href={item.link}>{item.name}</a></li>
                            )
                        })}
                    </ul>
                </div>

                <div className="grid-item">
                    <p className="links-category">{footerMenuItems[2].name}</p>
                    <ul className="links-wrapper">
                        {footerMenuItems[2].links.map(item => {
                            return (
                                <li key={item.id}><a href={item.link}>{item.name}</a></li>
                            )
                        })}
                    </ul>
                </div>              
            </div>
            <div className="footer-bottom">
                <p className="copyright">&copy;2021 Aim</p>
                <div className="social">
                    <FaGithubAlt className="icon"/>
                    <FaTwitter className="icon" />
                    <FaDiscord className="icon" />
                    <FaLinkedinIn className="icon" />
                </div>
            </div>
            
        </Container>
    )
}