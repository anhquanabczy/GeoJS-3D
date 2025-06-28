import {
  roof_Renderer,
  createPillarRenderer,
  stair_Renderer,
  between_roof_Renderer,
  createFrontTowerWindow_1Renderer,
  createFrontTowerWindow_2Renderer,
  createFrontTowerWindow_3Renderer,
  createFrontTowerDoor_1Renderer,
  createFrontTowerPillarPattern_Renderer,
  createmainDoor_1Renderer,
  createmainfrontBlock_1Renderer,
  createbackBlock_1Renderer,
  createbackBlock_2Renderer,
  createbackBlock_3Renderer,
  createlongside_1Renderer,
  createWindowside_2Renderer,
  createdoorside,
  createWindownew,
  cotthanhgia,
  create_CuaSoMatSau,
  filled_roof_Renderer,
  cuathonggio_Renderer
} from "./shared/renderer.js";

const pillarConfigs = {
  down_pillar_back: { width: 0.5, height: 12, depth: 0.5, color: "gray", heading: -120 },
  down_pillar_front: { width: 1.2, height: 64.4, depth: 1.2, color: "#24303BFF", heading: -120 },
  down_pillar_side1: { width: 1, height: 28.4, depth: 1, color: "gray", heading: -120 },
  down_pillar_side2: { width: 0.5, height: 15.4, depth: 0.5, color: "gray", heading: -120 },
  down_pillar_sideback1: { width: 0.5, height: 14.4, depth: 0.5, color: "gray", heading: -120 },
  down_pillar_sideback2: { width: 0.5, height: 14.4, depth: 0.5, color: "gray", heading: 90 },
  up_pillar_back: { width: 0.5, height: 9, depth: 0.5, color: "gray", heading: -120 },
  up_pillar_side: { width: 0.37, height: 5, depth: 0.37, color: "gray", heading: -120 },
};

// Create renderers using the configuration
const down_pillar_back = createPillarRenderer(pillarConfigs.down_pillar_back);
const down_pillar_front = createPillarRenderer(pillarConfigs.down_pillar_front);
const down_pillar_side1 = createPillarRenderer(pillarConfigs.down_pillar_side1);
const down_pillar_side2 = createPillarRenderer(pillarConfigs.down_pillar_side2);
const down_pillar_sideback1 = createPillarRenderer(
  pillarConfigs.down_pillar_sideback1
);
const down_pillar_sideback2 = createPillarRenderer(
  pillarConfigs.down_pillar_sideback2
);
const up_pillar_back = createPillarRenderer(pillarConfigs.up_pillar_back);
const up_pillar_side = createPillarRenderer(pillarConfigs.up_pillar_side);

const frontTowerDoorRenderer = createFrontTowerDoor_1Renderer({ heading: -120, height: 7.5, width: 4.6 });
const frontTowerWindowRenderer = createFrontTowerWindow_1Renderer({ heading: -120, height: 6, width: 4.6 });
const frontTowerSideWindowRenderer = createFrontTowerWindow_2Renderer({ heading: -30, height: 7, width: 4 });
const frontTowerSideWindowRenderer2 = createFrontTowerWindow_3Renderer({ heading: -30, height: 6.05, width: 4.05 });
const frontTowerSideWindowRenderer3 = createFrontTowerWindow_2Renderer({ heading: -210, height: 7, width: 4 });
const frontTowerSideWindowRenderer4 = createFrontTowerWindow_3Renderer({ heading: -210, height: 6.05, width: 4.05 });
const backTowerWindowRenderer = createFrontTowerWindow_1Renderer({ heading: 60, height: 6, width: 4.6 });
const frontTowerInsideWindowRenderer1 = createFrontTowerWindow_3Renderer({ heading: -210, height: 6.05, width: 4.05 });
const frontTowerInsideWindowRenderer2 = createFrontTowerWindow_3Renderer({ heading: -30, height: 6.05, width: 4.05 });

const mainFront = createmainDoor_1Renderer({ heading: 150, height: 9.8, width: 2.1 });
const main_Front2 = createmainfrontBlock_1Renderer({ heading: -30, height: 18, width: 1.5 });

const frontTowerPillarPatternRenderer = createFrontTowerPillarPattern_Renderer({ heading: -30, height: 4 });
const frontTowerPillarPatternRenderer2 = createFrontTowerPillarPattern_Renderer({ heading: 60, height: 4 });
const frontTowerPillarPatternRenderer3 = createFrontTowerPillarPattern_Renderer({ heading: 240, height: 4 });

