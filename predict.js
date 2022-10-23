
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose
    // the link to your model provided by Teachable Machine export panel
    const URL = "https://teachablemachine.withgoogle.com/models/jPZxS8HQl/";
    let model, webcam, ctx, labelContainer, maxPredictions;

    var audio = new Audio('glass.wav');

    var date1 = new Date();

    async function init(){
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // Note: the pose library adds a tmPose object to your window (window.tmPose)
        model = await tmPose.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const width = 720;
        const height = 720;
        // const size = 200;
        const flip = true; // whether to flip the webcam
        webcam = new tmPose.Webcam(width, height, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        date1 = new Date()
        window.requestAnimationFrame(loop);

        // append/get elements to the DOM
        const canvas = document.getElementById("canvas");
        canvas.width = width; canvas.height = height;
        ctx = canvas.getContext("2d");
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    window.init = init

    async function loop(timestamp) {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    var number = 0;
    

    async function predict() {
      // Prediction #1: run input through posenet
      // estimatePose can take in an image, video or canvas html element
      const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
      // Prediction 2: run input through teachable machine classification model
      const prediction = await model.predict(posenetOutput);
  
      for (let i = 0; i < maxPredictions; i++) {
          const classPrediction =
              prediction[i].className + ": " + prediction[i].probability.toFixed(2);
          labelContainer.childNodes[i].innerHTML = classPrediction;
      }
      
      var max_num = Math.max(prediction[0].probability.toFixed(2), prediction[1].probability.toFixed(2), prediction[2].probability.toFixed(2));
      for (let i = 0; i < maxPredictions; i++) {
          if (prediction[i].probability.toFixed(2) == max_num){
              var cur_class = i
          }
      }
      // finally draw the poses
      drawPose(pose);
      var date2 = new Date();
      time_diff = diff_minutes(date1, date2);
      if (cur_class == 0){
          date1 = new Date();
      }

      if (time_diff > 5){
          alertUser();
      }
      number++;
      if (number % 20 == 0) {
        drawGraph(prediction);
      }
  }

    function drawGraph(prediction) {
      data = 100 * prediction[0].probability;
      var color = "#C44A53";

      if (data < 30) {
        color = "#C44A53";
      } else if (data < 60) {
        color = "#F1B16E";
      } else if (data < 85) {
        color = "#7DBFA7";
      } else {
        color = "#4B86B8";
      }

      var obj = {
        value: 50,
        time: new Date(),
        color: color,
        type: "rect"
      };

      // send the datum to the chart
      chart.datum(obj);
    }

    function drawPose(pose) {
        if (webcam.canvas) {
            ctx.drawImage(webcam.canvas, 0, 0);
            // draw the keypoints and skeleton
            if (pose) {
                const minPartConfidence = 0.5;
                tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
                tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
            }
        }
    }

    async function subscribe() {
      let sw = await navigator.serviceWorker.ready;
      let push = await sw.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: 
              'BLcRzm0Z2FDmsCUX2H_rCo2B2bT9urwLaTcIRFimO3JvuKSn7GEOq-M6IUHv9H7CD-ErH6HH3y89Un0KV-CzV_w'
      })
      console.log(JSON.stringify(push))
    }

    window.subscribe = subscribe

  function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
  }

  function alertUser() {
      audio.play();
      pushNot();
      date1 = new Date();
  }

  function diff_minutes(dt2, dt1) {
      var diff =(dt2.getTime() - dt1.getTime()) / 1000;
      return Math.abs(Math.round(diff));
  }

  function pushNot() {
    const push = require('web-push')

    let vapidKeys = {
        publicKey: 'BLcRzm0Z2FDmsCUX2H_rCo2B2bT9urwLaTcIRFimO3JvuKSn7GEOq-M6IUHv9H7CD-ErH6HH3y89Un0KV-CzV_w',
        privateKey: 'yrYizttKpc5-cBnjdlsod8fZjBDSiy-FK_L3xqx-_64'
    };

    push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

    let sub={endpoint:"https://fcm.googleapis.com/fcm/send/cekRLSX2xrM:APA91bFwz-X8rMQTnnU3bF_ztJ-VWOi2MlF0viUqUL_EJxGd1UehCs7FJGWyOdjMt9fZJdi4mS3Si4PYG4Xzpvn3wVqFSUZ0LTXXQS0Nz29Muz4EWP2o1jnbiBrr_z1nrmWE4pRe9LER", 
        expirationTimem: null, 
        keys :{
            p256dh:"BD0nhwNKZCEr15bF5nOlAJ1SXEKbvDbx6VaEjrmTPWGfFrN_veuLFN9H5zDDJ24UhHot3VudIdP8nXkLXtu45wg",
            auth:"EVMSktq1xpe0_VRKUlDhrw"
        }
    };

    push.sendNotification(sub, 'testmessage');
  };