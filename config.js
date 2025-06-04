var config = {
    style: 'mapbox://styles/crosique17/cmbgtahde008w01scert86uf4',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiY3Jvc2lxdWUxNyIsImEiOiJjbWJndDVlbXIwMm93MnFzOGoybTBxZGV1In0.Yvg910r3DaAaS21QxmE3FQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Estadios europeos del Valencia CF',
    subtitle: '¿Cuáles son los grandes estadios que han marcado la historia europea del Valencia?',
    byline: 'By Carlos Rosique',
    footer: 'Source: BBDD Carlos Rosique. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Mestalla',
            image: 'https://www.elnacional.cat/uploads/s1/10/35/19/41/valencia-atalanta-champions-efe.jpeg',
            description: 'Mestalla es el principal estadio en el que ha jugado el Valencia a lo largo de su larga carrera europea, en la que ha disputado 349 partidos.',
            location: {
                center: [-0.3580966764490625, 39.47461416333745],
                zoom: 14.5,
                pitch: 47,
                bearing: 10.4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Giussepe Meazza',
            image: 'https://www.ciberche.net/histoche/images/20010523.jpg',
            description: 'El estadio milanés es el segundo campo en el que más partidos ha disputado el Valencia, con siete, entre ellos una final de Champions perdida en los penaltis.',
            location: {
                center: [9.12419983070221, 45.478238576485744],
                zoom: 13.37,
                pitch: 0,
                bearing: 9.6,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Heysel',
            image: 'https://cdn.resfu.com/media/img_news/los-futbolistas-del-valencia-pasean-por-el-estadio-heysel-de-bruselas-la-recopa-de-europa-ganada-al-arsenal-en-1980.jpg?size=1200x&lossy=1',
            description: 'El Valencia ganó en Heysel la Recopa de Europa de 1980, al derrotar, también en penaltis, al Arsenal inglés.',
            location: {
                center: [4.333928549448358, 50.89565214732686],
                zoom: 13.52,
                pitch: 71,
                bearing: 37.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Nya Ullevi',
            image: 'https://piks.eldesmarque.com/bin/valencia/stories/201516/Valencia_CF/uefa0304.jpg',
            description: 'En este estadio de Göteborg, el Valencia ganó la Copa de la UEFA del 2004, lo que, dos meses después, le permitió alzar la Supercopa de Europa en Mónaco.',
            location: {
                center: [11.987340001029304, 57.705861501114725],
                zoom: 11,
                pitch: 46,
                bearing: -59
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
