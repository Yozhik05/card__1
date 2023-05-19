import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <img src='/image/img.png' alt="Text" />
      <strong className="price">$100</strong>
      <h3>Zebronics head phone</h3>
      <p>
        A portable headphone with a battery life of 20 hours and IP67 rating.
        Comes with a 3 years warranty.
      </p>

      <p>Choose your colour</p>

      <div className="circle" style={{ display: "flex" }}>
        <div className="color red"></div>
        <div className="color green"></div>
        <div className="color tomato"></div>
      </div>

      <button className="button-1">Add to cart</button>
      <button className="button-2">Buy now</button>
      
      <a href="#">Read reviews</a>
    </div>
  );
}
