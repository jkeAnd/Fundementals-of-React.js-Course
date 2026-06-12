const animals = ['dog', 'cat', 'dog', 'bird', 'cat', 'dog'];

const count = animals.reduce((acc, animal) => {

    acc[animal] = (acc[animal] || 0) + 1; 
    return acc;


}, {});

console.log(count);