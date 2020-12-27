import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Button from '../Button';
import Menu from '../Menu';

const AppControls = ({
  algorithm,
  onAlgorithmChange,
  onGenerateRandomArray,
}) => {
  return (
    <Fragment>
      <Menu
        placeholder="Sort Algorithm"
        items={[
          'Bubble Sort'
        ]}
        selected={algorithm}
        onSelect={onAlgorithmChange}
      />

      <Button onClick={onGenerateRandomArray}>Random Data</Button>

    </Fragment>
  );
};

AppControls.propTypes = {
  algorithm: PropTypes.string,
  onAlgorithmChange: PropTypes.func.isRequired,
  onGenerateRandomArray: PropTypes.func.isRequired,
  arraySize: PropTypes.number,
  onArraySizeChange: PropTypes.func.isRequired,
  onToggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool
};

export default AppControls;
