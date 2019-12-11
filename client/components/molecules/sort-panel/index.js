import React, { PureComponent } from 'react';

import RadioInput from 'atoms/radio-input';

import './sort-panel.scss';

const blockName = 'sort-panel';


export default class SortPanel extends PureComponent {
    render() {
        const { sortOptions, value, description, handleChange } = this.props;

        return (
            <div className={blockName}>
                <p></p>
                <RadioInput
                    options={sortOptions}
                    value={value}
                    description={description}
                    handleChange={handleChange}
                />
            </div>
        );
    }
};
