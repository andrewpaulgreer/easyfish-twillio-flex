import * as FlexPlugin from 'flex-plugin';
import GettingStartedPlugin from './GettingStartedPlugin';
import ActionsPlugin from './ActionsPlugin';
import AddNotePlugin from './addNotePlugin'
import AddCustomViewPlugin from './AddCustomViewPlugin'


FlexPlugin.loadPlugin(GettingStartedPlugin);
FlexPlugin.loadPlugin(ActionsPlugin);
FlexPlugin.loadPlugin(AddCustomViewPlugin);
FlexPlugin.loadPlugin(AddNotePlugin);