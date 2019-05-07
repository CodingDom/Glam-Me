import React from "react";
import {Modal, Button, Form} from "react-bootstrap";
import { Col } from "../Grid/index";


const modal = ({ handleClose, show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <Button onClick={handleClose} variant="danger">Save Changes</Button>
            </section>
        </div>
    )
}
    

export default modal;