import { MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  // сonst [counter, setCounter] = useState<number>(0);

  const addCounter = (e: MouseEvent) => {
    console.log(e);

  };

  // useEffect(() => {}, []);

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
      <Button appearance='big' onClick={addCounter}>Кнопка</Button>
      <Input placeholder='Email'/>
    </>
  );
}

export default App;
