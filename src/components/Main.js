import React from "react";

import "./Main.scss";
import {JSONEditor} from "react-json-editor-viewer";
import ez_cal_template_1 from "../resources/ez_cal_template_1.json";
import amatLogo from "../resources/amat_logo.png";


function Main() {
    const [jsonFile, setJsonFile] = React.useState(ez_cal_template_1)

    const onJsonChange = (key, value, parent, data) => {
        console.log(key, value, parent, data);
        setJsonFile(data);
    };

    const saveToJsonFile = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(jsonFile)], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "ez_calibration_config.json";
        document.body.appendChild(element);
        element.click();
    };


    return (
        <React.Fragment>
            <div className="header">
                <div>
                    <img src={amatLogo} alt="Amat Logo" height={200} width={200}/>
                </div>
                <div>
                    <h2>EZ Calibration</h2>
                    <p>Now, it's so easy to create a new Calibration</p>
                </div>
            </div>
            <h1 className="title-explain">Please edit the fields and press on the green button for save the file</h1>
            <div className="coverJsonFileFields">
                <JSONEditor
                    data={jsonFile}
                    collapsible
                    onChange={onJsonChange}
                />
            </div>
            <button className={"saveButton"} onClick={saveToJsonFile}>
                Save JSON file configuration
            </button>
        </React.Fragment>
    );
}


export default Main;
