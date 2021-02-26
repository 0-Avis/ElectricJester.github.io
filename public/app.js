const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

function renderPro(doc){
    // render the name
    let name = document.querySelector('#name');
    name.textContent = doc.data().name;
    // render gender and age
    let des = document.querySelector('#descriptors');
    des.textContent = doc.data().gender +' - ' + doc.data().age + ' years old';
    // render bio
    let bio = document.querySelector('#bio');
    bio.textContent = doc.data().bio;
    // render roomate age preference
    let age = document.querySelector('#ager');
    age.textContent = doc.data().ageL + '-' + doc.data().ageH + ' years old';
    // render phone number
    let phone = document.querySelector('#phone');
    phone.textContent = 'Phone Number: ' + doc.data().phone;

}


auth.onAuthStateChanged(user => {
    if(user){
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
    } else{
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
    }
});

db.collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderPro(doc);
    });
});

/*db.collection('users').doc('ben').set({
    name: 'ben',
    age: 17,
    ageL: 17,
    ageH: 20,
    gender: 'male',
    bio: 'needs a bud',
    phone: '903-504-6101'
})
.then(() => {
    console.log('doc success');
})
.catch((error) => {
    console.error("error w/ doc: ", error);
});*/


