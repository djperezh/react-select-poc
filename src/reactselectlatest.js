import React, { Component } from 'react';
import Select, { components } from 'react-select-v2';
import { colourOptions } from './data/data';
import createClass from "create-react-class";
import 'react-select/dist/react-select.css';
import './App.css';

// https://github.com/JedWatson/react-select/issues/2032


// export default () => (
//     <div className="body">
//         <Select
//             defaultValue={[colourOptions[2], colourOptions[3]]}
//             isMulti
//             name="colors"
//             options={colourOptions}
//             className="basic-multi-select"
//             classNamePrefix="select"
//         />
//     </div>
// );

const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
};

const groupBadgeStyles = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 20,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    textAlign: "center"
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

// export default () => (
//   <Select
//     defaultValue={colourOptions[1]}
//     options={groupedOptions}
//     formatGroupLabel={formatGroupLabel}
//   />
// );

const Option = createClass({
    render() {
        return (
            <div>
                <components.Option {...this.props}>
                    <input
                        type="checkbox"
                        checked={this.props.isSelected}
                        onChange={e => null}
                    />{" "}
                    <label>{this.props.value} </label>
                </components.Option>
            </div>
        );
    }
});

// export default () => (
//   <div>

// );
export default class extends Component {
    render() {
        return (
            <Select
                closeMenuOnSelect={false}
                isMulti
                components={{ Option, MultiValue }}
                defaultValue={colourOptions[4]}
                options={colourOptions}
                hideSelectedOptions={false}
                backspaceRemovesValue={false}
                onChange={e => console.log(e)}
            />
        );
    }
}

const MultiValue = props => {
    return (
        <components.MultiValue {...props}>
            <span>{props.data.label}</span>
        </components.MultiValue>
    );
};