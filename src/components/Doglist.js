import React from "react";
import superagent from "superagent";
import { connect } from "react-redux";

class Doglist extends React.Component {
  componentDidMount() {
    superagent
      .get("https://dog.ceo/api/breeds/list/all")
      .then(res =>
        this.props.dispatch({
          type: "INIT_BREEDS",
          payload: Object.keys(res.body.message)
        })
      )
      .catch(err => console.err(err));
  }

  render() {
    return <div>
        <ul>
            {this.props.dogbreeds.map(breed => {
                return <li key={breed}>{breed}</li>
            })}
        </ul>
    </div>;
  }
}

const mapStateToProps = state => {
  return {
      dogbreeds: state.dogbreeds
  };
};

export default connect(mapStateToProps)(Doglist);
