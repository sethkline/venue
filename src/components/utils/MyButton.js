import React from 'react';
import Button from '@material-ui/core/Button';
import PlusImage from '../../resources/images/icons/plus-button.png';

const MyButton = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size="small"
            style={{
                background: props.bck,
                color: props.color
            }}
        >
            <img src={PlusImage} 
            className="iconImage"
            alt="icon_button"
            /> {props.text}
        </Button>
    );
};

export default MyButton;