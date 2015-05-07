(function() {
  var appContent, appImageClass, footerLinks, menu, root, socials;

  menu = ['Facilities', 'Instruments', 'Research'];

  appContent = [['Environmental', 'Isotopic fingerprinting sources of pollutants. Trace metal analysis.'], ['Geosciences', 'Ceochronolow U/Pb, Pb/Pb. Sm/Nd. Kb/Sr. K/Ca.'], ['Health', 'Isotopic tracing with stable isotopes. Bioavailability measurements. eg Calcium absorption for sensitive  patients - pregnant women, children.'], ['Chemical Metrology', 'Calibration of standards for isotopic composition and concentration. Isotopic abundances and atomic weights.']];

  appImageClass = ['one', 'two', 'three', 'four'];

  footerLinks = ['STAFF PORTAL', 'LINKS', 'SCIENCE LINKS', 'BOARD OF DIRECTORS'];

  socials = ['in', 'twitter', 'youtube'];

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.generateMenu = function() {
    var i;
    i = 0;
    while (i < menu.length) {
      document.write('<li' + (i === 0 ? ' id=\'selected\'' : '') + '><a href="#">' + menu[i] + '</a></li>');
      i++;
    }
  };

  root.generateAppContent = function() {
    var i;
    i = 0;
    while (i < appContent.length) {
      document.write('<li><div class="property_details two"><div><h1>' + appContent[i][0] + '</h1><p>' + appContent[i][1] + '</p></div></div></li>');
      i++;
    }
  };

  root.generateAppImage = function() {
    var i;
    i = 1;
    while (i < 5) {
      document.write('<li><div class="property_details two pic"><img class="' + appImageClass[i - 1] + '" src="img/' + i + '.JPG"/></div></li>');
      i++;
    }
  };

  root.generateFooterLinks = function() {
    var i;
    i = 0;
    while (i < footerLinks.length) {
      document.write('<a href="#">' + footerLinks[i] + '</a><br/>');
      i++;
    }
  };

  root.generateSocialIcons = function() {
    var i;
    i = 0;
    while (i < socials.length) {
      document.write('<a href="" target="_blank"><img src="img/' + socials[i] + '.png"/></a>');
      i++;
    }
    return returns;
  };

}).call(this);
