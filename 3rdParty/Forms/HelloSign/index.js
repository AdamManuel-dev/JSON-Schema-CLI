const contracts = require('./Contracts')
const {
  Bath,
  ChangeOrder,
  Deck,
  Exterior,
  Fencing,
  Kitchen,
  Roof,
  Window_Door
} = contracts
const _ = require('lodash')

const fields = [
  {
    title: 'Windows / Doors Contract',
    fields: [
      {
        name: 'buyerAddress',
        type: 'text'
      },
      {
        name: 'city',
        type: 'text'
      },
      {
        name: 'state',
        type: 'text'
      },
      {
        name: 'zip',
        type: 'text'
      },
      {
        name: 'buyerName',
        type: 'text'
      },
      {
        name: 'buyerPhone',
        type: 'text'
      },
      {
        name: 'buyerEmail',
        type: 'text'
      },
      {
        name: 'buyerFinancing',
        type: 'checkbox'
      },
      {
        name: 'unitRemoved',
        type: 'text'
      },
      {
        name: 'entryLockStyleFinish',
        type: 'text'
      },
      {
        name: 'liteSliders',
        type: 'text'
      },
      {
        name: 'unitsInstalled',
        type: 'text'
      },
      {
        name: 'liteOneThird',
        type: 'text'
      },
      {
        name: 'patioDoorsGlass',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'liteOneFourthOneHalf',
        type: 'text'
      },
      {
        name: 'patioDoorHinged',
        type: 'checkbox'
      },
      {
        name: 'patioDoorSiding',
        type: 'checkbox'
      },
      {
        name: 'outsideTrimColor',
        type: 'text'
      },
      {
        name: 'receiveCasements',
        type: 'text'
      },
      {
        name: 'patioDoorColor',
        type: 'text'
      },
      {
        name: 'obscureGlass',
        type: 'text'
      },
      {
        name: 'pictureWindow',
        type: 'text'
      },
      {
        name: 'patioDoorGrids',
        type: 'text'
      },
      {
        name: 'withWoodGrain',
        type: 'text'
      },
      {
        name: 'bayBows',
        type: 'text'
      },
      {
        name: 'patioDoorWoodgrain',
        type: 'text'
      },
      {
        name: 'interiorSeatOak',
        type: 'checkbox'
      },
      {
        name: 'interiorSeatBirch',
        type: 'checkbox'
      },
      {
        name: 'patioDoorDecorativeGlass',
        type: 'text'
      },
      {
        name: 'withGrids',
        type: 'text'
      },
      {
        name: 'garden',
        type: 'text'
      },
      {
        name: 'addNotes',
        type: 'text'
      },
      {
        name: 'gridTypes',
        type: 'text'
      },
      {
        name: 'hoppers',
        type: 'text'
      },
      {
        name: 'awings',
        type: 'text'
      },
      {
        name: 'pdHandleStandard',
        type: 'text'
      },
      {
        name: 'screenFull',
        type: 'text'
      },
      {
        name: 'screenHalf',
        type: 'text'
      },
      {
        name: 'entryDoors',
        type: 'text'
      },
      {
        name: 'sidelights',
        type: 'text'
      },
      {
        name: 'stormDoors',
        type: 'text'
      },
      {
        name: 'dH',
        type: 'text'
      },
      {
        name: 'oriels',
        type: 'text'
      },
      {
        name: 'entryDoorFront',
        type: 'checkbox'
      },
      {
        name: 'entryDoorSide',
        type: 'checkbox'
      },
      {
        name: 'entryDoorRear',
        type: 'checkbox'
      },
      {
        name: 'sdStyle',
        type: 'checkbox'
      },
      {
        name: 'sdColor',
        type: 'checkbox'
      },
      {
        name: 'temperedGlass',
        type: 'text'
      },
      {
        name: 'entryDoorModel',
        type: 'checkbox'
      },
      {
        name: 'entryDoorFinish',
        type: 'checkbox'
      },
      {
        name: 'addNotes',
        type: 'text'
      },
      {
        name: 'sidelightModel',
        type: 'checkbox'
      },
      {
        name: 'sidelightFinish',
        type: 'checkbox'
      },
      {
        name: 'primed',
        type: 'checkbox'
      },
      {
        name: 'hollywood',
        type: 'checkbox'
      },
      {
        name: 'interiorCasing',
        type: 'text'
      },
      {
        name: 'receiveSills',
        type: 'text'
      },
      {
        name: 'clear',
        type: 'checkbox'
      },
      {
        name: 'colonial',
        type: 'checkbox'
      },
      {
        name: 'note',
        type: 'text'
      },
      {
        name: 'totalPrice',
        type: 'text'
      },
      {
        name: 'lessDownPayment',
        type: 'text'
      },
      {
        name: 'unpaidBalance',
        type: 'text'
      }
    ]
  },
  {
    title: 'Kitchen Contract',
    fields: [
      {
        name: 'reworkElectric',
        type: 'checkbox'
      },
      {
        name: 'addNewElectric',
        type: 'checkbox'
      },
      {
        name: 'installGasValveFlexLine',
        type: 'checkbox'
      },
      {
        name: 'relocateGasLine',
        type: 'checkbox'
      },
      {
        name: 'newGasLine',
        type: 'checkbox'
      },
      {
        name: 'circuitsAppliance',
        type: 'checkbox'
      },
      {
        name: 'draftDucting',
        type: 'checkbox'
      },
      {
        name: 'ventilationHood',
        type: 'checkbox'
      },
      {
        name: 'createFraming',
        type: 'checkbox'
      },
      {
        name: 'rangeCooktopWalloven',
        type: 'text'
      },
      {
        name: 'rangeCooktopWallovenfurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'rangeCooktopWallovenfurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'rangeCooktopWallovenInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'rangeCooktopWallovenInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'ventilationHoodMicrowave',
        type: 'text'
      },
      {
        name: 'ventilationHoodMicrowaveFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'ventilationHoodMicrowaveFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'ventilationHoodMicrowaveInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'ventilationHoodMicrowaveInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'dishwasherWinecoolerWarmingDrawer',
        type: 'text'
      },
      {
        name: 'dishwasherWinecoolerWarmingDrawerFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'dishwasherWinecoolerWarmingDrawerFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'dishwasherWinecoolerWarmingDrawerInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'dishwasherWinecoolerWarmingDrawerInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'disposal',
        type: 'text'
      },
      {
        name: 'disposalFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'disposalFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'disposalInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'disposalInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'refrigerator',
        type: 'text'
      },
      {
        name: 'refrigeratorFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'refrigeratorInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'refrigeratorInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'refrigeratorFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'demoKitchen',
        type: 'checkbox'
      },
      {
        name: 'debrisFromKitchen',
        type: 'checkbox'
      },
      {
        name: 'clientToworkFlooring',
        type: 'checkbox'
      },
      {
        name: 'allAppliances',
        type: 'checkbox'
      },
      {
        name: 'provideFaucets',
        type: 'checkbox'
      },
      {
        name: 'clientHandleAll',
        type: 'checkbox'
      },
      {
        name: 'clientWorkElectricboxUpgrade',
        type: 'checkbox'
      },
      {
        name: 'clientProvideCabinet',
        type: 'checkbox'
      },
      {
        name: 'clientResponsibilityNote',
        type: 'text'
      },
      {
        name: 'miscellaneous',
        type: 'text'
      },
      {
        name: 'totalprice',
        type: 'text'
      },
      {
        name: 'downpayment',
        type: 'text'
      },
      {
        name: 'unpaidbalance',
        type: 'text'
      },
      {
        name: 'buyerAddress',
        type: 'text'
      },
      {
        name: 'city',
        type: 'text'
      },
      {
        name: 'state',
        type: 'text'
      },
      {
        name: 'zip',
        type: 'text'
      },
      {
        name: 'buyerName',
        type: 'text'
      },
      {
        name: 'buyerPhone',
        type: 'text'
      },
      {
        name: 'buyerEmail',
        type: 'text'
      },
      {
        name: 'buyerFinancing',
        type: 'checkbox'
      },
      {
        name: 'removeCountertops',
        type: 'checkbox'
      },
      {
        name: 'removeCountertopsSomeCabinets',
        type: 'checkbox'
      },
      {
        name: 'removeCabinetsCounterAppliances',
        type: 'checkbox'
      },
      {
        name: 'capOffWaterLine',
        type: 'checkbox'
      },
      {
        name: 'removeBacksplash',
        type: 'checkbox'
      },
      {
        name: 'Tile',
        type: 'checkbox'
      },
      {
        name: 'zBricks',
        type: 'checkbox'
      },
      {
        name: 'laminate',
        type: 'checkbox'
      },
      {
        name: 'Paneling',
        type: 'checkbox'
      },
      {
        name: 'particalWallGut',
        type: 'checkbox'
      },
      {
        name: 'partialWallGut',
        type: 'text'
      },
      {
        name: 'gutInteriorKitchen',
        type: 'checkbox'
      },
      {
        name: 'mudsetTile',
        type: 'checkbox'
      },
      {
        name: 'removeBearingWall',
        type: 'checkbox'
      },
      {
        name: 'header',
        type: 'checkbox'
      },
      {
        name: 'noHeader',
        type: 'checkbox'
      },
      {
        name: 'nonLocalBearingLF',
        type: 'text'
      },
      {
        name: 'loadBearingLF',
        type: 'text'
      },
      {
        name: 'removeLoadBearingWall',
        type: 'checkbox'
      },
      {
        name: 'removeFramedWallOven',
        type: 'checkbox'
      },
      {
        name: 'removeFramedPantry',
        type: 'checkbox'
      },
      {
        name: 'haulJobDebris',
        type: 'checkbox'
      },
      {
        name: 'homeownerKeep',
        type: 'text'
      },
      {
        name: 'homeownerWIllKeep',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'removeSoffitPatch',
        type: 'checkbox'
      },
      {
        name: 'reworkSoffits',
        type: 'checkbox'
      },
      {
        name: 'newSoffit',
        type: 'checkbox'
      },
      {
        name: 'lfof13"DeepSoffit',
        type: 'text'
      },
      {
        name: '25Deepsoffit',
        type: 'checkbox'
      },
      {
        name: 'lfof25"DeepSoffit',
        type: 'text'
      },
      {
        name: 'otherDepthOptions',
        type: 'checkbox'
      },
      {
        name: 'otherDepth',
        type: 'text'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'frameWallDesign',
        type: 'checkbox'
      },
      {
        name: 'extendedWindow',
        type: 'checkbox'
      },
      {
        name: 'buildNewWall',
        type: 'checkbox'
      },
      {
        name: 'fireBlockKitchen',
        type: 'checkbox'
      },
      {
        name: 'insulateExteriorWall',
        type: 'checkbox'
      },
      {
        name: 'relocateHVACColdair',
        type: 'checkbox'
      },
      {
        name: 'RelocateHVACCabinet',
        type: 'checkbox'
      },
      {
        name: 'closeOffWindow',
        type: 'checkbox'
      },
      {
        name: 'frameHeight',
        type: 'checkbox'
      },
      {
        name: 'stillMaterial',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'applyAppromimately',
        type: 'checkbox'
      },
      {
        name: 'dryWall',
        type: 'text'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'removeSuspendedCeiling',
        type: 'checkbox'
      },
      {
        name: 'patchOnlyCeilingArea',
        type: 'checkbox'
      },
      {
        name: 'patchCeilingArea',
        type: 'text'
      },
      {
        name: 'repairMinorCrack',
        type: 'checkbox'
      },
      {
        name: 'laminateKitchenCeilingSF',
        type: 'text'
      },
      {
        name: 'laminateKitchenCeiling',
        type: 'checkbox'
      },
      {
        name: 'buildHeader',
        type: 'checkbox'
      },
      {
        name: 'frameDown',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'depths',
        type: 'text'
      },
      {
        name: 'installTileBacksplash',
        type: 'checkbox'
      },
      {
        name: 'depthsBacksplash',
        type: 'checkbox'
      },
      {
        name: 'squareLayout',
        type: 'checkbox'
      },
      {
        name: 'brickLayout',
        type: 'checkbox'
      },
      {
        name: 'diagonalLayout',
        type: 'checkbox'
      },
      {
        name: 'tileWindowArea',
        type: 'checkbox'
      },
      {
        name: 'installWindow',
        type: 'checkbox'
      },
      {
        name: 'woodSill',
        type: 'checkbox'
      },
      {
        name: 'matchingGranite',
        type: 'checkbox'
      },
      {
        name: 'installClientTile',
        type: 'checkbox'
      },
      {
        name: 'tileMPG',
        type: 'checkbox'
      },
      {
        name: 'titleMFGColor',
        type: 'text'
      },
      {
        name: 'tileNumberColor',
        type: 'checkbox'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'groutColor',
        type: 'text'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'removeVinyl',
        type: 'checkbox'
      },
      {
        name: 'removeDamage',
        type: 'checkbox'
      },
      {
        name: 'removeDamageSF',
        type: 'text'
      },
      {
        name: 'replaceFloorJoint',
        type: 'checkbox'
      },
      {
        name: 'installPlywoodSubFloor',
        type: 'checkbox'
      },
      {
        name: 'installPlywoodSubFloorSF',
        type: 'text'
      },
      {
        name: 'installUnderlayment',
        type: 'checkbox'
      },
      {
        name: 'luanPlywood',
        type: 'checkbox'
      },
      {
        name: 'liquidLevelor',
        type: 'checkbox'
      },
      {
        name: 'permabondBase',
        type: 'checkbox'
      },
      {
        name: 'durockCement',
        type: 'checkbox'
      },
      {
        name: 'installLaminateMPG',
        type: 'checkbox'
      },
      {
        name: 'installLaminateMPGColor',
        type: 'text'
      },
      {
        name: 'installAlternaVinyl',
        type: 'checkbox'
      },
      {
        name: 'vinylTileColor',
        type: 'text'
      },
      {
        name: 'groutColor',
        type: 'text'
      },
      {
        name: 'installHandwood',
        type: 'checkbox'
      },
      {
        name: 'hardwoodColor',
        type: 'text'
      },
      {
        name: 'installTileMPG',
        type: 'checkbox'
      },
      {
        name: 'tileColor',
        type: 'text'
      },
      {
        name: 'groutColor',
        type: 'text'
      },
      {
        name: 'tileSize',
        type: 'text'
      },
      {
        name: 'squareLayout',
        type: 'checkbox'
      },
      {
        name: 'brickLayout',
        type: 'checkbox'
      },
      {
        name: 'diagonalLayout',
        type: 'checkbox'
      },
      {
        name: 'materialLaminate',
        type: 'checkbox'
      },
      {
        name: 'materialSolidSurface',
        type: 'checkbox'
      },
      {
        name: 'materialCeramicTile',
        type: 'checkbox'
      },
      {
        name: 'materialCaesarStone',
        type: 'checkbox'
      },
      {
        name: 'materialCambria',
        type: 'checkbox'
      },
      {
        name: 'materialGranite',
        type: 'checkbox'
      },
      {
        name: 'materialOtherCheckbox',
        type: 'checkbox'
      },
      {
        name: 'materialOther',
        type: 'text'
      },
      {
        name: 'stoneedgeEased',
        type: 'checkbox'
      },
      {
        name: 'stoneedgeRoundOver',
        type: 'checkbox'
      },
      {
        name: 'stoneedgeFullBullnose',
        type: 'checkbox'
      },
      {
        name: 'stoneedgeBevel',
        type: 'checkbox'
      },
      {
        name: 'stoneedgeOgee',
        type: 'checkbox'
      },
      {
        name: 'addGrommetHole',
        type: 'checkbox'
      },
      {
        name: 'backsplashYes',
        type: 'checkbox'
      },
      {
        name: 'backsplashNo',
        type: 'checkbox'
      },
      {
        name: 'manufacturerWilsonart',
        type: 'checkbox'
      },
      {
        name: 'manufacturerFormica',
        type: 'checkbox'
      },
      {
        name: 'manufacturerPionite',
        type: 'checkbox'
      },
      {
        name: 'pioniteColor',
        type: 'text'
      },
      {
        name: 'laminateedgePost',
        type: 'checkbox'
      },
      {
        name: 'laminateedgeWaterfall',
        type: 'checkbox'
      },
      {
        name: 'laminateedgeEuropeanRoll',
        type: 'checkbox'
      },
      {
        name: 'laminateedge80Degree',
        type: 'checkbox'
      },
      {
        name: 'laminateedgeSquare',
        type: 'checkbox'
      },
      {
        name: 'laminateedgeBevel',
        type: 'checkbox'
      },
      {
        name: 'bracingCounterTop',
        type: 'checkbox'
      },
      {
        name: 'bracingCabinet',
        type: 'checkbox'
      },
      {
        name: 'bracingPlateau',
        type: 'checkbox'
      },
      {
        name: 'bracingDiagonalCorner',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'style',
        type: 'text'
      },
      {
        name: 'manufacturer',
        type: 'text'
      },
      {
        name: 'recessedPanel',
        type: 'checkbox'
      },
      {
        name: 'cathedral',
        type: 'checkbox'
      },
      {
        name: 'raisedPanel',
        type: 'checkbox'
      },
      {
        name: 'square',
        type: 'checkbox'
      },
      {
        name: 'arched',
        type: 'checkbox'
      },
      {
        name: 'maple',
        type: 'checkbox'
      },
      {
        name: 'cherry',
        type: 'checkbox'
      },
      {
        name: 'Hickory',
        type: 'checkbox'
      },
      {
        name: 'oak',
        type: 'checkbox'
      },
      {
        name: 'white',
        type: 'checkbox'
      },
      {
        name: 'silk',
        type: 'checkbox'
      },
      {
        name: 'paintedColor',
        type: 'checkbox'
      },
      {
        name: 'paintColor',
        type: 'text'
      },
      {
        name: 'glazeColor',
        type: 'text'
      },
      {
        name: '30"Walls',
        type: 'checkbox'
      },
      {
        name: '36"Walls',
        type: 'checkbox'
      },
      {
        name: '39"Walls',
        type: 'checkbox'
      },
      {
        name: '42"Walls',
        type: 'checkbox'
      },
      {
        name: 'staggeredWall',
        type: 'checkbox'
      },
      {
        name: 'crownMoldingCabinets',
        type: 'checkbox'
      },
      {
        name: 'installCabinet',
        type: 'checkbox'
      },
      {
        name: 'standardBox',
        type: 'checkbox'
      },
      {
        name: 'plywoodVeneeredEnds',
        type: 'checkbox'
      },
      {
        name: 'woodDrovetailed',
        type: 'checkbox'
      },
      {
        name: '5pieceDecorative',
        type: 'checkbox'
      },
      {
        name: 'decorativePanel',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'updateBacksplashElectric',
        type: 'checkbox'
      },
      {
        name: 'killRelocateAdd',
        type: 'checkbox'
      },
      {
        name: 'addSmoke',
        type: 'checkbox'
      },
      {
        name: 'outletNumber',
        type: 'text'
      },
      {
        name: 'switches',
        type: 'text'
      },
      {
        name: 'circuits',
        type: 'text'
      },
      {
        name: 'cableboxYes',
        type: 'checkbox'
      },
      {
        name: 'cableboxNo',
        type: 'checkbox'
      },
      {
        name: 'killPhoneJack',
        type: 'checkbox'
      },
      {
        name: 'relocatePhoneJack',
        type: 'checkbox'
      },
      {
        name: 'colorWhite',
        type: 'checkbox'
      },
      {
        name: 'colorIvory',
        type: 'checkbox'
      },
      {
        name: 'other',
        type: 'checkbox'
      },
      {
        name: 'colorOther',
        type: 'text'
      },
      {
        name: 'underCabinetLights',
        type: 'text'
      },
      {
        name: 'reccessedLights',
        type: 'text'
      },
      {
        name: 'installed',
        type: 'text'
      },
      {
        name: 'providedPendantLights',
        type: 'text'
      },
      {
        name: 'installFanYes',
        type: 'checkbox'
      },
      {
        name: 'installFanNo',
        type: 'checkbox'
      },
      {
        name: 'installFanLightYes',
        type: 'checkbox'
      },
      {
        name: 'installFanLightNo',
        type: 'checkbox'
      },
      {
        name: 'installRopeLightingYes',
        type: 'checkbox'
      },
      {
        name: 'installRopeLightingNo',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'upgradeElectricService',
        type: 'checkbox'
      },
      {
        name: '100Amp',
        type: 'checkbox'
      },
      {
        name: '200Amp',
        type: 'checkbox'
      },
      {
        name: 'panelandAddPanel',
        type: 'checkbox'
      },
      {
        name: 'clientWorkOther',
        type: 'checkbox'
      },
      {
        name: 'leadWasteRemoval',
        type: 'checkbox'
      },
      {
        name: 'relocatePlumbing',
        type: 'checkbox'
      },
      {
        name: 'cornerSink',
        type: 'checkbox'
      },
      {
        name: 'islandBarSink',
        type: 'checkbox'
      },
      {
        name: 'relocateDrain',
        type: 'checkbox'
      },
      {
        name: 'installDisposal',
        type: 'checkbox'
      },
      {
        name: 'installWaterFilter',
        type: 'checkbox'
      },
      {
        name: 'installHotWater',
        type: 'checkbox'
      },
      {
        name: 'installSoapDispenser',
        type: 'checkbox'
      },
      {
        name: 'addRelocateWaterLines',
        type: 'checkbox'
      },
      {
        name: 'refrigeratorWaterLine',
        type: 'checkbox'
      },
      {
        name: 'additionalSink',
        type: 'checkbox'
      },
      {
        name: 'location',
        type: 'text'
      },
      {
        name: 'replaceMainKitchenDrainage',
        type: 'checkbox'
      },
      {
        name: '2"',
        type: 'checkbox'
      },
      {
        name: '4"',
        type: 'checkbox'
      },
      {
        name: 'replaceNecessaryDrains',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'installModelNumber',
        type: 'text'
      },
      {
        name: 'undermount',
        type: 'checkbox'
      },
      {
        name: 'dropIn',
        type: 'checkbox'
      },
      {
        name: 'installSink',
        type: 'checkbox'
      },
      {
        name: 'single',
        type: 'checkbox'
      },
      {
        name: 'doubleBowl',
        type: 'checkbox'
      },
      {
        name: 'bigBowl40/60',
        type: 'checkbox'
      },
      {
        name: '60/40bigBowlL',
        type: 'checkbox'
      },
      {
        name: 'bigBowlR',
        type: 'checkbox'
      },
      {
        name: '25/75bigBowlL',
        type: 'checkbox'
      },
      {
        name: 'finish',
        type: 'text'
      },
      {
        name: 'faucetManufacturerModelNumber',
        type: 'text'
      },
      {
        name: 'finish',
        type: 'text'
      },
      {
        name: 'singleLever',
        type: 'checkbox'
      },
      {
        name: 'doubleLever',
        type: 'checkbox'
      },
      {
        name: 'soapDispenser',
        type: 'checkbox'
      },
      {
        name: 'sprayerYes',
        type: 'checkbox'
      },
      {
        name: 'sprayerNo',
        type: 'checkbox'
      },
      {
        name: 'finished',
        type: 'text'
      },
      {
        name: 'installFaucet',
        type: 'checkbox'
      },
      {
        name: 'brand',
        type: 'text'
      },
      {
        name: 'numberUnit',
        type: 'text'
      },
      {
        name: 'styleCasement',
        type: 'checkbox'
      },
      {
        name: 'styleDoubleHung',
        type: 'checkbox'
      },
      {
        name: 'stylePicture',
        type: 'checkbox'
      },
      {
        name: 'styleTransom',
        type: 'checkbox'
      },
      {
        name: 'styleSlider',
        type: 'checkbox'
      },
      {
        name: 'styleGarden',
        type: 'checkbox'
      },
      {
        name: 'styleBay',
        type: 'checkbox'
      },
      {
        name: 'styleBow',
        type: 'checkbox'
      },
      {
        name: 'styleHopper',
        type: 'checkbox'
      },
      {
        name: 'styleAwning',
        type: 'checkbox'
      },
      {
        name: 'styleEgressWindow',
        type: 'checkbox'
      },
      {
        name: 'colorOthers',
        type: 'text'
      },
      {
        name: 'colorWhite',
        type: 'checkbox'
      },
      {
        name: 'colorAlmond',
        type: 'checkbox'
      },
      {
        name: 'colorBronze',
        type: 'checkbox'
      },
      {
        name: 'windowMisc',
        type: 'text'
      },
      {
        name: 'installDoors',
        type: 'text'
      },
      {
        name: 'numberUnit',
        type: 'text'
      },
      {
        name: 'interiorStyleSingle',
        type: 'checkbox'
      },
      {
        name: 'interiorStyleBiFold',
        type: 'checkbox'
      },
      {
        name: 'interiorStyleFrench',
        type: 'checkbox'
      },
      {
        name: 'interiorStyleSlidingPocket',
        type: 'checkbox'
      },
      {
        name: 'interiorStyleFlatLauan',
        type: 'checkbox'
      },
      {
        name: 'interiorStyleSixPanel',
        type: 'checkbox'
      },
      {
        name: 'interiorStyleTwoPanel',
        type: 'checkbox'
      },
      {
        name: 'interiorStyleHollowCore',
        type: 'checkbox'
      },
      {
        name: 'interiorStyleSolidWood',
        type: 'checkbox'
      },
      {
        name: 'interiorStylePrimed',
        type: 'checkbox'
      },
      {
        name: 'interiorStyleClear',
        type: 'checkbox'
      },
      {
        name: 'exteriorStyleFrontEntry',
        type: 'checkbox'
      },
      {
        name: 'exteriorStyleRearEntry',
        type: 'checkbox'
      },
      {
        name: 'exteriorStyleGarageEntry',
        type: 'checkbox'
      },
      {
        name: 'exteriorStyleSlidingPatioEntry',
        type: 'checkbox'
      },
      {
        name: 'exteriorStyleAtrium',
        type: 'checkbox'
      },
      {
        name: 'exteriorStyleFrench',
        type: 'checkbox'
      },
      {
        name: 'exteriorStyleCutBottom',
        type: 'checkbox'
      },
      {
        name: 'doormisc',
        type: 'text'
      },
      {
        name: 'HomeIsFrame',
        type: 'checkbox'
      },
      {
        name: 'HomeIsMasonary',
        type: 'checkbox'
      },
      {
        name: 'HomeIsExteriorWall',
        type: 'checkbox'
      },
      {
        name: 'HomeIsProvidedInstallSkylight',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'baseOtherSize',
        type: 'text'
      },
      {
        name: 'baseModeling',
        type: 'checkbox'
      },
      {
        name: 'baseModelingColonial',
        type: 'checkbox'
      },
      {
        name: 'baseModelingHollywood',
        type: 'checkbox'
      },
      {
        name: 'baseModelingTwoandOneQuarter',
        type: 'checkbox'
      },
      {
        name: 'baseModelingThreeandOneQuarter',
        type: 'checkbox'
      },
      {
        name: 'doorCasingOtherSize',
        type: 'text'
      },
      {
        name: 'doorCasing',
        type: 'checkbox'
      },
      {
        name: 'doorCasingColonial',
        type: 'checkbox'
      },
      {
        name: 'doorCasingHollywood',
        type: 'checkbox'
      },
      {
        name: 'doorCasingtwoandonequarter',
        type: 'checkbox'
      },
      {
        name: 'doorCasingthreeandonequarter',
        type: 'checkbox'
      },
      {
        name: 'windowCasingColonial',
        type: 'checkbox'
      },
      {
        name: 'windowCasing',
        type: 'checkbox'
      },
      {
        name: 'windowCasingHollywood',
        type: 'checkbox'
      },
      {
        name: 'windowCasingTwoandonequarter',
        type: 'checkbox'
      },
      {
        name: 'windowCasingThreeandonequarter',
        type: 'checkbox'
      },
      {
        name: 'trimPrimed',
        type: 'checkbox'
      },
      {
        name: 'trimClear',
        type: 'checkbox'
      },
      {
        name: 'crownMokling',
        type: 'checkbox'
      },
      {
        name: 'crownMoldingThree',
        type: 'checkbox'
      },
      {
        name: 'crownMoldingFive',
        type: 'checkbox'
      },
      {
        name: 'twoTierMolding',
        type: 'checkbox'
      },
      {
        name: 'windowSill',
        type: 'checkbox'
      },
      {
        name: 'wallSillDescription',
        type: 'text'
      },
      {
        name: 'installCeramicTile',
        type: 'checkbox'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'misc',
        type: 'text'
      }
    ]
  },
  {
    title: 'Exterior Contract',
    fields: [
      {
        name: 'buyerAddress',
        type: 'text'
      },
      {
        name: 'city',
        type: 'text'
      },
      {
        name: 'state',
        type: 'text'
      },
      {
        name: 'zip',
        type: 'text'
      },
      {
        name: 'buyerName',
        type: 'text'
      },
      {
        name: 'buyerPhone',
        type: 'text'
      },
      {
        name: 'buyerEmail',
        type: 'text'
      },
      {
        name: 'buyerFinancing',
        type: 'checkbox'
      },
      {
        name: 'sidingTearOffYes',
        type: 'checkbox'
      },
      {
        name: 'sidingTearOffNo',
        type: 'checkbox'
      },
      {
        name: 'gutterTearOffYes',
        type: 'checkbox'
      },
      {
        name: 'gutterTearOffNo',
        type: 'checkbox'
      },
      {
        name: 'trimTearOffYes',
        type: 'checkbox'
      },
      {
        name: 'trimTearOffNo',
        type: 'checkbox'
      },
      {
        name: 'replaceFasciaBoardYes',
        type: 'checkbox'
      },
      {
        name: 'replaceFasciaBoardNo',
        type: 'checkbox'
      },
      {
        name: 'firOverExistingSurface',
        type: 'checkbox'
      },
      {
        name: 'sidingOverExistingSurface',
        type: 'checkbox'
      },
      {
        name: 'siding',
        type: 'text'
      },
      {
        name: 'soffit',
        type: 'text'
      },
      {
        name: 'shutters',
        type: 'text'
      },
      {
        name: 'frezeBoard',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'style',
        type: 'text'
      },
      {
        name: 'fascia',
        type: 'text'
      },
      {
        name: 'pairs',
        type: 'text'
      },
      {
        name: 'windowTrim',
        type: 'text'
      },
      {
        name: 'backer',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'gutter',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'horizVert',
        type: 'text'
      },
      {
        name: 'postBeams',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'doorTrim',
        type: 'text'
      },
      {
        name: 'porchCeiling',
        type: 'text'
      },
      {
        name: 'colors',
        type: 'text'
      },
      {
        name: 'columns',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'sizeStyle',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'vents',
        type: 'text'
      },
      {
        name: 'styleSquare',
        type: 'checkbox'
      },
      {
        name: 'styleOctagonal',
        type: 'checkbox'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'notes',
        type: 'text'
      },
      {
        name: 'styleRound',
        type: 'checkbox'
      },
      {
        name: 'styleHalfRound',
        type: 'checkbox'
      },
      {
        name: 'notes',
        type: 'text'
      },
      {
        name: 'notes',
        type: 'text'
      },
      {
        name: 'gutterGuard',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'notes',
        type: 'text'
      },
      {
        name: 'notes',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'notes',
        type: 'text'
      },
      {
        name: 'addNotes',
        type: 'text'
      },
      {
        name: 'totalPrice',
        type: 'text'
      },
      {
        name: 'lessDownPayment',
        type: 'text'
      },
      {
        name: 'unpaidBalance',
        type: 'text'
      }
    ]
  },
  {
    title: 'Fence Contract',
    fields: [
      {
        name: 'buyerAddress',
        type: 'text'
      },
      {
        name: 'city',
        type: 'text'
      },
      {
        name: 'state',
        type: 'text'
      },
      {
        name: 'zip',
        type: 'text'
      },
      {
        name: 'buyerName',
        type: 'text'
      },
      {
        name: 'buyerPhone',
        type: 'text'
      },
      {
        name: 'buyerEmail',
        type: 'text'
      },
      {
        name: 'buyerFinancing',
        type: 'checkbox'
      },
      {
        name: 'existingFence',
        type: 'checkbox'
      },
      {
        name: 'dynasty',
        type: 'checkbox'
      },
      {
        name: 'savannah',
        type: 'checkbox'
      },
      {
        name: 'malibu',
        type: 'checkbox'
      },
      {
        name: 'american',
        type: 'checkbox'
      },
      {
        name: 'savannahLattice',
        type: 'checkbox'
      },
      {
        name: 'malibuLattice',
        type: 'checkbox'
      },
      {
        name: 'capeCod',
        type: 'checkbox'
      },
      {
        name: 'malibuAccents',
        type: 'checkbox'
      },
      {
        name: 'savannahAccents',
        type: 'checkbox'
      },
      {
        name: 'customCheckbox',
        type: 'checkbox'
      },
      {
        name: 'custom',
        type: 'text'
      },
      {
        name: 'gate',
        type: 'text'
      },
      {
        name: "3'",
        type: 'checkbox'
      },
      {
        name: "4'",
        type: 'checkbox'
      },
      {
        name: 'dd',
        type: 'text'
      },
      {
        name: "6'",
        type: 'checkbox'
      },
      {
        name: "8'",
        type: 'checkbox'
      },
      {
        name: 'specialOrderGates',
        type: 'text'
      },
      {
        name: 'flat',
        type: 'checkbox'
      },
      {
        name: 'gothic',
        type: 'checkbox'
      },
      {
        name: 'customer',
        type: 'checkbox'
      },
      {
        name: 'midtown',
        type: 'checkbox'
      },
      {
        name: 'yes',
        type: 'checkbox'
      },
      {
        name: 'needsMarked',
        type: 'checkbox'
      },
      {
        name: 'comments',
        type: 'text'
      },
      {
        name: 'totalPrice',
        type: 'text'
      },
      {
        name: 'lessDownPayment',
        type: 'text'
      },
      {
        name: 'unpaidBalance',
        type: 'text'
      }
    ]
  },
  {
    title: 'Deck Contract',
    fields: [
      {
        name: 'buyerAddress',
        type: 'text'
      },
      {
        name: 'city',
        type: 'text'
      },
      {
        name: 'state',
        type: 'text'
      },
      {
        name: 'zip',
        type: 'text'
      },
      {
        name: 'buyerName',
        type: 'text'
      },
      {
        name: 'buyerPhone',
        type: 'text'
      },
      {
        name: 'buyerEmail',
        type: 'text'
      },
      {
        name: 'buyerFinancing',
        type: 'checkbox'
      },
      {
        name: 'decking',
        type: 'checkbox'
      },
      {
        name: 'wrap',
        type: 'checkbox'
      },
      {
        name: 'cedarDeck',
        type: 'checkbox'
      },
      {
        name: '2x8Joist',
        type: 'checkbox'
      },
      {
        name: 'deckColor',
        type: 'text'
      },
      {
        name: 'wrapColor',
        type: 'text'
      },
      {
        name: 'laidStraight',
        type: 'checkbox'
      },
      {
        name: '2x10Joist',
        type: 'checkbox'
      },
      {
        name: 'colorLaidStraight',
        type: 'checkbox'
      },
      {
        name: 'vinylWrap',
        type: 'checkbox'
      },
      {
        name: 'laidAtAngle',
        type: 'checkbox'
      },
      {
        name: 'dogEars',
        type: 'text'
      },
      {
        name: 'colorLaidatAngle',
        type: 'checkbox'
      },
      {
        name: 'colorWhite',
        type: 'checkbox'
      },
      {
        name: 'colorTan',
        type: 'checkbox'
      },
      {
        name: '4x4railingPost',
        type: 'checkbox'
      },
      {
        name: 'elevation',
        type: 'text'
      },
      {
        name: 'handrail',
        type: 'checkbox'
      },
      {
        name: 'wrapDeckBands',
        type: 'checkbox'
      },
      {
        name: '6x6upgradedRailingPost',
        type: 'checkbox'
      },
      {
        name: 'landing',
        type: 'text'
      },
      {
        name: 'stepsYes',
        type: 'checkbox'
      },
      {
        name: 'colorWhite',
        type: 'checkbox'
      },
      {
        name: 'wrapBeamFront',
        type: 'checkbox'
      },
      {
        name: 'alumSpindles',
        type: 'checkbox'
      },
      {
        name: 'stepsNo',
        type: 'checkbox'
      },
      {
        name: 'tapCapColor',
        type: 'text'
      },
      {
        name: 'wrapBeamSides',
        type: 'checkbox'
      },
      {
        name: 'colorWhite',
        type: 'checkbox'
      },
      {
        name: 'colorBlack',
        type: 'checkbox'
      },
      {
        name: 'concretePad',
        type: 'checkbox'
      },
      {
        name: 'squarePickets',
        type: 'checkbox'
      },
      {
        name: 'decorativeSpindles',
        type: 'checkbox'
      },
      {
        name: 'underdeckSystemYes',
        type: 'checkbox'
      },
      {
        name: 'wrapBeamRear',
        type: 'checkbox'
      },
      {
        name: 'underdeckSystemNo',
        type: 'checkbox'
      },
      {
        name: 'tearOff',
        type: 'checkbox'
      },
      {
        name: 'alum',
        type: 'checkbox'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'whiteSQFT',
        type: 'text'
      },
      {
        name: 'sqFT',
        type: 'text'
      },
      {
        name: 'postCoversYes',
        type: 'checkbox'
      },
      {
        name: 'addNotes',
        type: 'text'
      },
      {
        name: 'patioCoverSQFT',
        type: 'text'
      },
      {
        name: 'cust',
        type: 'checkbox'
      },
      {
        name: 'midtown',
        type: 'checkbox'
      },
      {
        name: 'postCoversNo',
        type: 'checkbox'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'addNotes',
        type: 'text'
      },
      {
        name: 'colorSQFT',
        type: 'text'
      },
      {
        name: 'notes',
        type: 'text'
      },
      {
        name: 'totalprice',
        type: 'text'
      },
      {
        name: 'downpayment',
        type: 'text'
      },
      {
        name: 'unpaidbalance',
        type: 'text'
      }
    ]
  },
  {
    title: 'Bathroom Contract',
    fields: [
      {
        name: 'lavatoryFaucetFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'lavatoryFaucetFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'lavatoryFaucetInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'lavatoryFaucetInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'lavatoryFaucet2FurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'lavatoryFaucet2FurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'lavatoryFaucet2InstalledYes',
        type: 'checkbox'
      },
      {
        name: 'lavatoryFaucet2InstalledNo',
        type: 'checkbox'
      },
      {
        name: 'showerFaucetFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'showerFaucetFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'showerFaucet2InstalledYes',
        type: 'checkbox'
      },
      {
        name: 'showerFaucet2InstalledNo',
        type: 'checkbox'
      },
      {
        name: 'showerTubFaucetFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'showerFaucetFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'showerTubFaucetInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'showerTubFaucetInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'keepExistingShowerHead',
        type: 'checkbox'
      },
      {
        name: 'installShowerHead',
        type: 'checkbox'
      },
      {
        name: 'approxFromFloor',
        type: 'text'
      },
      {
        name: 'romanTubFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'romanTubFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'romanTubInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'romanTubInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'handHeldFaucetFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'handHeldFaucetFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'handHeldFaucetInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'handHeldFaucetInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'pedstalLavatoryFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'pedstalLavatoryFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'pedstalLavatoryInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'pedstalLavatoryInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'toiletFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'toiletFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'toiletInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'toiletInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'bathtubFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'bathtubFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'bathtubInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'bathtubInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'whirlpoolFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'whirlpoolInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'whirlpoolInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'whirlpoolFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'showerBaseLength',
        type: 'text'
      },
      {
        name: 'showerBaseDepth',
        type: 'text'
      },
      {
        name: 'showerbaseFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'showerbaseFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'showerbaseInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'showerbaseInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'showerDoor',
        type: 'checkbox'
      },
      {
        name: 'standardTubDoor',
        type: 'checkbox'
      },
      {
        name: 'customDoor',
        type: 'checkbox'
      },
      {
        name: 'showerDoorFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'showerDoorFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'showerDoorInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'showerDoorInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'framed',
        type: 'checkbox'
      },
      {
        name: 'semiFramed',
        type: 'checkbox'
      },
      {
        name: '3/8"Frameless',
        type: 'checkbox'
      },
      {
        name: 'clear',
        type: 'checkbox'
      },
      {
        name: 'obscure',
        type: 'checkbox'
      },
      {
        name: 'otherField',
        type: 'checkbox'
      },
      {
        name: 'other',
        type: 'text'
      },
      {
        name: 'furnishedYes',
        type: 'checkbox'
      },
      {
        name: 'furnishedNo',
        type: 'checkbox'
      },
      {
        name: 'installedYes',
        type: 'checkbox'
      },
      {
        name: 'installedNo',
        type: 'checkbox'
      },
      {
        name: 'slider',
        type: 'checkbox'
      },
      {
        name: 'pivot',
        type: 'checkbox'
      },
      {
        name: 'otherCheckBox',
        type: 'checkbox'
      },
      {
        name: 'otherText',
        type: 'text'
      },
      {
        name: 'paperHolderFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'paperHolderFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'paperHolderInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'paperHolderInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'towelBarFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'towelBarFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'towelBarInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'towelBarInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'towelRingFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'towelRingFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'towelRingInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'towelRingInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'grabBarFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'grabBarFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'grabBarInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'grabBarInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'miscFurnishedNo',
        type: 'checkbox'
      },
      {
        name: 'miscFurnishedYes',
        type: 'checkbox'
      },
      {
        name: 'miscInstalledYes',
        type: 'checkbox'
      },
      {
        name: 'miscInstalledNo',
        type: 'checkbox'
      },
      {
        name: 'clientDemoBathroom',
        type: 'checkbox'
      },
      {
        name: 'clientHaulAwayDebri',
        type: 'checkbox'
      },
      {
        name: 'clientProvideBathAccessories',
        type: 'checkbox'
      },
      {
        name: 'clientElectricalBoxWorkOther',
        type: 'checkbox'
      },
      {
        name: 'clientHandleAllWallpaperRemoval',
        type: 'checkbox'
      },
      {
        name: 'clientWorkAllFloor',
        type: 'checkbox'
      },
      {
        name: 'clientProvideTub',
        type: 'checkbox'
      },
      {
        name: 'cliebtWorkWIthOtherShowerDoor',
        type: 'checkbox'
      },
      {
        name: 'clientProvideCabinet',
        type: 'checkbox'
      },
      {
        name: 'note',
        type: 'text'
      },
      {
        name: 'miscellaneous',
        type: 'text'
      },
      {
        name: 'totalPrice',
        type: 'text'
      },
      {
        name: 'downPayment',
        type: 'text'
      },
      {
        name: 'unpaidBalance',
        type: 'text'
      },
      {
        name: 'buyerAddress',
        type: 'text'
      },
      {
        name: 'city',
        type: 'text'
      },
      {
        name: 'state',
        type: 'text'
      },
      {
        name: 'zip',
        type: 'text'
      },
      {
        name: 'buyerName',
        type: 'text'
      },
      {
        name: 'buyerPhone',
        type: 'text'
      },
      {
        name: 'buyerEmail',
        type: 'text'
      },
      {
        name: 'buyerFinancing',
        type: 'checkbox'
      },
      {
        name: 'removeToilet',
        type: 'checkbox'
      },
      {
        name: 'removeToiletandVanity',
        type: 'checkbox'
      },
      {
        name: 'removeTubDeckingShowerBase',
        type: 'checkbox'
      },
      {
        name: 'removeAllFixtures',
        type: 'checkbox'
      },
      {
        name: 'capWaterLines',
        type: 'checkbox'
      },
      {
        name: 'partialGutApproxSF',
        type: 'text'
      },
      {
        name: 'otherArea',
        type: 'text'
      },
      {
        name: 'otherAreaSF',
        type: 'text'
      },
      {
        name: 'partialGut',
        type: 'checkbox'
      },
      {
        name: 'gutAllInteriorBathroomWall',
        type: 'checkbox'
      },
      {
        name: 'firOverMudsetTile',
        type: 'checkbox'
      },
      {
        name: 'removeNonLoadWallApproxLF',
        type: 'text'
      },
      {
        name: 'removeNonLoadBearingWall',
        type: 'checkbox'
      },
      {
        name: 'header',
        type: 'checkbox'
      },
      {
        name: 'noHeaderperDesign',
        type: 'checkbox'
      },
      {
        name: 'removeLoadWallHeaderApproxLF',
        type: 'text'
      },
      {
        name: 'removeLoadBearingWallHeader',
        type: 'checkbox'
      },
      {
        name: 'homeownerWillKeep',
        type: 'text'
      },
      {
        name: 'removeItemCloset',
        type: 'checkbox'
      },
      {
        name: 'leaveItemCloset',
        type: 'checkbox'
      },
      {
        name: 'haulAwayJobDebris',
        type: 'checkbox'
      },
      {
        name: 'homeownerWillKeepCheckbox',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'firFrameExistingWall',
        type: 'checkbox'
      },
      {
        name: 'extendWindowDoorJambo',
        type: 'checkbox'
      },
      {
        name: 'buildNewWallsDesign',
        type: 'checkbox'
      },
      {
        name: 'fireBlockBathroom',
        type: 'checkbox'
      },
      {
        name: 'relocateHVACductColdAir',
        type: 'checkbox'
      },
      {
        name: 'relocateHVACDuctintoCabinet',
        type: 'checkbox'
      },
      {
        name: 'insulateExteriorBathWall',
        type: 'checkbox'
      },
      {
        name: 'closeOffWindowInsideOnly',
        type: 'checkbox'
      },
      {
        name: 'frameCustomPlatform',
        type: 'checkbox'
      },
      {
        name: 'frame1/2Wall',
        type: 'checkbox'
      },
      {
        name: 'ApproximateHeight',
        type: 'text'
      },
      {
        name: 'sillMaterialColor',
        type: 'text'
      },
      {
        name: 'sfOfDryWall',
        type: 'text'
      },
      {
        name: 'applyApproximately',
        type: 'checkbox'
      },
      {
        name: 'installWaterproofBacker',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'removeExistingSoffitPatchAdjoining',
        type: 'checkbox'
      },
      {
        name: 'existingSoffitToAcceptNewDesign',
        type: 'checkbox'
      },
      {
        name: 'addNewSoffit',
        type: 'checkbox'
      },
      {
        name: 'approximatelyLF',
        type: 'text'
      },
      {
        name: 'approximatelySF',
        type: 'text'
      },
      {
        name: 'removeSuspendedCeilingDamaged',
        type: 'checkbox'
      },
      {
        name: 'damagePlasterorDryWall',
        type: 'checkbox'
      },
      {
        name: 'repairMinorCracksCeiling',
        type: 'checkbox'
      },
      {
        name: 'newDrywallApproximatelySF',
        type: 'text'
      },
      {
        name: 'laminateNewDrywall',
        type: 'checkbox'
      },
      {
        name: 'frameDownBelowExistingCeiling',
        type: 'checkbox'
      },
      {
        name: 'installNew2x2',
        type: 'checkbox'
      },
      {
        name: 'ceilingApproximately',
        type: 'text'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'noFlooringWork',
        type: 'checkbox'
      },
      {
        name: 'removeCarpetVinylLaminateHardwood',
        type: 'checkbox'
      },
      {
        name: 'removeThinsetCeramic',
        type: 'checkbox'
      },
      {
        name: 'remove3"or6"inchMudsetTile',
        type: 'checkbox'
      },
      {
        name: 'remove1"MudsetTileFloor',
        type: 'checkbox'
      },
      {
        name: 'removeDamagesubFloor',
        type: 'checkbox'
      },
      {
        name: 'removeSubFloorApproximatelySF',
        type: 'text'
      },
      {
        name: 'replaceFloorJoists',
        type: 'checkbox'
      },
      {
        name: 'patchSubFloor',
        type: 'checkbox'
      },
      {
        name: 'subFloorApproximatelySF',
        type: 'text'
      },
      {
        name: 'areaPatch',
        type: 'text'
      },
      {
        name: 'installUnderlayment',
        type: 'checkbox'
      },
      {
        name: '1/4"LauanPlywood',
        type: 'checkbox'
      },
      {
        name: 'liquidLevelor',
        type: 'checkbox'
      },
      {
        name: 'durockCementBoard',
        type: 'checkbox'
      },
      {
        name: 'installAlternaVinylTile',
        type: 'checkbox'
      },
      {
        name: 'vinylTile',
        type: 'text'
      },
      {
        name: 'groutColor',
        type: 'text'
      },
      {
        name: 'installTileMPG',
        type: 'checkbox'
      },
      {
        name: 'tileColor',
        type: 'text'
      },
      {
        name: 'groutColor',
        type: 'text'
      },
      {
        name: 'tileSize',
        type: 'checkbox'
      },
      {
        name: 'tileSizeNumber',
        type: 'text'
      },
      {
        name: 'squareLayout',
        type: 'checkbox'
      },
      {
        name: 'brickLayout',
        type: 'checkbox'
      },
      {
        name: 'diagonalLayout',
        type: 'checkbox'
      },
      {
        name: 'installRadiantHeatingFlooring',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'wetArea',
        type: 'text'
      },
      {
        name: 'tileHeight',
        type: 'text'
      },
      {
        name: 'provideInstallTileWetArea',
        type: 'checkbox'
      },
      {
        name: 'TileinWetArea',
        type: 'checkbox'
      },
      {
        name: 'squareLayout',
        type: 'checkbox'
      },
      {
        name: 'brickLayout',
        type: 'checkbox'
      },
      {
        name: 'diagonalLayout',
        type: 'checkbox'
      },
      {
        name: 'installClientTile',
        type: 'checkbox'
      },
      {
        name: 'installClientTileDesigns',
        type: 'checkbox'
      },
      {
        name: 'syntheticMarbleOnyx',
        type: 'checkbox'
      },
      {
        name: 'wallsinWetAreaColor',
        type: 'text'
      },
      {
        name: 'syntheticMarbleHeight',
        type: 'text'
      },
      {
        name: 'soapShampooHolder',
        type: 'checkbox'
      },
      {
        name: 'small',
        type: 'checkbox'
      },
      {
        name: 'large',
        type: 'checkbox'
      },
      {
        name: 'corner',
        type: 'checkbox'
      },
      {
        name: 'cornerShelf',
        type: 'checkbox'
      },
      {
        name: 'cornerSeat',
        type: 'checkbox'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'soapDIsh1',
        type: 'checkbox'
      },
      {
        name: 'soapDish2',
        type: 'checkbox'
      },
      {
        name: 'TileMFG',
        type: 'checkbox'
      },
      {
        name: 'tileStyleName',
        type: 'text'
      },
      {
        name: 'tileNumberColor',
        type: 'text'
      },
      {
        name: 'TileColor',
        type: 'checkbox'
      },
      {
        name: 'groutColor',
        type: 'text'
      },
      {
        name: 'numberMFG',
        type: 'text'
      },
      {
        name: 'acrylicWallSurroundWetArea',
        type: 'checkbox'
      },
      {
        name: 'white',
        type: 'checkbox'
      },
      {
        name: 'bone',
        type: 'checkbox'
      },
      {
        name: 'windowTrim',
        type: 'checkbox'
      },
      {
        name: 'windowTrimDescription',
        type: 'text'
      },
      {
        name: 'wainscit',
        type: 'checkbox'
      },
      {
        name: 'wainscotHeight',
        type: 'text'
      },
      {
        name: 'wainscotType',
        type: 'text'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'styleFinish',
        type: 'text'
      },
      {
        name: 'manufacturer',
        type: 'checkbox'
      },
      {
        name: 'cabinetManufacturer',
        type: 'text'
      },
      {
        name: 'recessedPanel',
        type: 'checkbox'
      },
      {
        name: 'raisedPanel',
        type: 'checkbox'
      },
      {
        name: 'maple',
        type: 'checkbox'
      },
      {
        name: 'white',
        type: 'checkbox'
      },
      {
        name: 'cherry',
        type: 'checkbox'
      },
      {
        name: 'hickory',
        type: 'checkbox'
      },
      {
        name: 'oak',
        type: 'checkbox'
      },
      {
        name: 'paintColor',
        type: 'text'
      },
      {
        name: 'glazeColor',
        type: 'text'
      },
      {
        name: 'standardBoxConstruction',
        type: 'checkbox'
      },
      {
        name: 'plywoodVeneeredEnds',
        type: 'checkbox'
      },
      {
        name: 'woodDovetailed',
        type: 'checkbox'
      },
      {
        name: 'drawersLeft',
        type: 'checkbox'
      },
      {
        name: 'drawersRight',
        type: 'checkbox'
      },
      {
        name: 'hisHerDrawers',
        type: 'checkbox'
      },
      {
        name: '5pieceDrawerFront',
        type: 'checkbox'
      },
      {
        name: 'matchingCrownMolding',
        type: 'checkbox'
      },
      {
        name: 'matchingLinenCabinet',
        type: 'checkbox'
      },
      {
        name: 'matchingVanityTowerCabinet',
        type: 'checkbox'
      },
      {
        name: 'MatchingVanityApronDrawer',
        type: 'checkbox'
      },
      {
        name: 'matchingToiletTopperCabinet',
        type: 'checkbox'
      },
      {
        name: 'noCabinetHardware',
        type: 'checkbox'
      },
      {
        name: 'installClientsCabinetHardware',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'provideMedicineCabinet',
        type: 'checkbox'
      },
      {
        name: 'numberMFG',
        type: 'text'
      },
      {
        name: 'installClientMedicineCabinetMirror',
        type: 'checkbox'
      },
      {
        name: 'surfaceMount',
        type: 'checkbox'
      },
      {
        name: 'recessedIntoWall',
        type: 'checkbox'
      },
      {
        name: 'newMirror',
        type: 'checkbox'
      },
      {
        name: 'newMirrorApproximately',
        type: 'text'
      },
      {
        name: 'groundEdge',
        type: 'checkbox'
      },
      {
        name: 'beveledEdge',
        type: 'checkbox'
      },
      {
        name: 'applyMirroredBeveledEdgeStrips',
        type: 'checkbox'
      },
      {
        name: 'vanityTopColor',
        type: 'text'
      },
      {
        name: 'approximateWidth',
        type: 'text'
      },
      {
        name: 'approximateDepth',
        type: 'text'
      },
      {
        name: 'onyx',
        type: 'checkbox'
      },
      {
        name: 'granite',
        type: 'checkbox'
      },
      {
        name: 'syntheticMarble',
        type: 'checkbox'
      },
      {
        name: 'quartz',
        type: 'checkbox'
      },
      {
        name: 'solidSurface',
        type: 'checkbox'
      },
      {
        name: 'standard',
        type: 'checkbox'
      },
      {
        name: 'eased',
        type: 'checkbox'
      },
      {
        name: 'roundOver',
        type: 'checkbox'
      },
      {
        name: 'fullBullNose',
        type: 'checkbox'
      },
      {
        name: 'bevel',
        type: 'checkbox'
      },
      {
        name: 'ogee',
        type: 'checkbox'
      },
      {
        name: 'backSplashYes',
        type: 'checkbox'
      },
      {
        name: 'backSplashNo',
        type: 'checkbox'
      },
      {
        name: 'provideInstallSidesplash',
        type: 'checkbox'
      },
      {
        name: 'oval',
        type: 'checkbox'
      },
      {
        name: 'shell',
        type: 'checkbox'
      },
      {
        name: 'rectangle',
        type: 'checkbox'
      },
      {
        name: 'wave',
        type: 'checkbox'
      },
      {
        name: 'recessedRim',
        type: 'checkbox'
      },
      {
        name: 'dropIn',
        type: 'checkbox'
      },
      {
        name: 'undermount',
        type: 'checkbox'
      },
      {
        name: 'banjoStyleTop',
        type: 'checkbox'
      },
      {
        name: 'singleHoleDrilling',
        type: 'checkbox'
      },
      {
        name: '4"Drilling',
        type: 'checkbox'
      },
      {
        name: '8"Drilling',
        type: 'checkbox'
      },
      {
        name: 'styleColor',
        type: 'text'
      },
      {
        name: 'installClientBowl',
        type: 'checkbox'
      },
      {
        name: 'provideInstall1Bowl',
        type: 'checkbox'
      },
      {
        name: 'provideInstall2Bowl',
        type: 'checkbox'
      },
      {
        name: 'pedestalLavatory',
        type: 'checkbox'
      },
      {
        name: 'mfgColor',
        type: 'text'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'updateReworkNecessaryElectricperPlan',
        type: 'checkbox'
      },
      {
        name: 'killRelocateAddSwitchesJBox',
        type: 'checkbox'
      },
      {
        name: 'addSmokeDectors',
        type: 'checkbox'
      },
      {
        name: 'numberOutlet',
        type: 'text'
      },
      {
        name: 'numberSwitches',
        type: 'text'
      },
      {
        name: 'dedicatedCircuits',
        type: 'text'
      },
      {
        name: 'colorOtherText',
        type: 'text'
      },
      {
        name: 'colorWhite',
        type: 'checkbox'
      },
      {
        name: 'colorIvory',
        type: 'checkbox'
      },
      {
        name: 'colorOtherCheckBox',
        type: 'checkbox'
      },
      {
        name: 'installclientBaroverVanityYes',
        type: 'checkbox'
      },
      {
        name: 'installclientBaroverVanityNo',
        type: 'checkbox'
      },
      {
        name: 'numberMFG',
        type: 'text'
      },
      {
        name: 'recessedcanLight',
        type: 'text'
      },
      {
        name: 'surfaceMountLights',
        type: 'text'
      },
      {
        name: 'canLightExhaustfanComboUnit',
        type: 'checkbox'
      },
      {
        name: 'waterProofCanLight',
        type: 'checkbox'
      },
      {
        name: 'installClientExhaustFan',
        type: 'checkbox'
      },
      {
        name: 'provideInstallExhaustFan',
        type: 'checkbox'
      },
      {
        name: 'exhaustFanLightComboUnit',
        type: 'checkbox'
      },
      {
        name: 'exhaustFanLightComboUnit2',
        type: 'checkbox'
      },
      {
        name: 'toespaceHeaterorinWaterHeater',
        type: 'checkbox'
      },
      {
        name: 'upgradeElectricService',
        type: 'checkbox'
      },
      {
        name: '100AMPwithBreaker',
        type: 'checkbox'
      },
      {
        name: '200AMPwithBreaker',
        type: 'checkbox'
      },
      {
        name: 'existingPanelandAddSubPanelAdditionalCircuits',
        type: 'checkbox'
      },
      {
        name: 'noWorkbyMidtownClientWorkingwithOther',
        type: 'checkbox'
      },
      {
        name: 'rePlumbDraintoVanity1',
        type: 'checkbox'
      },
      {
        name: 'rePlumbDraintoVanity2',
        type: 'checkbox'
      },
      {
        name: 'rePlumbDraintoVanityYes',
        type: 'checkbox'
      },
      {
        name: 'rePlumbDraintoVanityNo',
        type: 'checkbox'
      },
      {
        name: 'installPBvalveAdjascentBathYes',
        type: 'checkbox'
      },
      {
        name: 'installPBvalveAdjascentBathNo',
        type: 'checkbox'
      },
      {
        name: '1/2BathRoughinThroughConcreteYes',
        type: 'checkbox'
      },
      {
        name: '1/2BathRoughinThroughConcreteNo',
        type: 'checkbox'
      },
      {
        name: 'roughInSecondVanityBowlYes',
        type: 'checkbox'
      },
      {
        name: 'roughInSecondVanityBowlNo',
        type: 'checkbox'
      },
      {
        name: 'removeReinstallToiletYes',
        type: 'checkbox'
      },
      {
        name: 'removeReinstallToiletNo',
        type: 'checkbox'
      },
      {
        name: 'FullBathRoughinThroughConcreteYes',
        type: 'checkbox'
      },
      {
        name: 'FullBathRoughinThroughConcreteNo',
        type: 'checkbox'
      },
      {
        name: 'installToiletYes',
        type: 'checkbox'
      },
      {
        name: 'installToiletNo',
        type: 'checkbox'
      },
      {
        name: 'replaceClosetBendFloorCollarYes',
        type: 'checkbox'
      },
      {
        name: 'replaceClosetBendFloorCollarNo',
        type: 'checkbox'
      },
      {
        name: 'barSinkRoughinThroughConcreteYes',
        type: 'checkbox'
      },
      {
        name: 'barSinkRoughinThroughConcreteNo',
        type: 'checkbox'
      },
      {
        name: 'replumbDraintoShowerYes',
        type: 'checkbox'
      },
      {
        name: 'replaceBathroomSoilStackYes',
        type: 'checkbox'
      },
      {
        name: 'replumbDraintoShowerNo',
        type: 'checkbox'
      },
      {
        name: 'addCopperLinesWhereNeededYes',
        type: 'checkbox'
      },
      {
        name: 'addCopperLinesWhereNeededNo',
        type: 'checkbox'
      },
      {
        name: 'replaceBathroomSoilStackNo',
        type: 'checkbox'
      },
      {
        name: 'replumbDraintotuborWhirlpoolYes',
        type: 'checkbox'
      },
      {
        name: 'replumbDraintotuborWhirlpoolNo',
        type: 'checkbox'
      },
      {
        name: 'relocateTubShowerDrainJoistsYes',
        type: 'checkbox'
      },
      {
        name: 'relocateTubShowerDrainJoistsNo',
        type: 'checkbox'
      },
      {
        name: 'installPBValveYes',
        type: 'checkbox'
      },
      {
        name: 'installPBValveNo',
        type: 'checkbox'
      },
      {
        name: 'relocateTubShowerDrainConcreteYes',
        type: 'checkbox'
      },
      {
        name: 'relocateTubShowerDrainConcreteNo',
        type: 'checkbox'
      },
      {
        name: 'replaceNeccessaryDrainYes',
        type: 'checkbox'
      },
      {
        name: 'replaceNeccessaryDrainNo',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'installedWindow',
        type: 'text'
      },
      {
        name: 'brand',
        type: 'text'
      },
      {
        name: 'styleDoubleHung',
        type: 'checkbox'
      },
      {
        name: 'styleCasement',
        type: 'checkbox'
      },
      {
        name: 'stylePicture',
        type: 'checkbox'
      },
      {
        name: 'styleTransom',
        type: 'checkbox'
      },
      {
        name: 'styleSlider',
        type: 'checkbox'
      },
      {
        name: 'styleGarden',
        type: 'checkbox'
      },
      {
        name: 'styleBay',
        type: 'checkbox'
      },
      {
        name: 'styleBow',
        type: 'checkbox'
      },
      {
        name: 'styleHopper',
        type: 'checkbox'
      },
      {
        name: 'styleAwing',
        type: 'checkbox'
      },
      {
        name: 'styleEgressWindowSystem',
        type: 'checkbox'
      },
      {
        name: 'glassStyle',
        type: 'text'
      },
      {
        name: 'colorWhite',
        type: 'checkbox'
      },
      {
        name: 'colorAlmond',
        type: 'checkbox'
      },
      {
        name: 'colorBronze',
        type: 'checkbox'
      },
      {
        name: 'colorOther',
        type: 'text'
      },
      {
        name: 'windowMisc',
        type: 'text'
      },
      {
        name: 'installDoor',
        type: 'text'
      },
      {
        name: 'doorBrand',
        type: 'text'
      },
      {
        name: 'single',
        type: 'checkbox'
      },
      {
        name: 'biFold',
        type: 'checkbox'
      },
      {
        name: 'french',
        type: 'checkbox'
      },
      {
        name: 'slidingPocket',
        type: 'checkbox'
      },
      {
        name: 'flatLauan',
        type: 'checkbox'
      },
      {
        name: '6Panel',
        type: 'checkbox'
      },
      {
        name: '2Panel',
        type: 'checkbox'
      },
      {
        name: 'hollowCore',
        type: 'checkbox'
      },
      {
        name: 'solidWood',
        type: 'checkbox'
      },
      {
        name: 'primed',
        type: 'checkbox'
      },
      {
        name: 'clear',
        type: 'checkbox'
      },
      {
        name: 'frontEntry',
        type: 'checkbox'
      },
      {
        name: 'rearEntry',
        type: 'checkbox'
      },
      {
        name: 'garageEntry',
        type: 'checkbox'
      },
      {
        name: 'slidingPatio',
        type: 'checkbox'
      },
      {
        name: 'atrium',
        type: 'checkbox'
      },
      {
        name: 'exteriorFrench',
        type: 'checkbox'
      },
      {
        name: 'cutBottomOfDoorDown',
        type: 'checkbox'
      },
      {
        name: 'doorMisc',
        type: 'text'
      },
      {
        name: 'homeisFramed',
        type: 'checkbox'
      },
      {
        name: 'homeisMasonry',
        type: 'checkbox'
      },
      {
        name: 'performCutoutInstallSupport',
        type: 'checkbox'
      },
      {
        name: 'provideInstallSunTunnelSkylight',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      },
      {
        name: 'baseMolding',
        type: 'checkbox'
      },
      {
        name: 'baseMoldingColonial',
        type: 'checkbox'
      },
      {
        name: 'baseMoldingHollywood',
        type: 'checkbox'
      },
      {
        name: 'baseMolding2,1/4"',
        type: 'checkbox'
      },
      {
        name: 'baseMolding3,1/4"',
        type: 'checkbox'
      },
      {
        name: 'baseMoldingSize',
        type: 'text'
      },
      {
        name: 'doorCasing',
        type: 'checkbox'
      },
      {
        name: 'doorCasingColonial',
        type: 'checkbox'
      },
      {
        name: 'doorCasingHollywood',
        type: 'checkbox'
      },
      {
        name: 'doorCasing2,1/4"',
        type: 'checkbox'
      },
      {
        name: 'doorCasing3,1/4"',
        type: 'checkbox'
      },
      {
        name: 'doorCasingSize',
        type: 'text'
      },
      {
        name: 'windowCasing',
        type: 'checkbox'
      },
      {
        name: 'windowCasingColonial',
        type: 'checkbox'
      },
      {
        name: 'windowCasingHollywood',
        type: 'checkbox'
      },
      {
        name: 'windowCasing2,1/4"',
        type: 'checkbox'
      },
      {
        name: 'windowCasing3,1/4"',
        type: 'checkbox'
      },
      {
        name: 'trimtobePrimed',
        type: 'checkbox'
      },
      {
        name: 'trimtobeClear',
        type: 'checkbox'
      },
      {
        name: 'crownMolding',
        type: 'checkbox'
      },
      {
        name: 'crownMolding3,5/8"',
        type: 'checkbox'
      },
      {
        name: 'crownMolding5,1/4"',
        type: 'checkbox'
      },
      {
        name: 'crownMolding2Tier',
        type: 'checkbox'
      },
      {
        name: 'windowSill',
        type: 'checkbox'
      },
      {
        name: 'windowSillDescription',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'installCeramicTile',
        type: 'checkbox'
      },
      {
        name: 'misc',
        type: 'text'
      }
    ]
  },
  {
    title: 'Roof Contract',
    fields: [
      {
        name: 'buyerAddress',
        type: 'text'
      },
      {
        name: 'city',
        type: 'text'
      },
      {
        name: 'state',
        type: 'text'
      },
      {
        name: 'zip',
        type: 'text'
      },
      {
        name: 'buyerName',
        type: 'text'
      },
      {
        name: 'buyerPhone',
        type: 'text'
      },
      {
        name: 'buyerEmail',
        type: 'text'
      },
      {
        name: 'buyerFinancing',
        type: 'checkbox'
      },
      {
        name: 'roofingTearOffYes',
        type: 'checkbox'
      },
      {
        name: 'roofingTearOffNo',
        type: 'checkbox'
      },
      {
        name: 'gutterTearOffYes',
        type: 'checkbox'
      },
      {
        name: 'gutterTearOffNo',
        type: 'checkbox'
      },
      {
        name: 'trimTearOffYes',
        type: 'checkbox'
      },
      {
        name: 'trimTearOffNo',
        type: 'checkbox'
      },
      {
        name: 'replaceFasciaBoardYes',
        type: 'checkbox'
      },
      {
        name: 'replaceFasciaBoardNo',
        type: 'checkbox'
      },
      {
        name: 'sofit',
        type: 'text'
      },
      {
        name: 'shingleMake',
        type: 'text'
      },
      {
        name: 'homeAtticYes',
        type: 'checkbox'
      },
      {
        name: 'homeAtticNo',
        type: 'checkbox'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'shingleStyle',
        type: 'text'
      },
      {
        name: 'garageAreaNo',
        type: 'checkbox'
      },
      {
        name: 'garageAreaNo',
        type: 'checkbox'
      },
      {
        name: 'fascia',
        type: 'text'
      },
      {
        name: 'blownInInsulationYes',
        type: 'checkbox'
      },
      {
        name: 'protectiveMembrane',
        type: 'text'
      },
      {
        name: 'blownInInsulationNo',
        type: 'checkbox'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'icewaterProtection',
        type: 'text'
      },
      {
        name: 'blownInTo',
        type: 'text'
      },
      {
        name: 'gutter',
        type: 'text'
      },
      {
        name: 'fishingcounterflashing',
        type: 'text'
      },
      {
        name: 'sealAtticYes',
        type: 'checkbox'
      },
      {
        name: 'sealAtticNo',
        type: 'checkbox'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'dripEdge',
        type: 'text'
      },
      {
        name: 'energySavingsExtras',
        type: 'text'
      },
      {
        name: 'fishingYes',
        type: 'checkbox'
      },
      {
        name: 'fishingNo',
        type: 'checkbox'
      },
      {
        name: 'itemOne',
        type: 'text'
      },
      {
        name: 'flangeCovers',
        type: 'text'
      },
      {
        name: 'gutterGuard',
        type: 'text'
      },
      {
        name: 'ridgeVent',
        type: 'text'
      },
      {
        name: 'itemTwo',
        type: 'text'
      },
      {
        name: 'color',
        type: 'text'
      },
      {
        name: 'gutterSizeFive',
        type: 'checkbox'
      },
      {
        name: 'gutterSizeSix',
        type: 'checkbox'
      },
      {
        name: 'itemThree',
        type: 'text'
      },
      {
        name: 'downspoutTwo',
        type: 'checkbox'
      },
      {
        name: 'downspoutThree',
        type: 'checkbox'
      },
      {
        name: 'notes',
        type: 'text'
      },
      {
        name: 'additionalPlywood',
        type: 'text'
      },
      {
        name: 'totalprice',
        type: 'text'
      },
      {
        name: 'lessDownPayment',
        type: 'text'
      },
      {
        name: 'unpaidBalance',
        type: 'text'
      }
    ]
  },
  {
    title: 'Cancel Contract Long',
    fields: []
  },
  {
    title: 'Change Order Form',
    fields: [
      {
        name: 'ordernumber',
        type: 'text'
      },
      {
        name: 'date',
        type: 'text'
      },
      {
        name: 'buyerName',
        type: 'text'
      },
      {
        name: 'buyerHomephone',
        type: 'text'
      },
      {
        name: 'buyerWorkPhone',
        type: 'text'
      },
      {
        name: 'buyerAddress',
        type: 'text'
      },
      {
        name: 'city',
        type: 'text'
      },
      {
        name: 'state',
        type: 'text'
      },
      {
        name: 'zip',
        type: 'text'
      },
      {
        name: 'amountoforiginalcontract',
        type: 'text'
      },
      {
        name: 'changeamount',
        type: 'text'
      },
      {
        name: 'subtotal',
        type: 'text'
      },
      {
        name: 'payments',
        type: 'text'
      },
      {
        name: 'remainingbalance',
        type: 'text'
      },
      {
        name: 'descriptionofchange',
        type: 'text'
      }
    ]
  },
  {
    title: 'Cancel Contract Short',
    fields: []
  },
  {
    title: 'Test Document',
    fields: [
      {
        name: 'checkbox',
        type: 'checkbox'
      },
      {
        name: 'Input',
        type: 'text'
      }
    ]
  },
  {
    title: 'test',
    fields: []
  }
]

