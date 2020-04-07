import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
    return (
        <>
            <Hero hero="defaultHero">
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting fromm 100dt">
                    <Link to="/Rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services> ></Services>
            
            <FeaturedRooms/>
             
            
        </>
    )
}
