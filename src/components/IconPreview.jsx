import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';

const IconPreview = ({ icon, size, color }) => (
  <Card>
    <Card.Header>Icon preview</Card.Header>
    <Card.Body>
      <div id="icon-canvas" className="text-center"  style={{ color, width:  `${size}px`, height: `${size}px` }}>
        <FontAwesomeIcon
          id="icon-target"
          icon={icon}
          style={{ fontSize: `${size}px`, color, width:  `${size}px`, height: `${size}px` }}
        />
      </div>
    </Card.Body>
  </Card>
);
IconPreview.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default IconPreview;
