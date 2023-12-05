import { useEffect } from 'react';

export default function Main() {
  useEffect(() => {
    window.miro.board.ui.on('icon:click', async () => {
      window.miro.board.ui.openPanel({
        url: `/panel`,
      });
    });
  }, []);
  return <>Hello, World</>;
}
