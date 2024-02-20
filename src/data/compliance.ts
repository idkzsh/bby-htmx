const headers = {
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
  MSDS: "Upload MSDS file here",
};

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
  };

const inputs = [
  {
    name: "BATTERY_TYPE",
    type: "select",
    options:   {
        "Alkaline Coin/Button": "Alkaline Coin/Button",
        "Lead-Acid": "Lead-Acid",
        "Lithium Carbon Flouride (Li-CFx)": "Lithium Carbon Flouride (Li-CFx)",
        "Lithium Coin/Button": "Lithium Coin/Button",
        "Lithium Iron Disulfide (LiFe2)": "Lithium Iron Disulfide (LiFe2)",
        "Lithium iron phosphate (LiFePO4)": "Lithium iron phosphate (LiFePO4)",
        "Lithium-cobalt (LiCoO2)": "Lithium-cobalt (LiCoO2)",
        "lithium-ion": "lithium-ion",
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
      },
    required: true,
  },
  {
    name: "SIZE_FORMAT",
    type: "select",
    options:   {
        "Alkaline Coin/Button": "Alkaline Coin/Button",
        "Lead-Acid": "Lead-Acid",
        "Lithium Carbon Flouride (Li-CFx)": "Lithium Carbon Flouride (Li-CFx)",
        "Lithium Coin/Button": "Lithium Coin/Button",
        "Lithium Iron Disulfide (LiFe2)": "Lithium Iron Disulfide (LiFe2)",
        "Lithium iron phosphate (LiFePO4)": "Lithium iron phosphate (LiFePO4)",
        "Lithium-cobalt (LiCoO2)": "Lithium-cobalt (LiCoO2)",
        "lithium-ion": "lithium-ion",
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
      },
    required: true,
  },
];




const unCodes = {
  "lithium-ion": ["3480", "3481", "3171"],
  "lithium-polymer": ["3480", "3481", "3171"],
  "lithium-manganese": ["3090", "3091"],
  "lithium-carbon-fluoride": ["3090", "3091"],
};

export { headers, inputs, formats, unCodes };
