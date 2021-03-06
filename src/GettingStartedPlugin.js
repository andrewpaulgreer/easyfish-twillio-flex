import React from 'react';
import { VERSION} from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import TodoTaskComponent from './components/TodoTaskList/CustomTodo'
import reducers, { namespace } from './states';
import CustomThemes from './CustomThemes'

const PLUGIN_NAME = 'GettingStartedPlugin';

export default class GettingStartedPlugin extends FlexPlugin {
  constructor() {
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
    this.registerReducers(manager);
    
    // Logo Update
    flex.MainHeader.defaultProps.logoUrl = "http://d9hhrg4mnvzow.cloudfront.net/leads.easyfishmarketing.com/2ad211d1-eflogo1_000000000000000000001.png"


    // no tasks message
    manager.strings.NoTasks = "No Tasks, make some Coffee"
    
    // UI config for colors 
    manager.updateConfig({
      colorTheme: {
        baseName: "Light Grey",
        overrides: CustomThemes
      }
    })



    // CRMConatianer iFrame
  flex.CRMContainer
  .defaultProps
  .uriCallback = (task) => task
    // set up for mystery API call, had a few uncessessful attempts here
    ? `https://easyfish.api-us1.com?q=`
    : "https://easyfish.api-us1.com";

    // flex.AgentDesktopView.defaultProps.showPanel2 = false;
    // task info panel adding todo list
    flex.TaskInfoPanel.Content.add(
      <TodoTaskComponent key="todo-list" />,
      {
        sortOrder: -1,
      }
     
    )

    const options = { sortOrder: -1 };
    flex.AgentDesktopView
      .Panel1
      .Content
      .add(<CustomTaskListContainer key="demo-component" />, options);
     
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
