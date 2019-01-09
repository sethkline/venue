import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';
import PDFIcon from '../../resources/images/icons/pdf.png';

const MyButtonPDF = (props) => {
    return (
        <Button
            href={props.link}
            download={props.download}
            variant="contained"
            size="small"
            style={{
                background: props.bck,
                color: props.color
            }}
        >
            <img src={PDFIcon} 
            className="iconImage"
            alt="icon_button"
            /> {props.text}
        </Button>
    );
};

export default MyButtonPDF;