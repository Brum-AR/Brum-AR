import React, {useEffect, useState} from 'react'
import Scooter from './Scooter'
import './ScooterDetails.css'
import axios from "axios";
import {Link} from "react-router-dom";
import Footer from './Footer'

class Tabs extends React.Component {
   
    state = {
        activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {

        this.setState({activeTab: tab});
    };

    render() {

        let content;
        let buttons = [];
        return (
            <div>
                {React.Children.map(this.props.children, child => {
                    buttons.push(child.props.label)
                    if (child.props.label === this.state.activeTab) content = child.props.children
                })}

                <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
                <div className="tab-content">{content}</div>

            </div>
        );
    }
}

const TabButtons = ({buttons, changeTab, activeTab}) => {

    return (
        <div className="tab-buttons">
            {buttons.map(button => {
                return <button className={button === activeTab ? 'active' : ''}
                               onClick={() => changeTab(button)}>{button}</button>
            })}
        </div>
    )
}

const Tab = props => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

const ScooterDetails = (props) => {
    const [loading, setLoading] = useState(true)
    const [scooter, setScooter] = useState(null)

    useEffect(() => {
        getScooterById(props.match.params.id)
    }, [])
    useEffect(() => {
        console.log(scooter)
    }, [scooter])

    if (loading === true) {
        return <div className="loader"/>;
    }
    return (
        <>
            <Scooter/>
            <div className="tabs">

                <Tabs>
                    <Tab label="Général">
                        <div className='details_line'>
                            <p>{'Name: '}{scooter.name}</p>
                            <p>{'Price: '}{scooter.price + " €"}</p>
                            <p>{'Color: '}{scooter.color}</p>
                            <p>{'Max Vitesse: '}{scooter.scooter_characteristics.max_speed}</p>
                            <p>{'Cylinder: '}{scooter.scooter_characteristics.cylinder}</p>
                            <p>{'License: '}{scooter.scooter_characteristics.license}</p>
                            <p>{'Control Screen: '}{scooter.scooter_characteristics.control_screen}</p>
                            <p>{'Anti-vol Security: '}{scooter.scooter_characteristics.anti_theft_security}</p>
                            <p>{'Crutch: '}{scooter.scooter_characteristics.crutch}</p>
                        </div>
                    </Tab>
                    <Tab label="Moteur" >
                        <div className='details_line'>
                           
                             <p>{'Type: '}{scooter.engine.type}</p>
                             <p>{'Position: '}{scooter.engine.position}</p>
                             <p>{'Power: '}{scooter.engine.power}</p>
                        </div>
                    </Tab>
                    <Tab label="Batterie">
                        <div className='details_line'>

                            <p>{'Type: '}{scooter.battery.type}</p>
                            <p>{'Brand: '}{scooter.battery.brand}</p>
                            <p>{'Power: '}{scooter.battery.power}</p>
                            <p>{'Life: '}{scooter.battery.life}</p>
                            <p>{'Max-autonomy-ECO: '}{scooter.battery.max_autonomy_ECO}</p>
                            <p>{'Time: '}{scooter.battery.charging_time}</p>
                            <p>{'Removable: '}{scooter.battery.removable}</p>
                            <p>{'Weight: '}{scooter.battery.weight}</p>
                        </div>
                    </Tab>
                    <Tab label="Cadre">
                        <div className='details_line'>
                            <p>{'Dimension: '}{scooter.framework.dimension}</p>
                            <p>{'Saddle-height: '}{scooter.framework.saddle_height}</p>
                            <p>{'Weight-without-battery: '}{scooter.framework.scooter_weight_without_battery}</p>
                            <p>{'Max-weight: '}{scooter.framework.max_weight}</p>
                            <p>{'Front-suspension-type: '}{scooter.framework.front_suspension_type}</p>
                            <p>{'Back-suspension-type: '}{scooter.framework.back_suspension_type}</p>
                            <p>{'Assembly: '}{scooter.framework.assembly}</p>
                        </div>
                    </Tab>
                    <Tab label="Pneus &#38; Freins">
                        <div className='details_line'>
                            <p>{'Braking-energy-recovery: '}{scooter.brake.braking_energy_recovery.toString()}</p>
                            <p>{'Brake :'}{scooter.brake.brakes}</p>
                            <p>{'Brake-size :'}{scooter.brake.brakes_size}</p>
                            <p>{'Stirrups-type :'}{scooter.brake.stirrups_type}</p>
                        </div>
                    </Tab>
                    <Tab label="Accessoires">
                        <div className='details_line'>
                            <p>{'Alarm and Geotracking: '} {scooter.accessory.alarm_and_geotracking}</p>
                            <p>{'Windshield :'}{scooter.accessory.windshield}</p>
                            <p>{'Portable-key :'}{scooter.accessory.portable_key}</p>
                            <p>{'Usb-port :'}{scooter.accessory.usb_port}</p>
                            <p>{'Eco-mode :'}{scooter.accessory.eco_mode}</p>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <div className='details__footer'>
                <Link to={'/cart?scooter_id=' + props.match.params.id} className='details__command'>Commander</Link>
            </div>
            <Footer />
        </>
    )

    function getScooterById(id) {
        axios
            .get("https://brum-ar-api.herokuapp.com/scooter/" + id)
            .then(response => setScooter(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }
}

export default ScooterDetails