import React from 'react'
import {Title} from './TItle';
import Data from '../containers/Data'
import Bot from '../containers/Bot'
import './../styles/title.css';
import '../styles/dataArea.css'


export const Layout = ()=>{
    return (
          <div className="">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" id={"titlespace"}>
                        <Title/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" id={"dataspace"}>
                        <div className="dataArea">
                            <Data/>
                        </div>
                        <Bot/>
                    </div>
                </div>
          </div>
    );
};

