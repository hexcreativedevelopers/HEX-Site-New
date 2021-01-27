import * as THREE from './node_modules/three/build/three.module.js';
import{
  GLTFLoader
}from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';

let camera, scene, renderer;
let container, stats;
let mouseX = 0, mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;


let hemiLight, hemiColor = 0xff00ff;
let objectA, objectB;

let scroll;

function RGBToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}
//color change on scroll
$(window).scroll(function () {

  // selectors
  var $window = $(window),
    $section = $('body'),
    $panel = $('.section-colors');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  scroll = $window.scrollTop() + ($window.height() / 3);



  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $section.removeClass(function (index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');

      });
      hemiColor = 0xff0033;
      // Add class of currently active div
      $section.addClass('color-' + $(this).data('color'));
      var classObj = $section.css("backgroundColor");
      // console.log(RGBToHex(classObj));
      var hex = RGBToHex(classObj);


      hemiColor = hex.toString().replace('#', '0x');

      //console.log( $(this).getElementByClass('color').style.backgroundColor);
    }
  });

}).scroll();

init();
animate();

function init() {



  container = document.getElementById('three');



  camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 2000);

  camera.position.z = 900; //450



  // scene

  scene = new THREE.Scene();

  const ambientLight = new THREE.AmbientLight(0xcccccc, 0.75);

  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0x9e9e9e, 0.5); //0.3
  dirLight.position.x = -10;
  dirLight.position.y = 26.981;
  dirLight.position.z = 17.5;

  scene.add(dirLight);

  // const helper = new THREE.DirectionalLightHelper(dirLight,100);
  // scene.add(helper);



  // const hemiLight = new THREE.HemisphereLight(0x6260fb,0x20b0ee,0.9);
  hemiLight = new THREE.HemisphereLight(0x6260fb, 0xcccccc, 0.5);

  hemiLight.position.y = 20;
  scene.add(hemiLight);

  scene.add(camera);


  // model

  const onProgress = function (xhr) {

    if (xhr.lengthComputable) {

      const percentComplete = xhr.loaded / xhr.total * 100;
      console.log(Math.round(percentComplete, 2) + '% downloaded');

    }

  };

  const onError = function () { };

  const manager = new THREE.LoadingManager();

 new GLTFLoader().load(
  'models/gltf/sule/sule.gltf',
  function(gltf){
    scene.add(gltf.scene);
    objectA = gltf.scene;
    objectA.rotation.y = 70;
    objectA.position.x = 800;
    objectA.position.y = -200;
    objectA.scale.set(0.45, 0.45, 0.45);
    objectA.castShadow = false;
  });

  
 new GLTFLoader().load(
  'models/gltf/metaball/metaball.gltf',
  function(gltf){
    scene.add(gltf.scene);
    objectB = gltf.scene;
   
    objectB.rotation.y = 70;
    objectB.position.z = 500;
    objectB.position.x = 2999;
    objectB.position.y = 80;
    objectB.scale.set(1.2, 1.2, 1.2);
    objectB.castShadow = false;
    
    
  });

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x000000, 0);
  // container.appendChild(renderer.domElement);
  container.appendChild(renderer.domElement);

  check();
  //

  window.addEventListener('resize', onWindowResize, false);


}

function resizeCanvasToDisplaySize() {
  const canvas = renderer.domElement;
  // look up the size the canvas is being displayed
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  // adjust displayBuffer size to match
  if (canvas.width !== width || canvas.height !== height) {
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // update any render target sizes here
  }
}

function onWindowResize() {

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}

function onDocumentMouseMove(event) {

  mouseX = (event.clientX - windowHalfX) / 2;
  mouseY = (event.clientY - windowHalfY) / 2;

}

//

function animate() {

  requestAnimationFrame(animate);

  render();

}

function render() {

  hemiLight.color.setHex(hemiColor);

  if (scroll > 155) {
    camera.position.x = THREE.MathUtils.clamp(camera.position.x, scroll * 4.5, 1);
  }

  camera.position.x += (-mouseX - camera.position.x) * .05;
  camera.position.y += (mouseY - camera.position.y) * .04;


  if (scroll > 153) {
    if(objectA!=null){
      camera.lookAt(objectA.position);
    }
    
  } else if (scroll > 553) {
    camera.lookAt(objectB.position);


  }


  renderer.render(scene, camera);


}

function check() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // true for mobile device
    document.removeEventListener('mousemove', onDocumentMouseMove, false);
    console.log("Mobile");
  } else {
    // false for not mobile device
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    console.log("Desktop");
  }
}