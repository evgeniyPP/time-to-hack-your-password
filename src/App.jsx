import { useState } from 'react';
import useTimeToHack from './hooks/useTimeToHack';
import Input from './components/Input';
import Footer from './components/Footer';

function App() {
  const [timeToHack, setTimeToHack] = useState(null);

  const testPassword = value => {
    setTimeToHack(value ? useTimeToHack(value) : null);
  };

  return (
    <div className={`bg-${timeToHack ? 'level--' + timeToHack.level : 'white'}`}>
      <div className="flex flex-col justify-center h-screen max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
          What time it takes to hack your password?
        </h1>

        <Input testPassword={testPassword} />

        <p className={`mt-4 font-bold text-lg ${timeToHack ? '' : 'opacity-0'}`}>
          It will be hacked by brute force {timeToHack?.time}
        </p>

        <Footer timeToHack={timeToHack} />
      </div>
    </div>
  );
}

export default App;
