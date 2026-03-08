function showNotes(subject){

let notes=""

if(subject=="history"){
notes="History Notes: Indus Valley Civilization, Maurya Empire, Mughal Empire."
}

if(subject=="english"){
notes="English Notes: Tense, Grammar, Essay Writing."
}

if(subject=="math"){
notes="Math Notes: Algebra, Geometry, Trigonometry."
}

document.getElementById("notesBox").innerHTML=notes

}
