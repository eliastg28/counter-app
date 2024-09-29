import { useState } from 'react';
import { INITIAL_VALUE_TOGLE } from '../../helpers/Togle';

const useToggle = (initialValue = INITIAL_VALUE_TOGLE) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue(v => !v);

  return [value, toggleValue];
};

export default useToggle;
