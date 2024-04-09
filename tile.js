
  var map = L.map('map').setView([0, 0], 2); // Set initial view and zoom level

  // Define the custom tile layer and add it to the map
  L.tileLayer('assets/mehdem/Mehden_{x}_{y}.png', {
    maxZoom: 24,
    tileSize: 256,
  }).addTo(map);

   // Define the bounds for the map
   var bounds = L.latLngBounds(
    L.latLng(-100, -400),
    L.latLng(100, 400)
  );

  // Set the maximum bounds of the map
  map.setMaxBounds(bounds);

  // Restrict the user from zooming out beyond a certain level
  map.setMinZoom(2);


// Define bounds for image overlays
var boundsMehdenTopRight = L.latLngBounds(
  L.latLng(0, 0),
  L.latLng(100, 200)
);

var boundsMehdenTopMid = L.latLngBounds(
  L.latLng(0, -200),
  L.latLng(100, 0)
);

var boundsMehdenTopLeft = L.latLngBounds(
  L.latLng(0, -400),
  L.latLng(100, -200)
);

var boundsMehdenBottomRight = L.latLngBounds(
  L.latLng(-100, 0),
  L.latLng(0, 200)
);

var boundsMehdenBottomMid = L.latLngBounds(
  L.latLng(-100, -200),
  L.latLng(0, 0)
);

var boundsMehdenBottomLeft = L.latLngBounds(
  L.latLng(-100, -400),
  L.latLng(0, -200)
);

var boundsFillerTopRight = L.latLngBounds(
  L.latLng(100, 200),
  L.latLng(200, 400)
);

var boundsFillerTopMid = L.latLngBounds(
  L.latLng(100, 0),
  L.latLng(200, 200)
);

var boundsFillerTopLeft = L.latLngBounds(
  L.latLng(100, -200),
  L.latLng(200, 0)
);

var boundsFillerBottomRight = L.latLngBounds(
  L.latLng(0, 200),
  L.latLng(100, 400)
);

var boundsFillerBottomMid = L.latLngBounds(
  L.latLng(0, 0),
  L.latLng(100, 200)
);

var boundsFillerBottomLeft = L.latLngBounds(
  L.latLng(0, -200),
  L.latLng(100, 0)
);

