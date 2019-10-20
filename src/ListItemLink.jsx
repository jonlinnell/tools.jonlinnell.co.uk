import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

function ListItemLink(props) {
  const { icon, primary, to, children, onClick } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => <Link to={to} {...linkProps} innerRef={ref} />),
    [to],
  );

  return (
    <ListItem button component={renderLink} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary}>{ children }</ListItemText>
    </ListItem>
  );
}

export default ListItemLink;
