// const myAge = 7;

// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.';;

const myAge = 20;
const showPage = () => {
    return 'Showing the page';
};

const showErrorPage = () => {
    return 'Showing the error page';
};

const message = myAge >= 21 ? showPage() : showErrorPage();

console.log(message);

const team = ['Tyler', 'Porter', 'Tim', 'Rio', 'Andrew'];
// 1. print "Team size: 3" if less than or equal to 4
//2. print "Too many people on your team" otherwise

const teamSize = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team';

console.log(teamSize);