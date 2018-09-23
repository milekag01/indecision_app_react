import React from 'react';

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick = {(event) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
}
export default Option;