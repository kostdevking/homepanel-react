import React from 'react';
import { selectDevices } from '../devices/devicesSlice';
import { useSelector } from 'react-redux';
import { Switch } from '../devices/interfaces/generic/genericDevices';
import { FaLightbulb } from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa';
import { WidgetContainerSquare, WidgetContent, WidgetFontCaption, WidgetFontHeadlineIcon, WidgetHeaderRow } from './widgetCommons';
import { IconButton } from '@material-ui/core';
import { WidgetProperties  } from './widgets';

export function SwitchWidget({ props }: WidgetProperties) {
    const deviceId = props.deviceId;
    const devices = useSelector(selectDevices);
    const device = devices.get(deviceId);
    const switchable =  device as Switch | undefined;;
    const state = switchable?.getState() ?? 'N/A';

    const handleClick = () => {
      switchable?.toggle();
    }

    return (
      <WidgetContainerSquare>
          <WidgetContent>
              <IconButton color="inherit" onClick={handleClick}>
                <WidgetFontHeadlineIcon>
                  { !state && <FaRegLightbulb/>}
                  { state && <FaLightbulb/>}
                </WidgetFontHeadlineIcon>
              </IconButton>
          </WidgetContent> 
          <WidgetHeaderRow><WidgetFontCaption>{device?.getName()}</WidgetFontCaption></WidgetHeaderRow>
      </WidgetContainerSquare>
    );
}



