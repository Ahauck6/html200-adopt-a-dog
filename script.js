function murphyDog() {
    alert("Murphy\nBreed: Boxer Mix\nCost to Adopt: $123.45")
}

function poppyDog() {
    alert("Poppy\nBreed: Shih Tzu\nCost to Adopt: $123.45")
}

function jackDog() {
    alert("Jack\nBreed: Beagle\nCost to Adopt: $123.45")
}

function duffyDog() {
    alert("Duffy\nBreed: Pit Mix\nCost to Adopt: $123.45")
}

function lucasDog() {
    alert("Lucas\nBreed: Black Lab\nCost to Adopt: $123.45")
}

function jakeDog() {
    alert("Jake\nBreed: Golden Retriever\nCost to Adopt: $123.45")
}

function angusDog() {
    alert("Angus\nBreed: Boxer\nCost to Adopt: $123.45")
}

function violetDog() {
    alert("Violet\nBreed: Chocolate Lab\nCost to Adopt: $123.45")
}

function piperDog() {
    alert("Piper\nBreed: Long Haired Lab\nCost to Adopt: $123.45")
}

function maximusDog() {
    alert("Maximus\nBreed: Terrier Mix\nCost to Adopt: $123.45")
}

function lunaDog() {
    alert("Luna\nBreed: Yellow Lab\nCost to Adopt: $123.45")
}

function stellaDog() {
    alert("Stella\nBreed: Chihuahua\nCost to Adopt: $123.45")
}

/*Javascript cart total*/
let adoptionTotal = 0

function adoptionCost() {
    adoptionTotal = adoptionTotal + 123.45
    alert("$" + adoptionTotal)
}

/*JQuery cart total index page */
let costTotal = 0
$(document).ready(function(){
    $('.adopt').click(function(){ 
        costTotal += 123.45;
        alert('Adoption Total: $' + costTotal);
        $('#cart-total').text(costTotal);
    })
})

/*Dog tile effect*/
$(function() {
    $('.box-indexs, .box-index').hover(function() {
        $(this).css('box-shadow', '10px 10px 5px #777');
    } , function () {
        $(this).css('border-color', 'rgb(138, 196, 37)');
    })
}) 

/*Form submission*/
$('.checkout-form').submit(function(event){
    event.preventDefault();

    const name = $('#name').val();
    const email = $('#email').val();
    const street = $('#address').val();
    const city = $('#city').val();
    const state = $('#state').val();
    const zip = $('#zip').val();
    const firstTime = $('input[class="yes"]:checked').val();
    const notFirstTime = $('input[class="no"]:checked').val();
    const location = $('#location').val();

    console.log(`Name: ${name}`);
    console.log(`Email Address: ${email}`);
    console.log(`Street Address: ${street}`);
    console.log(`City: ${city}`);
    console.log(`State: ${state}`);
    console.log(`Zip Code: ${zip}`);

    if (firstTime) {
        console.log(`First Time Adopter: ${firstTime}`);
    }

   else if (notFirstTime) {
        console.log(`Not A First Time Adopter: ${notFirstTime}`);
    }

    console.log(`Pickup Location: ${location}`);

    alert('Thank you. The form information has been received.');
});