const back_block1 = createbackBlock_1Renderer({ heading: -118, height: 6.8, width: 0.9 });
const back_block2 = createbackBlock_2Renderer({ heading: 54.5, height: 6.8, width: 0.9 });
const back_block3 = createbackBlock_3Renderer({ heading: -72, height: 6.8, width: 2.8 });
const back_block4 = createbackBlock_3Renderer({ heading: 188, height: 6.8, width: 2.8 });

const sidewindowConfigs = {
  side1: { heading: -30 },
  side2: { heading: 210 },
};

//cửa sổ tầng 1
const side1WindowRenderer = createWindownew({ heading: -30, height: 6.6, width: 4.2 });
const side1_2WindowRenderer = createWindownew({ heading: -30, height: 6.6, width: 4.2 });
const side1_3WindowRenderer = createdoorside({ heading: -30, height: 6.6, width: 4.2 });
const side1_4WindowRenderer = createWindownew({ heading: -30, height: 6.6, width: 4.2 });
const side1_5WindowRenderer = createWindownew({ heading: -30, height: 6.6, width: 4.2 });

const side2WindowRenderer = createWindownew({ heading: 150, height: 6.6, width: 4.2 });
const side3WindowRenderer = createWindownew({ heading: 150, height: 6.6, width: 4.2 });
const side4WindowRenderer = createdoorside({ heading: 150, height: 6.6, width: 4.2 });
const side5WindowRenderer = createWindownew({ heading: 150, height: 6.6, width: 4.2 });
const side6WindowRenderer = createWindownew({ heading: 150, height: 6.6, width: 4.2 });

const side2_1WindowRenderer = createWindownew({ heading: -30, height: 6.85, width: 4.5 });
const side2_2WindowRenderer = createWindownew({ heading: -30, height: 6.85, width: 4.5 });
const side2_3WindowRenderer = createWindownew({ heading: -30, height: 6.8, width: 4.8 });

const side3_1WindowRenderer = createWindownew({ heading: 150, height: 6.6, width: 4.8 });
const side3_2WindowRenderer = createWindownew({ heading: 150, height: 6.6, width: 4.8 });
const side3_3WindowRenderer = createWindownew({ heading: 150, height: 6.6, width: 4.8 });
//thành dài ở giữa
const side_door1 = createlongside_1Renderer({ heading: 150, height: 15.5, width: 6.2 });
const side_door2 = createlongside_1Renderer({ heading: -30, height: 15.5, width: 6.2 });

// cửa sổ tầng 2
const floor2_side1_1WindowRenderer = createWindowside_2Renderer({ heading: 240, height: 5.5, width: 0.75 });
const floor2_side1_2WindowRenderer = createWindowside_2Renderer({ heading: 240, height: 5.5, width: 0.75 });
const floor2_side1_3WindowRenderer = createWindowside_2Renderer({ heading: 240, height: 5.5, width: 0.75 });
const floor2_side1_4WindowRenderer = createWindowside_2Renderer({ heading: 240, height: 5.3, width: 0.75 });
const floor2_side1_5WindowRenderer = createWindowside_2Renderer({ heading: 240, height: 5.3, width: 0.75 });
const floor2_side1_6WindowRenderer = createWindowside_2Renderer({ heading: 240, height: 5.3, width: 0.88 });
const floor2_side1_7WindowRenderer = createWindowside_2Renderer({ heading: 240, height: 5.3, width: 0.75 });
const floor2_side1_8WindowRenderer = createWindowside_2Renderer({ heading: 240, height: 5.3, width: 0.75 });
const floor2_side1_9WindowRenderer = createWindowside_2Renderer({ heading: 240, height: 5.3, width: 0.75 });

