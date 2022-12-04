const items = [{name:"lionheart sight", classes:["archer","apothecary"], slot:"weapon", tier:"9", dungeon:"n/a", color:"blue", nickname:"undertop bow"},{name:"sovereign's mark", classes:["archer","apothecary"], slot:"weapon", tier:"10", dungeon:"n/a", color:"red", nickname:"top bow sovereigns mark"},{name:"ominous arbalest", classes:["archer","apothecary"], slot:"weapon", tier:"UT", dungeon:"n/a", color:"red", nickname:"omni"},{name:"cadaverous greed", classes:["archer","apothecary"], slot:"weapon", tier:"UT", dungeon:"n/a", color:"white", nickname:"bone"},{name:"the scarborough hunt", classes:["archer","apothecary"], slot:"weapon", tier:"UT", dungeon:"n/a", color:"brown", nickname:"pumpkin"},{name:"scorch recurve", classes:["archer","apothecary"], slot:"weapon", tier:"UT", dungeon:"n/a", color:"orange", nickname:"scorch"}, {name:"lionheart battleaxe", classes:["paladin","juggernaut"], slot:"weapon", tier:"9", dungeon:"n/a", color:"blue", nickname:"undertop axe"},{name:"phantom scourge", classes:["paladin","juggernaut"], slot:"weapon", tier:"10", dungeon:"n/a", color:"green", nickname:"top axe"},{name:"giant slayer", classes:["paladin","juggernaut"], slot:"weapon", tier:"UT", dungeon:"river maze", color:"purple", nickname:"gsa"},{name:"demon jowl", classes:["paladin","juggernaut"], slot:"weapon", tier:"UT", dungeon:"harbinger's oblivion", color:"white", nickname:"jowl"},{name:"the big special", classes:["paladin","juggernaut"], slot:"weapon", tier:"UT", dungeon:"n/a", color:"black", nickname:"tbs"}, {name:"lionheart brand", classes:["assassin","wyrm rider"], slot:"weapon", tier:"9", dungeon:"n/a", color:"blue", nickname:"undertop dagger"},{name:"wicked ripper", classes:["assassin","wyrm rider"], slot:"weapon", tier:"10", dungeon:"n/a", color:"green", nickname:"top dagger"},{name:"elkendire impaler", classes:["assassin","wyrm rider"], slot:"weapon", tier:"UT", dungeon:"shrine of devas", color:"gray"},{name:"champion's assegai", classes:["assassin","wyrm rider"], slot:"weapon", tier:"UT", dungeon:"n/a", color:"black",nickname:"champions assegai"},{name:"crimson recluse", classes:["assassin","wyrm rider"], slot:"weapon", tier:"RC", dungeon:"infested cellar ancient ruins", color:"red",nickname:"recluse"}, {name:"lionheart enchantment", classes:["mage","bishop"], slot:"weapon", tier:"9", dungeon:"n/a", color:"blue", nickname:"undertop spell undertop element"},{name:"blighted malediction", classes:["mage","bishop"], slot:"weapon", tier:"10", dungeon:"n/a", color:"green", nickname:"top spell"},{name:"betraying hex", classes:["mage","bishop"], slot:"weapon", tier:"UT", dungeon:"n/a", color:"purple", nickname:"hex"},{name:"glacial flurry", classes:["mage","bishop"], slot:"weapon", tier:"UT", dungeon:"n/a", color:"blue", nickname:"glacial flurry"},{name:"santa's list", classes:["mage","bishop"], slot:"weapon", tier:"UT", dungeon:"n/a", color:"red", nickname:"santas list"},{name:"truth", classes:["mage","bishop"], slot:"weapon", tier:"RC", dungeon:"rampant citadel", color:"red"},{name:"lionheart wrap", classes:["mage","bishop"], slot:"armor", tier:"9", dungeon:"n/a", color:"blue", nickname:"undertop robe"},{name:"royal shawl", classes:["mage","bishop"], slot:"armor", tier:"10", dungeon:"n/a", color:"purple", nickname:"top robe"},{name:"void garments", classes:["mage","bishop"], slot:"armor", tier:"UT", dungeon:"n/a", color:"purple", nickname:"void garments"},{name:"ancient's vestement", classes:["mage","bishop"], slot:"armor", tier:"UT", dungeon:"ancient ruins", color:"blue", nickname:"ancients vestement"},{name:"lionheart covering", classes:["archer","apothecary"], slot:"armor", tier:"9", dungeon:"n/a", color:"blue", nickname:"undertop hide"},{name:"majestic regalia", classes:["archer","apothecary"], slot:"armor", tier:"10", dungeon:"n/a", color:"purple", nickname:"maj top hide"},{name:"crusader's front", classes:["archer","apothecary"], slot:"armor", tier:"UT", dungeon:"shrine of devas", color:"yellow", nickname:"crusaders front"},{name:"cicipalti hauberk", classes:["archer","apothecary"], slot:"armor", tier:"UT", dungeon:"ancient ruins", color:"gray", nickname:"cici hauberk"},{name:"lionheart shielding", classes:["paladin","juggernaut"], slot:"armor", tier:"9", dungeon:"n/a", color:"blue", nickname:"undertop armor"},{name:"regal guard", classes:["paladin","juggernaut"], slot:"armor", tier:"10", dungeon:"n/a", color:"purple", nickname:"top armor top armour hydra"},{name:"frost kingdom", classes:["paladin","juggernaut"], slot:"armor", tier:"UT", dungeon:"frost cavern", color:"blue", nickname:"frost skygem"},{name:"dominus' breastplate", classes:["paladin","juggernaut"], slot:"armor", tier:"UT", dungeon:"ancient ruins", color:"gray", nickname:"dominus breastplate"},{name:"heavenly aegis", classes:["paladin","juggernaut"], slot:"armor", tier:"UT", dungeon:"butterfly woods", color:"red", nickname:"aegis"}, {name:"diamond staff", classes:["mage","staff"], slot:"ability", tier:"5", dungeon:"n/a", color:"yellow", nickname:"undertop staff"},{name:"moonstone staff", classes:["mage","staff"], slot:"ability", tier:"6", dungeon:"n/a", color:"yellow", nickname:"top staff"}, {name:"cultist's amnesty", classes:["mage","staff"], slot:"ability", tier:"UT", dungeon:"harbinger's oblivion", color:"brown", nickname:"cultists amnesty"}, {name:"basalisk breakneck", classes:["archer","quiver"], slot:"ability", tier:"5", dungeon:"n/a", color:"brown", nickname:"undertop quiver"}, {name:"wyvernal whirlwind", classes:["archer","quiver"], slot:"ability", tier:"6", dungeon:"n/a", color:"green", nickname:"top quiver"}, {name:"ameliorated desolation", classes:["archer","quiver"], slot:"ability", tier:"UT", dungeon:"n/a", color:"black", nickname:"desolation"},{name:"protector's charm", classes:["assassin","talisman"], slot:"ability", tier:"5", dungeon:"n/a", color:"purple", nickname:"undertop talisman protectors charm"},{name:"voidal periapt", classes:["assassin","talisman"], slot:"ability", tier:"6", dungeon:"n/a", color:"black", nickname:"top talisman"}, {name:"winter's trinket", classes:["assassin","talisman"], slot:"ability", tier:"RC", dungeon:"frost cavern", color:"blue", nickname:"winters trinket winter trinket"},{name:"warrior's influence", classes:["paladin","cape"], slot:"ability", tier:"5", dungeon:"n/a", color:"blue", nickname:"undertop cape warriors influence"}, {name:"the holy crusader", classes:["paladin","cape"], slot:"ability", tier:"6", dungeon:"n/a", color:"yellow", nickname:"top cape"}, {name:"voidic vanity", classes:["paladin","cape"], slot:"ability", tier:"UT", dungeon:"n/a", color:"purple", nickname:"voidic vanity"}, {name:"tyrannical manacle", classes:["whip","wyrm rider"], slot:"ability", tier:"5", dungeon:"n/a", color:"pink", nickname:"undertop whip"}, {name:"gleipnir bind", classes:["whip","wyrm rider"], slot:"ability", tier:"6", dungeon:"n/a", color:"black", nickname:"top whip"}, {name:"shackling snare", classes:["whip","wyrm rider"], slot:"ability", tier:"UT", dungeon:"n/a", color:"black", nickname:"shackling snare"},{name:"darloc's spite", classes:["whip","wyrm rider"], slot:"ability", tier:"UT", dungeon:"primal marsh", color:"green", nickname:"darlocs spite"},{name:"demonic semblance", classes:["mask","juggernaut"], slot:"ability", tier:"5", dungeon:"n/a", color:"red", nickname:"undertop mask"}, {name:"pharoah's madness", classes:["mask","juggernaut"], slot:"ability", tier:"6", dungeon:"n/a", color:"blue", nickname:"top mask pharoahs madness"}, {name:"final dusk", classes:["mask","juggernaut"], slot:"ability", tier:"UT", dungeon:"chasm of dread", color:"brown", nickname:"dusk"}, {name:"catholicon mortar", classes:["mortar","apothecary"], slot:"ability", tier:"5", dungeon:"n/a", color:"red", nickname:"undertop mortar"}, {name:"panacea mortar", classes:["mortar","apothecary"], slot:"ability", tier:"6", dungeon:"n/a", color:"blue", nickname:"top mortar"}, {name:"venomous pestle", classes:["mortar","apothecary"], slot:"ability", tier:"UT", dungeon:"infested cellar", color:"brown", nickname:"pestle"}, {name:"divine health ring", classes:["all","all"], slot:"ring", tier:"5", dungeon:"n/a", color:"red", nickname:"div hp"}, {name:"divine mana ring", classes:["all","all"], slot:"ring", tier:"5", dungeon:"n/a", color:"blue", nickname:"div mana"}, {name:"divine armor ring", classes:["all","all"], slot:"ring", tier:"5", dungeon:"n/a", color:"brown", nickname:"div armor"}, {name:"divine dexterity ring", classes:["all","all"], slot:"ring", tier:"5", dungeon:"n/a", color:"green", nickname:"div dexterity"},  {name:"divine attack ring", classes:["all","all"], slot:"ring", tier:"5", dungeon:"n/a", color:"purple", nickname:"div attack"}, {name:"divine speed ring", classes:["all","all"], slot:"ring", tier:"5", dungeon:"n/a", color:"yellow", nickname:"div speed div spd"}, {name:"divine wisdom ring", classes:["all","all"], slot:"ring", tier:"5", dungeon:"n/a", color:"gray", nickname:"div wisdom"}, {name:"divine vitality ring", classes:["all","all"], slot:"ring", tier:"5", dungeon:"n/a", color:"pink", nickname:"div vitality"}, 
                {name:"storyteller's amulet", classes:["all","all"], slot:"ring", tier:"UT", dungeon:"nexus", color:"yellow", nickname:"storytellers amulet ammy"}, {name:"storyteller's charm", classes:["all","all"], slot:"ring", tier:"UT", dungeon:"nexus", color:"brown", nickname:"storytellers charm"}, {name:"divine spirit", classes:["all","all"], slot:"ring", tier:"UT", dungeon:"shrine of devas", color:"blue", nickname:"spirit"}, {name:"blazed titan", classes:["all","all"], slot:"ring", tier:"UT", dungeon:"shrine of devas", color:"red", nickname:"blazed"}, {name:"philosopher's stone", classes:["all","all"], slot:"ring", tier:"UT", dungeon:"rampant citadel", color:"red", nickname:"philo stone"}, {name:"aether circlet", classes:["all","all"], slot:"ring", tier:"UT", dungeon:"butterfly woods", color:"blue", nickname:"aether circlet"}, {name:"sophie's blessing", classes:["all","all"], slot:"ring", tier:"UT", dungeon:"butterfly woods", color:"brown", nickname:"sophies blessing"}]
export default items;