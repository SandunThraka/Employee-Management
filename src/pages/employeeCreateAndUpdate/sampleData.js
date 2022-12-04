const object = {
  clientId: 1,
  orgId: 1,
  userId: 1,
  bpartnerId: 0,
  isActive: true,
  firstName: "Kamal",
  lastName: "Silva",
  titleId: 5,
  genderId: 1,
  nicNo: "801234567V",
  dateOfBirth: "1980-05-10",
  contactNumber: "0777456512",
  email: "kamal@gmail.com",
  designationId: 4,
  nationalityId: 1,
  countryId: 3,
  address: "18, Galle Road, Colombo 5",
  cityId: 6,
  profilePicture: "", //Base64 file
  isProfilePictureChange: true,
  profilePictureNameExtension: ".png",
  description: "Test employee",
  remark: "Any Comment",
};
const organization = {
  hasError: false,
  errorMsg: "",
  activeClientList: [
    {
      clientId: 1,
      name: "Client 1",
    },
  ],
  activeOrgList: [
    {
      orgId: 1,
      name: "Org1",
    },
    {
      orgId: 2,
      name: "Org2",
    },
  ],
  allEmployeeList: [
    {
      bpartnerId: 6,
      clientId: 1,
      orgId: 1,
      isActive: true,
      created: 1657024703000,
      createdBy: 1,
      updated: 1657038606000,
      updatedBy: 1,
      firstName: "Amal",
      lastName: "Silva",
      titleId: 5,
      genderId: 1,
      nicNo: "801234514V",
      dateOfBirth: 326851200000,
      contactNumberId: 5,
      contactNumber: "0714546644",
      email: "amal@gmail.com",
      departmentId: 2,
      designationId: 4,
      nationalityId: 1,
      countryId: 3,
      addressId: 5,
      address: "18, Galle Road, Colombo 12",
      cityId: 6,
      photoId: 5,
      profilePicturePath: "C:\\EmployeeProfilePicture\\profilePicture.png",
      description: "Test employee",
      remark: "Updated",
      titleName: "Doc",
      genderName: "Male",
      departmentName: "Department B",
      designationName: "Designation A",

      nationalityName: "Sri Lankan",
      countryName: "Sri Lanka",
      cityName: "Awissawella",
    },
    {
      bpartnerId: 7,
      clientId: 1,
      orgId: 1,
      isActive: false,
      created: 1657035060000,
      createdBy: 1,
      updated: 1657038610000,
      updatedBy: 1,
      firstName: "Kamal",
      lastName: "Silva",
      titleId: 5,
      genderId: 1,
      nicNo: "801234584V",
      dateOfBirth: 326851200000,
      contactNumberId: 6,
      contactNumber: "0704545454",
      email: "amal@gmail.com",
      departmentId: 2,
      designationId: 4,
      nationalityId: 1,
      countryId: 3,
      addressId: 6,
      address: "",
      cityId: 6,
      photoId: 6,
      profilePicturePath: "C:\\EmployeeProfilePicture\\profilePicture.png",
      description: "Test employee",
      remark: "Updated",
      titleName: "Doc",
      genderName: "Male",
      departmentName: "Department B",
      designationName: "Designation A",
      nationalityName: "Sri Lankan",
      countryName: "Sri Lanka",
      cityName: "Awissawella",
    },
  ],
};
const allCity = [
  {
    cityId: 1,
    name: "Galgamuwa",
  },
  {
    cityId: 2,
    name: "Narammala",
  },
];
const allCountry = [
  {
    countryId: 3,
    name: "Sri Lanka",
  },
  {
    countryId: 4,
    name: "India",
  },
  {
    countryId: 6,
    name: "United Kindom",
  },
  {
    countryId: 8,
    name: "Australia",
  },
];
const allNationality = [
  {
    nationalityId: 1,
    name: "Sri Lankan",
  },
  {
    nationalityId: 2,
    name: "Indian",
  },
  {
    nationalityId: 3,
    name: "Australian",
  },
];
const allDesignation = [
  {
    designationId: 1,
    name: "Engineer",
  },
  {
    designationId: 2,
    name: "Director of marketing",
  },
  {
    designationId: 3,
    name: "Marketing manager",
  },
  {
    designationId: 4,
    name: "Manager",
  },
];

const allDepartment = [
  {
    departmentId: 1,
    name: "Human resources",
  },
  {
    departmentId: 2,
    name: "Marketing and sales",
  },
  {
    departmentId: 4,
    name: "Research and development",
  },
];
const allGender = [
  {
    genderId: 1,
    name: "Male",
  },
  {
    genderId: 2,
    name: "Female",
  },
];
const allTitle = [
  {
    titleId: 1,
    name: "Mr",
  },
  {
    titleId: 2,
    name: "Miss",
  },
];
export {
  object,
  organization,
  allCity,
  allCountry,
  allNationality,
  allDepartment,
  allDesignation,
  allGender,
  allTitle,
};
