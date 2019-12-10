import React, { PureComponent } from 'react';

import RadioInput from 'atoms/radio-input';

import './sort-panel.scss';

const blockName = 'sort-panel';


export default class SortPanel extends PureComponent {
    render() {
        const { options, value, handleChange } = this.props;

        return (
            <div className={blockName}>
                <RadioInput
                    options={options}
                    value={value}
                    description={'SORT BY'}
                    handleChange={handleChange}
                />
            </div>
        );
    }
};
