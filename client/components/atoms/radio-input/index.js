import React, { PureComponent } from 'react';
import sn from 'classnames';

import './radio-input.scss';

const blockName = 'radio-input';

export default class RadioInput extends PureComponent {

    static defaultProps = {
        options: [],
    };

    state = {
        selectedOption: this.props.selectedOption,
    };

    handleOption = event => {
        this.setState({
            selectedOption: event.target.value,
        })
    };

    renderRadioInput = () => {
        const { options } = this.props;
        const { selectedOption } = this.state;

        return (
            <div className={blockName}>
                {options.map((element, index) => {
                    const { value, text } = element;
                    const isChecked = selectedOption === value;

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
            </div>
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
