menu = [
  'Facilities'
  'Instruments'
  'Research'
]
appContent = [
  [
    'Environmental'
    'Isotopic fingerprinting sources of pollutants. Trace metal analysis.'
  ]
  [
    'Geosciences'
    'Ceochronolow U/Pb, Pb/Pb. Sm/Nd. Kb/Sr. K/Ca.'
  ]
  [
    'Health'
    'Isotopic tracing with stable isotopes. Bioavailability measurements. eg Calcium absorption for sensitive  patients - pregnant women, children.'
  ]
  [
    'Chemical Metrology'
    'Calibration of standards for isotopic composition and concentration. Isotopic abundances and atomic weights.'
  ]
]
appImageClass = [
  'one'
  'two'
  'three'
  'four'
]
footerLinks = [
  'STAFF PORTAL'
  'LINKS'
  'SCIENCE LINKS'
  'BOARD OF DIRECTORS'
]
socials = [
  'in'
  'twitter'
  'youtube'
]

root = exports ? this

root.generateMenu = ->
  i = 0
  while i < menu.length
    document.write '<li' + (if i == 0 then ' id=\'selected\'' else '') + '><a href="#">' + menu[i] + '</a></li>'
    i++
  return

root.generateAppContent = ->
  i = 0
  while i < appContent.length
    document.write '<li><div class="property_details two"><div><h1>' + appContent[i][0] + '</h1><p>' + appContent[i][1] + '</p></div></div></li>'
    i++
  return

root.generateAppImage = ->
  i = 1
  while i < 5
    document.write '<li><div class="property_details two pic"><img class="' + appImageClass[i - 1] + '" src="img/' + i + '.JPG"/></div></li>'
    i++
  return

root.generateFooterLinks = ->
  i = 0
  while i < footerLinks.length
    document.write '<a href="#">' + footerLinks[i] + '</a><br/>'
    i++
  return

root.generateSocialIcons = ->
  i = 0
  while i < socials.length
    document.write '<a href="" target="_blank"><img src="img/' + socials[i] + '.png"/></a>'
    i++
  returns