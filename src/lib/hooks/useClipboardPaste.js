import { useEffect } from 'react';

const useClipboardFill = (callback, analyticsCallback) => useEffect(() => {
  const pasteHandler = event => {
    event.preventDefault();
    navigator.clipboard.readText().then(text => {
      callback(text);
      analyticsCallback && analyticsCallback(text);
    });
  };

  document.addEventListener('paste', pasteHandler);

  return () => document.removeEventListener('paste', pasteHandler);
});

export default useClipboardFill;
