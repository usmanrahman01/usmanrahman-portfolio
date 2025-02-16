const Banner = ({ images, speed = 18000 }) => {
  return (
    <div className="inner">
      <div className="wrapper">
        <section className="imgsec" style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img className="imagesec" src={image} alt={id} />
            </div>
          ))}
        </section>
        <section className="imgsec" style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img className="imagesec" src={image} alt={id} />
            </div>
          ))}
        </section>
        <section className="imgsec" style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img className="imagesec" src={image} alt={id} />
            </div>
          ))}
        </section>
        
      
      </div>
    </div>
  );
};

export { Banner };
