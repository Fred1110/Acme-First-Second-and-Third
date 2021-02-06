const slots = ['first', 'second', 'third']
    const users = [
      {id:1, name: 'moe', slot:'first'},
      {id:2, name: 'larry', slot:'second'},
      {id:3, name: 'curly', slot:'third'},
      {id:4, name: 'lucy', slot:'third', selected: true},
    ];
    console.log(slots);

    //add name to listbox
    function addName(obj){

      let li = document.createElement("li");
      for (let i = 0; i < slots.length; i++){
        let divSelect = document.querySelector(`#${slots[i]}`);
        if (obj.slot === slots[i]){
          li.setAttribute("id", `name${obj.id}`)
          li.appendChild(document.createTextNode(`${obj.name}`))
          divSelect.appendChild(li);
        }
      }

  }
    users.forEach(obj => addName(obj));

    //add name event listener
    function addEvent(elem){
        document.querySelector(`#name${elem.id}`).addEventListener('click', ev =>{
          if(ev.target.getAttribute('selected') === 'true'){
            ev.target.setAttribute('selected', 'false')
            ev.target.setAttribute('class', ' ')
          }else{
            ev.target.setAttribute('selected', 'true')
            ev.target.setAttribute('class', 'selected')
          };
        })
    };
    users.forEach(elem => addEvent(elem));

    //add move event listener
    //got problem in this event moving part

    const arr1 = document.querySelector('#first')
    const arr2 = document.querySelector('#second')
    const arr3 = document.querySelector('third')
    const moveRight = document.querySelector('#move-right')
    const moveLeft = document.querySelector('#move-left')




    // moveRight.addEventListener('click', (ev)=>{
    //   function right
    // })











    moveRight.addEventListener('click', (ev) =>{
      ev.preventDefault();
      let src= arr1;
      let des = arr2;
      for(let i = 6; i < src.childNodes.length; i++){

        if(src.childNodes[i].class = "selected"){
          des.appendChild(src.childNodes[i]);

        }
      }
    });







