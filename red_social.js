//1.User information
const userName = 'Joaquinher'
const fullName = 'Sara Sofia'
const age = 34
const isStudent = true

// 2. Address
const address = {
    street : '20 with #19',
    city : 'Florida',
    state : 'Orlando',
    postalCode : 4656327
}

//3. Hobbies}
const hobbies = ['Reading', 'Gaming chess', 'Exercise']

//4. Generating personalized bio
const textpersonalized = `Hi, i am ${fullName}
I am ${age} years old.
I live ${address.city}.
I love ${hobbies.join(',')}.
Follow me for coding adventures!.
`
console.log(textpersonalized)