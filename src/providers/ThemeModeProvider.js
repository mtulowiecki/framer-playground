import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useCallback,
} from 'react';

const getMql = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

const getBrowserTheme = () => {
  const mql = getMql();
  return mql && mql.matches ? 'dark' : 'light';
};

const onBrowserThemeChanged = (callback) => {
  const mql = getMql();
  const mqlListener = (e) => callback(e.matches ? 'dark' : 'light');
  mql && mql.addListener(mqlListener);
  return () => mql && mql.removeListener(mqlListener);
};

const getLocalStorageTheme = () => {
  try {
    const localTheme = localStorage && localStorage.getItem('theme');
    if (localTheme && ['light', 'dark'].includes(localTheme)) {
      return localTheme;
    }
  } catch (err) {
    console.warn('Can’t access local storage:', err.message);
  }
};

const setLocalStorageTheme = (themeMode) => {
  try {
    localStorage && localStorage.setItem('theme', themeMode);
  } catch (err) {
    console.warn('Can’t write to local storage:', err.message);
  }
};

const ThemeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(null);

  const updateThemeMode = useCallback(
    (newTheme) => {
      if (typeof newTheme === 'function') {
        setThemeMode((currentTheme) => {
          const actualNewTheme = newTheme(currentTheme);
          setLocalStorageTheme(actualNewTheme);
          return actualNewTheme;
        });
      } else {
        setLocalStorageTheme(newTheme);
        setThemeMode(newTheme);
      }
    },
    [setThemeMode]
  );

  useEffect(() => {
    if (themeMode === null) {
      setThemeMode(getLocalStorageTheme() || getBrowserTheme());
    }
    return onBrowserThemeChanged(updateThemeMode);
  }, [themeMode, updateThemeMode]);

  return (
    themeMode && (
      <ThemeContext.Provider value={[themeMode, updateThemeMode]}>
        {children([themeMode, updateThemeMode])}
      </ThemeContext.Provider>
    )
  );
};

export const useTheme = () => useContext(ThemeContext);
