HeliCam = {};

HeliCam.Open = () => {
  $("#helicontainer").css("display", "block");
  $(".scanBar").css("height", "0%");
}

HeliCam.UpdateScan = (data) => {
  $(".scanBar").css("height", data.scanvalue + "%");
}

HeliCam.UpdateVehicleInfo = (data) => {
  $(".vehicleinfo").css("display", "block");
  $(".scanBar").css("height", "100%");
  $(".heli-model").find("p").html("MODEL: " + data.model);
  $(".heli-plate").find("p").html("PLATE: " + data.plate);
  $(".heli-street").find("p").html(data.street);
  $(".heli-speed").find("p").html(data.speed + " KM/U");
}

HeliCam.DisableVehicleInfo = () => {
  $(".vehicleinfo").css("display", "none");
}

HeliCam.Close = () => {
  $("#helicontainer").css("display", "none");
  $(".vehicleinfo").css("display", "none");
  $(".scanBar").css("height", "0%");
}

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
      window.addEventListener('message', (event) => {
          if (event.data.type == "heliopen") {
              HeliCam.Open();
          } else if (event.data.type == "heliclose") {
              HeliCam.Close();
          } else if (event.data.type == "heliscan") {
              HeliCam.UpdateScan(event.data);
          } else if (event.data.type == "heliupdateinfo") {
              HeliCam.UpdateVehicleInfo(event.data);
          } else if (event.data.type == "disablescan") {
              HeliCam.DisableVehicleInfo();
          }
      });
  };
};

$(document).on('keydown', (event) => {
  switch(event.which) {
      case 27: // ESC
          Fingerprint.Close();
          break;
  }
});