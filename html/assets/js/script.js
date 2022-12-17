var memory;
var tts;

try {
  QiSession( function (session) {
    console.log('connected!');

    session.service("ALMemory").then(function (ALMemory) {
      memory = ALMemory;
      console.log(memory);
      session.service("ALAnimatedSpeech").then(function (ALAnimatedSpeech){
        tts = ALAnimatedSpeech;
        console.log("tts ready");
      });
      this.subscribeEvents();
      console.log("raised controlReady");
    });
    reset();
  });
} catch (err) {
  console.log("Error when initializing QiSession: " + err.message);
  console.log("Make sure you load this page from the robots server.")
}

const messages = [
  {
    "event": "Evento",
    "message": "Messaggio1"
  },
  {
    "event": "Evento",
    "message": "Messaggio2"
  },
  {
    "event": "Evento",
    "message": "Messaggio3"
  },
  {
    "event": "Evento",
    "message": "Messaggio4"
  },
  {
    "event": "Evento",
    "message": "Messaggio5"
  },
  {
    "event": "Evento",
    "message": "Messaggio6"
  },
]


let index = 0;

$(document).ready(function(){
  $("#mess-1").delay(1500).fadeOut(function() {
    $(this).html(`<span onclick=\"raiseEvent(\'${messages[index].event}\',\'\');\">${messages[index].message}</span>`).delay(500).fadeIn();
  });
  $("#mess-2").delay(1000).fadeOut(function() {
    $(this).html(`<span onclick=\"raiseEvent(\'${messages[index+1].event}\',\'\');\">${messages[index+1].message}</span>`).delay(1500).fadeIn();
  });
  $("#mess-3").delay(500).fadeOut(function() {
    $(this).html(`<span onclick=\"raiseEvent(\'${messages[index+2].event}\',\'\');\">${messages[index+2].message}</span>`).delay(2500).fadeIn();
  });
  setInterval(function() {
    $("#mess-1").delay(1500).fadeOut(function() {
      $(this).html(`<span onclick=\"raiseEvent(\'${messages[index].event}\',\'\');\">${messages[index].message}</span>`).delay(500).fadeIn();
    });
    $("#mess-2").delay(1000).fadeOut(function() {
      $(this).html(`<span onclick=\"raiseEvent(\'${messages[index+1].event}\',\'\');\">${messages[index+1].message}</span>`).delay(1500).fadeIn();
    });
    $("#mess-3").delay(500).fadeOut(function() {
      $(this).html(`<span onclick=\"raiseEvent(\'${messages[index+2].event}\',\'\');\">${messages[index+2].message}</span>`).delay(2500).fadeIn();
    });
    index = index+3;
    if(index+2 > messages.length) {
      index = 0;
    }
  }, 10000);
});

function reset() {
  console.log("Reset");
  showOnly("startup");
  raiseEvent("reset");
}

function hide(id) {
  $("#" + id).hide()
}

function show(id) {
  $("#" + id).show()
}

function hideAll() {
  $(".sub-content").hide();
}

function showOnly(id) {
  hideAll();
  show(id);
}

function start() {
  showOnly("messages");
  raiseEvent("start");
}

function subscribeEvents() {
  this.memory.subscriber("PepperQiMessaging/selfie").then(function (subscriber) {
    subscriber.signal.connect(function (state) {
      showOnly("selfie");
    });
  });
}

function raiseEvent(event) {
  memory.raiseEvent("PepperQiMessaging/" + event, "1");
}