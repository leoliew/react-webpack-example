/**
 * Created by leoliew on 2016/11/28.
 */

import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ShowCaseCard from './ShowCaseCard';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const styles = {
  avatar: {
    margin: 5
  }
};


/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
export default class AvatarExampleSimple extends React.Component {
  render() {
    var showCase = {
      title: "Simple example",
      subtitle: "The input is used to create the dataSource, so the input always matches three entries.",
      text: <List>
        <ListItem
          disabled={true}
          leftAvatar={
        <Avatar src="images/uxceo-128.jpg" />
      }
        >
          Image Avatar
        </ListItem>
        <ListItem
          disabled={true}
          leftAvatar={
        <Avatar
          src="images/uxceo-128.jpg"
          size={30}
          style={styles.avatar}
        />
      }
        >
          Image Avatar with custom size
        </ListItem>
        <ListItem
          disabled={true}
          leftAvatar={
        <Avatar icon={<FontIcon className="muidocs-icon-communication-voicemail" />} />
      }
        >
          FontIcon Avatar
        </ListItem>
        <ListItem
          disabled={true}
          leftAvatar={
        <Avatar
          icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
          color={blue300}
          backgroundColor={indigo900}
          size={30}
          style={styles.avatar}
        />
      }
        >
          FontIcon Avatar with custom colors and size
        </ListItem>
        <ListItem
          disabled={true}
          leftAvatar={
        <Avatar icon={<FileFolder />} />
      }
        >
          SvgIcon Avatar
        </ListItem>
        <ListItem
          disabled={true}
          leftAvatar={
        <Avatar
          icon={<FileFolder />}
          color={orange200}
          backgroundColor={pink400}
          size={30}
          style={styles.avatar}
        />
      }
        >
          SvgIcon Avatar with custom colors and size
        </ListItem>
        <ListItem
          disabled={true}
          leftAvatar={<Avatar>A</Avatar>}
        >
          Letter Avatar
        </ListItem>
        <ListItem
          disabled={true}
          leftAvatar={
        <Avatar
          color={deepOrange300}
          backgroundColor={purple500}
          size={30}
          style={styles.avatar}
        >
          A
        </Avatar>
      }
        >
          Letter Avatar with custom colors and size
        </ListItem>
      </List>
    };
    return (
      <div>
        <ShowCaseCard
          title={showCase.title}
          subtitle={showCase.subtitle}
          text={showCase.text}
        />
      </div>
    )
  }
}
