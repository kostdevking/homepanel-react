import { WidgetConfiguration } from '../widgets/widgets';

export const dashboardConfig : WidgetConfiguration = {
    type: 'containerWidget',
    properties: {
        widgets: [{
            type: 'tabsWidget',
            properties: {
                pages: [{
                    title: 'Page A',
                    widgets: [ {
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
                    } ]
                }, {
                    title: 'Page B',
                    widgets: [ {
                        type: 'panelWidget',
                        properties: {
                            widgets: [{
                                type: 'temperatureWidget', 
                                properties: {
                                    deviceId: 'met-no-wroclaw-temperature', 
                                },  
                            }],
                        },      
                    } ]
                }],
            }
        }],
    }
}

