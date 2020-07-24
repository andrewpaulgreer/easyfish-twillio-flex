import {FlexPlugin} from 'flex-plugin';
import React from 'react';
import Axios from 'axios';
const PLUGIN_NAME = 'ActionsPlugin';


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
    flex.Actions.addListener("beforeAcceptTask", (payload, abortFunction) => {
        if (!window.confirm("Are you sure you want to accept?")) {
            abortFunction();
        }
    });

    flex.Actions.registerAction("MyAction",(payload)=>{
        return Axios.get("https://quotes.rest/qod.json?category=inspire")
        .then(res => {
            alert("Heres a quote to keep you going:" + " " + res.data.contents.quotes[0].quote)
        }).catch(error => {
            console.log(error);
            throw error
        })
    });

    flex.Actions.addListener("afterCompleteTask", (payload) => {
        return flex.Actions.invokeAction("MyAction")
    })

}
}