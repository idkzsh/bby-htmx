interface BatteryTypes {
  [key: string]: string[]; // Index signature allowing any string key with a value of string array
}

const headers = {
  UPC: "",
  "SKU Title (Long)": "",
  "Model Number": "",
  "Mercury Section": "",
  "CCFL Qty (1)": "0",
  "Mercury/Bulb Weight (mg) (1)": "0.0000",
  "CCFL Qty (2)": "0",
  "Mercury/Bulb Weight (mg) (2)": "0.0000",
  "CCFL Qty (3)": "0",
  "Mercury/Bulb Weight (mg) (3)": "0.0000",
  "Other Components Qty (1)": "0",
  "Mercury/Component Weight (mg) (1)": "0.0000",
  "Other Components Qty (2)": "0",
  "Mercury/Component Weight (mg) (2)": "0.0000",
  "Other Components Qty (3)": "0",
  "Mercury/Component Weight (mg) (3)": "0.0000",
  "Packaging Section": "",
  "Printed Magazines, Catalogs, Brochures, etc": "0.0000",
  "Newsprint (Inserts and Circulars)": "0.0000",
  "Finished goods sold as Paper for General Use: Printing Paper, Craft Paper, Notebooks, Journals ":
    "0.0000",
  "Finished Goods sold as Posters, Calendars and Greeting Cards": "0.0000",
  "Other Printed Material: Manuals, Warranties, etc": "0.0000",
  "Corrugated Cardboard": "0.0000",
  "Box Board": "0.0000",
  "Paper Laminates with foil or plastic": "0.0000",
  "Gable Top Containers": "0.0000",
  "Aseptic Containers": "0.0000",
  "Kraft Paper- Non-Laminated": "0.0000",
  "LDPE/HDPE Plastic Film": "0.0000",
  "Expanded Polystyrene, Styrofoam- Other": "0.0000",
  "Non- Expanded Polystyrene, Styrofoam- Other": "0.0000",
  "PET Thermoform or molded Container/ Packaging": "0.0000",
  "PET Bottles & Jars (only)": "0.0000",
  "HDPE Bottles, Jars & Jugs (only)": "0.0000",
  "PLA, PHA, PHB Container/ Packaging- Beverage": "0.0000",
  "PLA, PHA, PHB Container/ Packaging- Non- Beverage": "0.0000",
  "PLA, PHA, PHB Plastic Film": "0.0000",
  "Plastic Laminates with metallized foil, wax or paper: Bubble wrap, tapes, etc": "0.0000",
  "PP (Polypropylene)": "0.0000",
  "PVC (Polyvinyl Chloride)": "0.0000",
  "Other Rigid Plastic not listed above": "0.0000",
  "Aluminum/ Steel Containers": "0.0000",
  "Other Aluminum & Foil Packaging": "0.0000",
  "Steel Aerosols": "0.0000",
  "Other Steel Container": "0.0000",
  "Clear Glass Container": "0.0000",
  "Colored Glass Container": "0.0000",
  "Battery Section" : "",
  "1 - Battery Type": "Select from list of values",
  "1 - Size/Format": "Select from list of values",
  "1 - *Qty (total no. of batteries for this type)": "Enter a number",
  "1 - HAZMAT UN# (4 Digits)": "Select from list of values",
  "1 - # of Batteries in Product (inside)": "Enter a number",
  "1 - # of Batteries out of Product (outside)": "Enter a number",
  "1- Cells in Lithium (single or multiple)": "Select from list of values",
  "1 - # Lithium Content (Primary) (grams)": "Required for lithium metal batteries",
  "1 - Watt Hours": "Required for lithium ion batteries",
  "1 - Individual Li Battery Net Weight (kg)": "Enter a number",
  "1 - MSDS": "Upload MSDS file here",
  "1 - Test Summary": "Upload Test Summary file here",
  
  "2 - Battery Type": "Select from list of values",
  "2 - Size/Format": "Select from list of values",
  "2 - *Qty (total no. of batteries for this type)": "Enter a number",
  "2 - HAZMAT UN# (4 Digits)": "Select from list of values",
  "2 - # of Batteries in Product (inside)": "Enter a number",
  "2 - # of Batteries out of Product (outside)": "Enter a number",
  "2- Cells in Lithium (single or multiple)": "Select from list of values",
  "2 - # Lithium Content (Primary) (grams)": "Required for lithium metal batteries",
  "2 - Watt Hours": "Required for lithium ion batteries",
  "2 - Individual Li Battery Net Weight (kg)": "Enter a number",
  "2 - MSDS": "Upload MSDS file here",
  "2 - Test Summary": "Upload Test Summary file here",

  "3 - Battery Type": "Select from list of values",
  "3 - Size/Format": "Select from list of values",
  "3 - *Qty (total no. of batteries for this type)": "Enter a number",
  "3 - HAZMAT UN# (4 Digits)": "Select from list of values",
  "3 - # of Batteries in Product (inside)": "Enter a number",
  "3 - # of Batteries out of Product (outside)": "Enter a number",
  "3- Cells in Lithium (single or multiple)": "Select from list of values",
  "3 - # Lithium Content (Primary) (grams)": "Required for lithium metal batteries",
  "3 - Watt Hours": "Required for lithium ion batteries",
  "3 - Individual Li Battery Net Weight (kg)": "Enter a number",
  "3 - MSDS": "Upload MSDS file here",
  "3 - Test Summary": "Upload Test Summary file here",

  "4 - Battery Type": "Select from list of values",
  "4 - Size/Format": "Select from list of values",
  "4 - *Qty (total no. of batteries for this type)": "Enter a number",
  "4 - HAZMAT UN# (4 Digits)": "Select from list of values",
  "4 - # of Batteries in Product (inside)": "Enter a number",
  "4 - # of Batteries out of Product (outside)": "Enter a number",
  "4- Cells in Lithium (single or multiple)": "Select from list of values",
  "4 - # Lithium Content (Primary) (grams)": "Required for lithium metal batteries",
  "4 - Watt Hours": "Required for lithium ion batteries",
  "4 - Individual Li Battery Net Weight (kg)": "Enter a number",
  "4 - MSDS": "Upload MSDS file here",
  "4 - Test Summary": "Upload Test Summary file here",

  "Limited Quantities Section" : "",
  "1 - UN# (4 digits)": "0000",
  "1 - Qty (Liters for Aerosol, Gas or Liquid/KG for Solid)": "0.000",
  "1 - SDS": "PDF",
  "2 - UN# (4 digits)": "0000",
  "2 - Qty (Liters for Aerosol, Gas or Liquid/KG for Solid)": "0.000",
  "2 - SDS": "PDF",
  "3 - UN# (4 digits)": "0000",
  "3 - Qty (Liters for Aerosol, Gas or Liquid/KG for Solid)": "0.000",
  "3 - SDS": "PDF",
  "4 - UN# (4 digits)": "0000",
  "4 - Qty (Liters for Aerosol, Gas or Liquid/KG for Solid)": "0.000",
  "4 - SDS": "PDF",
  "5 - UN# (4 digits)": "0000",
  "5 - Qty (Liters for Aerosol, Gas or Liquid/KG for Solid)": "0.000",
  "5 - SDS": "PDF",
};

