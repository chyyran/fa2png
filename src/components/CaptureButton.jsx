import React from 'react';
import domtoimage from 'dom-to-image';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*
 * Workaround for Chrome no longer aligning redirect from JS.
 * https://stackoverflow.com/a/45789588/185510
 */
const windowLocation = (base64URL) => {
  const win = window.open();
  win.document.write(
    `<iframe src="${base64URL}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`,
  );
  win.document.close();
};

const capture = (element) => {
  domtoimage.toPng(element)
    .then((dataUrl) => {
      windowLocation(dataUrl);
    })
    .catch((error) => {
      // console.error('oops, something went wrong!', error);
      error;
    });
};

const captureAndDownload = (iconname, element) => {
  domtoimage.toPng(element)
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.download = iconname+'.png';
      link.href = dataUrl;
      link.click();
    })
    .catch((error) => {
      // console.error('oops, something went wrong!', error);
      error;
    });
};

const getIconCanvas = () => (
  document.getElementById('icon-canvas')
);

const CaptureButton = ({icon}) => (
  <Button onClick={() => captureAndDownload(icon, getIconCanvas())}>
    <FontAwesomeIcon icon="magic" />
    {' '}
    Download
  </Button>
);

export default CaptureButton;
