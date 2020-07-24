import {FlexPlugin} from 'flex-plugin';
import React from 'react';
import {View} from '@twilio/flex-ui';
import CustomView from './CustomView';
import CustomSideBarBtn from './CustomSideBarBtn'
const PLUGIN_NAME = 'AddCustomViewPlugin';


export default class ActionsPlugin extends FlexPlugin {
constructor(){
    super(PLUGIN_NAME);
}

 /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    // flex.Actions.addListener("afterAcceptTask", (payload) => {
    //     alert("New Task")
  flex.SideNav.Content.add(
      <CustomSideBarBtn key="custom-view-button" />
  );

  flex.ViewCollection.Content.add(
      <View name="custom-view" key="custom-view">
          <CustomView />
      </View>
  )
}
}