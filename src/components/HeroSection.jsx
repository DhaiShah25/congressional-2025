import { Button } from './Button';
import './HeroSection.css';

export default function HeroSection() {
    return (
        <div className='hero-container'>
            <video className='brightness-50' src='/videos/Contractor-video1.mp4' autoPlay loop muted aria-hidden="true" />
            <h1>Improve Your Home Today</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    Legal <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}
