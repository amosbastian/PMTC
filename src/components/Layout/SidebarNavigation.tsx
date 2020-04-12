import React, { forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { makeStyles } from "@material-ui/styles";
import { colors } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
  root: {},
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: "0.625rem 1rem",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium,
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const CustomRouterLink = forwardRef((props: any, ref: any) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

export type NavigationItem = {
  icon: JSX.Element;
  name: string;
  to: string;
};

interface SidebarNavigationProps {
  navigationItems: NavigationItem[];
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ navigationItems }) => {
  const classes = useStyles();

  return (
    <List component="nav" aria-label="navigation">
      {navigationItems.map(({ icon, name, to }) => (
        <ListItem key={name} className={classes.item} disableGutters>
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={to}
            startIcon={icon}
          >
            {name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarNavigation;
