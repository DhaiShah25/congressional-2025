import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

export default function Cards() {
    return (
        <div className='cards'>
            <h1>Read some of our articles!</h1>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src='/wood-bench.avif'
                        text='How to Build a Bench'
                        label='Guide'
                        path='/manuals/bench'
                    />
                    <CardItem
                        src='/wooden-gate.avif'
                        text='How to build a Wooden Gate'
                        label='Guide'
                        path='/manuals/gate'
                    />
                    <CardItem
                        src='/shelves.avif'
                        text='How to Install Shelves'
                        label='Installation'
                        path='/manuals/shelves' />

                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src='/window.avif'
                        text='How to Assemble a Window'
                        label='Guide'
                        path='/manuals/window'
                    />
                    <CardItem
                        src='/wooden-fence.avif'
                        text='How to Install a Fence'
                        label='Installation'
                        path='/manuals/fence'
                    />
                    <CardItem
                        src='/flatscreen-tv.avif'
                        text='How to Mount a TV'
                        label='Guide'
                        path='/manuals/tv'
                    />
                </ul>
            </div>
        </div>
    );
}
