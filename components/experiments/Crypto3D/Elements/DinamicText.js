import * as THREE from 'three'

const textConfig = {
  initialText: "CryptoArtBr",
  height: 20,
  size: 30,
  curveSegments: 4,
  bevelThickness: 2,
  bevelSize: 1.5,
  hover: 30
}

class DinamicText {
  constructor(text, container, material) {
    const self = this

    this.container = container
    this.material = material
    
    const loader = new THREE.FontLoader();
    loader.load( 'fonts/optimer_bold.typeface.json', function ( response ) {
      self.font = response;
      self.createText(text, container, material)
    });
  }

  updateText(text){
    return this.createText(text, this.container, this.material)
  }

  createText(text, container, material) {
    if(this.textMesh) this.container.remove( this.textMesh );
  
    const textGeo = new THREE.TextGeometry(text, {
      font: this.font,
      size: textConfig.size,
      height: textConfig.height,
      curveSegments: textConfig.curveSegments,
      bevelThickness: textConfig.bevelThickness,
      bevelSize: textConfig.bevelSize,
      bevelEnabled: true
  
    });
  
    textGeo.computeBoundingBox();
  
    this.textMesh = new THREE.Mesh( textGeo, material );
  
    const centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );
    this.textMesh.position.x = centerOffset;
    container.add( this.textMesh );
  
    return this.textMesh
  }
}

export {
  DinamicText
}