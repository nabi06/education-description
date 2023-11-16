function updateOptions(){
   var a= document.getElementById('coursetype').value;
   var b= document.getElementById('courseoptions');

   b.innerHTML='';
   if (a =='degree'){
    var options=['BSc computers','BSc Physics','Bcom','BSc maths'];
   }else if (a =='btech'){
    var options=['CSE','ECE','MECH','Civil','ECE','AIML'];
   }else if (a =='arts'){
    var options=['commerce','paints','calligraphy'];
   }else if (a =='management'){
    var options=['BBA','MBA'];
   }

   for(var i = 0; i < options.length; i++) {
    var opt = document.createElement('option');
    opt.value = options[i];
    opt.innerHTML = options[i];
    b.appendChild(opt);
}
}
var c=document.querySelector(".add-skills");

c.addEventListener("click", ()=>{
    const container= document.querySelector(".adding");
    const newField=document.createElement('div');
    const label=document.createElement('label');
    label.textContent="Skills:";
    newField.appendChild(label);
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'skill' + (container.children.length - 1);
    input.className='skills' // Unique name for each field
    newField.appendChild(input);

    // Append the new div to the container
    container.appendChild(newField);

})
document.querySelector(".add-container").addEventListener("click",()=>{
     var d=document.querySelector(".adding");
     if (d.style.display=='none'){
        d.style.display='block';
     }else{
        d.style.display='none';
     }
})
document.querySelector(".submitting").addEventListener('click',(e)=>{
    e.preventDefault();
    var name = document.querySelector('.Name').value;
    var collegeName = document.querySelector('.collegename').value;
    var cgpa= document.querySelector('.cgpa').value;
    var courseType = document.getElementById('coursetype').value;
    var courseOptions = document.getElementById('courseoptions').value;
    var skillsElements = document.querySelectorAll('.skills');
    var skills=[];
    for(var i =0;i<skillsElements.length;i++){
        skills.push(skillsElements[i].value);
    }
    var templates = [
        `Hi, I'm ${name}, a ${courseType} graduate from ${courseOptions} specializing in Software Engineering from ${collegeName}. My key skills are in ${skills.join(", ")} , all of which I've applied extensively in my academic and professional projects. During my internship at Tech Innovators Inc., I utilized Python and Java to develop efficient back-end algorithms, enhancing our data processing capabilities. In web development, I created interactive, user-friendly websites using HTML, CSS, and JavaScript, contributing significantly to our project's front-end design. My deep understanding of data structures was crucial in optimizing database queries in SQL, ensuring seamless data management and retrieval. This diverse skill set has been pivotal in my successful project implementations, showcasing my ability to adapt and excel in varied technological environments."`
        `I am ${name}, having pursued my ${courseType} in ${courseOptions} from MIT, and I specialize in ${skills.join(", ")}  . My journey included developing sophisticated machine learning models, analyzing large datasets for actionable insights, and designing full-scale web applications. At Quantum Analytics, my internship involved leveraging these skills to enhance data-driven decision-making processes, improve user experience on web platforms, and integrate advanced analytical capabilities into existing systems. My proficiency in Python, JavaScript, and SQL was instrumental in delivering high-impact solutions, embodying my commitment to technological innovation and excellence.`,
        `This is ${name}, a ${courseOptions} enthusiast with a degree in ${courseType} from ${collegeName}, skilled in ${skills.join(", ")}.`
        // Add more templates as needed
    ];

    // Selecting a random template
    var description = templates[Math.floor(Math.random() * templates.length)];

    // Display the description
    document.querySelector('.adding').style.display='none';
    document.querySelector('.container').innerText = description; 
    document.querySelector('.container').marginLeft='40%';
    document.querySelector('.container').marginTop='30px';

})