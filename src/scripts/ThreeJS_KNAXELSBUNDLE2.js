
import * as Three from 'three';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer';
import { RenderPass } from 'three/addons/postprocessing/RenderPass';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass'


export default class PixelAsh {

      constructor(canvas, stats) {

        //this.camera = null,this.scene= null,this.renderer= null,this.stats= null,this.parameters= null;
        this.mouseX = 0.0;
        this.mouseY = 0.0;
        this.canvas = canvas; 
        this.stats = stats;
        this.init();
        this.animate();

      }

    init() {
        //

        this.renderer = new Three.WebGLRenderer({canvas: this.canvas,
            antialias: false});
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );

        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;


        this.camera = new Three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 15, 2000 );
        var s = 150;
        this.camera.position.z = s*2;

        this.scene = new Three.Scene();
        this.scene.fog = new Three.FogExp2( 0x000000, 0.008 );


        this.materials = [];

        const geometry = new Three.BufferGeometry();
        const vertices = [];


        for ( let i = 0; i < 100; i ++ ) {

            const x = Math.random() * s - s/2;
            const y = Math.random() * s - s/2; 
            const z = Math.random() * s - s/2;

            vertices.push( x, y, z );

        }
        const textureLoader = new Three.TextureLoader();


        geometry.setAttribute( 'position', new Three.Float32BufferAttribute( vertices, 3 ) );

        this.parameters = [
        [[ 1.0,1.0,1.0 ], 1.5 ,.45],
        [[ 1.0,1.0,1.0 ], 2.5 ,.125],
        [[ 1.0,1.0,1.0 ], 1.5 ,.35],
        [[ 1.0,1.0,1.0 ], 3.5 ,.125],
        [[ 1.0,1.0,1.0 ], 2.5 ,.37]
        ];

        for ( let i = 0; i < this.parameters.length; i ++ ) {

            const color = this.parameters[ i ][ 0 ];
            const size = this.parameters[ i ][ 1 ];
            const op = this.parameters[ i ][ 2 ];

            this.materials[ i ] = new Three.PointsMaterial( { size: size, map: null, blending: Three.AdditiveBlending, depthTest: false, transparent: true } );
            this.materials[ i ].color.setHSL( color[ 0 ], color[ 1 ], color[ 2 ] );
            this.materials[ i ].opacity = op;

            const particles = new Three.Points( geometry, this.materials[ i ] );

            particles.rotation.x = Math.random() * 6;
            particles.rotation.y = Math.random() * 6;
            particles.rotation.z = Math.random() * 6;

            this.scene.add( particles );

        }


        // postprocessing


    }

    onWindowResize(s1,s2 ) {
        this.windowHalfX = s1 / 2;
        this.windowHalfY = s2 / 2;

        this.camera.aspect = s1 / s2;
        this.camera.updateProjectionMatrix();


       this.renderer.setSize( s1,s2 );

    }

    onPointerMove( event ) {

        if ( event.isPrimary === false ) return;
        this.mouseX = event.clientX - this.windowHalfX;
        this.mouseY = event.clientY - this.windowHalfY;


        // for ( let i = 0; i < this.scene.children.length; i ++ ) {

        //     const object = this.scene.children[ i ];

        //     if ( object instanceof Three.Points ) { 
        //         object.rotation.y += .0002* ( i < 4 ? i + 1 : - ( i + 1 ) );
        //         object.rotation.z += .0002* ( i < 4 ? i + 1 : - ( i + 1 ) );
        //         object.rotation.x += .0002* ( i < 4 ? i + 1 : - ( i + 1 ) );
        // }
        // }
    } 

    //


    animate() {
        var self = this;
        setTimeout( function() {
            requestAnimationFrame( self.animate.bind(self)  );
        }, 1000 / 60 );
        // if(this.stats) { this.stats.update(); }
        this.renderg();
    }

    renderg() {
        const time = Date.now() * 0.00005;
        this.tx = -this.tl + time;


        for ( let i = 0; i < this.scene.children.length; i ++ ) {

            const object = this.scene.children[ i ];

            if ( object instanceof Three.Points ) { 

                object.rotation.y +=  .00035* ( i < 4 ? i + 1 : - ( i + 1 ) );
                object.rotation.z +=  .00035* ( i < 4 ? i + 1 : - ( i + 1 ) );

            }

        }
        this.camera.position.x += (  this.mouseX - this.camera.position.x*50)/1000 ;
        this.camera.position.y += ( - this.mouseY - this.camera.position.y*50)/1000 ;
        this.camera.position.z -=(this.camera.position.z-50)/250*10;
        this.camera.lookAt( this.scene.position );


        this.renderer.render( this.scene, this.camera );

        this.tl = time;
    }
}