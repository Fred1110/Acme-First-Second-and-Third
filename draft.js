function addName(arr){
  let divFirst = document.querySelector('#first');
  let divSecond = document.querySelector('#second');
  let divThird = document.querySelector('#third');
  let li = document.createElement("li");
  for (let i = 0; i < arr.length; i++){
    if (arr[i].slot === 'first'){
      li.setAttribute("id", `${arr[i].id}`)
      li.appendChild(document.createTextNode(`${arr[i].name}`))
      divFirst.appendChild(li);

    }else if (arr[i].slot === 'second'){
      li.setAttribute("id", `${arr[i].id}`)
      li.appendChild(document.createTextNode(`${arr[i].name}`))
      divSecond.appendChild(li)

    }else if(arr[i].slot === 'third'){
      li.setAttribute("id", `${arr[i].id}`)
      li.appendChild(document.createTextNode(`${arr[i].name}`))
      divThird.appendChild(li);

    }
  }
}
addName(users);
function move(srcID, desID){
  let src = document.querySelector(srcID);
  let des = document.querySelector(desID);
  for (let i = 0; i < src.options.length; i++){
    if(src.options[i].selected){
      let person = src.options[i];
      let newPerson = document.createElement(`${person}`);
      newPerson.value = person.value;
      newPerson.text = person.text;
      newPerson.selected = true;
      des.add(newPerson, null);
      src.remove(i, null)
    }
  }
};

