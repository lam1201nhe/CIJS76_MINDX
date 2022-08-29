let data = [
  {
    name: "Alice",
    phone: "(816)-403-5456",
  },
  {
    name: "Daniel",
    phone: "(816)-403-5456",
  },
  {
    name: "Bob",
    phone: "(572)-566-2397",
  },
  {
    name: "Cris",
    phone: "(864)-309-4841",
  },
];

const list_user = document.querySelector(".list-user ul");
const forms = document.forms;

const searchUser = (data) => {
  const name = document.getElementById("search");
  let needName = name.value;
    

};

const loadData = (data) => {
  sortAlphabet(data);
  data.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item.name}</span> <span>${item.phone}</span>`;
    list_user.appendChild(li);
  });
};

const sortAlphabet = (data) => {
  for (let i = 0; i < data.length; i++) {
    //sort the name followed by the first letter of name
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].name > data[j].name) {
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
  return data;
};

loadData(data);

const deleteEleSame = (data) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].phone === data[j].phone) {
        data.splice(j, 1);
      }
    }
  }
  return data;
};

const deleteUser = () => {
  let ul = document.querySelector(".list-user ul");
  let li = ul.querySelectorAll("li");
  for (let i = 0; i < li.length; i++) {
    li[i].remove();
  }
};

const deleteEle = document.getElementById("delete");
deleteEle.addEventListener("click", (e) => {
  e.preventDefault();
  deleteUser();
  newData = deleteEleSame(data);
  loadData(newData);
});

const addUser = (data) => {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let newUser = {
        name: name,
        phone: phone
    };
    data.push(newUser);
    deleteUser();
    loadData(data);
}

const addEle = document.getElementById("add");
addEle.addEventListener("click", (e) => {
    e.preventDefault();
    addUser(data);
});



