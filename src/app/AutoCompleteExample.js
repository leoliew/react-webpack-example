/**
 * Created by leoliew on 2016/11/28.
 */
import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  div: {
    margin: '1%'
  },
  card:{
    marginTop: '15px'
  }
};


const dataSource1 = [
  {
    text: 'text-value1',
    value: (
      <MenuItem
        primaryText="text-value1"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: 'text-value2',
    value: (
      <MenuItem
        primaryText="text-value2"
        secondaryText="&#9786;"
      />
    ),
  },
];

const dataSource2 = ['12345', '23456', '34567'];

const dataSource3 = [
  {textKey: 'Some Text', valueKey: 'someFirstValue'},
  {textKey: 'Some Text', valueKey: 'someSecondValue'},
];

const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];

export default class AutoCompleteExampleSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div style={styles.div}>
        <Card style={styles.card}>
          <CardTitle title="Simple example"
                     subtitle="The input is used to create the dataSource, so the input always matches three entries."/>
          <CardText>
            <AutoComplete
              hintText="Type anything"
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput}
            />
            <AutoComplete
              hintText="Type anything"
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput}
              floatingLabelText="Full width"
              fullWidth={true}
            />
          </CardText>
        </Card>
        <Card style={styles.card}>
          <CardTitle title="Data sources"
                     subtitle="The first example has MenuItems in its data source that display on data entry. The second example uses an array of values as its dataSource, and updates onFocus Both examples have filtering disabled."/>
          <CardText>
            <AutoComplete
              hintText="text-value data"
              filter={AutoComplete.noFilter}
              dataSource={dataSource1}
            /><br />
            <AutoComplete
              floatingLabelText="showAllItems"
              filter={AutoComplete.noFilter}
              openOnFocus={true}
              dataSource={dataSource2}
            /><br />
            <AutoComplete
              floatingLabelText="Same text, different values"
              filter={AutoComplete.noFilter}
              openOnFocus={true}
              dataSource={dataSource3}
              dataSourceConfig={dataSourceConfig}
            />
          </CardText>
        </Card>
        <Card style={styles.card}>
          <CardTitle title="Filters"
                     subtitle="Two examples of filtering. The first uses caseInsensitiveFilter, the second uses fuzzyFilter, and limits the number of results displayed using the maxSearchResults property.
Type 'r', case insensitive
"/>
          <CardText>
            <AutoComplete
              floatingLabelText="Type 'r', case insensitive"
              filter={AutoComplete.caseInsensitiveFilter}
              dataSource={colors}
            />
            <br />
            <AutoComplete
              floatingLabelText="Type 'peah', fuzzy search"
              filter={AutoComplete.fuzzyFilter}
              dataSource={fruit}
              maxSearchResults={5}
            />
          </CardText>
        </Card>
      </div>
    );
  }
}
