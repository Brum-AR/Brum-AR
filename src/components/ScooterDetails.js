import React, {useEffect, useState} from 'react'
import Scooter from './Scooter'
import './ScooterDetails.css'
import axios from "axios";

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
                        <div>

                            <p>Général</p>
                        </div>
                    </Tab>
                    <Tab label="Moteur">
                        <div>

                            <p>Moteur</p>
                        </div>
                    </Tab>
                    <Tab label="Batterie">
                        <div>

                            <p>Batterie</p>
                        </div>
                    </Tab>
                    <Tab label="Cadre">
                        <div>


                            <p>Cadre</p>
                        </div>
                    </Tab>
                    <Tab label="Pneus &#38; Freins">
                        <div>

                            <p>Pneus &#38; Freins</p>
                        </div>
                    </Tab>
                    <Tab label="Accessoires">
                        <div>

                            <p>Accessoires</p>
                        </div>
                    </Tab>
                </Tabs>

                <button className='details__command'>Commander</button>
            </div>
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