import React from "react";

const MyComponent = (props) => {
  const { additionalClass } = props;

  return (
    <div className={`my-class ${additionalClass}`}>
      {/* Content of your component */}
    </div>
  );
};

export default MyComponent;
