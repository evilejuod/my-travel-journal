import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './components/data'

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
        />
    )
})
  return (
    <div className="App">
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
 