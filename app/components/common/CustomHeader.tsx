import React, { ReactNode } from 'react';
import styles from '../css/CustomHeader.module.css';

interface CustomHeaderProps {
  title: string;
}

const CustomHeader = ({ title }: CustomHeaderProps) => {
  return (
    <div>
      <h1 className={styles.header}>{title}</h1>
    </div>
  );
};

export default CustomHeader;
