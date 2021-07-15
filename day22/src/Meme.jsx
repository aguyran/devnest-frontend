const Meme = ({ meme, setMeme }) => {
  console.log(meme);
  return (
    <div className="meme">
      <img src={meme.url} alt="" />
      <div>
        {[...Array(meme.box_count)].map((key, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Meme caption ${index + 1}`}
          ></input>
        ))}
      </div>
      <div>
        <button>Generate Meme</button>
        <button onClick={() => setMeme(null)}>Go Back</button>
      </div>
    </div>
  );
};

export default Meme;
