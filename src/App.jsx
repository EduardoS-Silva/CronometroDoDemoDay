import './App.css';
import Title from './components/Title';
import useCountdown from './hooks/useCountdown';
import Counter from './components/Counter';
import Sanny from './assets/sanny.png';

function App() {
  const [day, hour, minute, second] = useCountdown("jul 6, 2024 00:00:00")

  return (
   <div className="App" style={{backgroundImage: `url(${Sanny})`}}>
    <div className="container">
      <Title title="Contagem Regressiva Para o DemoDay"/>
      <div className="countdown-container">
        <Counter title="Dias" number={day}/>
        <Counter title="Horas" number={hour}/>
        <Counter title="Minutos" number={minute}/>
        <Counter title="Segundos" number={second}/>
      </div>
    </div>
   </div>
  );
}

export default App
