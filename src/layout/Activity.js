import React, { useState } from "react";
export default function Activity() {
  const [activityList, setActivityList] = useState([
    {
      title: "Wash the dishes",
      finished: false,
    },
    {
      title: "Cook",
      finished: false,
    },
    {
      title: "Mow the lawn",
      finished: false,
    },
    {
      title: "Finish up my Assignment",
      finished: false,
    },
    {
      title: "Take a nap",
      finished: false,
    },
    {
      title: "Pick Debbie from school",
      finished: false,
    },
  ]);
  const [eventInput, setEventInput] = useState("");

  const deleteActivity = (passedIndex) => {
    const newList = activityList.filter((value, currentListIndex) => currentListIndex !== passedIndex);
    setActivityList(newList);
  };

  const onChangeEventListener = (event) => {
    setEventInput(event.target.value);
  };

  const onSubmit = () => {
    let newList = activityList;
    newList.push({
      title: eventInput,
      finished: false,
    });

    setActivityList(newList);
    setEventInput("");
  };

  return (
    <div className="container">
      <div className="card card-body shadow">
        <h4 id="add-activity">Add Events</h4>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
          className="form-inline mb-3"
        >
          <input required type="text" value={eventInput} onChange={onChangeEventListener} className="form-control mr-2 mt-2" />
          <input type="submit" className="btn btn-success mt-2" value="Confirm" />
        </form>

        <div>
          <h4>My Activity list</h4>
          <hr />
          <ul id="activity-list" className="list-group">
            {activityList.map((activity, index) => {
              return (
                <li key={index} className="list-group-item">
                  <div className="activity-item">
                    <span>{activity.title}</span>
                    <button onClick={() => deleteActivity(index)} className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
