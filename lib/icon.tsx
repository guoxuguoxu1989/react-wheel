import React from 'react';

interface IconPrrops {
  name: string;
}

const Icon: React.FunctionComponent<IconPrrops> = (props) => {
  return (
    <span>{props.name}</span>
  );
};
export default Icon;
