import React from 'react';
import styled from 'styled-components';
import { DashboardTab, DashboardTabs } from './DashboardTabs';
import { WidgetConfiguration } from '../widgets/widgets';
import { PanelWidget } from '../widgets/containers/PanelWidget';

const widgetPanel1Config: WidgetConfiguration = {
    type: 'panelWidget',
    properties: {
        widgets: [{
            type: 'temperatureWidget', 
            properties: {
                deviceId: 'met-no-wroclaw-temperature', 
            },        
        }, {
            type: 'temperatureWidget', 
            properties: {
                deviceId: 'ble-sensor-4c65a8df7d03', 
            },        
        }, {
            type: 'temperatureWidget', 
            properties: {
                deviceId: 'mock-temperature-1', 
            },        
        }, {
            type: 'blindsWidget', 
            properties: {
                deviceId: 'roleta-salon-lewa', 
            },        
        }, {
            type: 'switchWidget', 
            properties: {
                deviceId: 'wiatrolap-lampa', 
            },        
        }, {
            type: 'smallIndicatorWidget', 
            properties: {
                deviceId: 'onewire-sensor-grunt-0-source-temperature', 
                classifierId: 'indoor-temperature-classifier',
            },
        }, {
            type: 'smallIndicatorWidget', 
            properties: {
                deviceId: 'ble-sensor-00126fc21c10-source-temperature', 
                classifierId: 'indoor-temperature-classifier',
            },
        }, {
            type: 'smallIndicatorWidget', 
            properties: {
                deviceId: 'power-meter-source', 
                classifierId: 'power-meter-classifier-minute',
            },
        }],
    }
}

const widgetPanel2Config : WidgetConfiguration =  {
    type: 'panelWidget',
    properties: {
        widgets: [{
            type: 'temperatureWidget', 
            properties: {
                deviceId: 'met-no-wroclaw-temperature', 
            },  
        }],
    },      
}

export function DashboardTest() {
    return (
        <ContainerStyled id="container1"> 
            <DashboardTabsStyled>
                <DashboardTab label="aaa">
                    <PanelWidget props={widgetPanel1Config.properties}/>
                </DashboardTab>
                <DashboardTab label="bbb">
                    <PanelWidget props={widgetPanel2Config.properties}/>
                </DashboardTab>  
            </DashboardTabsStyled>
        
        </ContainerStyled>
    );
}

const ContainerStyled = styled.div`
    width: 100vw;
    height: 100vh;  
    background-color: #2E2F34;
`;

const DashboardTabsStyled = styled(DashboardTabs)`
    width: 100%;
`;