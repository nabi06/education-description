document.querySelector('.add-skill').addEventListener('click', function() {
    // Container where new fields will be added
    const container = document.querySelector('.adding');

    // Create a new div for the label and input field
    const newField = document.createElement('div');
    
    
    // Create the label
    const label = document.createElement('label');
    label.textContent = "Skills: "; // Change this text as needed
    newField.appendChild(label);

    // Create the input field
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'skill' + (container.children.length - 1);
    input.className='skills' // Unique name for each field
    newField.appendChild(input);

    // Append the new div to the container
    container.appendChild(newField);
});

document.querySelector('#myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission

    // Retrieving form values
    var name = document.querySelector('.Name').value;
    var collegeName = document.querySelector('.collegename').value;
    var degree = document.querySelector('.degree').value;
    
    // Getting the selected course
    var courseSelect = document.getElementById('courseSelect');
    var course = courseSelect.options[courseSelect.selectedIndex].text; // Retrieves the text of the selected course

    var skillsElements = document.querySelectorAll('.skills');
    var skills = [];
    for (var i = 0; i < skillsElements.length; i++) {
        skills.push(skillsElements[i].value);
    }

    // Description Templates
    var templates = [
        `Hi, I'm ${name}, a ${degree} graduate in ${course} from ${collegeName}. My key skills include ${skills.join(", ")}.`,
        `I am ${name}, having pursued my ${degree} in ${course} from ${collegeName}, and I specialize in ${skills.join(", ")}.`,
        `This is ${name}, a ${course} enthusiast with a degree in ${degree} from ${collegeName}, skilled in ${skills.join(", ")}.`
        // Add more templates as needed
    ];

    // Selecting a random template
    var description = templates[Math.floor(Math.random() * templates.length)];

    // Display the description
    document.querySelector('.container').innerText = description; // You can also display this in the webpage
});

