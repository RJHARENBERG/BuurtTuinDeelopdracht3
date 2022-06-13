import React from 'react';
import LendToolHeader from "./lendToolHeder/LendToolHeader";

import LendToolList from "./lendToolList/LendToolList";

function LendTool(props) {
    return (
        <>
            <LendToolHeader/>

            <LendToolList/>
        </>
    );
}

export default LendTool;