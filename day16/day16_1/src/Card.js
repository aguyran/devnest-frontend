const Card = (props) => {
  return (
    <div className="container">
      <img
        src={props.img}
        className="imagetag"
        alt="meme"
      ></img>
      <h1>{props.heading}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
