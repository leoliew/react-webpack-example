import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import GridListExample from './GridListExampleSimple';
import DrawerOpenRightExample from './DrawerOpenRightExample';
import AutoCompleteExampleSimple from './AutoCompleteExample';
import AvatarExampleSimple from './AvatarExampleSimple';
import BadgeExampleSimple from './BadgeExampleSimple';
import BottomNavigationExampleSimple from './BottomNavigationExampleSimple';
import FlatButtonExampleSimple from './FlatButtonExampleComplex';
import CardExampleWithAvatar from './CardExampleWithAvatar';
import ChipExampleSimple from './ChipExampleSimple';
import DatePickerExampleSimple from './DatePickerExampleSimple';
import DialogExampleSimple from './DialogExampleSimple';
import DividerExampleForm from './DividerExampleForm';
import FontIconExampleSimple from './FontIconExampleSimple';
import ListExampleSimple from './ListExampleSimple';
import MenuExampleSimple from './MenuExampleSimple';
import PaperExampleSimple from './PaperExampleSimple';
import PopoverExampleSimple from './PopoverExampleSimple';
import CircularProgressExampleSimple from './CircularProgressExampleSimple';
import SelectFieldExampleSimple from './SelectFieldExampleSimple';
import SliderExampleSimple from './SliderExampleSimple';
import CheckboxExampleSimple from './CheckboxExampleSimple';
import SnackbarExampleSimple from './SnackbarExampleSimple';
import HorizontalLinearStepper from './HorizontalLinearStepper';
import ListExampleChat from './ListExampleChat';
import TableExampleSimple from './TableExampleSimple';
import TabsExampleSimple from './TabsExampleSimple';
import TextFieldExampleSimple from './TextFieldExampleSimple';
import TimePickerExampleSimple from './TimePickerExampleSimple';
import ToolbarExamplesSimple from './ToolbarExamplesSimple';


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
      <IndexRoute component={GridListExampleComponent}/>
      <Route path="/auto_complete" name="AutoComplete" component={AutoCompleteExampleSimple}/>
      <Route path="/avatar" name="Avatar" component={AvatarExampleSimple}/>
      <Route path="/badge" name="Badge" component={BadgeExampleSimple}/>
      <Route path="/bottom_navigation" name="Bottom Navigation" component={BottomNavigationExampleSimple}/>
      <Route path="/buttons" name="Buttons" component={FlatButtonExampleSimple}/>
      <Route path="/card" name="Card" component={CardExampleWithAvatar}/>
      <Route path="/chip" name="Chip" component={ChipExampleSimple}/>
      <Route path="/date_picker" name="Date Picker" component={DatePickerExampleSimple}/>
      <Route path="/dialog" name="Dialog" component={DialogExampleSimple}/>
      <Route path="/divider" name="Divider" component={DividerExampleForm}/>
      <Route path="/gird_list" name="Gird List" component={GridListExampleComponent}/>
      <Route path="/icons" name="Icons" component={FontIconExampleSimple}/>
      <Route path="/list" name="List" component={ListExampleSimple}/>
      <Route path="/menu" name="Menu" component={MenuExampleSimple}/>
      <Route path="/paper" name="Paper" component={PaperExampleSimple}/>
      <Route path="/popover" name="Popover" component={PopoverExampleSimple}/>
      <Route path="/progress" name="Progress" component={CircularProgressExampleSimple}/>
      <Route path="/select_field" name="Select Field" component={SelectFieldExampleSimple}/>
      <Route path="/slider" name="Slider" component={SliderExampleSimple}/>
      <Route path="/switches" name="Switches" component={CheckboxExampleSimple}/>
      <Route path="/snack_bar" name="SnackBar" component={SnackbarExampleSimple}/>
      <Route path="/stepper" name="Stepper" component={HorizontalLinearStepper}/>
      <Route path="/sub_header" name="SubHeader" component={ListExampleChat}/>
      <Route path="/table" name="Table" component={TableExampleSimple}/>
      <Route path="/tabs" name="Tabs" component={TabsExampleSimple}/>
      <Route path="/text_field" name="Text Field" component={TextFieldExampleSimple}/>
      <Route path="/time_picker" name="Time Picker" component={TimePickerExampleSimple}/>
      <Route path="/tool_bar" name="Toolbar" component={ToolbarExamplesSimple}/>
    </Route>
  </Router>
), document.getElementById('app'));




