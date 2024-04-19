import React from "react";
import PropTypes from "prop-types";
import { Modal } from "./components/Modal";

const CobrowseLib = (props) => {
	return <Modal text={props.text} onClose={props.onClose} />;
};

CobrowseLib.propTypes = {
	text: PropTypes.string,
	onClose: PropTypes.func.isRequired,
};

export default CobrowseLib;
