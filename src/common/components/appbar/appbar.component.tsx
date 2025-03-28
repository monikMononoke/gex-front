import React from 'react';

import { AppBar as MUIAppbar, IconButton, Toolbar, Typography, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import * as classes from './appbar.styles';

interface AppBarProps {
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
}

export const AppBar: React.FC<AppBarProps> = props => {
  const { isDrawerOpen, onToggleDrawer } = props;

  return (
    <MUIAppbar className={classes.appBarContainer} position="static" color="default" square elevation={1}>
      <Toolbar disableGutters className={classes.toolbar} variant="regular">
        <div className={classes.leftGroup}>
          <IconButton color="inherit" onClick={onToggleDrawer}>
            {isDrawerOpen ? <MenuIcon /> : <MenuOpenIcon />}
          </IconButton>
          <Typography variant="body1" fontWeight={'bold'}>
            GEX
          </Typography>
        </div>
        <Avatar>PM</Avatar>
      </Toolbar>
    </MUIAppbar>
  );
};
