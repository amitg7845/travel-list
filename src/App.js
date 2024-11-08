// import { useState } from "react";

// // const initialItems = [
// //   { id: 1, description: "Passports", quantity: 2, packed: false },
// //   { id: 2, description: "Socks", quantity: 12, packed: false },
// //   { id: 3, description: "Diary", quantity: 2, packed: true },
// //   { id: 4, description: "Pen", quantity: 1, packed: false },
// // ];

// const itemList = [];

// export default function App() {
//   return (<div className="app">
//     <Logo />
//     <Form />
//     <PackingList />
//     <Stats />
//   </div>)
// };


// function Logo() {
//   return <h1> Far Away</h1>
// }

// function Form() {
//   const [description, setDescription] = useState("");
//   const [quantity, setquantity] = useState(5);

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!description) return;

//     const setItem = { description, quantity, packed: false, id: crypto.randomUUID() }
//     itemList.unshift(setItem);
//     localStorage.setItem("tripItem", JSON.stringify(itemList));
//     setquantity(1);
//     setDescription("");
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>What do you need for your trip ?</h3>
//       <select value={quantity} onChange={(e) => setquantity(+e.target.value)}>
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option key={num} value={num}>{num}</option>
//         ))}
//       </select>
//       <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
//       <button>Add</button>
//     </form>
//   )
// }

// function PackingList() {
//   let items =  JSON.parse(localStorage.getItem('tripItem'));
//   return (<div className="list">
//     <ul>
//       {items.map((item) => (
//         <Item key={item.id} item={item} />
//       ))}
//     </ul>
//   </div>)
// }

// function Item({ item }) {
//   return (<li style={item.packed ? { textDecoration: "line-through" } : {}}> <span>{item.quantity} {item.description}</span> <button>❌</button> </li>);
// }

// function Stats() {
//   return (
//     <footer className="stats">
//       <em>
//         You have X items on your list, and you already packed X (X%);
//       </em>
//     </footer>
//   )
// }