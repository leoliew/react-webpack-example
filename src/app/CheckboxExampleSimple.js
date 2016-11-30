import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import ShowCaseCard from './ShowCaseCard';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export default class CheckboxExampleSimple extends React.Component {


  render() {
    var showCase =
        <div style={styles.block}>
          <Checkbox
            label="Simple"
            style={styles.checkbox}
          />
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            label="Custom icon"
            style={styles.checkbox}
          />
          <Checkbox
            checkedIcon={<Visibility />}
            uncheckedIcon={<VisibilityOff />}
            label="Custom icon of different shapes"
            style={styles.checkbox}
          />
          <Checkbox
            label="Disabled unchecked"
            disabled={true}
            style={styles.checkbox}
          />
          <Checkbox
            label="Disabled checked"
            checked={true}
            disabled={true}
            style={styles.checkbox}
          />
          <Checkbox
            label="Label on the left"
            labelPosition="left"
            style={styles.checkbox}
          />
        </div>
      ;
    return (
      <ShowCaseCard
        title="Examples"
        subtitle="The second example is selected by default using the defaultChecked property. The third example is disabled using the disabled property. The fourth example uses custom icons through the checkedIcon and uncheckedIcon properties. The final example uses the labelPosition property to position the label on the left."
        text={showCase}
      />
    )
  }
}
