<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Map Test</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <style>
        #map {
            height: 1000px;
            width: 100% ;
        }
        #filter-controls {
            /* position: absolute; */
            top: 10px;
            left: 10px;
            background-color: white;
            padding: 10px;
            margin-left: 40px;
            z-index: 1000;
        }
        body, a {
            font-family: 'Roboto', sans-serif;
        }
        .leaflet-popup-content-wrapper,
        .leaflet-popup-tip {
            font-family: 'Roboto', sans-serif; /* Change 'Roboto' to your desired font */
        }
    </style>
</head>
<body>
    <div id="filter-controls">
        <label><input type="checkbox" id="campfire-filter" checked> Campfires</label>
        <label><input type="checkbox" id="scenes-filter" checked> Scenes</label>
        <label><input type="checkbox" id="equipment-filter" checked> Equipment</label>
        <label><input type="checkbox" id="quest-filter" checked> Quests</label>
        <label><input type="checkbox" id="poi-filter" checked> Points Of Interest</label>
        <label><input type="checkbox" id="collectables-filter" checked> Collectables</label>
    </div>
    <div id="map"></div>

    <script>
        // Making the map
        var map = L.map('map', {
            crs: L.CRS.Simple
        });

        var bounds = [[0,0], [1000,1000]];
        var image = L.imageOverlay('assets/medhen4k-scaled.jpg', bounds).addTo(map); // this is making the image into the map
        map.fitBounds(bounds);

        // Making the Icons
        var MapIcon = L.Icon.extend({
        options: {
            // im stilling messing with these
                iconSize:     [25, 25], // size of icon
                iconAnchor:   [25, 25], // finer placement???
                popupAnchor:  [-13,-30] // no clue
            }
        });

        // Icons
        var campIcon = new MapIcon({iconUrl: 'assets/campfire.png'}),
        scenesIcon = new MapIcon({iconUrl: 'assets/scenes.png'}),
        equipmentIcon = new MapIcon({iconUrl: 'assets/equipment.png'}),
        questIcon = new MapIcon({iconUrl: 'assets/quest.png'}),
        poiCIcon = new MapIcon({iconUrl: 'assets/poi-city.png'}),
        poiPIcon = new MapIcon({iconUrl: 'assets/poi-preg.png'}),
        poiRIcon = new MapIcon({iconUrl: 'assets/poi-ruin.png'}),
        poiSIcon = new MapIcon({iconUrl: 'assets/poi-set.png'}),
        poiUIcon = new MapIcon({iconUrl: 'assets/poi-ug.png'}),
        poiIcon = new MapIcon({iconUrl: 'assets/poi.png'}),
        collectablesIcon = new MapIcon({iconUrl: 'assets/collectables.png'});

        L.icon = function (options) {
            return new L.Icon(options);
        };

        // this is filter stuff
        var campfireLayer = L.layerGroup();
        var scenesLayer = L.layerGroup();
        var equipmentLayer = L.layerGroup();
        var questLayer = L.layerGroup();
        var poiLayer = L.layerGroup();
        var collectablesLayer = L.layerGroup();


        document.getElementById('campfire-filter').addEventListener('change', function() {
            if (this.checked) {
                map.addLayer(campfireLayer);
            } else {
                map.removeLayer(campfireLayer);
            }
        });

        document.getElementById('scenes-filter').addEventListener('change', function() {
            if (this.checked) {
                map.addLayer(scenesLayer);
            } else {
                map.removeLayer(scenesLayer);
            }
        });

        document.getElementById('equipment-filter').addEventListener('change', function() {
            if (this.checked) {
                map.addLayer(equipmentLayer);
            } else {
                map.removeLayer(equipmentLayer);
            }
        });

        document.getElementById('quest-filter').addEventListener('change', function() {
            if (this.checked) {
                map.addLayer(questLayer);
            } else {
                map.removeLayer(questLayer);
            }
        });

        document.getElementById('poi-filter').addEventListener('change', function() {
            if (this.checked) {
                map.addLayer(poiLayer);
            } else {
                map.removeLayer(poiLayer);
            }
        });

        document.getElementById('collectables-filter').addEventListener('change', function() {
            if (this.checked) {
                map.addLayer(collectablesLayer);
            } else {
                map.removeLayer(collectablesLayer);
            }
        });


        // Markers
        var markers = [
            // CAMPFIRES
            L.marker([350, 650], {icon: campIcon}).addTo(campfireLayer).bindPopup(`a campfire 1`),
            L.marker([413, 445], {icon: campIcon}).addTo(campfireLayer).bindPopup(`a campfire 2`),
            L.marker([325, 305], {icon: campIcon}).addTo(campfireLayer).bindPopup(`a campfire 3`),
            L.marker([380, 225], {icon: campIcon}).addTo(campfireLayer).bindPopup(`a campfire 4`),
            L.marker([415, 790], {icon: campIcon}).addTo(campfireLayer).bindPopup(`a campfire 5`),
            L.marker([345, 725], {icon: campIcon}).addTo(campfireLayer).bindPopup(`a campfire 6`),
            L.marker([500, 560], {icon: campIcon}).addTo(campfireLayer).bindPopup(`a campfire 7`),
            L.marker([550, 905], {icon: campIcon}).addTo(campfireLayer).bindPopup(`a campfire 8`),
            L.marker([710, 625], {icon: campIcon}).addTo(campfireLayer).bindPopup(`a campfire 9`),
            L.marker([570, 305], {icon: campIcon}).addTo(campfireLayer).bindPopup(`a campfire 10`),


            // SCENES
            L.marker([695, 625], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Ameni" target="_blank">Priestess Ameni</a>`),
            L.marker([310, 590], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Samia" target="_blank">Samia</a>`),
            L.marker([195, 425], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Alkippe" target="_blank">Alkippe</a>`),
            L.marker([185, 425], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Iva" target="_blank">Iva</a>`),
            L.marker([175, 425], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Khyras" target="_blank">Iva</a>`),
            L.marker([510, 560], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Moswen" target="_blank">Moswen</a>`),
            L.marker([540, 875], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Adept" target="_blank">The Adepts</a>`),
           
            // EQUIPMENT   
            L.marker([800, 725], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/Bows/Anubite_Bow" target="_blank">Anubite Bow</a>`),
            L.marker([350, 775], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/1h/Lion_Blade" target="_blank">Lion Blade</a>`),
            L.marker([500, 500], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/1h/Raider_Talon" target="_blank">Raider Talon</a>`),
            L.marker([740, 500], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/1h/Viper's_Kiss" target="_blank">Viper's Kiss</a>`),
            L.marker([300, 595], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/1h/Slaver's_Cudgel" target="_blank">Slaver's Cudgel</a>`),
            L.marker([800, 738], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/2h/Legionnaire's_Kopis" target="_blank">Legionnaire's Kopis</a>`),
            L.marker([350, 365], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/Shields/Aadi's_Hide" target="_blank">Aadi's Hide</a>`),
            L.marker([455, 375], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/Shields/Torment's_Vigil" target="_blank">Torment's Vigil</a>`),


            // QUESTS
            L.marker([655, 685], {icon: questIcon}).addTo(questLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Quests/IfItBleeds" target="_blank">If It Bleeds</a>`),
            L.marker([520, 306], {icon: questIcon}).addTo(questLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Quests/The_Prodigal_Son" target="_blank">The Prodigal Son</a>`),
            L.marker([685, 625], {icon: questIcon}).addTo(questLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Quests/Shipwrecked_Anubites" target="_blank">Shipwrecked Anubites</a>`),

            // PoIs, {icon: can change}
            // TAL'SENENT   
            L.marker([513, 753], {icon: poiIcon}).addTo(poiLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Fertility_Shrine" target="_blank">Shrine of Fertility</a>`),
            L.marker([513, 765], {icon: poiIcon}).addTo(poiLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Virility_Shrine" target="_blank">Shrine of Virility</a>`),
            L.marker([445, 784], {icon: poiIcon}).addTo(poiLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Cosmetic_Shrine" target="_blank">Shrine of Cosmetics</a>`),
            L.marker([330, 728], {icon: poiSIcon}).addTo(poiLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Rampant_Lioness" target="_blank">Rampant Lioness</a>`),
            L.marker([300, 708], {icon: poiSIcon}).addTo(poiLayer).bindPopup(`Tal'Senet Outskirts`),

            // MEHDEN ISLAND
            L.marker([320, 205], {icon: poiRIcon}).addTo(poiLayer).bindPopup(`The Western Temple`),
            L.marker([353, 303], {icon: poiCIcon}).addTo(poiLayer).bindPopup(`Mehden Villlage`),
            L.marker([580, 325], {icon: poiIcon}).addTo(poiLayer).bindPopup(`Mehden Farms`),
            L.marker([660, 370], {icon: poiRIcon}).addTo(poiLayer).bindPopup(`DeadAss No Clue`),
            L.marker([500, 400], {icon: poiUIcon}).addTo(poiLayer).bindPopup(`Cave`),
            L.marker([515, 400], {icon: poiRIcon}).addTo(poiLayer).bindPopup(`Ruin Above Cave`),
            L.marker([513, 553], {icon: poiSIcon}).addTo(poiLayer).bindPopup(`Moswen's Village`),
            L.marker([675, 615], {icon: poiRIcon}).addTo(poiLayer).bindPopup(`The Cloister of Nuriah?`),
            L.marker([733, 753], {icon: poiIcon}).addTo(poiLayer).bindPopup(`North Eastern Place IDK man`),

            // COLLECTABLES
            L.marker([335, 795], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift" target="_blank">Kethra's Gift</a>`),
            L.marker([500, 420], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift" target="_blank">Kethra's Gift</a>`),
            L.marker([520, 420], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift" target="_blank">Kethra's Gift</a>`),
            L.marker([660, 380], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift" target="_blank">Kethra's Gift</a>`),
            L.marker([510, 600], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift" target="_blank">Kethra's Gift</a>`),
            L.marker([790, 730], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift" target="_blank">Kethra's Gift</a>`),
            L.marker([680, 470], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift" target="_blank">Kethra's Gift</a>`),
        ];
        // Tempt fix for no sidebar is the added links to Popups

        // Filter
        campfireLayer.addTo(map);
        scenesLayer.addTo(map);
        equipmentLayer.addTo(map);
        questLayer.addTo(map);
        poiLayer.addTo(map);
        collectablesLayer.addTo(map);

    </script>
</body>
</html>