import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services : [
            {
                icon : <FaCocktail/>,
                title :"free cocktails :D",
                info :" bel henddii ! "
            },
            {
                icon : <FaHiking/>,
                title :"endless hiking :D",
                info :" bel henddii ! "
            },
            {
                icon : <FaShuttleVan/>,
                title :"free shuttle :D",
                info :" bel henddii ! "
            },
            {
                icon : <FaBeer/>,
                title :"strongest beer :D",
                info :" bel henddii ! "
            }
        ]
    } ;
    render() {
        return (
            <section className="services">

                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return (
                            <article key={index} className="services">
                                <span>
                                    {item.icon}
                                </span>
                                <h6>
                                    {item.title}
                                </h6>
                                <p>
                                    {item.info}
                                </p>
                            </article>
                        ) 
                    })}

                </div>

                
            </section>
        )
    }
}
