import React, { useState, useEffect } from 'react';
import ReactDOMServer from "react-dom/server";
import { Map as LeafletMap, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Styled from "styled-components";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import { isMobile } from "react-device-detect";
import bicycle from "./bicycle.svg";
import person from "./person.svg";

import Div100vh from "react-div-100vh";
import { usePosition } from "use-position";

interface Props {
  position?: number[],
  toggleInfo: any
}

const LMap = Styled<any>(LeafletMap)`
  height: ${ isMobile ? "100%" : "100vh" };
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
`;

//11.76/55.9147/14.2743

const bikeIcon = new Icon({
   iconUrl: bicycle,
   iconSize: [25, 25]
})

const personIcon = new Icon({
  iconUrl: person,
  iconSize: [25, 25]
})

export const Map = (props: Props) => {
  const [markers, setMarkers] = useState<any>([[55.91689071641188, 14.287118911743166], [55.92059416839985, 14.290122985839846], [55.91943988365562, 14.279823303222658], [55.91535151540654, 14.296646118164062], [55.91280207931603, 14.287891387939455], [55.91400466439738, 14.282312393188478], [55.92424917666591, 14.284543991088869], [55.91934369170874, 14.29973602294922], [55.91313880689863, 14.292955398559572]]);
  const { toggleInfo } = props;

  /* Saving these for later, if we want to add click-to-add functionality
  const startClickTimer = (e: any) => {
    timer = setTimeout(() => setMarkers([...markers, [e.latlng.lat, e.latlng.lng]]), 800)
  }

  const handleClickEnd = (e: any) => {
    clearTimeout(timer);
  }
*/
  const { latitude: userlat, longitude: userlong } = usePosition(true);

  return (
    <Div100vh style={{ height: "100rvh", maxHeight: "100rvh" }}>
      <LMap
        zoom={13.5}
        zoomControl={false}
        //onMouseDown={startClickTimer}
        //onMouseUp={handleClickEnd}
        //onMouseMove={handleClickEnd}
        center={ userlat ? [userlat, userlong] : [55.9247, 14.2943]}>
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
        {userlat !== undefined && userlong !== undefined && <Marker key={"user"} onClick={() => toggleInfo()} position={[userlat, userlong]} icon={personIcon} /> }


      </LMap>
    </Div100vh>
  )
}