/**
 * 
{
  key: 'Input',
  type: 'input',
  templateOptions: {
    label: 'Input',
    placeholder: 'Placeholder',
    description: 'Description',
    required: true,
  },
}
 * 
 */

function addSpaces (str) {
  const newStr = str.replace(/([A-Z])/g, ' $1').trim()
  const splitStr = newStr.split(' ')
  const capitalized = splitStr.map(str => _.capitalize(str))
  return capitalized.reduce((prev, cur) => {
    return prev + ' ' + cur
  }, '')
}

function generate (_fields) {
  // console.log(_fields)
  // const _fields = Fields.filter(field => {
  //   return field.signer === 'sender'
  // })

  return _fields.map(field => {
    if (field.type === 'text') {
      return {
        key: field.name,
        type: 'input',
        templateOptions: {
          label: addSpaces(field.name),
          placeholder: '',
          description: addSpaces(field.name),
          required: field.required
        }
      }
    }
    if (field.type === 'checkbox') {
      return {
        key: field.name,
        type: 'checkbox',
        templateOptions: {
          label: addSpaces(field.name),
          description: addSpaces(field.name),
          pattern: 'false',
          required: field.required
        }
      }
    }
    return {
      name: field.name,
      error: 'INCOMPLETE'
    }
  })
}

async function run () {
  const forms = fields.map(item => {
    return {
      ...item,
      fields: generate(item.fields)
    }
  })
  // const form = generate(contracts[process.argv[2]])
  console.log(JSON.stringify(forms, undefined, 2))
}

run()
