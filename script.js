const persons = [];
document.getElementById("calcStats").disabled = true;
const statsList = document.createElement('ul');
statsTitle.after(statsList);
addPerson.onclick = () => {
    const person ={ID: '', fstName:'', lstName:'', age:0};
    person.ID = personId.value.trim();
    person.fstName = firstName.value.trim();
    person.lstName = lastName.value.trim();
    person.age = +age.value;
    addPersonToArrayandList(person);
}

calcStats.onclick = () => {
    statsList.innerHTML = '';
    const stats = [...persons];
    stats.sort((p1 , p2) => p1.age - p2.age);
    statsList.appendChild(buildElem(stats[0], 'MIN age person: '));
    statsList.appendChild(buildElem(stats[stats.length-1], 'MAX age person: '))
    const averageAge = ((stats.reduce((acc, p) => acc + p.age, 0))/stats.length).toFixed(2);
    li = document.createElement('li');
    li.append(`Average age: ${averageAge} year(s)`);
    statsList.appendChild(li);
}
    function  addPersonToArrayandList(person) {
    if (((persons.findIndex(p => p.ID === person.ID)) >= 0)){
        console.log(persons.findIndex(p => p.ID === person.ID));
        return false;
    }
    document.getElementById("calcStats").disabled = false;
    persons.push(person);
    const li = document.createElement('li');
    const text = `ID: ${person.ID}, First name: ${person.fstName},  Last name: ${person.lstName}, 
    age: ${person.age}`;
    li.append(document.createTextNode(text));
    personsList.appendChild(li);
    }

function buildElem(stat, str) {
    const minAgePerson = `${str} ID: ${stat.ID}, First name: ${stat.fstName},  Last name: ${stat.lstName},
    age: ${stat.age}`;
    const li = document.createElement('li');
    li.append(minAgePerson);
    return li;
}




//TODO click Add person => add unique person to array persons,
// and add to ol with id='personsList'
// click Get Stats => add stats after  <h2>Stats</h2>, average age, min age, max age
