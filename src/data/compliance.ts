const unCodes = {
  "Lithium-Ion": ["3480", "3481", "3171"],
  "Lithium-Polymer": ["3480", "3481", "3171"],
  "Lithium-manganese(LiMn204)": ["3090", "3091"],
  "Lithium-Carbon-Fluoride": ["3090", "3091"],
};

const batteryTypes = [
  "Alkaline Coin/Button",
  "Lead-Acid",
  "Lithium Carbon Flouride (Li-CFx)",
  "Lithium Coin/Button",
  "Lithium Iron Disulfide (LiFe2)",
  "Lithium iron phosphate (LiFePO4)",
  "Lithium-cobalt (LiCoO2)",
  "Lithium-Ion",
  "Lithium-manganese(LiMn204)",
  "Lithium Manganese Dioxide(LiMnO2)",
  "Lithium-Polymer",
  "Manganese Titanium Lithium",
  "Nickel-Cadmium (NiCd)",
  "Nickel-Metal Hydride (NiMH)",
  "Silver Oxide Coin/Button",
  "Zinc Air Coin/Button",
  "Zinc Carbon",
  "Other",
  "Alkaline Battery",
];

const formats = {
  "Lithium-Ion": [
    "AA",
    "AAA",
    "C",
    "D",
    "9V",
    "Lantern",
    "CR-V3",
    "CR-P2 (CR-P2/5024LC)",
    "2CR5 (2CR5/5032LC)",
    "CR2 (CR17355/5046LC)",
    "CR123A",
    "CR123A (CR17345/5018LC)",
    "RCR123A",
    "RCR123",
    "RCR-V3",
    "OTHER",
  ],
  "Lithium-manganese(LiMn204)": [
    "AA",
    "AAA",
    "C",
    "D",
    "9V",
    "Lantern",
    "CR-V3",
    "CR-P2 (CR-P2/5024LC)",
    "2CR5 (2CR5/5032LC)",
    "CR2 (CR17355/5046LC)",
    "CR123A",
    "CR123A (CR17345/5018LC)",
    "RCR123A",
    "RCR123",
    "RCR-V3",
    "OTHER",
  ],
};

