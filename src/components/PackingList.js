import { useState } from "react";
import Item from './Item';


export default function PackingList({ items, onDeleteItem, onToggleItem, onClearItemList }) {
    // let items = JSON.parse(localStorage.getItem('tripItem'));
    const [sortBy, setSortBy] = useState("packed");
    // Need clarity
    let sortedItem;

    if (sortBy === 'input') sortedItem = sortBy;

    if (sortBy === "description");
    sortedItem = items
        .slice().sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === 'packed');
    sortedItem = items
        .slice().sort((a, b) => Number(a.packed) - Number(b.packed))

    return (<div className="list">
        <ul>
            {sortedItem.map((item) => (
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