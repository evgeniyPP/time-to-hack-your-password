import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

function Input(props) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const Icon = showPassword ? EyeOffIcon : EyeIcon;

  const handleChange = event => {
    const value = event.target.value;
    setPassword(value);
    props.testPassword(value);
  };

  return (
    <div className="mt-10 flex justify-center">
      <label htmlFor="pass" className="sr-only">
        Your password
      </label>
      <div className="max-w-xs w-full mt-1 relative rounded-md shadow-sm">
        <input
          onChange={handleChange}
          value={password}
          type={showPassword ? 'text' : 'password'}
          name="pass"
          id="pass"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 text-lg border-gray-300 rounded-md"
          placeholder="Enter your password to check"
        />
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        >
          <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export default Input;
