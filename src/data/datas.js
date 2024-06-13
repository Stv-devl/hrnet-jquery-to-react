const dataDepartment = [
  "Sale",
  "Marketing",
  "Engineering",
  "Human resources",
  "Legal",
];

const americanStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "Californie",
  "Caroline du Nord",
  "Caroline du Sud",
  "Colorado",
  "Connecticut",
  "Dakota du Nord",
  "Dakota du Sud",
  "Delaware",
  "Floride",
  "Géorgie",
  "Hawaï",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiane",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "Nouveau-Mexique",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvanie",
  "Rhode Island",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginie",
  "Virginie-Occidentale",
  "Washington",
  "Wisconsin",
  "Wyoming",
];

const initialState = {
  id: "",
  firstname: "",
  lastname: "",
  birthday: "",
  street: "",
  city: "",
  zip_code: "",
  state: "",
  start_date: "",
  department: "",
};

const legend = [
  { name: "firstname", label: "First name" },
  { name: "lastname", label: "Last Name" },
  { name: "start_date", label: "Start date" },
  { name: "department", label: "Department" },
  { name: "birthday", label: "Date of Birth" },
  { name: "street", label: "Street" },
  { name: "city", label: "City" },
  { name: "state", label: "State" },
  { name: "zip_code", label: "Zip Code" },
];

export const datas = {
  department: dataDepartment,
  state: americanStates,
  initialState: initialState,
  legend: legend,
};