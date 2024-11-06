import Main from '../../pages/main/main.tsx';

type AppProps = {
  placesCount: number;
};

function App({ placesCount }: AppProps) {
  return (
    <Main placesCount={placesCount}/>
  );
}

export default App;
