 const icons = [
    {
      name: "cat",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "crow",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dog",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dove",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dragon",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "horse",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "hippo",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "fish",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "carrot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "apple-alt",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "lemon",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "pepper-hot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "user-astronaut",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-graduate",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-ninja",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-secret",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
  ];


  function getColors(){
    return ['blue', 'orange', 'purple', 'green', 'lightblue'];
}


  function print(array){
    const container = $('.icons');
    container.html('');

    array.forEach(element => {
        let color;
        
        const iconHtml = `
        <div>
            <i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i>
            <div class="title">${element.name.toUpperCase()}</div>
        </div> 
    `;
    container.append(iconHtml);
    });

   // console.log(array)
}


function getTypes(array) {
    const types = [];
    array.forEach((element) => {
        if(!types.includes(element.type)) {
            types.push(element.type);
        }
    });
    return types;
  }

  function colorIcons(array, types, colors) {
    array.forEach(element => {
         const iconType = element.type;
         
         const indexType = types.indexOf(iconType);
        
         const color = colors[indexType];
         element.color = color;
     });
     return array;
}

function addOptions(types) {
    const select = $('#type');
    types.forEach(element => {
        const optionHtml = `
            <option value="${element}">${element}</option> 
        `;
        select.append(optionHtml);
    });
}

function filter(array, key) {
    const filterArray = array.filter(element =>{
        if(element.type == key) {
            return key;
        }
    })
    return filterArray;
}



  function init(){
    
    const colors = getColors();
        //console.log(colors);

   const types = getTypes(icons);
        console.log(types);

   const coloredIcons = colorIcons(icons, types, colors);
        console.log(coloredIcons);

    
    print(icons);
    addOptions(types);



    const select = $('#type');
  select.change(function(event) {
    const currentType = $(this).val();
    if (types.includes(currentType)) {
        // filtriamo l'array in base al tipo
        const filteredIcons = filter(coloredIcons, currentType);
        console.log(filteredIcons);
        // mostrare i valori filtrati
        print(filteredIcons);
    } else {
        print(coloredIcons);
    }
  });
}
  $(init)