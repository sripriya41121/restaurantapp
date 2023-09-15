import React from "react";
import Header from './container/Header';
import Table from './container/Table';
import Filter from './container/Filter';
import Card from './container/Card';

const Home=()=>{
    return (
        <div>
            <Header/>
            <Table/>
            <Filter/>
            <Card/>
        </div>
    )
}

export default Home;