const complianceInputs = [
  {
    name: "UPC",
    type: "readonly",
  },
  {
    name: "SKU Title (Long)",
    type: "readonly",
  },
  {
    name: "Model Number",
    type: "readonly",
  },
  {
    name: "VENDOR ACKNOWLEDGEMENT",
    type: "select",
    options: ["Y", "N"],
  },
  // -----------------------------------------------Mercury Section
  {
    name: "Mercury Section",
    type: "readonly",
  },
  {
    name: "CCFL Qty (1)",
    type: "number",
    min: 0,
    max: 100,
    placeholder: "0",
  },
  {
    name: "Mercury/Bulb Weight (mg) (1)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0000",
  },
  {
    name: "CCFL Qty (2)",
    type: "number",
    min: 0,
    max: 100,
    placeholder: "0",
  },
  {
    name: "Mercury/Bulb Weight (mg) (2)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0000",
  },
  {
    name: "CCFL Qty (3)",
    type: "number",
    min: 0,
    max: 100,
    placeholder: "0",
  },
  {
    name: "Mercury/Bulb Weight (mg) (3)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0000",
  },
  {
    name: "Other Components Qty (1)",
    type: "number",
    min: 0,
    max: 100,
    placeholder: "0",
  },
  {
    name: "Mercury/Component Weight (mg) (1)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0000",
  },
  {
    name: "Other Components Qty (2)",
    type: "number",
    min: 0,
    max: 100,
    placeholder: "0",
  },
  {
    name: "Mercury/Component Weight (mg) (2)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0000",
  },
  {
    name: "Other Components Qty (3)",
    type: "number",
    min: 0,
    max: 100,
    placeholder: "0",
  },
  {
    name: "Mercury/Component Weight (mg) (3)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0000",
  },

  // ---------------------------------------------Packaging Section Increasing packaging max to 10.0 as vendor's do request beyond the original max of 4.0
  {
    name: "Packaging Section",
    type: "readonly",
  },
  {
    name: "Printed Magazines, Catalogs, Brochures, etc",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Newsprint (Inserts and Circulars)",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Finished goods sold as Paper for General Use: Printing Paper, Craft Paper, Notebooks, Journals",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Finished Goods sold as Posters, Calendars and Greeting Cards",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Other Printed Material: Manuals, Warranties, etc",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Corrugated Cardboard",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Box Board",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Paper Laminates with foil or plastic",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Gable Top Containers",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Aseptic Containers",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Kraft Paper- Non-Laminated",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "LDPE/HDPE Plastic Film",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Expanded Polystyrene, Styrofoam- Other",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Non- Expanded Polystyrene, Styrofoam- Other",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "PET Thermoform or molded Container/ Packaging",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "PET Bottles & Jars (only)",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "HDPE Bottles, Jars & Jugs (only)",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "PLA, PHA, PHB Container/ Packaging- Beverage",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "PLA, PHA, PHB Container/ Packaging- Non- Beverage",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "PLA, PHA, PHB Plastic Film",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Plastic Laminates with metallized foil, wax or paper: Bubble wrap, tapes, etc",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "PP (Polypropylene)",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "PVC (Polyvinyl Chloride)",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Other Rigid Plastic not listed above",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Aluminum/ Steel Containers",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Other Aluminum & Foil Packaging",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Steel Aerosols",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Other Steel Container",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Clear Glass Container",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },
  {
    name: "Colored Glass Container",
    type: "float",
    min: 0.0,
    max: 10.0,
    placeholder: "0.0000",
  },

  // -----------------------------------------------Battery Section
  {
    name: "Battery Section",
    type: "readonly",
  },
  {
    name: "1 - Battery Type",
    type: "select",
    options: batteryTypes,
    placeholder: "Select from list of values",
  },
  {
    name: "1 - Size/Format",
    type: "select",
    options: formats,
    placeholder: "Select from list of values",
  },
  {
    name: "1 - *Qty (total no. of batteries for this type)",
    type: "number",
    min: 0,
    max: 200,
    placeholder: "0",
  },
  {
    name: "1 - HAZMAT UN# (4 Digits)",
    type: "select",
    options: unCodes,
    placeholder: "Select from list of values",
  },
  {
    name: "1 - # of Batteries in Product (inside)",
    type: "number",
    min: 0,
    max: 200,
    placeholder: "0",
  },
  {
    name: "1 - # of Batteries out of Product (outside)",
    type: "number",
    min: 0,
    max: 200,
    placeholder: "0",
  },
  {
    name: "1- Cells in Lithium (single or multiple)",
    type: "select",
    options: ["S", "M"],
    placeholder: "Select from list of values",
  },
  {
    name: "1 - # Lithium Content (Primary) (grams)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0",
  },
  {
    name: "1 - Watt Hours",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0",
  },
  {
    name: "1 - Individual Li Battery Net Weight (kg)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0",
  },
  {
    name: "1 - MSDS",
    type: "select",
    options: [],
    placeholder: "Select from list of values after uploading MSDS",
  },
  {
    name: "1 - Test Summary",
    type: "select",
    options: [],
    placeholder: "Select from list of values after uploading Test Summary",
  },

  {
    name: "2 - Battery Type",
    type: "select",
    options: batteryTypes,
    placeholder: "Select from list of values",
  },
  {
    name: "2 - Size/Format",
    type: "select",
    options: formats,
    placeholder: "Select from list of values",
  },
  {
    name: "2 - *Qty (total no. of batteries for this type)",
    type: "number",
    min: 0,
    max: 200,
    placeholder: "0",
  },
  {
    name: "2 - HAZMAT UN# (4 Digits)",
    type: "select",
    options: unCodes,
    placeholder: "Select from list of values",
  },
  {
    name: "2 - # of Batteries in Product (inside)",
    type: "number",
    min: 0,
    max: 200,
    placeholder: "0",
  },
  {
    name: "2 - # of Batteries out of Product (outside)",
    type: "number",
    min: 0,
    max: 200,
    placeholder: "0",
  },
  {
    name: "2- Cells in Lithium (single or multiple)",
    type: "select",
    options: ["S", "M"],
    placeholder: "Select from list of values",
  },
  {
    name: "2 - # Lithium Content (Primary) (grams)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0",
  },
  {
    name: "2 - Watt Hours",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0",
  },
  {
    name: "2 - Individual Li Battery Net Weight (kg)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0",
  },
  {
    name: "2 - MSDS",
    type: "select",
    options: [],
    placeholder: "Select from list of values after uploading MSDS",
  },
  {
    name: "2 - Test Summary",
    type: "select",
    options: [],
    placeholder: "Select from list of values after uploading Test Summary",
  },

  // Battery 3
  {
    name: "3 - Battery Type",
    type: "select",
    options: batteryTypes,
    placeholder: "Select from list of values",
  },
  {
    name: "3 - Size/Format",
    type: "select",
    options: formats,
    placeholder: "Select from list of values",
  },
  {
    name: "3 - *Qty (total no. of batteries for this type)",
    type: "number",
    min: 0,
    max: 200,
    placeholder: "0",
  },
  {
    name: "3 - HAZMAT UN# (4 Digits)",
    type: "select",
    options: unCodes,
    placeholder: "Select from list of values",
  },
  {
    name: "3 - # of Batteries in Product (inside)",
    type: "number",
    min: 0,
    max: 200,
    placeholder: "0",
  },
  {
    name: "3 - # of Batteries out of Product (outside)",
    type: "number",
    min: 0,
    max: 200,
    placeholder: "0",
  },
  {
    name: "3- Cells in Lithium (single or multiple)",
    type: "select",
    options: ["S", "M"],
    placeholder: "Select from list of values",
  },
  {
    name: "3 - # Lithium Content (Primary) (grams)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0",
  },
  {
    name: "3 - Watt Hours",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0",
  },
  {
    name: "3 - Individual Li Battery Net Weight (kg)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.0",
  },
  {
    name: "3 - MSDS",
    type: "select",
    options: [],
    placeholder: "Select from list of values after uploading MSDS",
  },
  {
    name: "3 - Test Summary",
    type: "select",
    options: [],
    placeholder: "Select from list of values after uploading Test Summary",
  },

  // Battery 4
  {
    name: "4 - Battery Type",
    type: "select",
    options: batteryTypes,
    placeholder: "Select from list of values",
  },
  {
    name: "4 - Size/Format",
    type: "select",
    options: formats,
    placeholder: "Select from list of values",
  },
  {
    name: "4 - *Qty (total no. of batteries for this type)",
    type: "number",
    min: 0,
    max: 200,
    placeholder: "0",
  },
  {
    name: "4 - HAZMAT UN# (4 Digits)",
    type: "select",
    options: unCodes,
    placeholder: "Select from list of values",
  },
  {
    name: "4 - # of Batteries in Product (inside)",
    type: "number",
    min: 0,
    max: 200,
    placeholder: "0",
  },
  {
    name: "4 - # of Batteries out of Product (outside)",
    type: "number",
    min: 0,
    max: 200,
    placeholder: "0",
  },
  {
    name: "4- Cells in Lithium (single or multiple)",
    type: "select",
    options: ["S", "M"],
    placeholder: "Select from list of values",
  },
  {
    name: "4 - # Lithium Content (Primary) (grams)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.000",
  },
  {
    name: "4 - Watt Hours",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.000",
  },
  {
    name: "4 - Individual Li Battery Net Weight (kg)",
    type: "float",
    min: 0.0,
    max: 10000.0,
    placeholder: "0.000",
  },
  {
    name: "4 - MSDS",
    type: "select",
    options: [],
    placeholder: "Select from list of values after uploading MSDS",
  },
  {
    name: "4 - Test Summary",
    type: "select",
    options: [],
    placeholder: "Select from list of values after uploading Test Summary",
  },

  // ----------------------------------------------------Limited Quantities Section
  {
    name: "Limited Quantities Section",
    type: "readonly",
  },
  {
    name: "1 - UN# (4 digits)",
    type: "number",
    min: 0,
    max: 9999,
    placeholder: "0000",
  },
  {
    name: "1 - Qty (Liters for Aerosol, Gas or Liquid/KG for Solid)",
    type: "float",
    min: 0.0,
    max: 1000.0,
    placeholder: "0.000",
  },
  {
    name: "1 - SDS",
    type: "select",
    options: [],
    placeholder: "Select from list of values after uploading MSDS",
  },
  {
    name: "2 - UN# (4 digits)",
    type: "number",
    min: 0,
    max: 9999,
    placeholder: "0000",
  },
  {
    name: "2 - Qty (Liters for Aerosol, Gas or Liquid/KG for Solid)",
    type: "float",
    min: 0.0,
    max: 1000.0,
    placeholder: "0.000",
  },
  {
    name: "2 - SDS",
    type: "select",
    options: [],
    placeholder: "Select from list of values after uploading MSDS",
  },
  {
    name: "3 - UN# (4 digits)",
    type: "number",
    min: 0,
    max: 9999,
    placeholder: "0000",
  },
  {
    name: "3 - Qty (Liters for Aerosol, Gas or Liquid/KG for Solid)",
    type: "float",
    min: 0.0,
    max: 1000.0,
    placeholder: "0.000",
  },
  {
    name: "3 - SDS",
    type: "select",
    options: [],
    placeholder: "Select from list of values after uploading MSDS",
  },
  {
    name: "4 - UN# (4 digits)",
    type: "number",
    min: 0,
    max: 9999,
    placeholder: "0000",
  },
  {
    name: "4 - Qty (Liters for Aerosol, Gas or Liquid/KG for Solid)",
    type: "float",
    min: 0.0,
    max: 1000.0,
    placeholder: "0.000",
  },
  {
    name: "4 - SDS",
    type: "select",
    options: [],
    placeholder: "Select from list of values after uploading MSDS",
  },
  {
    name: "5 - UN# (4 digits)",
    type: "number",
    min: 0,
    max: 9999,
    placeholder: "0000",
  },
  {
    name: "5 - Qty (Liters for Aerosol, Gas or Liquid/KG for Solid)",
    type: "float",
    min: 0.0,
    max: 1000.0,
    placeholder: "0.000",
  },
  {
    name: "5 - SDS",
    type: "select",
    options: [],
    placeholder: "Select from list of values after uploading MSDS",
  },

  // --------------------------------------------------------------------Other Certifications Section
  {
    name: "Other Certifications Section",
    type: "readonly",
  },
  {
    name: "NPN (Natural Product Number - 8 digits)",
    type: "number",
    min: 0,
    max: 9999,
  },
  {
    name: "DIN-HM",
    type: "number",
    min: 0,
    max: 9999
  },
];



// const inputs = [
//   {
//     name: "MSDS",
//     type: "select",
//     options: {},
//     required: true,
//   },
//   {
//     name: "BATTERY_TYPE",
//     type: "select",
//     options: batteryTypes,
//     required: true,
//   },
//   {
//     name: "SIZE_FORMAT",
//     type: "select",
//     options: formats,
//     required: true,
//   },
//   {
//     name: "QUANTITY",
//     type: "number",
//     min: 1,
//     max: 20,
//     required: true,
//   },
//   {
//     name: "HAZMAT_ID",
//     type: "select",
//     options: unCodes,
//     required: true,
//   },
//   {
//     name: "BATTERIES_IN",
//     type: "number",
//     min: 0,
//     max: 20,
//     required: true,
//   },
//   {
//     name: "BATTERIES_OUT",
//     type: "number",
//     min: 0,
//     max: 20,
//     required: true,
//   },
//   {
//     name: "LITHIUM_CELLS",
//     type: "select",
//     options: { M: "Multiple", S: "Single" },
//     required: true,
//   },
//   {
//     name: "LITHIUM_CONTENT",
//     type: "number",
//     min: 0.001,
//     max: 20,
//     step: 0.001,
//     required: true,
//   },
//   {
//     name: "WATT_HOURS",
//     type: "number",
//     min: 0.001,
//     max: 500,
//     step: 0.001,
//     required: true,
//   },
//   {
//     name: "BATTERY_WEIGHT",
//     type: "number",
//     min: 0.001,
//     max: 20,
//     step: 0.001,
//     required: true,
//   },
// ];

// const forms = {};

export { complianceInputs, batteryTypes };
