import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info:"Using Our services will provide you access to free cocktails for your entire stay."
            },

            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"If you want to go much more adventurous in your trip, Choose us."
            },

            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle service",
                info:"Choosing us will also get you free shuttle service for your trip."
            },

            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"We have strongest beer you are gonna find in the country."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) =>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
