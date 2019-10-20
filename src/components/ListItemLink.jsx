import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  subitem: {
    padding: '0 0 0 32px',
  }
}));

const ListItemLink = (props) => {
  const { icon, primary, to, children, variant, onClick } = props;
  const classes = useStyles();
  
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => <Link to={to} {...linkProps} innerRef={ref} />),
    [to],
  );

  return (
    <ListItem button component={renderLink} onClick={onClick} className={classes[variant]}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary}>{ children }</ListItemText>
    </ListItem>
  );
}

export default ListItemLink;
