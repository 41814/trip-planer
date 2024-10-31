import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Tours.css';


const Tours = () => {
    return (
        <>
         <header className="header " >
        <div className="header-background">
          <img src="oo.jpeg" alt="Pakistan Landscape" />
        </div>
        <nav className="navbar">
        <div className="logo">
          <img src="logo12.webp" alt="Trip Planner Logo" />
        </div>
          <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="/Tours">Tours</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="/login">SingnIn</a></li>

          </ul>
        </nav>
        <h1 class="hed pt-5"  ><span>Most Beautiful Cities In Pakistan</span></h1>
        <div className="hotel-card-container ">
            
            <div className="hotel-card ">
                <div className="hotel-info">
                    <h2>Lahore</h2>
                    <p>Lahore is the city of wonders with a rich history of over a millennium.</p>
                    <p>Description: Lahore the 2nd largest city of Pakistan and is capital of province Punjab. Lahore is referred to as cultural heart of Pakistan as it hosts most of the arts, cuisine, festivals, music, film-making, gardening and intelligentsia of the countr</p>
                    <p>Rating: ⭐⭐⭐⭐</p>
                    <Link to="/Lahore">
                        <button className="book-now-button">Visit Now</button>
                    </Link>
                </div>
                
            </div>
            <div className="hotel-card">
                <div className="hotel-info pb-3">
                    <h2>Islamabad</h2>
                    <p>Islamabad is the Capital and tenth largest city of Pakistan, having 1.5 million population</p>
                    <p>Pakistan's new Capital city nestles against the backdrop of the Margalla Hills at the northern end of the Pothowar Plateau that is regarded to be one of the earliest sites of human settlement in Asia.ed.</p>
                    <p>Rating: ⭐⭐⭐⭐</p>
                    <Link to="/Islamabad">
                        <button className="book-now-button">Visit Now</button>
                    </Link>
                </div>
                
            </div>
            <div className="hotel-card">
                <div className="hotel-info pb-3">
                    <h2>Muree</h2>
                    <p>It was actually founded in 1851 on pastureland of a ridge and developed quickly.</p>
                    <p>Description: Today Murre is Punjab's leading hill station attracting domestic and foreign visitors. The long Summer days are ideal for lazy strolls between Kashmir and Pindi points. There are Gallies around Murree covered with thick pine forests.</p>
                    <p>Rating: ⭐⭐⭐⭐</p>
                    <Link to="/Muree">
                        <button className="book-now-button">Visit Now</button>
                    </Link>
                </div>
               
            </div>
            <div className="hotel-card">
                <div className="hotel-info pb-3">
                    <h2>Karachi</h2>
                    <p>Karachi is Pakistan's largest city, principal seaport, and a major industrial and commercial centre.y</p>
                    <p>Description: The provincial capital of Sindh from 1936, it was also the first capital of independent Pakistan (1947–59).It is the seat of the University of Karachi and the terminus of Pakistan's railway system..</p>
                    <p>Rating: ⭐⭐⭐⭐</p>
                    <Link to="/Karachi">
                        <button className="book-now-button">Visit Now</button>
                    </Link>
                </div>
                
            </div>
            
        </div>
        </header>
        </>
    );
};

export default Tours;
