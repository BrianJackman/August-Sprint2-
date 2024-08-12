// Sprint 2
// By:Brian Jackman
// 2024/08/12

//define product information

const products = [
  {
    id: 1,
    name: "Sony Playstation 5",
    description:
      "CPU: 3.5GHz, 8-core AMD Zen 2, GPU: 10.3 teraflop RDNA 2 GPU, RAM: 16GB GDDR6, Storage: Custom 825GB SSD, Expansion: NVMe M.2 SSD slot, Disc drive: 4K Blu-ray player, Size: 15.4 x 10.2 x 4.1 inches, Weight: 9.9 pounds ",
    price: 749.99,
  },
  {
    id: 2,
    name: "Sony Playstation 4",
    description:
      "CPU: 3.5GHz, 8-core x86-64 AMD Jaguar, GPU: 1.84 teraflop AMD GPU, RAM: 8GB GDDR5, Storage: 1TB, Disc drive: Blu-ray player, Size: 2.09 x 12.00 x 10.80 inches, Weight: 6.2 pounds ",
    price: 549.97,
  },
  {
    id: 3,
    name: "Sony PSVR 2",
    description:
      "Display: OLED, HDR, 110° field of view, Graphics: 4K PenTile (2000 × 2040 per eye; 90 or 120 Hz refresh rate), Controller Input: PlayStation VR2 Sense controller or DualSense, Camera: 4 x outward-facing, 2 x inward-facing (for eye-tracking), Platform: PlayStation 5, PC",
    price: 749.99,
  },
  {
    id: 4,
    name: "Sony DualSense Wireless Controller",
    description:
      "The DualSense wireless controller for PS5 consoles offers immersive haptic feedback2, dynamic adaptive triggers2 and a built-in microphone, all integrated into an iconic design.",
    price: 89.99,
  },
  {
    id: 5,
    name: "Sony DualSense Edge Wireless Controller",
    description:
      "Get an edge in gameplay with remappable buttons, tunable triggers and sticks, changeable stick caps, back buttons, and more. Built with high performance and personalization in mind, the controller also retains all the immersive features of the DualSense wireless controller",
    price: 269.99,
  },
  {
    id: 6,
    name: "Sony PSVR2 PC Adapter",
    description:
      "Expand the library of games to play on your PlayStation VR2. Browse, buy and play thousands of virtual reality games on Steam. Discover multiplayer open worlds, survival horrors and stealth action games, plus sports sims, quirky puzzlers and free-to-play epics – explore Steam’s huge range of virtual reality games to expand your PlayStation VR2 experience. Connect the PlayStation VR2 PC adapter to your PlayStation VR2 and a Windows PC, download the SteamVR App and the free PlayStation VR2 App from Steam, and find your next favourite virtual reality game",
    price: 79.99,
  },
];

//export product information
export const getProducts = () => {
  return products;
};

export const getProductDetails = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((product) => product.id === Number(id));
    if (product) {
      resolve(product);
    } else {
      reject("Product not found");
    }
  });
};
