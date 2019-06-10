import React from 'react';
import Select from 'react-select-v3';
import { colourOptions } from './data/data';
import 'react-select/dist/react-select.css';
import './App.css';

export default () => (
    <div className="body">
        <Select
            defaultValue={[colourOptions[2], colourOptions[3]]}
            isMulti
            name="colors"
            options={colourOptions}
            className="basic-multi-select"
            classNamePrefix="select"
        />
    </div>
);
