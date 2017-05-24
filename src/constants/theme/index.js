import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey900, red900, deepOrange500 } from 'material-ui/styles/colors';

const MyTheme = getMuiTheme({
  palette: {
    primary1Color: grey900,
    primary2Color: red900,
    accent1Color: deepOrange500,
  },
  raisedButton: {
    primaryColor: red900,
    secondaryColor: red900,
  },
});

export default MyTheme;
