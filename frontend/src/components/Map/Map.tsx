import React, { useState, useEffect } from 'react';
import ReactDOMServer from "react-dom/server";
import { Map as LeafletMap, Marker, TileLayer } from "react-leaflet";
import { Icon, DivIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Styled from "styled-components";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import bicycle from "./bicycle.svg";
import person from "./person.svg";

import { usePosition } from "use-position";
import { useWindowSize } from "use-hooks";
import FocusSelf from './FocusSelf';

interface Props {
  position?: number[],
  toggleInfo: any,
  style?: any
}

const LMap = Styled<any>(LeafletMap)`
  height: 100%;
  width: 100vw;
  overflow: hidden;

  .leaflet-bottom {
    z-index: 600 !important;
  }

  .marker-cluster-custom {
    background: #9370db;
    border: 3px solid #ededed;
    border-radius: 50%;
    color: #ededed;
    height: 40px;
    line-height: 37px;
    text-align: center;
    width: 40px;
  }

  .custom-icon {
    background: url(${person}) no-repeat top;
    background-size: 100% 70%;
    border: none;
    z-index: 1200;
  }

  .user-icon {
    border-radius: 50%;
    animation: pulse 2s infinite;
    height: 100%;
    width: 100%;
    z-index: 1199;
    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(188, 211, 242, 0.6);
        background: rgba(188, 211, 242, 0.6);
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        background: rgba(0, 0, 0, 0.0);
      }
      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        background: rgba(0, 0, 0, 0.0);
    
      }
  }
`;

const bikeIcon = new Icon({
  iconUrl: bicycle,
  iconSize: [25, 25]
})

const personIcon = new DivIcon({
  iconUrl: person,
  iconSize: [25, 25],
  html: '<div class="user-icon"></div>',
  className: "custom-icon"
})

export const Map = (props: Props) => {
  const [markers, setMarkers] = useState<any>([[55.91689071641188, 14.287118911743166], [55.92059416839985, 14.290122985839846], [55.91943988365562, 14.279823303222658], [55.91535151540654, 14.296646118164062], [55.91280207931603, 14.287891387939455], [55.91400466439738, 14.282312393188478], [55.92424917666591, 14.284543991088869], [55.91934369170874, 14.29973602294922], [55.91313880689863, 14.292955398559572]]);
  const [center, setCenter] = useState<any>([55.9247, 14.2943]);
  const { toggleInfo } = props;

  /* Saving these for later, if we want to add click-to-add functionality
  const startClickTimer = (e: any) => {
    timer = setTimeout(() => setMarkers([...markers, [e.latlng.lat, e.latlng.lng]]), 800)
  }

  const handleClickEnd = (e: any) => {
    clearTimeout(timer);
  }
*/
  const { latitude: userlat, longitude: userlong, errorMessage } = usePosition(true, { enableHighAccuracy: true, timeout: 2000, maximumAge: 30000 });
  const { height } = useWindowSize();

  return (
    <LMap
      style={{ height: height }}
      zoom={12.5}
      zoomControl={false}
      //onMouseDown={startClickTimer}
      //onMouseUp={handleClickEnd}
      //onMouseMove={handleClickEnd}
      center={center}>
      {
        errorMessage !== null && userlat && (
          <FocusSelf onClick={() => {
            const coords = [userlat, userlong];
            setCenter(coords)
          }} />
        )
      }
      <TileLayer
        style={{ height: "100%" }}
        url={"https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}"}
        accessToken={"IWu3RbaPU8xquH6zs6yZ7NNHZMZkWVblEuyTHcOwjVvqrqbw1aowyveX3LbItRFG"}
        attribution="Maps powered by Jawg.io"
      />
      <MarkerClusterGroup maxClusterRadius={50}>
        {markers.map((x: any, i: number) => {
          return (
            <Marker key={i} onClick={() => toggleInfo()} position={x} icon={bikeIcon} />
          )
        })
        }
      </MarkerClusterGroup>
      {userlat !== undefined && userlong !== undefined && <Marker key={"user"} onClick={() => toggleInfo()} position={[userlat, userlong]} icon={personIcon} />}


    </LMap>
  )
}
