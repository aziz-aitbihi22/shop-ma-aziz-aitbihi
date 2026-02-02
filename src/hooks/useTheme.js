import { useState, useEffect } from 'react';

const useTheme = () => {
  // كنشوفو واش كاين شي اختيار قديم في localStorage، وإلا كانديرو 'light' كبداية
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // كنطبقو الـ theme على الـ body باش نقدروا نتحكموا في الألوان بالـ CSS
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;