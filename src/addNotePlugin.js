import NoteForm from './NoteForm'
import NoteSidebar from './NoteSidebar'
import {FlexPlugin} from 'flex-plugin';
import React from 'react';
import {View} from '@twilio/flex-ui';;

const PLUGIN_NAME = 'AddNotePlugin';


export default class AddNotePlugin extends FlexPlugin {
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
      <NoteSidebar key="note-view-button" />
  );

  flex.ViewCollection.Content.add(
            <View name="note-view" key="note-view">
            <NoteForm />
            </View>
  )
}
}