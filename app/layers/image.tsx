import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
}  from "../../src/index";

var extent: any = [0, 0, 512, 512];
var projection = new ol.proj.Projection({
  code: 'static-image',
  units: 'pixels',
  extent: extent
});
var view = {
  projection: projection,
  center: ol.extent.getCenter(extent),
  zoom: 0,
  maxZoom: 9
};
var BgAllExpanded = new ol.source.ImageStatic({
  attributions: '',
  url: 'svg/BgAllExpanded.svg',
  projection: projection,
  imageExtent: extent
});

var UpperLayerUnited0 = new ol.source.ImageStatic({
  attributions: '',
  url: 'svg/UpperLayerUnited0.svg',
  projection: projection,
  imageExtent: extent
});

var Blue1 = new ol.source.ImageStatic({
  attributions: '',
  url: 'svg/Blue1.svg',
  projection: projection,
  imageExtent: extent
});

var Brown2 = new ol.source.ImageStatic({
  attributions: '',
  url: 'svg/Brown2.svg',
  projection: projection,
  imageExtent: extent
});


export class Image extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Map view={view}>
          <Layers>
            <layer.Image source={BgAllExpanded} style="position:absolute; zIndex:0"/>
            <layer.Image source={UpperLayerUnited0} style="position:absolute; zIndex:1"/>
            <layer.Image source={Blue1} style="position:absolute; zIndex:2"/>
            <layer.Image source={Brown2} style="position:absolute; zIndex:3"/>
          </Layers>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/layers/image.tsx">source</a>
        <pre>{`
          <Map view={view}>
            <Layers>
              <layer.Image source={BgAllExpanded} style="position:absolute; zIndex:0"/>
              <layer.Image source={UpperLayerUnited0} style="position:absolute; zIndex:1"/>
              <layer.Image source={Blue1} style="position:absolute; zIndex:2"/>
              <layer.Image source={Brown2} style="position:absolute; zIndex:3"/>
            </Layers> 
          </Map>
        `}</pre>
      </div>
    );
  }
}
