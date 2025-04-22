import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";

function App() {
  // let cities = ["New York", "San Francisco", "Mumbai", "Paris", "London"];
  // let listHeader = "Cities";
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    // <div>
    //   <ListGroup items={cities} heading={listHeader} onSelectItem={handleSelectItem} />
    // </div>
    <Alert>
      Hello <span>World</span>
    </Alert>
  );
}

export default App;