const floor2_side2_1WindowRenderer = createWindowside_2Renderer({ heading: 60, height: 5.5, width: 0.75 });
const floor2_side2_2WindowRenderer = createWindowside_2Renderer({ heading: 60, height: 5.5, width: 0.75 });
const floor2_side2_3WindowRenderer = createWindowside_2Renderer({ heading: 60, height: 5.5, width: 0.75 });
const floor2_side2_4WindowRenderer = createWindowside_2Renderer({ heading: 60, height: 5.3, width: 0.75 });
const floor2_side2_5WindowRenderer = createWindowside_2Renderer({ heading: 60, height: 5.3, width: 0.75 });
const floor2_side2_6WindowRenderer = createWindowside_2Renderer({ heading: 60, height: 5.3, width: 0.95 });
const floor2_side2_7WindowRenderer = createWindowside_2Renderer({ heading: 60, height: 5.3, width: 0.7 });
const floor2_side2_8WindowRenderer = createWindowside_2Renderer({ heading: 60, height: 5.3, width: 0.8 });
const floor2_side2_9WindowRenderer = createWindowside_2Renderer({ heading: 60, height: 5.3, width: 0.7 });
// thánh giá tầng 1
const thanhgia1 = cotthanhgia({ heading: 240, height: 8.5, width: 0.5 });
const thanhgia2 = cotthanhgia({ heading: 240, height: 8.5, width: 0.5 });
const thanhgia3 = cotthanhgia({ heading: 240, height: 8.5, width: 0.5 });
const thanhgia4 = cotthanhgia({ heading: 240, height: 8.5, width: 0.5 });
const thanhgia5 = cotthanhgia({ heading: 60, height: 8.5, width: 0.5 });
const thanhgia6 = cotthanhgia({ heading: 60, height: 8.5, width: 0.5 });
const thanhgia7 = cotthanhgia({ heading: 60, height: 8.8, width: 0.5 });
const thanhgia8 = cotthanhgia({ heading: 60, height: 8.8, width: 0.5 });
const thanhgia9 = cotthanhgia({ heading: 60, height: 8.8, width: 0.5 });
const thanhgia10 = cotthanhgia({ heading: 60, height: 8.8, width: 0.5 });
const thanhgia11 = cotthanhgia({ heading: 240, height: 8.8, width: 0.5 });
const thanhgia12 = cotthanhgia({ heading: 240, height: 8.8, width: 0.5 });
// Cua So Mat Sau
const CuaSoMatSau = {
  CuaSoMatSauTang1_1: { href: "data/mesh_object/mat-sau/main_back_to_side_block2.glb", heading: 150, height: 6.1, width: 0.58 },
  CuaSoMatSauTang1_2: { href: "data/mesh_object/mat-sau/main_back_to_side_block2.glb", heading: 150, height: 5.97, width: 0.57 },
  CuaSoMatSauTang1_3: { href: "data/mesh_object/mat-sau/main_back_to_side_block2.glb", heading: 150, height: 5.97, width: 1 },
  CuaSoMatSauTang2: { href: "data/mesh_object/mat-sau/main_back_to_side_block1.glb", heading: 150, height: 9.05, width: 0.36 },
  CuaSoMatSauTang1BenTrai_1: { href: "data/mesh_object/Back_two_side_face/Back_two_side_face_door_fixed.glb", heading: 128, height: 6.2, width: 2.9 },
  CuaSoMatSauTang1BenTrai_2: { href: "data/mesh_object/Back_two_side_face/Back_two_side_face_window_style1.glb", heading: -39, height: 6.2, width: 3 },
  CuaSoMatSauTang1BenTrai_3: { href: "data/mesh_object/back_block/main_back_to_side_block3.glb", heading: -118, height: 6.8, width: 0.9 },
  CuaSoMatSauTang1BenTrai_4: { href: "data/mesh_object/back_block/Back_two_side_face_window_style2.glb", heading: -72, height: 6.8, width: 2.8 },
  CuaSoMatSauTang1BenPhai_1: { href: "data/mesh_object/Back_two_side_face/Back_two_side_face_door_fixed.glb", heading: -9, height: 6.2, width: 3 },
  CuaSoMatSauTang1BenPhai_2: { href: "data/mesh_object/Back_two_side_face/Back_two_side_face_window_style1.glb", heading: 150, height: 6.2, width: 2.7 },
  CuaSoMatSauTang1BenPhai_3: { href: "data/mesh_object/back_block//main_back_to_side_block4.glb", heading: 54.5, height: 6.8, width: 0.9 },
  CuaSoMatSauTang1BenPhai_4: { href: "data/mesh_object/back_block/Back_two_side_face_window_style1.glb", heading: 188, height: 6.8, width: 2.8 },
  CuaSoMatHongTang2BenTrai: { href: "data/mesh_object/mat-sau/cuaso_mathong.glb", heading: -148, height: 4.78, width: 1.018 },
  CuaSoMatHongTang2BenPhai: { href: "data/mesh_object/mat-sau/cuaso_mathong.glb", heading: 81, height: 4.78, width: 0.9 },
};

