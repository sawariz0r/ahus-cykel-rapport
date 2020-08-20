import React from 'react';
import { Map as LeafletMap, Marker, TileLayer } from "react-leaflet";
import Styled from "styled-components";
import "leaflet/dist/leaflet.css";

interface Props {
  position?: number[];
}

const LMap = Styled<any>(LeafletMap)`
  height: 100vh;
  width: 100vw;
`;

//11.76/55.9147/14.2743
export const Map = (props: Props) => {
  return (
    <LMap
      zoom={13.5}
      zoomControl={false}
      center={[55.9247, 14.2943]}>
      <TileLayer
        url={"https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}"}
        accessToken={"IWu3RbaPU8xquH6zs6yZ7NNHZMZkWVblEuyTHcOwjVvqrqbw1aowyveX3LbItRFG"}
        attribution="Powered by Jawg.io"
      />
    </LMap>
  )
}
