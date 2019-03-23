import React from 'react';
import PropTypes from 'prop-types';
import withActive from './withActive'
import {TabStyle, ActiveTab} from './TabStyles';

const ComponentFromWithActive = withActive(TabStyle)(ActiveTab)

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    const tabClasses = ['tab']
    if(props.tab === props.selectedTab) tabClasses.push('avtive-tab')
  return (
    <ComponentFromWithActive
      tab= {props.tab}
      selectedTab={props.selectedTab}
      changeSelected = {props.changeSelected}
    />
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired
};
export default Tab;
