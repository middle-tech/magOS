import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Avatar from '@material-ui/core/Avatar';
import AppointmentIcon from '../static/images/Appointment.svg';
import PatientIcon from '../static/images/Patient_Male.png';
import AccountingIcon from '../static/images/Accounting.svg';
import WaitingRoomIcon from '../static/images/Waiting_Room.svg';
import DrugsIcon from '../static/images/Drugs.ico';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useStyles} from '../styles/LayoutStyles';


export default function Menu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            })}
            classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
            }}
          >
          
        <div className={classes.toolbar}>
          <IconButton onClick={handleToggleMenu}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

        <Divider />

        <List>
          <ListItem button key="patient" component="a" href="/patient">
            <ListItemIcon><Avatar variant="square" src={PatientIcon} /></ListItemIcon>
            <ListItemText primary="Patients" />
          </ListItem>
          
          <ListItem button key="waitingroom" component="a" href="/waitingroom">
            <ListItemIcon><Avatar variant="square" src={WaitingRoomIcon} /></ListItemIcon>
            <ListItemText primary="Salle d'attente" />
          </ListItem>
          
          <ListItem button key="appointment" component="a" href="/appointment">
            <ListItemIcon><Avatar variant="square" src={AppointmentIcon} /></ListItemIcon>
            <ListItemText primary="Rendez-vous" />
          </ListItem>
          
          <ListItem button key="drug" component="a" href="/drug">
            <ListItemIcon><Avatar variant="square" src={DrugsIcon} /></ListItemIcon>
            <ListItemText primary="Médicaments" />
          </ListItem>
          
          <Divider />

          <ListItem button key="accounting" component="a" href="/accounting">
            <ListItemIcon><Avatar variant="square" src={AccountingIcon} /></ListItemIcon>
            <ListItemText primary="Comptabilite" />
          </ListItem>

          <Divider />

          <ListItem button key="Inbox">
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          
          <ListItem button key="Send email">
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Send email" />
          </ListItem>
        
          <Divider />

          <ListItem button key="Users" component="a" href="/users">
            <ListItemIcon ><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          
          <ListItem button key="products" component="a" href="/products">
            <ListItemIcon><BusinessCenterIcon /></ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>

        </List>
    
      </Drawer>	

    </div>
  );
}
