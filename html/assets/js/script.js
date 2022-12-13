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

function reset() {
  console.log("Reset");
  showOnly("startup");
  memory.raiseEvent("PepperQiMessaging/reset", "reset");
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

function selfie() {
  showOnly("selfie");
  memory.raiseEvent("PepperQiMessaging/reset", "reset");
}

function start() {
  showOnly("choose");
  memory.raiseEvent("PepperQiMessaging/start", "start");
}

function choose(id, event) {
  showOnly(id);
  tts.stopAll();
  memory.raiseEvent(event, event);
}

function subscribeEvents() {
  this.memory.subscriber("show").then(function (subscriber) {
    subscriber.signal.connect(function (state) {
      showOnly(state);
    });
  });
  this.memory.subscriber("PepperQiMessaging/ETBiennio").then(function (subscriber) {
    subscriber.signal.connect(function (state) {
      showOnly("biennio");
    });
  });
  this.memory.subscriber("PepperQiMessaging/ETExtra").then(function (subscriber) {
    subscriber.signal.connect(function (state) {
      showOnly("extra");
    });
  });
  this.memory.subscriber("PepperQiMessaging/ETChimica").then(function (subscriber) {
    subscriber.signal.connect(function (state) {
      showOnly("chimica");
    });
  });
  this.memory.subscriber("PepperQiMessaging/ETCostruzioni").then(function (subscriber) {
    subscriber.signal.connect(function (state) {
      showOnly("cat");
    });
  });
  this.memory.subscriber("PepperQiMessaging/ETElettronica").then(function (subscriber) {
    subscriber.signal.connect(function (state) {
      showOnly("eea");
    });
  });
  this.memory.subscriber("PepperQiMessaging/ETGrafica").then(function (subscriber) {
    subscriber.signal.connect(function (state) {
      showOnly("grafica");
    });
  });
  this.memory.subscriber("PepperQiMessaging/ETInformatica").then(function (subscriber) {
    subscriber.signal.connect(function (state) {
      showOnly("informatica");
    });
  });
  this.memory.subscriber("PepperQiMessaging/ETMeccanica").then(function (subscriber) {
    subscriber.signal.connect(function (state) {
      showOnly("mme");
    });
  });
  this.memory.subscriber("PepperQiMessaging/ETMElettrica").then(function (subscriber) {
    subscriber.signal.connect(function (state) {
      showOnly("me");
    });
  });
  this.memory.subscriber("PepperQiMessaging/ETMMeccanica").then(function (subscriber) {
    subscriber.signal.connect(function (state) {
      showOnly("mm");
    });
  });
  this.memory.subscriber("PepperQiMessaging/ETStart").then(function (subscriber) {
    subscriber.signal.connect(function (state) {
      start();
    });
  });
}