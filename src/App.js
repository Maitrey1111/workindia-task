import './App.css';

function App() {
  return (
      <div className="App">
        <div className="card-list-container">
          <div className="column">
            <h2>Column 1</h2>
            Hi
          </div>
          <div className="column">
            <h2>Column 2</h2>
            <div className="card-list">

            </div>
          </div>
          <div className="column">
            <h2>Column 3</h2>
            <div className="card-list">

            </div>
          </div>
      </div>
    </div>
  );
}

export default App;

//<h2>Column 1</h2>
//<div className="card-list">
  //{data.column1.map((item, index) => (
    //<div className="card" key={index}>
      //{/* Render card content here */}
      //{/* <h3>{item.title}</h3>
      //<p>{item.description}</p> */}
    //</div>
//  ))}
//</div>
