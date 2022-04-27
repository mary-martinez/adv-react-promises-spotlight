import { asyncGetQuotes, thenGetQuotes, tryGetQuotes, tryThenGetQuotes } from './services/promise-me';
export default function App() {
  return (
    <>
    <button onClick={async() => console.log(await asyncGetQuotes())}>async Get Quotes</button>
    <button onClick={async() => console.log(await thenGetQuotes())}>then Get Quotes</button>
    <button onClick={async() => console.log(await tryGetQuotes())}>try Get Quotes</button>
    <button onClick={async() => console.log(await tryThenGetQuotes())}>tryThen Get Quotes</button>
    </>
  );
}
