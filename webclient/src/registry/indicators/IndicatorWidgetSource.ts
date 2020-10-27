import { IconType } from "react-icons/lib";
import { Device, DeviceBase, DeviceUpdate } from "../../devices/Device";

export abstract class IndicatorWidgetSource extends DeviceBase {
    constructor(deviceId: string, name: string, data = undefined) {
        super('', deviceId, name, data)
    }
    acceptData(update: DeviceUpdate): Device {
        return this
    }
    getValue() : any {
        return null
    }
    getIsUpToDate() : boolean { 
        return true 
    }
    getColor() : string | null { 
        return null 
    }
    getText() : string | null { 
        return null 
    }
    getMdIcon() : IconType | null {
        return null
    }
    getExtraText1() : string | null {
        return null
    }
    getExtraText2() : string | null {
        return null
    }
    getExtraText3() : string | null {
        return null
    }
    getExtraText4() : string | null {
        return null
    }
}

