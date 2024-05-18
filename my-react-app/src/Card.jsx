import ProfilePic from "./assets/proPic.jpg"
function Card(){
    return(
    <div className="card">
        <img className="card-image" src={ProfilePic} alt="Profile Picture"></img>
        <h2 className="card-title">Aseries94</h2>
        <p className="card-text">I do casual youtubing and videography</p>

    </div>   
    );

}
export default Card