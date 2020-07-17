const data = [
  {
    ID: "",
    UID: "E00000001",
    name: "Niall Paterson",
    email: "niall.paterson@email.com",
    password: "thisismypassword",
    img:
      "https://i0.wp.com/wordsandleaves.com/wp-content/uploads/2016/04/wally.jpg?resize=630%2C420&ssl=1",
    role: 1, // employee (1), agent (2), superagent (3)
    department: null, // null for employees
    roleTextSnippet: "Person who hides",
  },

  {
    ID: "",
    UID: "E00000002",
    name: "David Wildman",
    email: "david.wildman@nology.io",
    password: "youwillneverfindout",
    img: "https://www.placecage.com/c/200/300",
    role: 1, // employee (1), agent (2), superagent (3)
    department: null, // null for employees
    roleTextSnippet: "Marketing",
  },

  {
    ID: "",
    UID: "S00000001",
    name: "Nick Smith",
    email: "nick.smith@email.com",
    password: "deepestdarkestsecret",
    img:
      "https://www.thesun.co.uk/wp-content/uploads/2019/12/NINTCHDBPICT000549010194.jpg?strip=all&w=960",
    role: 3, // employee (1), agent (2), superagent (3)
    department: "HR Administration", // null for employees
    roleTextSnippet: "HR Manager",
  },

  {
    ID: "",
    UID: "A00000001",
    name: "James Bond",
    email: "james.bond@email.com",
    password: "ohnoq",
    img:
      "https://www.sadanduseless.com/wp-content/uploads/2019/05/funny-corgi-butts1.jpg",
    role: 2, // employee (1), agent (2), superagent (3)
    department: "Payroll", // null for employees
    roleTextSnippet: "Payroll HR Agent",
  },
];

export default data;
