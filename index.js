savebtn = document.getElementById('save_btn')
savebtn.addEventListener('click', (e) => {
    let addtxt = document.getElementById('text')
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addtxt.value)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addtxt.value = ''
    shownotes()
})
let shownotes = () => {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = ''
    notesObj.forEach((element, index) => {
        html += `
         <div class="card-body">
         <h5 class="card-title">note${index + 1}</h5>
         <p class="card-text">${element}</p>
         <a id=${index} onclick="deletnote(this.id)" class="btn btn-danger" >Delete note</a>
         </div>
         </div>
     
        `
    })
    let notecard=document.getElementById('notes')
    if(notesObj.length!=0){
        notecard.innerHTML=html
    }
    else{
        notecard.innerHTML="nothing to show right now please add note and save it"
    }
}

let deletnote=(index)=>{
    console.log(`I am deleting ${index}`)
    let notes=localStorage.getItem('notes')
    if(notes==null){
        notesObj=[]
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.splice(index,1)
    localStorage.setItem('notes',JSON.stringify(notesObj))
    shownotes()
}