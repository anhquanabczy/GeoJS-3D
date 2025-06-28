// Sàn nhà
export const stair_Renderer = {
  type: "simple",
  symbol: {
    type: "polygon-3d",
    symbolLayers: [
      {
        type: "extrude",
        size: 0.2,
        material: {
          color: "gray",
        },
      },
    ],
  },
};

// Roof
export const roof_Renderer = {
  type: "simple",
  symbol: {
    type: "polygon-3d",
    symbolLayers: [
      {
        type: "extrude",
        size: 0.1,
        material: {
          color: "#890206",
        },
        edges: {
          type: "solid", // autocasts as new SolidEdges3D()
          color: "black",
        },
      },
    ],
  },
};

// between Roof
export const between_roof_Renderer = {
  type: "simple",
  symbol: {
    type: "simple-fill", // Biểu tượng tô màu
    color: [255, 255, 255], // Màu đỏ với độ trong suốt
    outline: {
      color: [0, 0, 0], // Màu viền đen
      width: 1, // Độ dày viền
    },
  },
};

// Pillar
export function createPillarRenderer({
  width,
  height,
  depth,
  color,
  heading,
  tilt = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          width,
          height,
          depth,
          resource: { primitive: "cube" },
          material: { color },
          heading,
          tilt,
          roll,
        },
      ],
    },
  };
}

// mesh object windowns
export function createWindowside_1Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/side_1.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}
//Front Tower
export function createFrontTowerWindow_1Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/Model/Front_tower/front_tower_window_wall.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}

export function createFrontTowerDoor_1Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/Model/Front_tower/front_tower_door_wall.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}

export function createFrontTowerWindow_2Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/Model/Front_tower/front_tower_window_wall1.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}

export function createFrontTowerWindow_3Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/Model/Front_tower/front_tower_window_wall2.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}

export function createFrontTowerPillarPattern_Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/Model/Front_tower/pillar.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}
//

// main front face
export function createmainDoor_1Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/Model/main_Front/main_Door.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}
export function createmainfrontBlock_1Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/Model/main_Front/main_front_block.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}
//back block
export function createbackBlock_1Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/Model/back_block/main_back_to_side_block3.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}
export function createbackBlock_2Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/Model/back_block/main_back_to_side_block4.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}
export function createbackBlock_3Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/Model/back_block/Back_two_side_face_window_style1.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}
export function createbackBlock_4Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/Model/back_block/Back_two_side_face_window_style2.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}

// cua so mat sau tang 1
export function create_CuaSoMatSauTang1({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "./../data/mesh_object/mat-sau/cuaso_matsau2.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}
export function create_CuaSoMatSau({ href, width, height, heading, roll = 0 }) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: href,
          },
          heading,
          pitch: 0,
          roll: roll,
          width,
          height,
        },
      ],
    },
  };
}
//
// mesh object windowns
export function createWindownew({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/fist_floor_side_face_window.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}
export function createWindowside_2Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/cuaso_mathong.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}
export function createlongside_1Renderer({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/fist_floor_tower_window_wall.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}
export function createdoorside({
  heading,
  height,
  width,
  pitch = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/fist_floor_side_face_window_and_door.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}
export function cotthanhgia({ heading, height, width, pitch = 0, roll = 0 }) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/back_to_side_pillar.glb",
          },
          heading,
          height,
          width,
          pitch,
          roll,
        },
      ],
    },
  };
}

// roof_top
export const roof_top_Renderer = {
  type: "simple",
  symbol: {
    type: "simple-fill", // Biểu tượng tô màu
    color: [141, 57, 23, 1], // Màu đỏ với độ trong suốt
    outline: {
      color: [0, 0, 0], // Màu viền đen
      width: 1, // Độ dày viền
    },
  },
};
export const filled_roof_Renderer = {
  type: "simple",
  symbol: {
    type: "polygon-3d",
    symbolLayers: [
      {
        type: "extrude",
        size: 0.1,
        material: {
          color: "#24303bff",
        },
      },
    ],
  },
};
// cửa thông gió
export const cuathonggio_Renderer = {
  type: "simple",
  symbol: {
    type: "simple-fill", // Biểu tượng tô màu
    color: "#24303BFF", // Màu đỏ với độ trong suốt
    outline: {
      color: [0, 0, 0], // Màu viền đen
      width: 1, // Độ dày viền
    },
  },
};


