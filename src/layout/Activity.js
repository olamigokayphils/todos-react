import React from "react";

let activityList = [
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
];

export default function Activity() {
  return (
    <div className="container">
      <div className="card card-body shadow">
        <h4 id="add-activity">Add Events</h4>
        <form className="form-inline mb-3">
          <input type="text" className="form-control mr-2 mt-2" />
          <input type="submit" className="btn btn-success mt-2" value="Confirm" />
        </form>

        <div>
          <h4>My Activity list</h4>
          <hr />
          <ul id="activity-list" className="list-group">
            {activityList.map((activity) => {
              return <li className="list-group-item">{activity.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
