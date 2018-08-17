document.addEventListener("DOMContentLoaded",function(){
    //let array = [];
    const H1 = document.createElement('h1');
    document.body.appendChild(H1)
    H1.textContent= "Todo App";
    
    const txtarea = document.createElement('input');
    document.body.appendChild(txtarea);
    txtarea.placeholder ='What do you need to do ?';
    
    //txtarea.addEventListener()

    const UL = document.createElement('ul');
    document.body.appendChild(UL);
    
    function DeleteButton(LI){
        const delt = document.createElement('button')
        LI.appendChild(delt)
        delt.setAttribute('id','add_todo')
        delt.innerText = 'X';
        delt.style.float = 'right';
        delt.addEventListener('click',(ev)=>{
          LI.remove();
        })
    }

    function EditButton(LI){
        var text_cnt = LI.textContent;
        const editBtn = document.createElement('button')
        LI.appendChild(editBtn)
        editBtn.setAttribute('id','add_todo')
        editBtn.innerText = 'EDIT';
        editBtn.style.float = 'right';
        editBtn.addEventListener('click',(ev)=>{
        const txt = document.createElement('input');
        LI.appendChild(txt);
        txt.value = text_cnt;
        txt.addEventListener('keydown',(ev)=>{
            if(ev.keyCode == 13){
            LI.textContent = txt.value;
            EditButton(LI);
            DeleteButton(LI);
            } 
        })
        })
    }  
    
    
    const addtodo = document.createElement('button');
    document.body.appendChild(addtodo)
    addtodo.setAttribute('id','add_todo')
    addtodo.innerText = ' ADD TODO';
    addtodo.addEventListener('click',(ev)=>{
        const LI = document.createElement('li');
        LI.textContent = txtarea.value;
        UL.appendChild(LI);
        txtarea.value = '';
        EditButton(LI);
        DeleteButton(LI);
        
    })


    txtarea.addEventListener('keydown',(ev)=>{
        if(ev.keyCode == 13){
        const LI = document.createElement('li');
        LI.textContent = txtarea.value;
        UL.appendChild(LI);
        txtarea.value = '';
        EditButton(LI);
        DeleteButton(LI);
        }
    })
})
