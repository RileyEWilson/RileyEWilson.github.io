alert("You, Hamilton, got a letter from the vice president, Aaron Burr, challenging you to a duel.  He claims that you have ruined his political pursuits.  You hold a pen in your hand as you conider your options.")

let accept_or_decline = prompt("Do you want to (1) accept the challenge and meet Burr for a duel or (2) decline his challenge? Choose wisely.");

if(accept_or_decline == 1) {
    let Burr_or_sky = prompt("You decide to accepts Burr's challenge.  The day of the duel comes and you have another decision to make. Will you (1) aim your pistol at the sky or (2) aim the pistol at Burr?");
    if(Burr_or_sky == 1){
        alert("You decided to fire your pistol at the sky.  Burr believes you are going to shoot him so he aims at you.  The bullet enters right between your ribs.  You are taken to a hospital where you die.")
    }else {
        let Burr_or_sky = prompt("You decide to fire your pistol at Burr to protect yourself.  The bullet lodges in his stomach and he is taken to the hospital.  You are taken away and must now run from the law.  Your political career is now over.")
    }
} else {
    let respect_or_disrespect = prompt("You decide to decline Burr's challenge in fear that one of you will die.  Will you (1) be respectful and apologize for any harm you have brought to Burr's political endeavors or will you (2) call him out saying that he brought this on himself and he shouldn't be a politician?")
    if(respect_or_disrespect ==1){
        alert("You chose to respectfully decline.  You are now labeled as a coward but your political career is safe.")
    }else {
        let respect_or_disrespect = prompt("You chose to call Burr out on his failures.  You are not only labeled as a coward but are revoked from your position as Secretary of Treasury.  Your political career is ruined.")
    }
}
