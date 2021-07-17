import React, {useState, useEffect} from 'react';
import './Nav.css'
import logo from '../assets/logo.svg'
import { menuItems, menuItemsDropdown } from '../content/MenuItems';
import { Container } from '../layouts/Container';
import { Button } from '../elements/Button';
import { BiDownArrow } from 'react-icons/bi';
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'

const NavBrand = () => {
    return (
        <a href="/#" className="NavBrand flex-row-centered">
            <img src={logo} alt="Aim Finance App"/>
            <p>Aim</p>
        </a>         
    )
}

const MenuItem = ({item}) => {
    return (
        <li className="MenuItem">
            <a href={item.link}>
                {item.name}
            </a>
        </li>
    )
}

const NavMenuItems = () => {
    return (
        <ul className="NavMenuItems">
            {menuItems.map(item => {
                return (<MenuItem 
                    key={item.id}
                    item={item}
                />)}
                )
            }
        </ul>
    )
}

const Dropdown = ({toggle, name, items}) => { 
    return (
        <ul className={toggle ? "Dropdown show-dropdown" : "Dropdown"} id={name}>
            {items.map(item => {
                return (
                    <li key={item.id} className="">
                        <a href={item.link}>{item.name}</a>
                    </li>
                )}         
            )}
        </ul>
    )
}

const NavMenuItemsWithDropdown = () => {
    const [productsToggle, setProductsToggle] = useState(false)
    const [resourcesToggle, setResourcesToggle] = useState(false)
    const [lastToggled, setLastToggled] = useState('')


    const handleProductDropdownClick = (event) => {
        setProductsToggle(!productsToggle)
        setLastToggled('products')
    }

    const handleResourcesDropdownClick = (event) => {
        setResourcesToggle(!resourcesToggle)
        setLastToggled('resources')
    }

    useEffect(() => {
        if (productsToggle && resourcesToggle) {
            if (lastToggled === 'products') {
                setResourcesToggle(!resourcesToggle)
            } else if (lastToggled === 'resources') {
                setProductsToggle(!productsToggle)
            }
        }
    }, [lastToggled, productsToggle, resourcesToggle])

    return (
        <ul className="NavMenuItemsWithDropdown">
            {menuItemsDropdown.map(item => {
                return (
                    <li key={item.id}>
                        <div
                            className="dropdown-menu-item" 
                            id={item.id}>
                            <div onClick={item.name==='Products' 
                                ? handleProductDropdownClick 
                                : handleResourcesDropdownClick} className="dropdown-menu-label">
                                <p>{item.name}</p>
                                <BiDownArrow className="dropdown-menu-arrow" /> 
                            </div>
                            <Dropdown
                                toggle={item.name==='Products' ? productsToggle : resourcesToggle}
                                name={item.name}
                                items={item.dropdown}
                                /> 
                        </div>
                    </li>
                )
            })
            }
        </ul>      
    )
}

const Nav = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    
    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle)
    }

    return (
        <Container id="nav-wrapper">
            <nav className="Nav">
                <NavBrand />
                <div className={menuToggle ? "nav-menus" : "nav-menus hide-nav-menus"}>
                    <NavMenuItems />
                    <NavMenuItemsWithDropdown />
                    <Button type="primary">Sign Up</Button>
                    <Button type="outline">Log In</Button>
                </div>
                <CgMenuRightAlt
                    onClick={handleMenuToggle}
                    className={menuToggle ? "nav-menu-icon hide-nav-menu-icon" : "nav-menu-icon"}
                />
                <CgClose
                    onClick={handleMenuToggle}
                    className={menuToggle ? "nav-menu-icon" : "nav-menu-icon hide-nav-menu-icon"}
                />
            </nav>
        </Container>   
    )
}

export default Nav;