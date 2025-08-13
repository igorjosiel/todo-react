import Text from "./components/text";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text variant="body-sm-bold" className="text-pink-base">Olá mundo!</Text>
      <Text variant="body-md" className="text-green-base">Olá mundo!</Text>
      <Text variant="body-md-bold" className="text-blue-base">Olá mundo!</Text>
    </div>
  );
}

export default App;
