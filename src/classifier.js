let data = [
  {
    name: 'Hendrick',
    dob: '1853-07-18T00:00:00.000Z',
    regNo: '041',
  },
  {
    name: 'Albert',
    dob: '1879-03-14T00:00:00.000Z',
    regNo: '033',
  },
  {
    name: 'Marie',
    dob: '1867-11-07T00:00:00.000Z',
    regNo: '024',
  },
  {
    name: 'Neils',
    dob: '1885-10-07T00:00:00.000Z',
    regNo: '02',
  },
  {
    name: 'Max',
    dob: '1858-04-23T00:00:00.000Z',
    regNo: '014',
  },
  {
    name: 'Erwin',
    dob: '1887-08-12T00:00:00.000Z',
    regNo: '09',
  },
  {
    name: 'Auguste',
    dob: '1884-01-28T00:00:00.000Z',
    regNo: '08',
  },
  {
    name: 'Karl',
    dob: '1901-12-05T00:00:00.000Z',
    regNo: '120',
  },
  {
    name: 'Louis', 
    dob: '1892-08-15T00:00:00.000Z',
    regNo: '022',
  },
  {
    name: 'Arthur',
    dob: '1892-09-10T00:00:00.000Z',
    regNo: '321',
  },
  {
    name: 'Paul',
    dob: '1902-08-08T00:00:00.000Z',
    regNo: '055',
  },
  {
    name: 'William',
    dob: '1890-03-31T00:00:00.000Z',
    regNo: '013',
  },
  {
    name: 'Owen',
    dob: '1879-04-26T00:00:00.000Z',
    regNo: '052',
  },
  {
    name: 'Martin',
    dob: '1871-02-15T00:00:00.000Z',
    regNo: '063',
  },
  {
    name: 'Guye',
    dob: '1866-10-15T00:00:00.000Z',
    regNo: '084',
  },
  {
    name: 'Charles',
    dob: '1868-02-14T00:00:00.000Z',
    regNo: '091',
  },
]


function classifier(input) {
  let copied = input.slice();
  for(let i = 0; i < copied.length; i++){
      copied[i].age = 2019 - new Date(copied[i].dob).getFullYear();
  }
  
  copied.sort((a,b) => a.age - b.age);
  


let group = [];
for(let i=0; i<copied.length; i++){
if(group.length === 0){
group.push([copied[i]]);
}
}
//console.log(group)


for(let i = 1; i < copied.length; i++){
  let lastGroup= group[group.length -1];
  let lastMember= lastGroup[lastGroup.length-1];

 if(lastGroup.length !== 3 && Math.abs(lastMember.age - copied[i].age) <= 5){
  lastGroup.push(copied[i]);
 }else{
  group.push([copied[i]]);
 }
}

function ageSum(arr){
  let sum =0;
  for(let i=0; i < arr.length; i++){
      sum +=arr[i].age;
  }
  return sum;
}


function regNos (arr){
  let regNos=[];
  for(let i=0; i<arr.length; i++){
      regNos.push(parseInt(arr[i].regNo))
  }

  regNos.sort((a,b)=> a - b);
  return regNos;
}


let grouped=[];

for(let i=0 ; i<group.length; i++){

  grouped.push({
     members: group[i],
     oldest:  group[i][group[i].length-1].age,
     sum: ageSum(group[i]),
     regNos: regNos(group[i])
  })
}

//console.log(grouped)

let mainGroup ={noOfGroups: 0};

mainGroup.noOfGroups=grouped.length;

for(let i =0; i < grouped.length; i++){
  mainGroup[`group${i + 1}`]= grouped[i];

}

return mainGroup;
}

classifier(data);

export default classifier;
