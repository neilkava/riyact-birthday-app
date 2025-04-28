// import Alert from "./components/Alert";
import Button from "./components/Button";
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

    // <Alert>
    //   Hello <span>World</span>
    // </Alert>

    <Button onClickkuh={() => {console.log("YO");}} color="danger">
      My Button
    </Button>
  );
}

export default App;
