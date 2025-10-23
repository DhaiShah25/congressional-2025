import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Read some of our articles!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/wood-bench.jpg'
                            text='How to Build a Bench'
                            label='Guide'
                            path='/contractor'
                        />
                        <CardItem
                            src='images/wooden-gate.jpg'
                            text='How to build a Wooden Gate'
                            label='Guide'
                            path='/contractor'
                        />
                        <CardItem
                            src='images/shelves.jpg'
                            text='How to Install Shelves'
                            label='Installation'
                            path='/contractor' />

                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/window.jpg'
                            text='How to Assemble a Window'
                            label='Guide'
                            path='/contractor'
                        />
                        <CardItem
                            src='images/wooden-fence.jpg'
                            text='How to Install a Fence'
                            label='Installation'
                            path='/image-analyzer'
                        />
                        <CardItem
                            src='images/flatscreen-tv.jpg'
                            text='How to Mount a TV'
                            label='Guide'
                            path='/about'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
