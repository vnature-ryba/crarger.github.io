/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'air2',
                            type: 'image',
                            rect: ['0px', '124px', '1920px', '640px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"air2.png",'0px','0px']
                        },
                        {
                            id: 'Group3',
                            type: 'group',
                            rect: ['1122px', '252px', '351', '49', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Ellipse',
                                type: 'ellipse',
                                rect: ['255px', '38px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'EllipseCopy6',
                                type: 'ellipse',
                                rect: ['394px', '82px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'EllipseCopy5',
                                type: 'ellipse',
                                rect: ['100px', '146px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'EllipseCopy8',
                                type: 'ellipse',
                                rect: ['210px', '158px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'EllipseCopy',
                                type: 'ellipse',
                                rect: ['188px', '106px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '0',
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'EllipseCopy3',
                                type: 'ellipse',
                                rect: ['317px', '66px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'EllipseCopy4',
                                type: 'ellipse',
                                rect: ['94px', '118px', '3px', '3px', 'auto', 'auto'],
                                autoOrient: false,
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '0',
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '765px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6061,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid41",
                            "location",
                            0,
                            2000,
                            "linear",
                            "${EllipseCopy5}",
                            [[100.65, 146.53, 0, 0, 0, 0,0],[106.03, 167.49, 0, 0, 1.96, 29.76,21.71]]
                        ],
                        [
                            "eid63",
                            "location",
                            2000,
                            1510,
                            "linear",
                            "${EllipseCopy5}",
                            [[106.03, 167.49, 0.29, 4.41, 0, 0,0],[93.5, 171.79, -0.38, 4.15, -0.38, 4.15,13.35]]
                        ],
                        [
                            "eid99",
                            "location",
                            3611,
                            2000,
                            "linear",
                            "${EllipseCopy5}",
                            [[118.94, 135.29, 0, 0, 0, 0,0],[107.93, 161.84, -15.15, 20.49, -31.9, 43.15,29.06],[103.05, 182.93, 0, 0, -3.86, 19,50.97]]
                        ],
                        [
                            "eid98",
                            "location",
                            5611,
                            450,
                            "linear",
                            "${EllipseCopy5}",
                            [[103.05, 182.93, -4.06, 19.99, 0, 0,0],[97.74, 194.49, 0, 0, 0, 0,12.81]]
                        ],
                        [
                            "eid89",
                            "height",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid25",
                            "location",
                            1360,
                            640,
                            "linear",
                            "${EllipseCopy}",
                            [[188.65, 107.33, 0, 0, 0, 0,0],[192.81, 120.68, 0, 0, 0.28, 23.51,14.16]]
                        ],
                        [
                            "eid62",
                            "location",
                            2000,
                            2410,
                            "linear",
                            "${EllipseCopy}",
                            [[192.81, 120.68, 0.09, 7.82, 0, 0,0],[180.5, 129.15, -0.27, 9.01, -0.27, 9.01,15.18]]
                        ],
                        [
                            "eid75",
                            "top",
                            1220,
                            0,
                            "linear",
                            "${air2}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid15",
                            "location",
                            0,
                            2000,
                            "linear",
                            "${EllipseCopy4}",
                            [[74.25, 116.53, 0, 0, 0, 0,0],[63.24, 143.08, -15.15, 20.49, -31.9, 43.15,29.06],[58.36, 164.17, 0, 0, -3.86, 19,50.97]]
                        ],
                        [
                            "eid60",
                            "location",
                            2000,
                            450,
                            "linear",
                            "${EllipseCopy4}",
                            [[58.36, 164.17, -2.98, 14.68, 0, 0,0],[41.5, 174.75, -3.61, 5.25, -3.61, 5.25,20.21]]
                        ],
                        [
                            "eid32",
                            "location",
                            320,
                            1680,
                            "linear",
                            "${EllipseCopy3}",
                            [[315.05, 131.33, 0, 0, 0, 0,0],[320.19, 148.68, 0, 0, 1.74, 26.43,18.2]]
                        ],
                        [
                            "eid61",
                            "location",
                            2000,
                            1830,
                            "linear",
                            "${EllipseCopy3}",
                            [[320.19, 148.68, 0.28, 4.33, 0, 0,0],[308.5, 152.99, -0.2, 4.26, -0.2, 4.26,12.56]]
                        ],
                        [
                            "eid86",
                            "height",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1565,
                            1420,
                            "linear",
                            "${EllipseCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            1830,
                            2580,
                            "linear",
                            "${EllipseCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid34",
                            "opacity",
                            890,
                            400,
                            "linear",
                            "${EllipseCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            1290,
                            2540,
                            "linear",
                            "${EllipseCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid78",
                            "width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy6}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid81",
                            "width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy3}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid83",
                            "height",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy5}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid43",
                            "opacity",
                            570,
                            256,
                            "linear",
                            "${EllipseCopy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            826,
                            1174,
                            "linear",
                            "${EllipseCopy5}",
                            '1',
                            '0.25999999046326'
                        ],
                        [
                            "eid50",
                            "opacity",
                            2000,
                            450,
                            "linear",
                            "${EllipseCopy5}",
                            '0.25999999046326',
                            '0'
                        ],
                        [
                            "eid101",
                            "opacity",
                            3791,
                            709,
                            "linear",
                            "${EllipseCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            4500,
                            750,
                            "linear",
                            "${EllipseCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid79",
                            "width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid74",
                            "left",
                            1220,
                            0,
                            "linear",
                            "${air2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid77",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid80",
                            "width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy4}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid5",
                            "opacity",
                            0,
                            1250,
                            "linear",
                            "${air2}",
                            '1',
                            '0.15'
                        ],
                        [
                            "eid6",
                            "opacity",
                            1250,
                            1250,
                            "linear",
                            "${air2}",
                            '0.15',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            2500,
                            876,
                            "linear",
                            "${air2}",
                            '1',
                            '0.15'
                        ],
                        [
                            "eid93",
                            "opacity",
                            3376,
                            1624,
                            "linear",
                            "${air2}",
                            '0.15',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1354,
                            397,
                            "linear",
                            "${Ellipse}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1751,
                            2043,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid48",
                            "opacity",
                            2580,
                            1170,
                            "linear",
                            "${EllipseCopy8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            3750,
                            1395,
                            "linear",
                            "${EllipseCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid76",
                            "width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy5}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid87",
                            "height",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy4}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid20",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${EllipseCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1000,
                            1450,
                            "linear",
                            "${EllipseCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid82",
                            "width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid29",
                            "location",
                            222,
                            2113,
                            "linear",
                            "${Ellipse}",
                            [[250.86, 108.73, 0, 0, 0, 0,0],[255.17, 164.46, 0.47, 2.81, 16.56, 99.74,55.97],[258.34, 183.92, 0, 0, 0.48, 2.8,75.69]]
                        ],
                        [
                            "eid65",
                            "location",
                            2335,
                            2348,
                            "linear",
                            "${Ellipse}",
                            [[258.34, 183.92, 0.22, 1.27, 0, 0,0],[246.5, 185.18, 0.2, 1.24, 0.2, 1.24,11.92]]
                        ],
                        [
                            "eid85",
                            "height",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy6}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid35",
                            "location",
                            0,
                            2000,
                            "linear",
                            "${EllipseCopy6}",
                            [[403.85, 118.93, 0, 0, 0, 0,0],[407.85, 154.55, 0, 0, 0, 50.92,35.89]]
                        ],
                        [
                            "eid64",
                            "location",
                            2000,
                            1560,
                            "linear",
                            "${EllipseCopy6}",
                            [[407.85, 154.55, 0, 7.4, 0, 0,0],[395.5, 161.78, -0.6, 7, -0.6, 7,14.51]]
                        ],
                        [
                            "eid66",
                            "location",
                            2000,
                            450,
                            "linear",
                            "${EllipseCopy8}",
                            [[210.65, 159.33, 0, 0, 0, 0,0],[194.5, 159.33, -3.02, 0, -3.02, 0,16.15]]
                        ],
                        [
                            "eid47",
                            "location",
                            2450,
                            2695,
                            "linear",
                            "${EllipseCopy8}",
                            [[206.25, 159.33, 0, 0, 0, 0,0],[204.65, 202.93, 0, 0, 0, 0,43.63]]
                        ],
                        [
                            "eid37",
                            "opacity",
                            1830,
                            146,
                            "linear",
                            "${EllipseCopy6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            1976,
                            924,
                            "linear",
                            "${EllipseCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid88",
                            "height",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy3}",
                            '3px',
                            '3px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("AIR5_edgeActions.js");
})("EDGE-332351892");
