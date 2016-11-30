import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import IndexPage from './IndexPage';
import GridListExample from './components/GridListExampleSimple';
import DrawerOpenRightExample from './LeftMenu';
import AutoCompleteExampleSimple from './components/AutoCompleteExample';
import AvatarExampleSimple from './components/AvatarExampleSimple';
import BadgeExampleSimple from './components/BadgeExampleSimple';
import BottomNavigationExampleSimple from './components/BottomNavigationExampleSimple';
import FlatButtonExampleSimple from './components/FlatButtonExampleComplex';
import CardExampleWithAvatar from './components/CardExampleWithAvatar';
import ChipExampleSimple from './components/ChipExampleSimple';
import DatePickerExampleSimple from './components/DatePickerExampleSimple';
import DialogExampleSimple from './components/DialogExampleSimple';
import DividerExampleForm from './components/DividerExampleForm';
import FontIconExampleSimple from './components/FontIconExampleSimple';
import ListExampleSimple from './components/ListExampleSimple';
import MenuExampleSimple from './components/MenuExampleSimple';
import PaperExampleSimple from './components/PaperExampleSimple';
import PopoverExampleSimple from './components/PopoverExampleSimple';
import CircularProgressExampleSimple from './components/CircularProgressExampleSimple';
import SelectFieldExampleSimple from './components/SelectFieldExampleSimple';
import SliderExampleSimple from './components/SliderExampleSimple';
import CheckboxExampleSimple from './components/CheckboxExampleSimple';
import SnackbarExampleSimple from './components/SnackbarExampleSimple';
import HorizontalLinearStepper from './components/HorizontalLinearStepper';
import ListExampleChat from './components/ListExampleChat';
import TableExampleSimple from './components/TableExampleSimple';
import TabsExampleSimple from './components/TabsExampleSimple';
import TextFieldExampleSimple from './components/TextFieldExampleSimple';
import TimePickerExampleSimple from './components/TimePickerExampleSimple';
import ToolbarExamplesSimple from './components/ToolbarExamplesSimple';



// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render


const GridListExampleComponent = () => (
  <MuiThemeProvider>
    <GridListExample />
  </MuiThemeProvider>
);

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={DrawerOpenRightExample}>
      <IndexRoute component={IndexPage}/>
      <Route path="/auto_complete" name="AutoComplete" component={AutoCompleteExampleSimple}/>
      <Route path="/avatar" name="Avatar" component={AvatarExampleSimple}/>
      <Route path="/badge" name="Badge" component={BadgeExampleSimple}/>
      <Route path="/bottom_navigation" name="BottomNavigation" component={BottomNavigationExampleSimple}/>
      <Route path="/buttons" name="Buttons" component={FlatButtonExampleSimple}/>
      <Route path="/card" name="Card" component={CardExampleWithAvatar}/>
      <Route path="/chip" name="Chip" component={ChipExampleSimple}/>
      <Route path="/date_picker" name="DatePicker" component={DatePickerExampleSimple}/>
      <Route path="/dialog" name="Dialog" component={DialogExampleSimple}/>
      <Route path="/divider" name="Divider" component={DividerExampleForm}/>
      <Route path="/gird_list" name="GirdList" component={GridListExampleComponent}/>
      <Route path="/icons" name="Icons" component={FontIconExampleSimple}/>
      <Route path="/list" name="List" component={ListExampleSimple}/>
      <Route path="/menu" name="Menu" component={MenuExampleSimple}/>
      <Route path="/paper" name="Paper" component={PaperExampleSimple}/>
      <Route path="/popover" name="Popover" component={PopoverExampleSimple}/>
      <Route path="/progress" name="Progress" component={CircularProgressExampleSimple}/>
      <Route path="/select_field" name="SelectField" component={SelectFieldExampleSimple}/>
      <Route path="/slider" name="Slider" component={SliderExampleSimple}/>
      <Route path="/switches" name="Switches" component={CheckboxExampleSimple}/>
      <Route path="/snack_bar" name="SnackBar" component={SnackbarExampleSimple}/>
      <Route path="/stepper" name="Stepper" component={HorizontalLinearStepper}/>
      <Route path="/sub_header" name="SubHeader" component={ListExampleChat}/>
      <Route path="/table" name="Table" component={TableExampleSimple}/>
      <Route path="/tabs" name="Tabs" component={TabsExampleSimple}/>
      <Route path="/text_field" name="TextField" component={TextFieldExampleSimple}/>
      <Route path="/time_picker" name="TimePicker" component={TimePickerExampleSimple}/>
      <Route path="/tool_bar" name="Toolbar" component={ToolbarExamplesSimple}/>
    </Route>
  </Router>
), document.getElementById('app'));




