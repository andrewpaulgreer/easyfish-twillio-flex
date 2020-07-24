import React from 'react';

import {SideLink, Actions} from '@twilio/flex-ui';

// give access to active view
const CustomSideBarBtn = ({activeView})=> {
    function navigate(){
        Actions.invokeAction('NavigateToView', {viewName: 'custom-view'})
    }
    return (
        <SideLink
        showLabel={true}
        icon="Data"
        iconActive="DataBold"
        isActive={activeView === 'custom-view'}
        onClick={navigate}
        >
            Scheduler
        </SideLink>
    )
}

export default CustomSideBarBtn