import React from 'react';
import { selectDevices } from '../devices/devicesSlice';
import { useSelector } from 'react-redux';
import { Temperature } from '../devices/interfaces/generic/genericDevices';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

interface Props {
    deviceId: string;
}

export function TemperatureWidget({ deviceId }: Props) {
    const devices = useSelector(selectDevices);
    const device = devices.get(deviceId);
    const temperature = device as Temperature | undefined;
    const data = temperature?.getTemperature() ?? 'N/A';
    return (
        <TableContainer>
            <Content>{data}<sup>c</sup></Content> 
            <HeaderRow>{device?.getName()}</HeaderRow>
        </TableContainer>
    );
}
const TableContainer = styled.div`
  background-color: #383C45;
  width: 100%;
  height: 100%;
  margin: 0px;
  color: white;

  display: grid;
  grid-template-columns: auto;  
  grid-template-rows: 50px [line1] auto;
  grid-gap: 1rem;
`;

const HeaderRow = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  font-size: 2vmin;
  color: #A5A9B2;
`;

const Content = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  place-self: center;
  font-size: 6vmin;
`;

const Box = styled.div`
  height: 300px;
  width: 300px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #383C45;
  color: #F1F6FC;
`;
