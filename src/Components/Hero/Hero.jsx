import React from 'react';
import './Hero.css'
import man from './man.png'

const Hero = () => {
    return (
        <div>
           
            <div class="banner">
                <div class="textbox">
                    <h2>
                        SHAPE YOUR <br/> PERFECT BODY
                    </h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <a href="#">Take A Tour Now</a>
                </div>
                <div class="imgbox">
                    <img src={man}/>
                </div>
                
                
            </div>
        </div>
    );
};

export default Hero;