const batteryTypes = {
  "Alkaline Coin/Button": "Alkaline Coin/Button",
  "Lead-Acid": "Lead-Acid",
  "Lithium Carbon Flouride (Li-CFx)": "Lithium Carbon Flouride (Li-CFx)",
  "Lithium Coin/Button": "Lithium Coin/Button",
  "Lithium Iron Disulfide (LiFe2)": "Lithium Iron Disulfide (LiFe2)",
  "Lithium iron phosphate (LiFePO4)": "Lithium iron phosphate (LiFePO4)",
  "Lithium-cobalt (LiCoO2)": "Lithium-cobalt (LiCoO2)",
  "Lithium-Ion": "Lithium-Ion",
  "Lithium-manganese(LiMn204)": "Lithium-manganese(LiMn204)",
  "Lithium Manganese Dioxide(LiMnO2)": "Lithium Manganese Dioxide(LiMnO2)",
  "Lithium-Polymer": "Lithium-Polymer",
  "Manganese Titanium Lithium": "Manganese Titanium Lithium",
  "Nickel-Cadmium (NiCd)": "Nickel-Cadmium (NiCd)",
  "Nickel-Metal Hydride (NiMH)": "Nickel-Metal Hydride (NiMH)",
  "Silver Oxide Coin/Button": "Silver Oxide Coin/Button",
  "Zinc Air Coin/Button": "Zinc Air Coin/Button",
  "Zinc Carbon": "Zinc Carbon",
  Other: "Other",
  "Alkaline Battery": "Alkaline Battery",
};

const formats: BatteryTypes = {
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

const unCodes: BatteryTypes = {
  "Lithium-Ion": ["3480", "3481", "3171"],
  "Lithium-Polymer": ["3480", "3481", "3171"],
  "Lithium-manganese(LiMn204)": ["3090", "3091"],
  "Lithium-Carbon-Fluoride": ["3090", "3091"],
};

const inputs = [
  {
    name: "MSDS",
    type: "select",
    options: {},
    required: true,
  },
  {
    name: "BATTERY_TYPE",
    type: "select",
    options: batteryTypes,
    required: true,
  },
  {
    name: "SIZE_FORMAT",
    type: "select",
    options: formats,
    required: true,
  },
  {
    name: "QUANTITY",
    type: "number",
    min: 1,
    max: 20,
    required: true,
  },
  {
    name: "HAZMAT_ID",
    type: "select",
    options: unCodes,
    required: true,
  },
  {
    name: "BATTERIES_IN",
    type: "number",
    min: 0,
    max: 20,
    required: true,
  },
  {
    name: "BATTERIES_OUT",
    type: "number",
    min: 0,
    max: 20,
    required: true,
  },
  {
    name: "LITHIUM_CELLS",
    type: "select",
    options: { M: "Multiple", S: "Single" },
    required: true,
  },
  {
    name: "LITHIUM_CONTENT",
    type: "number",
    min: 0.001,
    max: 20,
    step: 0.001,
    required: true,
  },
  {
    name: "WATT_HOURS",
    type: "number",
    min: 0.001,
    max: 500,
    step: 0.001,
    required: true,
  },
  {
    name: "BATTERY_WEIGHT",
    type: "number",
    min: 0.001,
    max: 20,
    step: 0.001,
    required: true,
  },
];

const forms = {};

export { headers, inputs, formats, unCodes, batteryTypes, forms };
