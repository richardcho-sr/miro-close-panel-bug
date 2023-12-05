import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps =
  async function getServerSideProps() {
    return {
      props: {},
    };
  };

export default function Panel() {
  const closePanel = async () => {
    await miro.board.ui.closePanel();
  };
  return (
    <>
      <button onClick={closePanel}>Close panel</button>
    </>
  );
}
