const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

  const showNotes = function (notes) {
    notes.forEach(function (note) {
      showOnPage(`${note.title} ${note.body}`);
    });
  };


const notes = [{
    title: 'my next trip',
    body:'I would like to go to Spain'

}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'

}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
};

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
    });    
};



// showNotes(findNotes(notes, 'work'));

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
//     return notes[index];
// };


// const note = findNote(notes, 'some other office modification');


// showNotes(notes);


showOnPage('a' < 'A')

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1 
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        };
    });
};

sortNotes(notes);
showNotes(notes);