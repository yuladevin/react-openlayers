import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from "../util";
import {Map} from '../map';

export class VectorTile extends React.Component<any, any> {

  layer: ol.layer.Vector;

  options: any = {
    renderBuffer: undefined,
    renderMode: undefined,
    renderOrder: undefined,
    extent: undefined,
    minResolution: undefined,
    maxResolution: undefined,
    opacity: undefined,
    preload: undefined,
    source: undefined,
    style: undefined,
    updateWhileAnimating: undefined,
    updateWhileInteracting: undefined,
    visible: undefined
  };

  events: any = {
    'change': undefined,
    'change:extent': undefined,
    'change:maxResolution': undefined,
    'change:minResolution': undefined,
    'change:opacity': undefined,
    'change:preload': undefined,
    'change:source': undefined,
    'change:useInterimTilesOnError': undefined,
    'change:visible': undefined,
    'change:zIndex': undefined,
    'postcompose': undefined,
    'precompose': undefined,
    'propertychange': undefined,
    'render': undefined
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }

  componentDidMount () {
    let options = Util.getOptions(Object.assign(this.options, this.props));
    this.layer = new ol.layer.VectorTile(options);
    this.context.mapComp.layers.push(this.layer);
  }

}

VectorTile['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Map),
  map: React.PropTypes.instanceOf(ol.Map)
};
