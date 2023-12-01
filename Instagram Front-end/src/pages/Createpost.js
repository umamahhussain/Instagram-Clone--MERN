import React from "react";

const CreatePost = () => {
    return (
       <div className="card input-filed" style={{margin:"10px auto",maxWidth:"500px",padding:"30px",textAlign:"center"}}>
        <input type="text" placeholder="Caption"/>
        <form action="#">
    <div className="file-field input-field">
      <div className="btn" style={{backgroundColor:"rgb(255, 37, 146)"}}>
        <span>File</span>
        <input type="file"/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>
    <button  className="btn waves-effect" style={{ backgroundColor: "rgb(255, 37, 146)", color: "white" }} type="submit" name="action">Login</button>

  </form>
       </div>
    )
}

export default CreatePost;