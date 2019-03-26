import React, { Component } from "react";
import "./Filter.scss";
import { connect } from "react-redux";
import { setFilter } from "actions/uiActions";

class Filter extends Component {
  render() {
    const { ui, setFilter } = this.props;

    const values = ui.selectorValues.map((e, index) => {
      return (
        <option key={index} value={e}>
          {e}
        </option>
      );
    });

    return (
      <div>
        <select
          onChange={e => {
            setFilter(e);
          }}
          className="filter__menu"
          value={ui.selectedValue}
        >
          {values}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ui: state.ui
  };
};

const mapDispatchToProps = {
  setFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
