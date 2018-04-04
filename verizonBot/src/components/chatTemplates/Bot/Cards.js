import React from "react";
import {Component} from "react";
import {v4} from "uuid";
import StarRatingComponent from 'react-star-rating-component';



class Cards extends Component{
    constructor(props){
        super(props);
        this.state = {flipped: false, clicked: false};
        
    };

    flip(event){
        this.setState({ flipped: !this.state.flipped , clicked: true});
        var innerHTML = event.currentTarget.innerHTML.closest('.card-container');
        console.log(innerHTML);
    }

    render(){
        if(this.props.cardDetails){
            var flippedCSS = this.state.flipped
                              ? " flipped"
                              : "";
            
            return(

                <div className="d-flex justify-content-start mt-1">
                    {

                        this.props.cardDetails.map(card =>(
                            <div className="card text-white border-info mb-3 custom-styles mr-1" key={v4()}>
                            <div className="card">
                            <div className="content">
                            <div className="front">
                                    <div className="card-header">
                                        <div className="d-flex justify-content-center">
                                            {card.title}
                                            </div>
                                    </div>
                                <div className="d-flex justify-content-center">
                                    <a href={card.url} target="_blank">
                                        <img className="card-img-top mt-1" src={card.imageURL} alt="Card image cap"/>
                                    </a>
                                </div>
                                <div className="card-body front">
                                    <StarRatingComponent
                                        name="rate"
                                        editing={false}
                                        renderStarIcon={() => <span>★</span>}
                                        starCount={5}
                                        value={card.rating}
                                    />
                                    <div className="d-flex justify-content-between">
                                        <p className="h6 card-title mr-2">{card.info}</p>
                                        <p className="h6 card-title">{card.price}</p>
                                    </div>
                                    <p className="card-text">{card.description}</p>
                                    </div>

                                     </div>
                                    
                                    <div className="back fixed-top">
                                    <div className="card-header ">
                                        <div className="d-flex justify-content-center">
                                            {card.title}
                                            </div>
                                    </div>
                                    <div className="card-text ">
                                    <p>{card.feature}</p>
                                    </div>
                                    <div className="">
                                    <p className="col-md-10">{card.description1}</p>
                                    <p className="col-md-10">{card.description2}</p>
                                    </div>
                                    </div>
                               

                              
                                
                              </div>
                            </div>
                            </div>

                            
                            
                            
                              
                        ))
                    }
                </div>

            );
        }
        else{
            return(null);
        }
    }

}

export default Cards;




                   /* <div className="d-flex justify-content-start mt-1">
                    {
                        this.props.cardDetails.map(card =>(
                            <div className="card text-white border-info mb-3 custom-styles mr-1" key={v4()}>
                                    <div className="card-header">
                                        <div className="d-flex justify-content-center">
                                            {card.title}
                                            </div>
                                    </div>
                                <div className="d-flex justify-content-center">
                                    <a href={card.url} target="_blank">
                                        <img className="card-img-top mt-1" src={card.imageURL} alt="Card image cap"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <StarRatingComponent
                                        name="rate"
                                        editing={false}
                                        renderStarIcon={() => <span>★</span>}
                                        starCount={5}
                                        value={card.rating}
                                    />
                                    <div className="d-flex justify-content-between">
                                        <p className="h6 card-title mr-2">{card.info}</p>
                                        <p className="h6 card-title">{card.price}</p>
                                    </div>

                                    <p className="card-text">{card.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>*/







                /*<div className="card text-white border-info mb-3 custom-styles mr-1 flip" onClick={this.flip.bind(this)} key={v4()}>
                                    <div className= {"card-header card"+flippedCSS}>
                                        <div className="d-flex justify-content-center face front">
                                        <div className="inner">
                                            {card.title}
                                            </div>
                                            </div>
                                    </div>
                                <div className="d-flex justify-content-center">
                                    <a href={card.url} target="_blank">
                                        <img className="card-img-top mt-1" src={card.imageURL} alt="Card image cap"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <StarRatingComponent
                                        name="rate"
                                        editing={false}
                                        renderStarIcon={() => <span>★</span>}
                                        starCount={5}
                                        value={card.rating}
                                    />
                                    <div className="d-flex justify-content-between">
                                        <p className="h6 card-title mr-2">{card.info}</p>
                                        <p className="h6 card-title">{card.price}</p>
                                    </div>
                                    <div className="face back"> 
                                    <div className="inner text-center"> 
                                      <h3>{card.description}</h3>
                                      
                                    </div>
                                  </div>
                                    
                                </div>
                            </div>*/