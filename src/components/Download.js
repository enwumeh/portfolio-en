import React from 'react';
import resume from "./../images/enResume6-21.pdf";


const Download = () => {


    return (
      <div id="resume">
        <a id ="res-link"href = {resume} target = "_blank" rel="noopener noreferrer">Download</a>
      </div>
    );
  }


export default Download;