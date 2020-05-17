import React, { PureComponent } from 'react';

import RadioInput from '../../atoms/radio-input';

import './sort-panel.scss';

const blockName = 'sort-panel';


export default class SortPanel extends PureComponent {
    render() {
        const { sortOptions, value, description, handleChange, filmGenre, total } = this.props;

        return (
            <div className={blockName}>
                {filmGenre ?
                        <p className={`${blockName}__details`}>Films by {filmGenre} genre</p>
                     :
                    <>
                        <p className={`${blockName}__details`}>Total: {total}</p>
                        <RadioInput
                            options={sortOptions}
                            value={value}
                            description={description}
                            handleChange={handleChange}
                        />
                    </>
                }
            </div>
        );
    }
};
