import React from 'react';

function Home() {
  return (
    <div className='home'>
      <div className='card'>
        <div className='home-card'>
        <h5>umamah</h5>
        <div className='card-image'>
          <img src="https://i.pinimg.com/564x/7e/c7/36/7ec736bb9ff150a42e7979191f702722.jpg" alt="lol"/>
        </div>
        <div className='card-content'>
        <i class="material-icons" style={{color:"rgb(255, 37, 146)"}}>favorite</i>
          <h6>Title:</h6>
          <p>Lorem ipsum dolor sit amet consectetur adquis quia? Molestiae alias voluptatem harum quas eius.</p>
          <input type='text' placeholder='add a comment'/>
        </div>
      </div>
        </div>

      
    </div>
  );
}

export default Home;