// Create image overlays for the new tiles
var imageFillerTopRight = L.imageOverlay('images/filler.png', boundsFillerTopRight).addTo(map);
var imageFillerTopMid = L.imageOverlay('images/filler.png', boundsFillerTopMid).addTo(map);
var imageFillerTopLeft = L.imageOverlay('images/filler.png', boundsFillerTopLeft).addTo(map);
var imageFillerBottomRight = L.imageOverlay('images/filler.png', boundsFillerBottomRight).addTo(map);
var imageFillerBottomMid = L.imageOverlay('images/filler.png', boundsFillerBottomMid).addTo(map);
var imageFillerBottomLeft = L.imageOverlay('images/filler.png', boundsFillerBottomLeft).addTo(map);

  var imageMehdenTopRight = L.imageOverlay('assets/mehden/Mehden_1_3.png', boundsMehdenTopRight).addTo(map);
  var imageMehdenTopMid = L.imageOverlay('assets/mehden/Mehden_1_2.png', boundsMehdenTopMid).addTo(map);
  var imageMehdenTopLeft = L.imageOverlay('assets/mehden/Mehden_1_1.png', boundsMehdenTopLeft).addTo(map);
  var imageMehdenBottomRight = L.imageOverlay('assets/mehden/Mehden_2_3.png', boundsMehdenBottomRight).addTo(map);
  var imageMehdenBottomMid = L.imageOverlay('assets/mehden/Mehden_2_2.png', boundsMehdenBottomMid).addTo(map);
  var imageMehdenBottomLeft = L.imageOverlay('assets/mehden/Mehden_2_1.png', boundsMehdenBottomLeft).addTo(map);

  // Add markers or other features as needed
  var MapIcon = L.Icon.extend({
    options: {
        // im stilling messing with these
            iconSize:     [25, 25], // size of icon
            iconAnchor:   [15, 15], // what pixel is pinned to the map
            popupAnchor:  [-3,-32] // popup 
        }
    });

    // Icons png is the one to use
    var campIcon = new MapIcon({iconUrl: './assets/Campfire.png'}),
    scenesIcon = new MapIcon({iconUrl: './assets/Sex.png'}),
    equipmentIcon = new MapIcon({iconUrl: './assets/ico-loot.png'}),
    questIcon = new MapIcon({iconUrl: './assets/Quest.png'}),
    objectiveIcon = new MapIcon({iconUrl: './assets/QuestObjective.png'}),
    townIcon = new MapIcon({iconUrl: './assets/Town.png'}),
    fertilityIcon = new MapIcon({iconUrl: './assets/ShrineFertility.png'}),
    virilityIcon = new MapIcon({iconUrl: './assets/ShrineVirility.png'}),
    cosmeticIcon = new MapIcon({iconUrl: './assets/Cosmetic.png'}),
    templeIcon = new MapIcon({iconUrl: './assets/Temple.png'}),
    villageIcon = new MapIcon({iconUrl: './assets/Village.png'}),
    caveIcon = new MapIcon({iconUrl: './assets//Cave.png'}),
    poiIcon = new MapIcon({iconUrl: './assets/poi.png'}),
    collectablesIcon = new MapIcon({iconUrl: './assets/Essence_2.png'});
    enemyIcon = new MapIcon({iconUrl: `./assets/Enemy.png`}),
    merchantIcon = new MapIcon({iconUrl: `./assets/Merchant.png`}),
    aadiIcon = new MapIcon({iconUrl: `./assets/Aadi.png`}),
    undiscoveredIcon = new MapIcon({iconUrl: `./assets/Undiscovered.png`})

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
    var enemyLayer = L.layerGroup();
    var npcLayer = L.layerGroup();



    // Markers
    var markers = [
        // CAMPFIRES
        L.marker([417, 540], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //1, Tal'Senet Coast
        L.marker([450, 410], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //2 Mehden southeast coast
        L.marker([406, 325], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //3 the Mehden Village 
        L.marker([430, 280], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //4 Temple of Zulumun
        L.marker([460, 615], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //5 Cosmetic
        L.marker([405, 585], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //6 Rampant Lioness
        L.marker([525, 480], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //7  Moswen's
        L.marker([555, 685], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //8 Pleasure Island
        L.marker([650, 515], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //9  Cloister of Nuriah 
        L.marker([580, 335], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //10 farmer's
        L.marker([1045, 810], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //11 HR South
        L.marker([1215, 730], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire `), //12 HR North
        L.marker([305, 405], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire `), //13 Pleaure Gardens


        // SCENES combine centaur camp
        L.marker([615, 512], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Ameni" target="_blank">Priestess Ameni</a>`),
        L.marker([386, 495], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Samia" target="_blank">Samia</a>`),
        L.marker([303, 426], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Alkippe" target="_blank">Alkippe</a>`),
        L.marker([305, 425], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Iva" target="_blank">Iva</a>`),
        L.marker([305, 428], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Khyras" target="_blank">Khyras</a>`),
        L.marker([520, 487], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Moswen" target="_blank">Moswen</a>`),
        L.marker([563, 670], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Adept" target="_blank">The Adepts</a>`),
       
        // EQUIPMENT   
        L.marker([720, 585], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/Bows/Anubite_Bow" target="_blank">Anubite Bow</a>`),
        L.marker([420, 615], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/1h/Lion_Blade" target="_blank">Lion Blade</a>`),
        L.marker([515, 450], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/1h/Raider_Talon" target="_blank">Raider Talon</a>`),
        L.marker([670, 430], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/1h/Viper's_Kiss" target="_blank">Viper's Kiss</a>`),
        L.marker([380, 500], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/1h/Slaver's_Cudgel" target="_blank">Slaver's Cudgel</a>`),
        L.marker([720, 588], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/2h/Legionnaire's_Kopis" target="_blank">Legionnaire's Kopis</a>`),
        L.marker([450, 365], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/Shields/Aadi's_Hide" target="_blank">Aadi's Hide</a>`),
        L.marker([485, 365], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/Shields/Torment's_Vigil" target="_blank">Torment's Vigil</a>`),
          

        // QUESTS
        L.marker([615, 553], {icon: questIcon}).addTo(questLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Quests/IfItBleeds" target="_blank">If It Bleeds</a>`),
        L.marker([525, 326], {icon: questIcon}).addTo(questLayer).bindPopup(`Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/The_Prodigal_Son" target="_blank">The Prodigal Son</a> <br> NPC:<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Farmer" target="_blank">Farmer</a>`),
        L.marker([610, 510], {icon: questIcon}).addTo(questLayer).bindPopup(`Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/Shipwrecked_Anubites" target="_blank">Shipwrecked Anubites</a> <br> NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Asim" target="_blank">Asim</a>`),
        L.marker([1173, 792], {icon: questIcon}).addTo(questLayer).bindPopup(`Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/My_Brother's_Keeper" target="_blank">My Brother's Keeper</a> <br> NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Villager_MBK" target="_blank">Villager</a>`),
        L.marker([1227, 700], {icon: questIcon}).addTo(questLayer).bindPopup(`Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/Until_Death" target="_blank">Until Death</a> <br> NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Villager_UD" target="_blank">Villager</a>`),

        // Objectives
        L.marker([386, 370], {icon: objectiveIcon}).addTo(questLayer).bindPopup(`Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/Masquerader" target="_blank">Masquerade</a> <br> NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Shaken_Villager" target="_blank">Shaken Villager</a>`),
        L.marker([1210, 715], {icon: objectiveIcon}).addTo(questLayer).bindPopup(`Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/Until_Death" target="_blank">Until Death</a> <br> NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Kemma" target="_blank">Kemma</a>`),
        L.marker([1228, 740], {icon: objectiveIcon}).addTo(questLayer).bindPopup(`Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/BeholdNew" target="_blank">Behold</a> <br> NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/AnubiteCaptain" target="_blank">Anubite Captain</a>`),




        // PoIs, {icon: can change}
        // TAL'SENENT   
        L.marker([520, 600], {icon: fertilityIcon}).addTo(poiLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Fertility_Shrine" target="_blank">Shrine of Fertility</a>`),
        L.marker([520, 605], {icon: virilityIcon}).addTo(poiLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Virility_Shrine" target="_blank">Shrine of Virility</a>`),
        L.marker([470, 620], {icon: cosmeticIcon}).addTo(poiLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Cosmetic_Shrine" target="_blank">Shrine of Cosmetics</a>`),
        L.marker([396, 588], {icon: villageIcon}).addTo(poiLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Rampant_Lioness" target="_blank">Rampant Lioness</a>`),
        L.marker([375, 573], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Raqote`),

        // MEHDEN ISLAND
        L.marker([410, 265], {icon: templeIcon}).addTo(poiLayer).bindPopup(`Temple of Zulumun`),
        L.marker([414, 325], {icon: townIcon}).addTo(poiLayer).bindPopup(`Mehden Villlage`),
        L.marker([580, 345], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Kehm Farmstead`),
        L.marker([630, 370], {icon: templeIcon}).addTo(poiLayer).bindPopup(`Abandoned Ruin`),
        L.marker([510, 405], {icon: caveIcon}).addTo(poiLayer).bindPopup(`Animal Den`),
        L.marker([515, 400], {icon: templeIcon}).addTo(poiLayer).bindPopup(`Forlorn Outlook`),
        L.marker([510, 487], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Desu Quay`),
        L.marker([620, 510], {icon: templeIcon}).addTo(poiLayer).bindPopup(`The Cloister of Nuriah`),
        L.marker([670, 588], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Sheten`),

        //Heifer's Reach
        L.marker([1230, 805], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Kersai Farmstead`),
        L.marker([940, 835], {icon: templeIcon}).addTo(poiLayer).bindPopup(`Traitor's Gate`),

        // COLLECTABLES
        L.marker([407, 622], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#talsenet" target="_blank">Kethra's Gift </a>`), // Tal'Senet
        L.marker([500, 420], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#mehden-island" target="_blank">Kethra's Gift </a>`), // left of cave
        L.marker([520, 420], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#mehden-island" target="_blank">Kethra's Gift</a>`), // left of idk
        L.marker([635, 375], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#mehden-island" target="_blank">Kethra's Gift</a>`), // at Deadass idk
        L.marker([520, 507], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#mehden-island" target="_blank">Kethra's Gift</a>`), // left of Mowsen
        L.marker([710, 580], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#mehden-island" target="_blank">Kethra's Gift</a>`), // Loot place
        L.marker([623, 440], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#mehden-island" target="_blank">Kethra's Gift</a>`), // western river thing 


        // MY OPPS/ BADDIEZ  
        L.marker([499, 355], {icon: enemyIcon}).addTo(enemyLayer).bindPopup(`Bloodseeker Camp`),
        L.marker([570, 715], {icon: enemyIcon}).addTo(enemyLayer).bindPopup(`Anubite Encampment`),

        // NPCs
        L.marker([500, 430], {icon: aadiIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Hakor" target="_blank">Hakor</a>`), //Aadie salesman
        L.marker([1153, 806], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Cursed_Poet" target="_blank">Cursed Poet</a>`),
        L.marker([1132, 833], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/CursedVillager" target="_blank">Cursed Villager</a>`), // horny stone guy
        L.marker([1209, 799], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/FarakAshalia" target="_blank">Farak & Ashalia</a>`), // Chaos Option
        L.marker([383, 565], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/FruitFarmer" target="_blank">Fruit Farmer</a>`), 
        L.marker([1203, 850], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Fruit-ObsessedVillager" target="_blank">Fruit-Obsessed Villager</a>`), 
        L.marker([370, 570], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Jamila" target="_blank">Jamila</a>`),
        L.marker([520, 400], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Jeivad" target="_blank">Jeivad</a>`), 
        L.marker([1220, 820], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Mother&Father" target="_blank">Mother & Father</a>`), 
        L.marker([396, 582], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Nenu" target="_blank">Nenu The Bard</a>`),
        L.marker([1200, 725], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/OldWoman" target="_blank">Old Woman</a>`),
        L.marker([710, 480], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/OphyxFarmer" target="_blank">Ohpyx Farmer</a>`),
        L.marker([372, 563], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Rashan" target="_blank">Rashan</a>`),
        L.marker([362, 577], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Tekem" target="_blank">Tekem</a>`),
        L.marker([1177, 863], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Villager(note)" target="_blank">Villager (Note)</a>`),
        L.marker([1182, 823], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Villager(Trapped)" target="_blank">Villager (Trapped)</a>`),
        L.marker([1108, 790], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Villager(Turn)" target="_blank">Villager (Turned)</a>`),
        L.marker([1100, 760], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/WorriedVillager" target="_blank">Worried Villager</a>`),
        L.marker([400, 585], {icon: merchantIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Damaris" target="_blank">Damaris</a>`),

    ];

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

    document.getElementById('enemy-filter').addEventListener('change', function() {
        if (this.checked) {
            map.addLayer(enemyLayer);
        } else {
            map.removeLayer(enemyLayer);
        }
    });

    document.getElementById('npc-filter').addEventListener('change', function() {
        if (this.checked) {
            map.addLayer(npcLayer);
        } else {
            map.removeLayer(npcLayer);
        }
    });

    // Filter
   campfireLayer.addTo(map);
   scenesLayer.addTo(map);
   equipmentLayer.addTo(map);
   questLayer.addTo(map);
   poiLayer.addTo(map);
   collectablesLayer.addTo(map);
   enemyLayer.addTo(map);
   npcLayer.addTo(map);