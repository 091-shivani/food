import Card from "./Card";

function Carousal() {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner" id="carousal">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900x700/?choco"
              className="d-block w-100"
              //style={{ filter: "brightness(30%" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?sweets"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?smoothie"
              className="d-block w-100"
              alt="..."
            />
          </div>
          s
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <Card
          imgsrc={"https://source.unsplash.com/random/900x700/?chocolate"}
        ></Card>
        <Card
          imgsrc={"https://source.unsplash.com/random/900x700/?burger"}
        ></Card>
        <Card
          imgsrc={"https://source.unsplash.com/random/900x700/?cake"}
        ></Card>
        <Card
          imgsrc={"https://source.unsplash.com/random/900x700/?pizza"}
        ></Card>
        <Card
          imgsrc={"https://source.unsplash.com/random/900x700/?fries"}
        ></Card>
        <Card
          imgsrc={"https://source.unsplash.com/random/900x700/?snack"}
        ></Card>
      </div>
    </>
  );
}

export default Carousal;
