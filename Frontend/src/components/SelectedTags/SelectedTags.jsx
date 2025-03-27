import React from "react";

export default function SelectedTags({ title, selectedItems, onRemoveItem, onClearAll }) {
  return (
    <div className="selected-filter-group">
      <div className="filter-label">{title}</div>
      <div className="selected-tags-container">
        {selectedItems.map((item) => (
          <span className="tag" key={item}>
            {item}
            <button className="remove-tag" onClick={() => onRemoveItem(item)}>✕</button>
          </span>
        ))}
        {selectedItems.length > 0 && (
          <button className="clear-all-btn" onClick={onClearAll}>Clear All</button>
        )}
      </div>
    </div>
  );
}
