import React from 'react';
  // Import css modules
//   import cssClasses from './styles.module.css';
  // Import scss modules
  import scssClasses from './styles.module.scss';

  export interface HelloProps {
    name: string;
  }

  const Hello: React.FC<HelloProps> = ({ name }: HelloProps) => (
    <div className={scssClasses.helloScss}>
      <p className={scssClasses.helloCss}>Hello, {name}</p>
    </div>
  );

  export default Hello;