const CuaSoMatSauTang1_1_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatSauTang1_1);
const CuaSoMatSauTang1_2_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatSauTang1_2);
const CuaSoMatSauTang1_3_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatSauTang1_2);
const CuaSoMatSauTang2_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatSauTang2);
const CuaSoMatSauTang1BenTrai_1_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatSauTang1BenTrai_1);
const CuaSoMatSauTang1BenTrai_2_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatSauTang1BenTrai_2);
const CuaSoMatSauTang1BenTrai_3_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatSauTang1BenTrai_3);
const CuaSoMatSauTang1BenTrai_4_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatSauTang1BenTrai_4);
const CuaSoMatSauTang1BenPhai_1_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatSauTang1BenPhai_1);
const CuaSoMatSauTang1BenPhai_2_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatSauTang1BenPhai_2);
const CuaSoMatSauTang1BenPhai_3_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatSauTang1BenPhai_3);
const CuaSoMatSauTang1BenPhai_4_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatSauTang1BenPhai_4);
const CuaSoMatHongTang2BenTrai_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatHongTang2BenTrai);
const CuaSoMatHongTang2BenPhai_Renderer = create_CuaSoMatSau(CuaSoMatSau.CuaSoMatHongTang2BenPhai);

require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
  "esri/Graphic",
  "esri/geometry/Point",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/layers/GraphicsLayer",
  "esri/geometry/Polygon",
], function (
  Map,
  SceneView,
  GeoJSONLayer,
  Graphic,
  Point,
  SimpleMarkerSymbol,
  GraphicsLayer,
  Polygon
) {
  const map = new Map({
    basemap: "topo-vector",
    ground: "world-elevation",
  });

  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: [105.84960234533695, 21.02882267397156, 140],
      heading: -90,
      tilt: 30,
    },
  });

  // Function to create GeoJSONLayer for each feature
  function createGeoJsonLayer(name, renderer) {
    return new GeoJSONLayer({
      url: "data/chung/" + name + ".geojson",
      elevationInfo: {
        mode: "relative-to-ground",
      },
      renderer: renderer,
    });
  }
  // hàm dich chuyển tọa độ
  function createShiftedLayer(name, renderer) {
    const graphicsLayer = new GraphicsLayer({ renderer });

    fetch("data/chung/" + name + ".geojson")
      .then((response) => response.json())
      .then((geojson) => {
        geojson.features.forEach((feature) => {
          // Gán offset mặc định
          let offsetX = 0;
          let offsetY = 0;
          let offsetZ = 0;
          // Xác định vị trí dựa trên 'face'
          switch (feature.properties.face) {
            // mái bên phải
            case "bottom_right_surface":
            case "front_right_roof1":
            case "front_right_roof2":
            case "front_right_roof3":
            case "front_right_roof":
            case "behind_right_roof":
            case "right_right_roof":
            // hàng rào
            case "front_right_fence":
            case "right_right_fence":
            case "behind_right_fence":
            case "left_right_fence":
              offsetX = 0.000003;
              offsetY = 0.000008;
              offsetZ = 24.45;
              break;
            // mái bên trái
            case "bottom_left_surface":
            case "front_left_roof1":
            case "front_left_roof2":
            case "front_left_roof3":
            case "right_left_roof":
            case "left_left_roof":
            case "behind_left_roof":
            // hàng rào bên trái
            case "bottom_left_surface_roof":
            case "right_left_fence":
            case "behind_left_fence":
            case "left_left_fence":
              offsetX = 0.00001; // đông/tây
              offsetY = -0.000003; // bắc/nam
              offsetZ = 24.7;
              break;
            default:
              // không dịch nếu không xác định được
              break;
          }

          // Áp dụng offset
          const coords = feature.geometry.coordinates.map((ring) =>
            ring.map(([x, y, z = 0]) => [x + offsetX, y + offsetY, z + offsetZ])
          );

            const polygon = {
            type: "polygon",
            rings: coords,
            spatialReference: { wkid: 4326 },
            };

            const graphic = new Graphic({
            geometry: polygon,
            attributes: feature.properties,
            symbol: {
              type: "simple-fill", // autocasts as new SimpleFillSymbol()
              color: "#24303BFF", // RGBA color (red with 50% transparency)
              outline: {
              color: [0, 0, 0, 1], // Black outline
              width: 1, // Outline width
              },
            },
            });

          graphicsLayer.add(graphic);
        });
      });

    return graphicsLayer;
  }
  // render mái trên đỉnh
  map.add(createShiftedLayer("mai_dau", filled_roof_Renderer));
  map.add(createShiftedLayer("ria_mai_dau", filled_roof_Renderer));
  // Roof
  map.add(createGeoJsonLayer("roof/mai_sau", roof_Renderer));
  map.add(createGeoJsonLayer("roof/mai_nha_2_ben", roof_Renderer));
  map.add(createGeoJsonLayer("roof/mai_nha_dai", roof_Renderer));

  
  //thông gió
  map.add(createGeoJsonLayer("thong_gio", cuathonggio_Renderer));
  // Between Roof
  map.add(createGeoJsonLayer("roof/ranh_gioi_mai_2_ben", between_roof_Renderer));
  map.add(createGeoJsonLayer("roof/ranh_gioi_mai_sau", between_roof_Renderer));

  // Stair
  map.add(createGeoJsonLayer("san_nha", stair_Renderer));

  // Pillars
  map.add(createGeoJsonLayer("pillar/down/pillar_back", down_pillar_back));
  map.add(createGeoJsonLayer("pillar/down/pillar_front", down_pillar_front));
  map.add(createGeoJsonLayer("pillar/down/pillar_side_1", down_pillar_side1));
  map.add(createGeoJsonLayer("pillar/down/pillar_side_2", down_pillar_side2));
  map.add(
    createGeoJsonLayer("pillar/down/pillar_sideback1", down_pillar_sideback1)
  );
  map.add(
    createGeoJsonLayer("pillar/down/pillar_sideback2", down_pillar_sideback2)
  );
  map.add(createGeoJsonLayer("pillar/up/pillar_back", up_pillar_back));
  map.add(createGeoJsonLayer("pillar/up/pillar_side", up_pillar_side));

  //Front Tower Windows
  //Left Tower
  //Front
  map.add(createGeoJsonLayer("window/leftTower/frontTower_window1", frontTowerDoorRenderer));
  map.add(createGeoJsonLayer("window/leftTower/frontTower_window2", frontTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/leftTower/frontTower_window3", frontTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/leftTower/frontTower_window4", frontTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/leftTower/frontTower_window5", frontTowerWindowRenderer));
  //Side
  map.add(createGeoJsonLayer("window/leftTower/sideTower_window1", frontTowerSideWindowRenderer));
  map.add(createGeoJsonLayer("window/leftTower/sideTower_window2", frontTowerSideWindowRenderer2));
  map.add(createGeoJsonLayer("window/leftTower/sideTower_window3", frontTowerSideWindowRenderer2));
  map.add(createGeoJsonLayer("window/leftTower/sideTower_window4", frontTowerSideWindowRenderer2));
  map.add(createGeoJsonLayer("window/leftTower/sideTower_window5", frontTowerSideWindowRenderer2));
  //Back
  map.add(createGeoJsonLayer("window/leftTower/backTower_window1", backTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/leftTower/backTower_window2", backTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/leftTower/backTower_window3", backTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/leftTower/backTower_window4", backTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/leftTower/backTower_window5", backTowerWindowRenderer));
  //Inside Windows
  map.add(createGeoJsonLayer("window/leftTower/insideTower_window",frontTowerInsideWindowRenderer1));

  //Right Tower
  //Front
  map.add(createGeoJsonLayer("window/rightTower/frontTower_window1", frontTowerDoorRenderer));
  map.add(createGeoJsonLayer("window/rightTower/frontTower_window2", frontTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/rightTower/frontTower_window3", frontTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/rightTower/frontTower_window4", frontTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/rightTower/frontTower_window5", frontTowerWindowRenderer));

  //Side
  map.add(createGeoJsonLayer("window/rightTower/sideTower_window1", frontTowerSideWindowRenderer3));
  map.add(createGeoJsonLayer("window/rightTower/sideTower_window2", frontTowerSideWindowRenderer4));
  map.add(createGeoJsonLayer("window/rightTower/sideTower_window3", frontTowerSideWindowRenderer4));
  map.add(createGeoJsonLayer("window/rightTower/sideTower_window4", frontTowerSideWindowRenderer4));
  map.add(createGeoJsonLayer("window/rightTower/sideTower_window5", frontTowerSideWindowRenderer4));

  //Back
  map.add(createGeoJsonLayer("window/rightTower/backTower_window1", backTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/rightTower/backTower_window2", backTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/rightTower/backTower_window3", backTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/rightTower/backTower_window4", backTowerWindowRenderer));
  map.add(createGeoJsonLayer("window/rightTower/backTower_window5", backTowerWindowRenderer));
  //Inside Windows
  map.add(
    createGeoJsonLayer("window/rightTower/insideTower_window",frontTowerInsideWindowRenderer2));

  //Front Tower Pillar Pattern
  //Left Tower
  //Left Pillar
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/front_pattern1", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/front_pattern2", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/front_pattern3", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/front_pattern4", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/front_pattern5", frontTowerPillarPatternRenderer));

  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/side_pattern1", frontTowerPillarPatternRenderer2));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/side_pattern2", frontTowerPillarPatternRenderer2));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/side_pattern3", frontTowerPillarPatternRenderer2));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/side_pattern4", frontTowerPillarPatternRenderer2));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/side_pattern5", frontTowerPillarPatternRenderer2));

  //Right Pillar
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/front_pattern6", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/front_pattern7", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/front_pattern8", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/front_pattern9", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/front_pattern10", frontTowerPillarPatternRenderer));

  //Back Pillar
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/side_pattern6", frontTowerPillarPatternRenderer2));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/side_pattern7", frontTowerPillarPatternRenderer2));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/side_pattern8", frontTowerPillarPatternRenderer2));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/side_pattern9", frontTowerPillarPatternRenderer2));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/leftTower/side_pattern10", frontTowerPillarPatternRenderer2));

  //Right Tower
  //Left Pillar
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/front_pattern1", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/front_pattern2", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/front_pattern3", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/front_pattern4", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/front_pattern5", frontTowerPillarPatternRenderer));

  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/side_pattern1", frontTowerPillarPatternRenderer3));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/side_pattern2", frontTowerPillarPatternRenderer3));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/side_pattern3", frontTowerPillarPatternRenderer3));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/side_pattern4", frontTowerPillarPatternRenderer3));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/side_pattern5", frontTowerPillarPatternRenderer3));

  //Right Pillar
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/front_pattern6", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/front_pattern7", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/front_pattern8", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/front_pattern9", frontTowerPillarPatternRenderer));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/front_pattern10", frontTowerPillarPatternRenderer));

  //Back Pillar
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/side_pattern6", frontTowerPillarPatternRenderer3));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/side_pattern7", frontTowerPillarPatternRenderer3));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/side_pattern8", frontTowerPillarPatternRenderer3));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/side_pattern9", frontTowerPillarPatternRenderer3));
  map.add(createGeoJsonLayer("pillar/frontTowerPattern/rightTower/side_pattern10", frontTowerPillarPatternRenderer3));
  //Main Door
  map.add(createGeoJsonLayer("location/maindoor", mainFront));
  map.add(createGeoJsonLayer("location/main_front_block", main_Front2));
  //Back Block
  map.add(createGeoJsonLayer("location/back_block1", back_block1));
  map.add(createGeoJsonLayer("location/back_block2", back_block2));
  map.add(createGeoJsonLayer("location/back_block3", back_block3));
  map.add(createGeoJsonLayer("location/back_block4", back_block4));

  // cửa sỏ mặt sau
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-sau-tang1_1", CuaSoMatSauTang1_1_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-sau-tang1_2", CuaSoMatSauTang1_2_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-sau-tang1_3", CuaSoMatSauTang1_3_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-sau-tang2", CuaSoMatSauTang2_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-sau-tang1-ben-trai_1", CuaSoMatSauTang1BenTrai_1_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-sau-tang1-ben-trai_2", CuaSoMatSauTang1BenTrai_2_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-sau-tang1-ben-trai_3", CuaSoMatSauTang1BenTrai_3_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-sau-tang1-ben-trai_4", CuaSoMatSauTang1BenTrai_4_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-sau-tang1-ben-phai_3", CuaSoMatSauTang1BenPhai_3_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-sau-tang1-ben-phai_1", CuaSoMatSauTang1BenPhai_1_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-sau-tang1-ben-phai_2", CuaSoMatSauTang1BenPhai_2_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-sau-tang1-ben-phai_3", CuaSoMatSauTang1BenPhai_3_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-sau-tang1-ben-phai_4", CuaSoMatSauTang1BenPhai_4_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-hong-tang2-ben-trai", CuaSoMatHongTang2BenTrai_Renderer));
  map.add(createGeoJsonLayer("location/mat-sau/cua-so-mat-hong-tang2-ben-phai", CuaSoMatHongTang2BenPhai_Renderer));
  // Windows cần có file location
  //cuarw
  // map.add(createGeoJsonLayer("location/door/door1", doorside1));
  // map.add(createGeoJsonLayer("location/door/door2", doorside2));
  // cửa sổ tầng 1
  map.add(createGeoJsonLayer("location/floor1/side_1", side1WindowRenderer));
  map.add(createGeoJsonLayer("location/floor1/side_1_2", side1_2WindowRenderer));
  map.add(createGeoJsonLayer("location/floor1/side_1_3", side1_3WindowRenderer));
  map.add(createGeoJsonLayer("location/floor1/side_1_4", side1_4WindowRenderer));
  map.add(createGeoJsonLayer("location/floor1/side_1_5", side1_5WindowRenderer));

  map.add(createGeoJsonLayer("location/floor1/side_2", side2WindowRenderer));
  map.add(createGeoJsonLayer("location/floor1/side_3", side3WindowRenderer));
  map.add(createGeoJsonLayer("location/floor1/side_4", side4WindowRenderer));
  map.add(createGeoJsonLayer("location/floor1/side_5", side5WindowRenderer));
  map.add(createGeoJsonLayer("location/floor1/side_6", side6WindowRenderer));

  map.add(createGeoJsonLayer("location/floor1/side_2_1", side2_1WindowRenderer));
  map.add(createGeoJsonLayer("location/floor1/side_2_2", side2_2WindowRenderer));
  map.add(createGeoJsonLayer("location/floor1/side_2_3", side2_3WindowRenderer));
  map.add(createGeoJsonLayer("location/floor1/side_3_1", side3_1WindowRenderer));
  map.add(createGeoJsonLayer("location/floor1/side_3_2", side3_2WindowRenderer));
  map.add(createGeoJsonLayer("location/floor1/side_3_3", side3_3WindowRenderer));
  // thành dài ở giữa
  map.add(createGeoJsonLayer("location/longside1", side_door1));
  map.add(createGeoJsonLayer("location/longside2", side_door2));
  //cửa sổ tầng 2
  map.add(createGeoJsonLayer("location/floor2/floor_2_1_1", floor2_side1_1WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_1_2", floor2_side1_2WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_1_3", floor2_side1_3WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_1_4", floor2_side1_4WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_1_5", floor2_side1_5WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_1_6", floor2_side1_6WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_1_7", floor2_side1_7WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_1_8", floor2_side1_8WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_1_9", floor2_side1_9WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_2_1", floor2_side2_1WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_2_2", floor2_side2_2WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_2_3", floor2_side2_3WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_2_4", floor2_side2_4WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_2_5", floor2_side2_5WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_2_6", floor2_side2_6WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_2_7", floor2_side2_7WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_2_8", floor2_side2_8WindowRenderer));
  map.add(createGeoJsonLayer("location/floor2/floor_2_2_9", floor2_side2_9WindowRenderer));
  //thánh giá
  map.add(createGeoJsonLayer("location/thánh giá/thanhgia1", thanhgia1));
  map.add(createGeoJsonLayer("location/thánh giá/thanhgia2", thanhgia2));
  map.add(createGeoJsonLayer("location/thánh giá/thanhgia3", thanhgia3));
  map.add(createGeoJsonLayer("location/thánh giá/thanhgia4", thanhgia4));
  map.add(createGeoJsonLayer("location/thánh giá/thanhgia5", thanhgia5));
  map.add(createGeoJsonLayer("location/thánh giá/thanhgia6", thanhgia6));
  map.add(createGeoJsonLayer("location/thánh giá/thanhgia7", thanhgia7));
  map.add(createGeoJsonLayer("location/thánh giá/thanhgia8", thanhgia8));
  map.add(createGeoJsonLayer("location/thánh giá/thanhgia9", thanhgia9));
  map.add(createGeoJsonLayer("location/thánh giá/thanhgia10", thanhgia10));
  map.add(createGeoJsonLayer("location/thánh giá/thanhgia11", thanhgia11));
  map.add(createGeoJsonLayer("location/thánh giá/thanhgia12", thanhgia12));

});
