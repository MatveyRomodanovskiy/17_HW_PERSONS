const persons = [];
document.getElementById("calcStats").disabled = true;
const statsList = document.createElement('ul');
statsTitle.after(statsList);
addPerson.onclick = () => {
    const person = {ID: '', fstName: '', lstName: '', age: 0};
    person.ID = personId.value.trim();
    person.fstName = firstName.value.trim();
    person.lstName = lastName.value.trim();
    person.age = ((new Date().getTime() - new Date(age.value)) / (24 * 3600 * 365.25 * 1000)) | 0;
    addPersonToArrayandList(person);
}

calcStats.onclick = () => {
    statsList.innerHTML = '';
    const stats = [...persons];
    stats.sort((p1, p2) => p1.age - p2.age);
    statsList.appendChild(buildElem(stats[0], 'MIN age person: '));
    statsList.appendChild(buildElem(stats[stats.length - 1], 'MAX age person: '))
    const averageAge = ((stats.reduce((acc, p) => acc + p.age, 0)) / stats.length).toFixed(2);
    li = document.createElement('li');
    li.append(`Average age: ${averageAge} year(s)`);
    statsList.appendChild(li);
}

function addPersonToArrayandList(person) {
    if (((persons.findIndex(p => p.ID === person.ID)) >= 0)) {
        return false;
    }
    persons.push(person);
    if (persons.length > 0) {
        document.getElementById("calcStats").disabled = false;
    }
    const li =  createInfoElement(`ID: ${person.ID}, First name: ${person.fstName},  Last name: ${person.lstName}, 
    age: ${person.age}`, 'li')
    const btnDel = createButtonDel(() => {
        statsList.innerHTML = '';
        const index = persons.findIndex(({id}) => id === person.id);
        persons.splice(index, 1);
        if (persons.length === 0) {
            document.getElementById("calcStats").disabled = true;
        }
    });
    li.append(btnDel);
    personsList.appendChild(li);
    if(statsList.innerHTML){
        statsList.innerHTML = '';
    }
}

function buildElem(stat, str) {
    const minAndMaxAgePerson = `${str} ID: ${stat.ID}, First name: ${stat.fstName},  Last name: ${stat.lstName},
    age: ${stat.age}`;
    // const li = document.createElement('li');
    // li.append(minAndMaxAgePerson);
    return createInfoElement(minAndMaxAgePerson, 'li');
}


//TODO click Add person => add unique person to array persons,
// and add to ol with id='personsList'
// click Get Stats => add stats after  <h2>Stats</h2>, average age, min age, max age
