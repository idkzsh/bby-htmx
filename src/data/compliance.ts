interface BatteryTypes {
  [key: string]: string[]; // Index signature allowing any string key with a value of string array
}

const headers = {
  "Short Title": "",
  UPC: "",
  MSDS: "Upload MSDS file here",
  "Battery Type": "Select from list of values",
  "Size/Format": "Select from list of values",
  "*Qty (total no. of batteries for this type)": "Enter a number",
  "HAZMAT UN# (4 Digits)": "Select from list of values",
  "# of Batteries in Product (inside)": "Enter a number",
  "# of Batteries out of Product (outside)": "Enter a number",
  "Cells in Lithium (single or multiple)": "Select from list of values",
  "# Lithium Content (Primary) (grams)": "Required for lithium metal batteries",
  "Watt Hours": "Required for lithium ion batteries",
  "Individual Li Battery Net Weight (kg)": "Enter a number",
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
