import React from 'react';

import {SideLink, Actions} from '@twilio/flex-ui';

// give access to active view
const NoteSidebar = ({activeView})=> {
    function navigate(){
        Actions.invokeAction('NavigateToView', {viewName: 'note-view'})
    }
    return (
        <SideLink
        showLabel={true}
        icon="Directory"
        iconActive="Directory"
        isActive={activeView === 'note-view'}
        onClick={navigate}
        >
            Notes
        </SideLink>
    )
}

export default NoteSidebar