import SplitScreen from "./components/split-screen";
import RegularList from "./components/lists/Regular";
import { authors } from "./data/authors";
import {SmallAuthorListItem} from "./components/authors/SmallListItems";
import {LargeAuthorListItem} from "./components/authors/LargeListItems";
import { books } from "./data/books";
import {SmallBookListItem} from "./components/books/SmallListItems";
import {LargeBookListItem} from "./components/books/LargeListItems";
import NumberedList from "./components/lists/Numbered";
import { Modal } from "./components/Modal";

const AuthorLeftSideComp =({title}) =>{
  return(
    <>
      <h2>{title} Authors's Lists</h2>
      <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem}/>
      <NumberedList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem}/>
    </>
  )
}

const BooksRightSideComp =({title}) =>{
  return(
    <>
      <h2>{title} Books's Lists</h2>
      <RegularList items={books} sourceName={"book"} ItemComponent={SmallBookListItem}/>
      <NumberedList items={books} sourceName={"book"} ItemComponent={LargeBookListItem}/>
    </>
  )
}

const LeftSideComp = ({title}) =>{
  return <h2 style={{backgroundColor:'#FCFCA4'}}>{title}</h2>
}

const RightSideComp = ({title}) =>{
  return <h2 style={{backgroundColor:'#E4ECEC'}}>{title}</h2>
}

function App() {
  return (
    <>
    {/* Items Component Desing Pattern */}
    <h1>Layout Component - 3. Modal + Lists</h1>

    <h2>Books's Lists</h2>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>

    <h1>Layout Component - Combination of two - Split-Screen + Lists</h1>
    <SplitScreen leftWidth={1} rightWidth={1}>
        <AuthorLeftSideComp title="Left Side" />
        <BooksRightSideComp title="Right Side" />
    </SplitScreen>

     {/* Items Component Desing Pattern */}
     <h1>Layout Component - 2. Lists</h1>

    <h2>Authors's Lists</h2>
    <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem}/>
    <NumberedList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem}/>
    <h2>Books's Lists</h2>
    <RegularList items={books} sourceName={"book"} ItemComponent={SmallBookListItem}/>
    <NumberedList items={books} sourceName={"book"} ItemComponent={LargeBookListItem}/>


    {/* Split-Screen Component Desing Pattern */}
    <h1>Layout Component - 1. Split-Screen</h1>
    <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComp title="Left Side" />
        <RightSideComp title="Right Side" />
    </SplitScreen>

    

   

    
      

    </>
    
  );
}

export default App;
