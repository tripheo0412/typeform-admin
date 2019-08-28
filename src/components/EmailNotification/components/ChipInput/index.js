/* eslint-disable no-useless-computed-key */
// @flow
import React from 'react';
import ChipInput from 'material-ui-chip-input';
import { makeStyles } from '@material-ui/styles';

type EmailInputProps = {
  value: Array<string>,
  onAdd: any => void,
  onDelete: (email: string, index: number) => void,
};

const useStyles = makeStyles({
  root: {
    marginLeft: '7px',
    width: '94%',
    padding: '8px 0px 8px 8px',
    fontFamily: 'Open Sans, sans-serif',
    height: '2rem',
    border: `2px solid var(--color-border)`,
    ['@media (min-width: 600px) and (max-width: 899px)']: {
      width: '97%',
    },
    ['@media max-width: 600px']: {
      width: '95%',
    },
  },
});
const EmailInput = ({ value, onAdd, onDelete }: EmailInputProps) => {
  const classes = useStyles();
  return (
    <ChipInput
      disableUnderline
      value={value}
      onAdd={onAdd}
      onDelete={onDelete}
      className={classes.root}
    />
  );
};

export default EmailInput;
