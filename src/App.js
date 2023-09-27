import './App.css';

import Card from './componets/Card';

function App() {

  let data = {
    title: 'Card title',
    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }

  let data1 = {
    title: 'Special title treatment',
    text: 'With supporting text below as a natural lead-in to additional content.'
  }

  return (
    <>
      <Card {...data}>
        <img className='picture' src='https://i.pinimg.com/736x/e9/f2/96/e9f29675534a23d5adbe0d98c152ff4e.jpg' alt='' />
      </Card>
      <Card {...data1} />
    </>
  );
}

export default App;
