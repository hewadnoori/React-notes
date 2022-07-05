import './App.css';
import profile from './img/profile.png'
import twitter from './img/Twitter.svg'
import facebook from './img/Facebook.svg'
import instagram from './img/Instagram.svg'
import github from './img/GitHub.svg'
export default function App() {
    return (
        <div className='content'>
            <img src={profile} alt="profile img"></img>
            <div className='info'>
                <div className='info-social'>
                    <h2>Laura Smith</h2>
                    <h3>Frontend Developer</h3>
                    <p>laurasmith.website</p>
                    <div className='buttons'>
                        <a href="https://google.com/" target="_blank"><button className='email'>Email</button></a>
                        <a href="https://google.com/" target="_blank"><button className='linkedin'>LinkedIn</button></a>
                    </div>
                </div>
                <div className='info-about'>
                    <h4>About</h4>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h4>Interests</h4>
                    <p className='interest-p'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>

            </div>
            <div className='social'>
                <a href="https://google.com/" target="_blank"><img src={twitter}></img></a>
                <a href="https://google.com/" target="_blank"><img src={facebook}></img></a>
                <a href="https://google.com/" target="_blank"><img src={instagram}></img></a>
                <a href="https://google.com/" target="_blank"><img src={github}></img></a>
            </div>

        </div>
    )
}