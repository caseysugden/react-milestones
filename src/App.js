import "./App.css";
import React from "react";
import Title from "./components/Title";
import AddMilestone from "./components/AddMilestone";
import Milestone from "./components/Milestone";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore"
import { db } from "./firebase"
import { ContentCopy } from "@mui/icons-material";

function App() {
  const [milestones, setMilestones ] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "milestones"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let milestonesArray = [];
      querySnapshot.forEach((doc) => {
        milestonesArray.push({ ...doc.data(), id: doc.id });
      });
      setMilestones(milestonesArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (milestone, title) => {
    await updateDoc(doc(db, "milestones", milestone.id), { title: title });
  };
  const toggleComplete = async (milestone) => {
    await updateDoc(doc(db, "milestones", milestone.id), {
      completed: !milestone.completed
    });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "milestones", id));
  };
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddMilestone />
      </div>
      <div className="milestone_container">
        {milestones.map((milestone) => (
          <Milestone
            key={milestone.id}
            milestone={milestone}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
