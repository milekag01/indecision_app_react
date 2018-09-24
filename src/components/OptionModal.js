import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen ={!!props.selectedOption}
        onRequestClose={props.handlePickClear}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handlePickClear}>Okay</button>
    </Modal>
);

export default OptionModal;