import React from 'react';
import LendToolHeader from "./lendToolHeder/LendToolHeader";
import SearchLendTool from "./searchLendTool/SearchLendTool";
import LendToolList from "./lendToolList/LendToolList";

function LendTool(props) {
    return (
        <>
            <LendToolHeader/>

            <LendToolList/>




            <SearchLendTool/>
        </>


    );
}

export default LendTool;