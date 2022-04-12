function addUser()
{
    user_name = document.getElementById("user_name").ariaValueMax;
    firebaseConfig.databaseURL().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
//ADD YOUR FIREBASE LINKS