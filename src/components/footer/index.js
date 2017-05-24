import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import SocialPersonOutline from 'material-ui/svg-icons/social/person-outline';
import SocialShare from 'material-ui/svg-icons/social/share';
import { red900 } from 'material-ui/styles/colors';

const paperStyle = {
  height: '200px',
  width: '100%',
  marginTop: '40px',
};

const listSyle = { width: '50%', display: 'inline-block' };

const Footer = () => (
  <Paper style={paperStyle} zDepth={1}>
    <List style={listSyle} >
      <Subheader inset>Contact</Subheader>
      <ListItem
        leftIcon={<CommunicationCall color={red900} />}
        rightIcon={<CommunicationChatBubble />}
        primaryText="(702) 683 - 7982"
        secondaryText="Mobile"
        onClick={() => window.open('tel:7026837982')}
      />
      <ListItem
        leftIcon={<CommunicationEmail color={red900} />}
        primaryText="ricas07@gmail.com"
        secondaryText="Personal"
        onClick={() => window.open('mailto:ricas07@gmail.com')}
      />
    </List>
    <List style={listSyle} >
      <Subheader inset>Social</Subheader>
      <ListItem
        leftIcon={<SocialPersonOutline color={red900} />}
        primaryText="Github"
        secondaryText="https://github.com/ricas07"
        onClick={() => window.open('https://github.com/ricas07')}
      />
      <ListItem
        leftIcon={<SocialShare color={red900} />}
        primaryText="Twitter"
        secondaryText="@ricas07"
        onClick={() => window.open('https://twitter.com/ricas07')}
      />
    </List>
    <List>
      <ListItem disabled style={{ textAlign: 'center' }}>© 2017</ListItem>
    </List>
  </Paper>
);

export default Footer;
