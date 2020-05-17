import React, { PureComponent } from 'react';
import sn from 'classnames';
import noop from 'lodash/noop';

import './radio-input.scss';

const blockName = 'radio-input';

export default class RadioInput extends PureComponent {

    static defaultProps = {
        handleChange: noop,
    };

    handleOption = event => {
        const { handleChange } = this.props;
        const { value } = event.target;

        handleChange(value);
    };

    renderRadioInput = () => {
        const { options } = this.props;

        return (
            options ? <div className={blockName}>
                {options.map((element, index) => {
                    const { value, text } = element;
                    const isChecked = this.props.value === value;

                    return (
                        <label
                            className={`${blockName}__label`}
                            key={index}
                        >
                            <input
                                className={`${blockName}__input`}
                                type="radio"
                                value={value}
                                checked={isChecked}
                                onChange={this.handleOption}
                            />
                            <p className={sn(`${blockName}__text`, { 'active-option': isChecked })}>
                                {text}
                            </p>
                        </label>
                    );
                })}
            </div> : null
        );
    };

    render() {
        const { description } = this.props;
        return (
            description ?
                (<div className={`${blockName}__container`}>
                    <p className={`${blockName}__description`}>{description}</p>
                    {this.renderRadioInput()}
                </div>) :
                this.renderRadioInput()
        );
    }
};
