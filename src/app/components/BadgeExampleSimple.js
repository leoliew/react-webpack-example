/**
 * Created by leoliew on 2016/11/28.
 */

import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import ShowCaseCard from './ShowCaseCard';


export default class BadgeExampleSimple extends React.Component {


  render() {
    return (
      <ShowCaseCard
        title="Simple examples"
        subtitle="Two examples of badges containing text, using primary and secondary colors. The badge is applied to its children - an icon for the first example, and an Icon Button with tooltip for the second."
        text={
          <div>
            <Badge
              badgeContent={4}
              primary={true}
            ><NotificationsIcon />
            </Badge>
            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{top: 12, right: 12}}
            >
              <IconButton tooltip="Notifications">
                <NotificationsIcon />
              </IconButton>
            </Badge>
          </div>
        }
      />
    )
  }


}
