  // Making the map
  var map = L.map('map', {
    crs: L.CRS.Simple
});

var bounds = [[0,0], [1500,1800]];
var image = L.imageOverlay('./assets/5-25-sabu.png', bounds).addTo(map); // this is making the image into the map
map.fitBounds(bounds);

// Making the Icons
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
    L.marker([338, 790], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`),   //1 Tal-Senet Coast`),
    L.marker([365, 675], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`),  //2 Mehden southeast coast`),
    L.marker([326, 585], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //3 Mehden Village `), 
    L.marker([350, 560], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //4 Temple of Zulumun`),
    L.marker([370, 865], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //5 Ascension`),
    L.marker([330, 821], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //6 Rampant Lioness`),
    L.marker([415, 730], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //7  Moswen's`),
    L.marker([445, 915], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //8 Pleasure Island`),
    L.marker([525, 765], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //9  Cloister of Nuriah`),
    L.marker([460, 605], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //10 farmer's`), 
    L.marker([1125, 1030], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //11 HR South`), 
    L.marker([1270, 955], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //12 HR North`), 
    L.marker([245, 665], {icon: campIcon}).addTo(campfireLayer).bindPopup(`Campfire`), //13 Pleaure Gardens`), 


    // SCENES
    L.marker([316, 745], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Samia" target="_blank">Samia</a> `),
    L.marker([245, 683], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`
        <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Khyras" target="_blank">Khyras</a> <br> 
        <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Iva" target="_blank">Iva</a> <br> 
        <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Alkippe" target="_blank">Alkippe</a>`),
    L.marker([420, 740], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Moswen" target="_blank">Moswen</a>`),
    L.marker([445, 899], {icon: scenesIcon}).addTo(scenesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Adept" target="_blank">The Adepts</a>`),
   
    //EQUIPMENT
    // Weapons   
    L.marker([599, 770], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/Bows/Anubite_Bow" target="_blank">Anubite Bow</a> <br> <a href="https://wiki.carnal-instinct.com/UE5/Weapons/2h/Legionnaire's_Kopis" target="_blank">Legionnaire's Kopis</a>`),
    L.marker([339, 849], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/1h/Lion_Blade" target="_blank">Lion Blade</a>`),
    L.marker([420, 695], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/1h/Raider_Talon" target="_blank">Raider Talon</a>`),
    L.marker([550, 680], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/1h/Viper's_Kiss" target="_blank">Viper's Kiss</a>`),
    L.marker([310, 755], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/1h/Slaver's_Cudgel" target="_blank">Slaver's Cudgel</a>`),
    L.marker([365, 635], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/Shields/Aadi's_Hide" target="_blank">Aadi's Hide</a>`),
    L.marker([395, 635], {icon: equipmentIcon}).addTo( equipmentLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Weapons/Shields/Torment's_Vigil" target="_blank">Torment's Vigil</a>`),
    // Armour 

    // QUESTS
    L.marker([500, 800], {icon: questIcon}).addTo(questLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Quests/IfItBleeds" target="_blank">If It Bleeds</a>`),
    L.marker([430, 600], {icon: questIcon}).addTo(questLayer).bindPopup(`Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/The_Prodigal_Son" target="_blank">The Prodigal Son</a> <br> NPC:<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Farmer" target="_blank">Farmer</a>`),
    L.marker([1245, 1005], {icon: questIcon}).addTo(questLayer).bindPopup(`Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/My_Brother's_Keeper" target="_blank">My Brother's Keeper</a> <br> NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Villager_MBK" target="_blank">Villager</a>`),
    L.marker([1270, 935], {icon: questIcon}).addTo(questLayer).bindPopup(`Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/Until_Death" target="_blank">Until Death</a> <br> NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Villager_UD" target="_blank">Villager</a>`),
    L.marker([310, 1050], {icon: questIcon}).addTo(questLayer).bindPopup(`Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/Stuff_No-One_Thinks_About" target="_blank">The Stuff No One Thinks About</a> <br> NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Sotema" target="_blank">Wrangler Sotema</a>`),
    L.marker([310, 1050], {icon: questIcon}).addTo(questLayer).bindPopup(`Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/Lost_and_Found" target="_blank">Lost and Found</a> <br> NPCs: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Temarah" target="_blank">Temarah</a> and <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Ahmek" target="_blank">Ahmek</a>`),


    // PoIs, {icon: can change}
    // TAL-SENENT   
    L.marker([420, 840], {icon: fertilityIcon}).addTo(poiLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Fertility_Shrine" target="_blank">Shrine of Fertility</a>`),
    L.marker([420, 845], {icon: virilityIcon}).addTo(poiLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Virility_Shrine" target="_blank">Shrine of Virility</a>`),
    L.marker([380, 855], {icon: cosmeticIcon}).addTo(poiLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Cosmetic_Shrine" target="_blank">Shrine of Ascension</a> <br>
        NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Amara" target="_blank">Amara</a> <br>
        Quests: <a href="https://wiki.carnal-instinct.com/UE5/Quests/ACallToAdventure" target="_blank">A Call To Adventure</a> then <a href="https://wiki.carnal-instinct.com/UE5/Quests/Avarice_of_Birds" target="_blank">The Avarice of Birds</a>
        `),
    L.marker([318, 827], {icon: villageIcon}).addTo(poiLayer).bindPopup(`
        <a href="https://wiki.carnal-instinct.com/UE5/Locations/Rampant_Lioness" target="_blank">Rampant Lioness</a> <br>
        NPCS: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Damaris" target="_blank">Damaris</a> &
        <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Nenu" target="_blank">Nenu The Bard</a>
         `
    ),
    L.marker([300, 810], {icon: villageIcon}).addTo(poiLayer).bindPopup(`
        Raqote <br>
        NPCs: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/FruitFarmer" target="_blank">Fruit Farmer,</a> <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Jamila" target="_blank">Jamila,</a> <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Rashan" target="_blank">Rashan,</a> and <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Tekem" target="_blank">Tekem</a>
        `),

    // MEHDEN ISLAND
    L.marker([325, 537], {icon: templeIcon}).addTo(poiLayer).bindPopup(`Temple of Zulumun`),
    L.marker([326, 605], {icon: townIcon}).addTo(poiLayer).bindPopup(`Mehden Villlage`),
    L.marker([460, 620], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Kehm Farmstead`),
    L.marker([500, 630], {icon: templeIcon}).addTo(poiLayer).bindPopup(`Abandoned Ruin`), // one by the farmer
    L.marker([590, 680], {icon: templeIcon}).addTo(poiLayer).bindPopup(`Abandoned Ruin`), // one on the small island
    L.marker([407, 665], {icon: caveIcon}).addTo(poiLayer).bindPopup(`Animal Den`),
    L.marker([420, 655], {icon: templeIcon}).addTo(poiLayer).bindPopup(`Forlorn Outlook <br> NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Jeivad" target="_blank">Jeivad</a>`),
    L.marker([405, 740], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Desu Quay`),
    L.marker([500, 760], {icon: templeIcon}).addTo(poiLayer).bindPopup(`
        The Cloister of Nuriah <br>
        Sex Scene: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Ameni" target="_blank">Priestess Ameni</a> <br>
        Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/Shipwrecked_Anubites" target="_blank">Shipwrecked Anubites</a> <br> 
        NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Asim" target="_blank">Asim</a>
        `),
    L.marker([538, 830], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Sheten`),
    L.marker([300, 683], {icon: templeIcon}).addTo(poiLayer).bindPopup(`Kab'alrah <br>
        Quest: <a href="https://wiki.carnal-instinct.com/UE5/Quests/Depths_of_Kab'Alrah" target="_blank">Depths of Kab'Alrah</a>
        Loot: <a href="https://wiki.carnal-instinct.com/UE5/Weapons/2h/Spirit_Catcher" target="_blank">Spirit Catcher</a>`),

    //Heifer's Reach
    L.marker([1285, 1025], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Kersai Farmstead`),
    L.marker([1055, 1050], {icon: templeIcon}).addTo(poiLayer).bindPopup(`Traitor's Gate`),

    //Bull's Shield
    L.marker([380, 1010], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Hebse Village`),
    L.marker([330, 1120], {icon: townIcon}).addTo(poiLayer).bindPopup(`The Glided Fold <br> 
    NPCs: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Reseph" target="_blank">Herdmaster Reseph,</a> and <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Pharon" target="_blank">Stockwarden Pharon</a> <br>
    Quests: <a href="https://wiki.carnal-instinct.com/UE5/Quests/Welcome_to_the_Fold" target="_blank">Welcome to the Fold</a>`),
    L.marker([236, 1040], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Zakros Estate`),

    // BreadBasket
    L.marker([175, 648], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Ikenni Villa <br>
        NPCs: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Mera" target="_blank">Mera,</a> and <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Safiya" target="_blank">Safiya</a> <br>`),
    L.marker([175, 603], {icon: templeIcon}).addTo(poiLayer).bindPopup(`Ikenni Ruins <br> NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Tabu" target="_blank">Sergeant Tabu</a>`),

    //The Westlands
    L.marker([590, 590], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Kusma <br>
        NPC: <a href="https://wiki.carnal-instinct.com/UE5/NPCs/Mesatnofreht" target="_blank">Mesatnofreht</a> <br>
        Quests: <a href="https://wiki.carnal-instinct.com/UE5/Quests/No_Rest_For_The_Wicked" target="_blank">No Rest for the Wicked</a>`),
    L.marker([560, 600], {icon: villageIcon}).addTo(poiLayer).bindPopup(`Kusma Farmstead`),
    L.marker([650, 510], {icon: templeIcon}).addTo(poiLayer).bindPopup(`Anubite Excavation`),

    // COLLECTABLES
    // L.marker([407, 622], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#talsenet" target="_blank">Kethra's Gift </a>`), // Tal'Senet
    // L.marker([500, 420], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#mehden-island" target="_blank">Kethra's Gift </a>`), // left of cave
    // L.marker([520, 420], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#mehden-island" target="_blank">Kethra's Gift</a>`), // left of idk
    // L.marker([635, 375], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#mehden-island" target="_blank">Kethra's Gift</a>`), // at Deadass idk
    // L.marker([520, 507], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#mehden-island" target="_blank">Kethra's Gift</a>`), // left of Mowsen
    // L.marker([710, 580], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#mehden-island" target="_blank">Kethra's Gift</a>`), // Loot place
    // L.marker([623, 440], {icon: collectablesIcon}).addTo(collectablesLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/Locations/Kethra's_Gift#mehden-island" target="_blank">Kethra's Gift</a>`), // western river thing 


    // MY OPPS/ BADDIEZ  
    L.marker([400, 619], {icon: enemyIcon}).addTo(enemyLayer).bindPopup(`Bloodseeker Camp`), // south
    L.marker([487, 730], {icon: enemyIcon}).addTo(enemyLayer).bindPopup(`Bloodseeker Camp`), // north
    L.marker([458, 945], {icon: enemyIcon}).addTo(enemyLayer).bindPopup(`Anubite Encampment`),
    L.marker([660, 630], {icon: enemyIcon}).addTo(enemyLayer).bindPopup(`Karrow Rock`),
    L.marker([290, 1000], {icon: enemyIcon}).addTo(enemyLayer).bindPopup(`Anubite Forward Camp`),

    // NPCs
    L.marker([410, 685], {icon: aadiIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Hakor" target="_blank">Hakor</a>`), //Aadie salesman
    L.marker([1233, 1025], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Cursed_Poet" target="_blank">Cursed Poet</a>`),
    L.marker([1203, 1060], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/CursedVillager" target="_blank">Cursed Villager</a>`), // horny stone guy
    L.marker([1267, 1016], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/FarakAshalia" target="_blank">Farak & Ashalia</a>`), // Chaos Option
    L.marker([1257, 1060], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Fruit-ObsessedVillager" target="_blank">Fruit-Obsessed Villager</a>`), 
    L.marker([1280, 1040], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Mother&Father" target="_blank">Mother & Father</a>`), ,
    L.marker([1262, 950], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/OldWoman" target="_blank">Old Woman</a>`),
    L.marker([577, 730], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/OphyxFarmer" target="_blank">Ophyx Farmer</a>`),
    L.marker([1243, 1080], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Villager(note)" target="_blank">Villager (Note)</a>`),
    L.marker([1249, 1039], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Villager(Trapped)" target="_blank">Villager (Trapped)</a>`),
    L.marker([1179, 1010], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Villager(Turn)" target="_blank">Villager (Turned)</a>`),
    L.marker([1210, 960], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/WorriedVillager" target="_blank">Worried Villager</a>`),

    //Bull's Shield
    L.marker([255, 998], {icon: undiscoveredIcon}).addTo(npcLayer).bindPopup(`<a href="https://wiki.carnal-instinct.com/UE5/NPCs/Anat_Hethet_Osu" target="_blank">Anat, Hethet & Osu</a>`),
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
