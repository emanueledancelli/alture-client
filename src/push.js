export const initOneSignal = () => {
  var OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "b80e7963-2d68-4e15-ad8d-c79702ee21e6"
    });
  });
};
