let dog = {
  name: "Bastion",
  moods: ['Sad', 'Tails Wagging!', 'Rub My Tummy!!', 'Too Excited! Biting Things!'],
  pets: 0,
  moodIndex: 0,
  tolerance: 4,
  images: ['/assets/sadDog2.jpg', '/assets/tailWag.jpg', '/assets/tummyRub.jpg', '/assets/pugBiting.jpg']
}
//inner working of the button, increases the count in object not on site and then when count is high enough increases tolerance. Finally passes the result of to drawDog
function pet() {
  dog.pets++
  if (dog.pets % dog.tolerance == 0) {
    dog.moodIndex++;
  }
  drawDog()
}

// updates number and image elements on the site, what makes the clicks change anything
function drawDog() {
  document.getElementById("pets").innerText = dog.pets
  document.getElementById('dogImg').setAttribute('src', dog.images[dog.moodIndex])
  document.getElementById('mood').innerText = dog.moods[dog.moodIndex]
  if (dog.moodIndex == dog.moods.length - 1) {
    document.getElementById('pet-button').disabled = true;
  }
}
function badDog() {
  dog.pets = 0
  dog.moodIndex = 0
  document.getElementById('pet-button').disabled = false;

  drawDog()
}
