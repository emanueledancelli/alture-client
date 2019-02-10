export const initializeOneSignal = () => {
  console.log("initializing");
  var OneSignal = window.OneSignal || [];
  console.log("onesignal:", OneSignal);
  console.log(OneSignal.push());
  OneSignal.push(function() {
    console.log(OneSignal.push);
    OneSignal.init({
      appId: "b80e7963-2d68-4e15-ad8d-c79702ee21e6"
    });
    console.log(OneSignal);
  });
};
