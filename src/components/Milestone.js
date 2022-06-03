import React from "react";
import { CheckCircle, Edit, Delete } from "@mui/icons-material";
export default function Milestone({
  milestone,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = React.useState(milestone.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (milestone.complete === true) {
      setNewTitle(milestone.title);
    } else {
      milestone.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="milestone">
      <input
        style={{ textDecoration: milestone.completed && "line-through" }}
        type="text"
        value={milestone.title === "" ? newTitle : milestone.title}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(milestone)}
        >
          <CheckCircle id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(milestone, newTitle)}
        >
          <Edit id="i" />
        </button>
        <button
          className="button-delete"
          onClick={() => handleDelete(milestone.id)}
        >
          <Delete id="i" />
        </button>
      </div>
    </div>
  );
}
