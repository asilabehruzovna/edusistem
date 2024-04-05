let Table = document.getElementById('customers')
let Fio = document.getElementById('fio')
let Course = document.getElementById('course')
let Time = document.getElementById('time')
let EduSystem = document.getElementById('edusystem')
let Loading = document.getElementById('center')
Loading.style.display = 'none'

let DYMMY_DATA = [
    {id:1,fio:"Jamshid Zayniyev",course:'IT',time:'14:00'},
    {id:2,fio:"Suxrob Rafiqov",course:'English',time:'16:00'},
    {id:3,fio:"Asila Tursunova",course:'Deustech',time:'10:12'},
    {id:4,fio:"Mahmud Jo'rayev",course:'Russian',time:'18:00'}
]



// chiqarish
function GetStudents(data){

    //loading
    EduSystem.style.display = 'none'
    Loading.style.display = 'flex'
    setTimeout(()=>{
        EduSystem.style.display = 'block'
        Loading.style.display = 'none'
    },1000)

    Table.innerHTML = `<tr>
      <th>Id</th>
      <th>F.I.O</th>
      <th>Course</th>
      <th>Time</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>`

    data.forEach((student,key)=>{
        Table.innerHTML = Table.innerHTML + 
        `<tr>
            <td>${key+1}</td>
            <td>${student.fio}</td>
            <td>${student.course}</td>
            <td>${student.time}</td>
            <td><button id="edit" onclick="Edit(${student.id},${key})">Edit</button></td>
            <td><button onclick="DeleteStudent(${student.id})">Delete</button></td>
        </tr>`
    })

}

GetStudents(DYMMY_DATA)




// delete

function DeleteStudent(data){
    //loading
    EduSystem.style.display = 'none'
    Loading.style.display = 'flex'
    setTimeout(()=>{
        EduSystem.style.display = 'block'
        Loading.style.display = 'none'
    },1000)

   let NEW_DATA =  DYMMY_DATA.filter(c=> c.id !== data);
   DYMMY_DATA = NEW_DATA;
   GetStudents(DYMMY_DATA);
  
}





// add student
let i = 5;
function AddStudent(){

    //loading
    EduSystem.style.display = 'none'
    Loading.style.display = 'flex'
    setTimeout(()=>{
        EduSystem.style.display = 'block'
        Loading.style.display = 'none'
    },1000)


    if(edit){
        if(Fio.value.trim() === '' || Time.value.trim() === ''){
            alert("Fio va vaqtni kirititng")
        }
        else{
            DYMMY_DATA[ID].fio = Fio.value;
            DYMMY_DATA[ID].course = Course.value;
            DYMMY_DATA[ID].time = Time.value;
            Fio.value = ''
            Time.value = ''
            GetStudents(DYMMY_DATA);
            edit = false;
        }
        

    }
    else{


    if(Fio.value.trim() === '' || Time.value.trim() === ''){
        alert("Fio va vaqtni kirititng")
    }
    else{
        let newStudent = {
            id:i++,
            fio:Fio.value,
            course:Course.value,
            time:Time.value
        }
        DYMMY_DATA.push(newStudent)
        Fio.value = ''
        Time.value = ''
        GetStudents(DYMMY_DATA);
    }

}
 
}







// edit 

let edit = false;
let ID = null
function Edit(idx,key){
    ID = key
    edit = true;

    let EDIT_ITEM = DYMMY_DATA.find(x=>x.id === idx)
    Fio.value = EDIT_ITEM.fio
    Course.value = EDIT_ITEM.course
    Time.value = EDIT_ITEM.time
    
}