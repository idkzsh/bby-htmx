const headers = {
    "Vendor Part Number": "Maximum 20 characters",
    "Description (Short)": "Maximum 20 characters",
    "Description (Long)": "Maximum 40 characters",
    "UPC": "12 or 13 digits only",
    "Secondary UPC": "12 or 13 digits only",
    "Brand": "Maximum 20 characters",
    "Model": "Maximum 20 characters",
    "Manufacturer": "Maximum 20 characters",
    "Unit Cost": "Must be greater than 0",
    "Retail Price": "Must be greater than 0",
    "Width (Boxed)": "Must be greater than 0",
    "Height (Boxed)": "Must be greater than 0",
    "Length (Boxed)": "Must be greater than 0",
    "Weight (Boxed)": "Must be greater than 0",
    "Width (Unboxed)": "Must be greater than 0",
    "Height (Unboxed)": "Must be greater than 0",
    "Length (Unboxed)": "Must be greater than 0",
    "Weight (Unboxed)": "Must be greater than 0",
    "Casepack": "Must be greater than 0",
    "Innerpack": "Must be greater than 0. Cannot exceed casepack",
    "Unit Cost For Additional Supplier(1)": "(Optional) Must be greater than 0",
    "Case Pack Qty For Additional Supplier(1)":
      "(Optional) Must be greater than 0",
    "Inner Pack Qty For Additional Supplier(1)":
      "(Optional) Must be greater than 0",
    "Unit Cost For Additional Supplier(2)": "(Optional) Must be greater than 0",
    "Case Pack Qty For Additional Supplier(2)":
      "(Optional) Must be greater than 0",
    "Inner Pack Qty For Additional Supplier(2)":
      "(Optional) Must be greater than 0",
    "French Compliant": "Choose Yes or No",
    "Shippable To Quebec": "If french compliant, leave blank. Choose Yes or No",
    "Energy Star": "(Optional) Choose Yes or No",
    "Refurbished": "(Required) Choose Yes or No",
    "Consignment": "(Required) Choose Yes or No",
    "Software Platform": "(Optional) Select from list of values",
    "Street Date": "(Optional) Choose a future street date",
    "Product Warranty Days": "(Required) Select from list of values",
    "Product Warranty Coverage": "(Required) Select from list of values",
    "Extended Parts Warranty": "(Optional) Max 255 characters",
    "Return Restrictions": "(Optional) Max 255 characters",
    "Expiration Date/Lot Number": "(Optional) Select from list of values",
    "Shelf Life": "(Optional) Select from list of values",
    "Data Flag": "(Required) Select Yes or No",
    "Dangerous Product/Material": "(Required) Select Yes or No",
  };

  const inputs = [
    {
      name: "VPN",
      type: "text",
      minLen: 1,
      maxLen: 20,
      required: true
    },
    {
      name: "SHORT_DESC",
      type: "text",
      minLen: 1,
      maxLen: 20,
      required: true
    },
    {
      name: "SKU_DESC",
      type: "text",
      minLen: 1,
      maxLen: 40,
      required: true
    },
    {
      name: "UPC",
      type: "text",
      minLen: 12,
      maxLen: 13,
      required: true
    },
    {
      name: "SECONDARY_UPC",
      type: "text",
      minLen: 12,
      maxLen: 13,
      required: false
    },
    {
      name: "BRAND_NAME",
      type: "text",
      minLen: 1,
      maxLen: 20,
      required: true
    },
    {
      name: "MODEL_NO",
      type: "text",
      minLen: 1,
      maxLen: 20,
      required: true
    },
    {
      name: "MANUFACTURER",
      type: "text",
      minLen: 1,
      maxLen: 20,
      required: true
    },
    {
      name: "UNIT_COST",
      type: "number",
      min: 0.01,
      max: 100000,
      step: 0.01,
      required: true
    },
    {
      name: "ORIGINAL_RETAIL",
      type: "number",
      min: 0.01,
      max: 100000,
      step: 0.01,
      required: true
    },
    {
      name: "SHIP_CARTON_WID",
      type: "number",
      min: 0.01,
      max: 100,
      step: 0.01,
      required: true
    },
    {
      name: "SHIP_CARTON_HT",
      type: "number",
      min: 0.01,
      max: 100,
      step: 0.01,
      required: true
    },
    {
      name: "SHIP_CARTON_LEN",
      type: "number",
      min: 0.01,
      max: 100,
      step: 0.01,
      required: true
    },
    {
      name: "SHIP_CARTON_WT",
      type: "number",
      min: 0.01,
      max: 100,
      step: 0.01,
      required: true
    },
    {
      name: "S_UNIT_WIDTH",
      type: "number",
      min: 0.01,
      max: 100,
      step: 0.01,
      required: true
    },
    {
      name: "S_UNIT_HEIGHT",
      type: "number",
      min: 0.01,
      max: 100,
      step: 0.01,
      required: true
    },
    {
      name: "S_UNIT_LENGTH",
      type: "number",
      min: 0.01,
      max: 100,
      step: 0.01,
      required: true
    },
    {
      name: "S_UNIT_WEIGHT",
      type: "number",
      min: 0.01,
      max: 100,
      step: 0.01,
      required: true
    },
    {
      name: "SUPP_PACK_SIZE",
      type: "number",
      min: 1,
      max: 500,
      step: 1,
      required: true
    },
    {
      name: "INNERPACK_SIZE",
      type: "number",
      min: 1,
      max: 500,
      step: 1,
      required: true
    },
  ]

  export {headers, inputs};