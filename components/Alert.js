import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ minHeight: '59px' }}> {/* Adjust the minHeight as needed */}
      {props.alert ? (
        <div className={`alert alert-warning alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      ) : null}
    </div>
  );
}

export default Alert;
