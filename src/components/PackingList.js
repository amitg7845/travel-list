import { useState } from "react";
import Item from './Item';


export default function PackingList({ items = [], onDeleteItem, onToggleItem, onClearItemList }) {
    // let items = JSON.parse(localStorage.getItem('tripItem'));
    const [sortBy, setSortBy] = useState("packed");
    // Need clarity
        let sortedItems;
        // console.log({items});

    // Determine the sorting criteria
    if (sortBy === 'input') {
        sortedItems = items; // Keep original order
    } else if (sortBy === "description") {
        sortedItems = items.sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortBy === 'packed') {
        sortedItems = items.sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (<div className="list">
        <ul>
            {sortedItems?.map((item) => (
                <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
            ))}
        </ul>
        <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="input"> Sort by input order</option>
                <option value="description"> Sort by input description</option>
                <option value="packed"> Sort by input packed status</option>
            </select>
            <button onClick={() => onClearItemList()}>Clear List</button>
        </div>
    </div>)
}