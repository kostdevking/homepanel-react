import { store } from '../../app/store';
import { Device } from '../../devices/Device';
import { AsTemperature } from '../genericConverters';
import { IndicatorWidgetSource } from './IndicatorWidgetSource';

export class TemperatureIndicatorWidgetSource extends IndicatorWidgetSource {
    private temperatureConverterId : string
    private subDeviceId : string

    constructor(deviceId: string, name: string, subDeviceId: string, temperatureConverterId: string)  {
        super(deviceId, name);
        this.subDeviceId = subDeviceId;
        this.temperatureConverterId = temperatureConverterId;
    }
    
    protected getSubDevice(): Device {
        return store.getState().devices.map.get(this.subDeviceId)!     
    }

    protected getTemperatureConverter() {
        return store.getState().devices.map.get(this.temperatureConverterId)! as any as AsTemperature;
    }

    protected getTemperature() : number | null {
        let device = this.getSubDevice();
        let converter = this.getTemperatureConverter();

        if (!device || !converter) {
            return null;
        }

        let value = converter.getTemperature(device); 
        return value;
    }

    public getText() : string {
        let value = this.getTemperature()
        const ret =  value ? value.toFixed(1) + "&deg;" : "";
        return ret; 
    }

    public getValue() : string | null{
        let value = this.getTemperature()
        if (value !== null)
            return value.toFixed(1);
        else
            return  null; 
    }
}
