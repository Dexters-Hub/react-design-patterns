import SplitScreen from "./components/split-screen";

const LeftSideComp = ({title}) =>{
  return <h2 style={{backgroundColor:'#FCFCA4'}}>{title}</h2>
}

const RightSideComp = ({title}) =>{
  return <h2 style={{backgroundColor:'#E4ECEC'}}>{title}</h2>
}

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComp title="Left Side" />
      <RightSideComp title="Right Side" />
    </SplitScreen>
  );
}

export default App;
