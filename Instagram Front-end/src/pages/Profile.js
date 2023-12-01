import React from 'react';

function Profile() {
  return (
    <div style={{maxWidth:"550px",margin:"0px auto"}}>
      <div style={{display:"flex",justifyContent:"space-around",
    margin:"18px 0px",
    borderBottom:"1px solid black"}}>
        <div>
          <img style={{width:"160px",height:"160px",borderRadius:'80px'}} 
          src="https://i.pinimg.com/564x/7e/c7/36/7ec736bb9ff150a42e7979191f702722.jpg" alt="img"/>
        </div>
        <div>
          <h4>Umamah Hussain</h4>
          <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>

        </div>
      </div>


      <div className='gallery'>
        <img className='profile-img' width={"30%"} src="https://i.pinimg.com/564x/7e/c7/36/7ec736bb9ff150a42e7979191f702722.jpg" alt="prof"/>
        <img className='profile-img' width={"30%"} src="https://i.pinimg.com/564x/7e/c7/36/7ec736bb9ff150a42e7979191f702722.jpg" alt="prof"/>
        <img className='profile-img' width={"30%"} src="https://i.pinimg.com/564x/7e/c7/36/7ec736bb9ff150a42e7979191f702722.jpg" alt="prof"/>
        <img className='profile-img' width={"30%"} src="https://i.pinimg.com/564x/7e/c7/36/7ec736bb9ff150a42e7979191f702722.jpg" alt="prof"/>
        <img className='profile-img' width={"30%"} src="https://i.pinimg.com/564x/7e/c7/36/7ec736bb9ff150a42e7979191f702722.jpg" alt="prof"/>
        <img className='profile-img' width={"30%"} src="https://i.pinimg.com/564x/7e/c7/36/7ec736bb9ff150a42e7979191f702722.jpg" alt="prof"/>

      </div>

    </div>
  );
}

export default Profile;
