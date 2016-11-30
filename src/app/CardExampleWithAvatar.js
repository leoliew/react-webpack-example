/**
 * Created by leoliew on 2016/11/28.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ShowCaseCard from './ShowCaseCard';

const styles = {
  card: {
    margin: '2%'
  }
};

class FlatButtonExampleSimple extends React.Component {

  render() {
    var showCase =
        <Card >
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
          />
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="images/nature-600-337.jpg"/>
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle"/>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
          </CardActions>
        </Card>
      ;
    return (
      <ShowCaseCard
        title="Simple example"
        subtitle="The input is used to create the dataSource, so the input always matches three entries."
        text={showCase}
      />
    )
  }

}

export default FlatButtonExampleSimple;
