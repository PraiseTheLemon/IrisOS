var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-2560x1440": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "630",
                    "DialogWidth": "810"
                },
                "/Wallpaper/org.kde.image/General": {
                    "DynamicMode": "2",
                    "FillMode": "6",
                    "Image": "file:///home/fadinglemon/Pictures/spaceurssr.jpg",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "customButtonImage": "rating-half-rtl",
                            "floating": "true",
                            "indicatorColor": "164,22,26",
                            "launcherPosition": "2",
                            "useCustomButtonImage": "true",
                            "useSystemFontSettings": "true"
                        }
                    },
                    "plugin": "AndromedaLauncher"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "launchers": "applications:systemsettings.desktop,preferred://filemanager,applications:kitty.desktop,preferred://browser,applications:vesktop.desktop",
                            "showText": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "bold": "true",
                            "command": "echo \"IrisOS 1.0 - SZERUGAL-NU-HABIYATEBE\"",
                            "fontFamily": "JetBrains Mono",
                            "interval": "0",
                            "textAlign": "2",
                            "textColor": "#E5383B"
                        }
                    },
                    "plugin": "com.github.zren.commandoutput"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 3.6666666666666665,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 141.16666666666666,
            "minimumLength": 141.16666666666666,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/Appearance": {
                            "txt": "%a"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.windowtitlereborn"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "341",
                            "popupWidth": "300"
                        }
                    },
                    "plugin": "plasmusic-toolbar"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        }
                    },
                    "plugin": "org.kde.plasma.catwalk"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "474",
                            "popupWidth": "624"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 2.6666666666666665,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 142.22222222222223,
            "minimumLength": 142.22222222222223,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
