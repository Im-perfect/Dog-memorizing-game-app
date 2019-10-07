import React from "react";
import {Link} from "react-router-dom"

export default class Startpage extends React.Component {
  render() {
    return (
      <div>
        <main>
          <button>
            <Link to="/dog-breeds">List</Link>
          </button>
          <button>Game 1</button>
          <button>Game 2</button>
          <button>Game 3</button>
        </main>
      </div>
    );
  }
}
