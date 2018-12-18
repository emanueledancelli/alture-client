import React, { Component } from "react";
import "./Filter.scss";
import { connect } from "react-redux";
import { setFilter } from "actions/uiActions";

class Filter extends Component {
  render() {
    const { ui, setFilter } = this.props;

    const values = ui.selectorValues.map(e => {
      return (
        <option key={e.index} value={e}>
          {e}
        </option>
      );
    });

    return (
      <select
        onChange={e => {
          setFilter(e);
        }}
        className="filtermenu"
        value={ui.selectedValue}
      >
        {values}
      </select>
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
