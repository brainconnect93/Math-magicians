import React from 'react';
// import './styles/homePage.css';

const Home = () => (
  <section className="home-container">
    <h1 className="welcome">Welcome to our page</h1>
    <p className="home-para">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry&apos;s standard dummy text ever since the,
      when an unknown printer took a galley of type and scrambled it to make a type.
      It has survived not only five centuries, but also the leap into electronic ,
      remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing.
      Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type spe.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
    <ul className="listContainer">
      <li className="listItem">Make simple calculations</li>
      <li className="listItem">Read a random math-related quotes.</li>
    </ul>
  </section>
);

export default Home;
