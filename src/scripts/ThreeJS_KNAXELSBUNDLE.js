
import * as Three from 'three';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer';
import { RenderPass } from 'three/addons/postprocessing/RenderPass';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass'
import { DotScreenShader } from 'three/addons/shaders/DotScreenShader' 


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


        this.camera = new Three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 2000 );
        var s = 150;
        this.camera.position.z = s;

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

        const sprite1 = null;//textureLoader.load( './tex/snowflake1.png' );
        const sprite2 = null;//textureLoader.load( './tex/snowflake2.png' );
        const sprite3 = null;//textureLoader.load( './tex/snowflake3.png' );
        const sprite4 = null;//textureLoader.load( './tex/snowflake4.png' );
        const sprite5 = null;//textureLoader.load( './tex/snowflake5.png' );

        geometry.setAttribute( 'position', new Three.Float32BufferAttribute( vertices, 3 ) );

        // this.parameters = [
        // [[ 1.0,1.0,1.0 ], sprite1, 1.5 ,1.5],
        // [[ 1.0,1.0,1.0 ], sprite3, 2.5 ,1.25],
        // [[ 1.0,1.0,1.0 ], sprite2, 1.5 ,1.5],
        // [[ 1.0,1.0,1.0 ], sprite5, 3.5 ,1.25],
        // [[ 1.0,1.0,1.0 ], sprite4, 2.5 ,1.7]
        // ];

        this.parameters = [
        [[ 1.0,1.0,1.0 ], sprite1, 1.5 ,.45],
        [[ 1.0,1.0,1.0 ], sprite3, 2.5 ,.125],
        [[ 1.0,1.0,1.0 ], sprite2, 1.5 ,.35],
        [[ 1.0,1.0,1.0 ], sprite5, 3.5 ,.125],
        [[ 1.0,1.0,1.0 ], sprite4, 2.5 ,.37]
        ];

        for ( let i = 0; i < this.parameters.length; i ++ ) {

            const color = this.parameters[ i ][ 0 ];
            const sprite = this.parameters[ i ][ 1 ];
            const size = this.parameters[ i ][ 2 ];
            const op = this.parameters[ i ][ 3 ];

            this.materials[ i ] = new Three.PointsMaterial( { size: size, map: sprite, blending: Three.AdditiveBlending, depthTest: false, transparent: true } );
            this.materials[ i ].color.setHSL( color[ 0 ], color[ 1 ], color[ 2 ] );
            this.materials[ i ].opacity = op;

            const particles = new Three.Points( geometry, this.materials[ i ] );

            particles.rotation.x = Math.random() * 6;
            particles.rotation.y = Math.random() * 6;
            particles.rotation.z = Math.random() * 6;

            this.scene.add( particles );

        }

        const params = {
            texture: true
        };

        for ( let i = 0; i < this.materials.length; i ++ ) {
            this.materials[ i ].map = true ? this.parameters[ i ][ 1 ] : null;
            this.materials[ i ].needsUpdate = true;
        }

        // postprocessing

        this.composer = new EffectComposer( this.renderer );
        this.composer.addPass( new RenderPass( this.scene, this.camera ) );

         this.effect1 = new ShaderPass( DotScreenShader );
         this.effect1.uniforms[ 'scale' ].value = 5;
         this.composer.addPass( this.effect1 );


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


 
        this.renderg();
        if(this.stats) { this.stats.update(); }
        requestAnimationFrame( this.animate.bind(this) );

    }

    renderg() {
        const time = Date.now() * 0.00005;
        this.tx = -this.tl + time;

         this.camera.position.x += (  this.mouseX - this.camera.position.x*50)/1000 ;
         this.camera.position.y += ( - this.mouseY - this.camera.position.y*50)/1000 ;
            this.camera.position.z -=(this.camera.position.z-50)/250*3;
       this.camera.lookAt( this.scene.position );

        for ( let i = 0; i < this.scene.children.length; i ++ ) {

            const object = this.scene.children[ i ];

            if ( object instanceof Three.Points ) { 

                object.rotation.y +=  .000015* ( i < 4 ? i + 1 : - ( i + 1 ) );
                object.rotation.z +=  .000015* ( i < 4 ? i + 1 : - ( i + 1 ) );

            }

        }


        this.composer.render( this.scene, this.camera );

        this.tl = time;
    }
}