import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Content from './components/Content';
import Icon from './components/Icon';

function App() {
  return (
    <div className='App'>
      <div className="card">
        <Icon />
        <Header />
        <Content />
        <Button />
      </div>
      <div className="card-suvs">
        <Icon />
        <Header />
        <Content />
        <Button />
      </div>
      <div className="card-luxury">
        <Icon />
        <Header />
        <Content />
        <Button />
      </div>
    </div>
  );
}

export default App;
