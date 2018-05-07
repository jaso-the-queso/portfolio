import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5 pt-5">
                    <h1 className="text-center">Portfolio</h1>

                    <h2>Current Project</h2>
                    <div className="ml-5">
                        <h4 className="font-italic mt-4">Busy Corner Cheese & Provisions</h4>
                        <img src="../pics/BusyCornerCheese.png" alt="Busy Corner Cheese Logo" width="100" className="my-2" />
                        <ul>
                            <li className="my-2">Remaking their website.</li>
                        </ul>
                    </div>
                    

                    <h2 className="mt-5">Past Projects</h2>
                    <div className="ml-5">
                        <h4 className="font-italic mt-4">Magic City Woodworks (demo site)</h4>
                        <img src="../pics/mcww.png" alt="Magic City Woodworks Demo" width="100" className="my-2" />
                        <ul>
                            <li className="my-2">https://magic-city-wood-works.herokuapp.com/</li>
                            <li className="my-2">This was purely a design demonstration made for Magic City Woodworks</li>
                            <li className="my-2">Made with <span className="font-weight-bold">React.js</span> and <span className="font-weight-bold">MDBootstrap</span></li>
                        </ul>
                    </div>
                    
                    <div className="ml-5">
                        <h4 className="font-italic mt-5">Dungeon Keeper</h4>
                        <img src="../pics/dk.png" alt="Dungeon Keeper Logo" width="100" className="my-2" />
                        <ul>
                            <li className="my-2">https://github.com/psugg92/GateKeeper</li>
                            <li className="my-2">Dungeon Keeper is a Dungeons & Dragons storyboarding application. This application allows the Dungeon Master to keep up with notes about their world and keep track of encounters that the adventurers will come in contact with</li>
                            <li className="my-2">Made with <span className="font-weight-bold">React.js</span>, <span className="font-weight-bold">Bootstrap</span>, <span className="font-weight-bold">Node.js</span>, and <span className="font-weight-bold">MySQL</span></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        );
    }
}