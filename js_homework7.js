const testStrings = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];
const regex = /\b[^Aa]{6,}\b/;

testStrings.forEach(str => {
    if (regex.test(str)) {
        console.log(`✅ Matches: ${str}`);
    } else {
        console.log(`❌ Does not match: ${str}`);
    }
});
