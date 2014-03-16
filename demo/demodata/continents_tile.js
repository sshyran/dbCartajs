/**
 * List with coords of continents divided on tiles.
 *  [[ftype, ftag, coords],...]
 */
var CONTINENTS=[
['.Mainland','Africa.0.0',[[0,5.15],[-0.838889,5.203055],[-10.056945,5.878334],[-13.229445,9.1675],[-14.545555,10.835834],[-15.088611,11.628612],[-16.808056,13.363889],[-17.428055,14.729445],[-16.235277,20.144722],[-15.663055,23.997778],[-15.021111,24.551945],[-10.68,30],[0,30]]],
['.Mainland','Africa.0.30',[[0,36.3],[-5.348333,35.885277],[-9.838056,31.095556],[-10.68,30],[0,30]]],
['.Mainland','Africa.30.-60',[[30,-30],[30,-30.58],[22.844723,-34.05611],[19.2925,-34.631111],[18.277222,-31.979445],[17.12,-30]]],
['.Mainland','Africa.30.-30',[[30,0],[30,-30],[17.12,-30],[15.016945,-26.367777],[14.223889,-22.043888],[11.8225,-16.352222],[13.774167,-10.658889],[11.4125,-4.181111],[9.5,0]]],
['.Mainland','Africa.30.0',[[30,30],[30,0],[9.5,0],[9.330556,0.3475],[9.535277,3.999722],[8.1275,4.5525],[5.445556,4.923056],[0,5.15],[0,30]]],
['.Mainland','Africa.30.30',[[0,36.3],[6.925556,36.872776],[10.606667,36.88139],[11.106112,33.566944],[20.013056,31.454166],[26.487499,31.498888],[30,30.55],[30,30],[0,30]]],
['.Mainland','Africa.60.-60',[[30.90,-30],[30.736111,-30.210556],[30,-30.58],[30,-30]]],
['.Mainland','Africa.60.-30',[[42.54,0],[40.213612,-2.346667],[39.340279,-7.965278],[40.533054,-12.325],[40.831112,-14.9325],[34.59111,-19.728889],[35.485554,-23.607222],[30.90,-30],[30,-30],[30,0]]],
['.Mainland','Africa.60.0',[[32.13,30],[32.461666,29.898611],[35.509167,23.970556],[37.274445,19.780001],[39.617222,15.252222],[42.598888,11.502778],[50.010277,11.502778],[49.115833,6.540278],[42.54,0],[30,0],[30,30]]],
['.Mainland','Africa.60.30',[[30,30.55],[32.13,30],[30,30]]],
['.Mainland','Australia.120.-60',[[114.6,-30],[115.631668,-34.454723],[119.434166,-34.371387],[120,-34.32],[120,-30]]],
['.Mainland','Australia.120.-30',[[120,-19.32],[119.086388,-20.001944],[115.313889,-21.591389],[113.428055,-24.084],[113.441109,-25.625],[114.139999,-27.98889],[114.6,-30],[120,-30]]],
['.Mainland','Australia.150.-60',[[120,-34.32],[122.967781,-33.913887],[131.134171,-31.46611],[134.102783,-32.760277],[135.714722,-34.872776],[137.8125,-32.623],[137.638336,-35.16861],[140.160828,-37.605556],[144.994171,-37.951946],[146.263885,-38.853054],[150,-36.04],[150,-30],[120,-30]]],
['.Mainland','Australia.150.-30',[[150,-22.24],[149.949448,-22.139999],[148.825836,-20.336945],[146.271667,-18.502501],[144.448883,-14.245277],[142.350555,-10.878612],[141.413055,-16.120277],[136.398056,-15.618055],[136.146118,-13.244166],[136.871109,-12.224167],[135.856949,-11.983889],[133.319443,-11.7272],[131.980835,-11.23],[131.907501,-12.228889],[130.352783,-12.791945],[129.965271,-13.530278],[129.189438,-15.183888],[127.547775,-14.103333],[126.335556,-14.038889],[125.751945,-14.451944],[125.394997,-15.077778],[124.491943,-15.935],[123.811386,-17.049723],[122.458611,-16.942499],[120,-19.32],[120,-30],[150,-30]]],
['.Mainland','Australia.180.-60',[[150,-36.04],[150.159439,-35.881943],[152.12056,-32.786388],[152.87,-30],[150,-30]]],
['.Mainland','Australia.180.-30',[[152.87,-30],[153.499725,-27.42],[151.82695,-24.164722],[150,-22.24],[150,-30]]],
['.Mainland','Eurasia.0.30',[[0,50.11],[-1.604167,49.258888],[-2.476944,47.295555],[-8.032222,43.736668],[-9.155278,38.464169],[0,38.65]]],
['.Mainland','Eurasia.30.30.1',[[6,60],[5.603,59.055557],[12.726944,56.486389],[18.187222,59.448891],[18.36,60]]],
['.Mainland','Eurasia.30.30_2',[[24.41,60],[23.539444,58.970833],[16.475277,54.525276],[10.378612,56.273056],[5.615,53.329723],[0,50.11],[0,38.65],[9.160833,44.349724],[17.219999,40.428612],[15.305,44.058334],[21.036112,39.028889],[22.355278,36.52639],[24.209723,38.437778],[24.006,40.072498],[27.904167,40.418056],[27.024166,37.707779],[29.663334,36.204723],[30,36],[30,60]]],
['.Mainland','Eurasia.30.60',[[30,69.84],[29.602222,69.930557],[27.964722,70.823608],[25.116388,70.074165],[24.378889,70.698608],[22.051111,69.778893],[19.432501,69.239166],[17.246,68.365837],[15.534722,68.105003],[14.709167,67.514725],[13.613334,66.629166],[12.638889,65.718887],[12.124,65.204445],[11.806389,64.818611],[10.649445,64.40667],[11.232778,63.774723],[7.513055,62.665001],[6.614722,61.863609],[6.175833,60.388889],[6,60],[18.36,60],[19.256,63.395],[23.120277,63.875557],[24.41,60],[30,60]]],
['.Mainland','Eurasia.60.0',[[35.63,30],[36.044,26.923334],[41.808887,17.864166],[49.09639,14.564445],[57.405556,23.898611],[51.36972,24.583055],[48.183056,29.008612],[57.101387,26.360556],[60,26.04],[60,30]]],
['.Mainland','Eurasia.60.30',[[30,36],[35.164,33.190277],[35.63,30],[60,30],[60,60],[30,60]]],
['.Mainland','Eurasia.60.60',[[60,60],[60,69.51],[53.948055,68.220833],[44.272221,66.472778],[38.02,63.976944],[33.675835,66.337219],[40.327221,67.828056],[32.857224,69.303886],[30,69.84],[30,60]]],
['.Mainland','Eurasia.90.0',[[90,30],[60,30],[60,26.04],[65.991943,25.441389],[68.543053,23.309166],[72.609726,21.803],[73.279724,17.167223],[79.281387,10.29],[86.785835,20.427221],[89.471664,21.866112],[90,21.8]]],
['.Mainland','Eurasia.90.30',[[90,30],[90,60],[60,60],[60,30]]],
['.Mainland','Eurasia.90.60',[[90,60],[90,74.81],[86.864723,74.362221],[77.556114,72.071663],[78.632225,67.535835],[72.652496,71.045555],[66.648056,70.921112],[60,69.51],[60,60]]],
['.Mainland','Eurasia.120.0',[[90,21.8],[91.907776,21.564],[93.802223,18.987778],[95.095001,16.032499],[97.991112,14.347777],[98.701385,10.263611],[100.508057,4.899445],[102.821945,5.6475],[101.374168,12.643888],[106.252502,9.550278],[109.230003,13.494166],[107.085281,21.015833],[109.514168,21.740278],[111.077225,21.501389],[113.567223,22.4175],[114.582497,22.773611],[117.491943,23.749722],[118.953613,25.16],[119.799164,26.336],[120,26.63],[120,30],[90,30]]],
['.Mainland','Eurasia.120.30',[[120,35.02],[119.711113,35.640835],[120,35.82],[120,37.04],[119.291946,37.149166],[118.953613,39.175835],[120,39.45],[120,60],[90,60],[90,30],[120,30]]],
['.Mainland','Eurasia.120.60',[[120,73.48],[118.804169,73.552223],[112.891945,75.701668],[97.41111,75.99472],[90,74.81],[90,60],[120,60]]],
['.Mainland','Eurasia.150.0',[[120,30],[121.64,30],[121.585556,29.145],[120.347504,27.116112],[120,26.63]]],
['.Mainland','Eurasia.150.30_1',[[121.734169,31.296112],[120,35.02],[120,30],[121.64,30]]],
['.Mainland','Eurasia.150.30_2',[[120,35.82],[121.727501,36.856945],[120,37.04]]],
['.Mainland','Eurasia.150.30_3',[[120,39.45],[121.504448,39.797222],[123.141945,39.677223],[125.577499,38.712776],[126.822502,37.62],[126.383057,36.634998],[126.403053,34.88361],[127.276108,34.510834],[128.487228,35.055557],[129.387497,36.248611],[128.054443,40.061943],[130.699722,42.71611],[133.33223,42.795555],[140.037506,52.81361],[136.88472,55.762501],[150,58.72],[150,60],[120,60]]],
['.Mainland','Eurasia.150.60',[[150,70.91],[140.200272,72.225281],[120,73.48],[120,60],[150,60]]],
['.Mainland','Eurasia.180.30_1',[[150,58.72],[152.223892,59.217499],[155,60],[150,60]]],
['.Mainland','Eurasia.180.30_2',[[162.97,60],[159.910828,53.422779],[163.77,60]]],
['.Mainland','Eurasia.180.60',[[152.223892,59.217499],[160.1,61.434166],[163.327499,60.82],[162.97,60],[163.77,60],[163.788055,60.049168],[172.29306,61.125278],[176.99,65.065277],[179.999,66.03],[179.999,68.69],[176.99,68.83],[161.886383,69.527496],[150,70.91],[150,60]]],
['.Mainland','Eurasia.210.60',[[181.299438,68.631386],[184.823883,67.426],[186.112228,66.507225],[186.836105,66.929443],[189.365005,65.605003],[187.71666,64.960281],[186.628616,64.303337],[183.645279,65.491943],[180.332779,66.144722],[180.332779,66.144722],[180,66.03],[180,68.69],[181.299438,68.631386]]],
['.Mainland','N.America.-150.30',[[-160.41,60],[-160.30278,58.999443],[-163.31,55.088055],[-160.893051,55.521667],[-153.24,60]]],
['.Mainland','N.America.-150.60',[[-150,70.7],[-155.002,71.1],[-160.3,66.6],[-161.0025,64.5],[-160.41,60],[-153.24,60],[-151.501938,60.999168],[-150,60.84]]],
['.Mainland','N.America.-120.30',[[-142.24,60],[-133.30278,56.499168],[-128.103058,51.499168],[-124.30278,42.298889],[-120,36.32],[-120,60]]],
['.Mainland','N.America.-120.60',[[-120,69.22],[-134.5,69.5],[-150,70.7],[-150,60.84],[-142.502,60.099167],[-142.24,60],[-120,60]]],
['.Mainland','N.America.-90.60',[[-90,69.74],[-92.9,70.99],[-96.402496,69.9],[-97.056946,68.366943],[-107.501945,68.199722],[-119.00222,69.199448],[-120,69.22],[-120,60],[-91.66,60],[-90,62]]],
['.Mainland','N.America.-90.30',[[-90,56.9],[-93.001945,58.399166],[-91.6,60],[-120,60],[-120,36.32],[-116.702225,31.798334],[-114.65,30],[-90.66,30],[-90,30.4]]],
['.Mainland','N.America.-90.0',[[-114.65,30],[-113.542503,29.026667],[-105.334,21.543],[-97.801941,15.999166],[-90,13.72],[-90,21.89],[-97.102219,26.099167],[-90.66,30]]],
['.Mainland','N.America.-60.0_1',[[-89.32,30],[-80.501945,24.998333],[-78.56,30]]],
['.Mainland','N.America.-60.0_2',[[-90,13.72],[-87.402496,12.999166],[-83.272224,8.502],[-80.001389,7.498611],[-80.501945,8.098056],[-79.692497,9.081944],[-86.50222,15.798056],[-89.102219,21.398611],[-90,21.89]]],
['.Mainland','N.America.-60.30',[[-78.56,30],[-75.902,36.899166],[-72.602501,40.999168],[-64.002,45.298611],[-65.00222,47.299446],[-60.802223,50.198891],[-60,51.8],[-60,55.1],[-60.502224,55.599167],[-63.202778,58.49889],[-65.602219,58.799446],[-67.82,60],[-77.22,60],[-75.902222,56.099167],[-81.702225,52.699165],[-90,56.9],[-90,30.4],[-90.002502,30.398333],[-89.32,30]]],
['.Mainland','N.America.-60.60_1',[[-67.82,60],[-69.702499,60.999168],[-77.847778,61.647499],[-77.24,60]]],
['.Mainland','N.America.-60.60_2',[[-90,62],[-88.202,64.2],[-83.302,65.6],[-83.701942,69.7],[-89.0025,69.3],[-90,69.74]]],
['.Mainland','N.America.-30.30',[[-60,51.8],[-58.902222,53.99889],[-60,55.1]]],
['.Mainland','S.America.-60.-60',[[-71.2,-30],[-71.6,-33.6],[-73.7,-41.6],[-75.7,-46.9],[-75.1,-51.8],[-68,-55.8],[-68.8,-52.6],[-66.3,-47.1],[-64.6,-42.5],[-60,-39.28],[-60,-30]]],
['.Mainland','S.America.-60.-30',[[-79.66,0],[-80.8,-2.2],[-79.1,-8.1],[-73.8,-16.2],[-70.5,-24.2],[-71.2,-30],[-60,-30],[-60,0]]],
['.Mainland','S.America.-60.0',[[-60,7.98],[-63.7,10.5],[-71.5,11],[-74.5,11],[-79.753,9.163],[-77.3,4.7],[-79.66,0],[-60,0]]],
['.Mainland','S.America.-30.-60',[[-60,-39.28],[-56.6,-36.9],[-50.8,-31.2],[-49.82,-30],[-60,-30]]],
['.Mainland','S.America.-30.-30',[[-49.82,-30],[-44.6,-23.4],[-39,-16.29],[-36.6,-5.1],[-47.4,-0.6],[-48.14,0],[-60,0],[-60,-30]]],
['.Mainland','S.America.-30.0',[[-48.14,0],[-50.484,1.82],[-58.29,6.9],[-60,7.98],[-60,0]]],
['.Arctic','Antarctica.-150.-90_1',[[-179.999,-78.3],[-158.3,-77.8],[-150,-76.5],[-150,-84],[-179.999,-84]]],
['.Arctic','Antarctica.-150.-90_2',[[-179.999,-84],[-179.999,-90],[-150,-90],[-150,-84],[-179.999,-84]]],
['.Arctic','Antarctica.-120.-90_1',[[-150,-76.5],[-146.19,-76],[-130,-74.19],[-120,-73.88],[-120,-84],[-150,-84]]],
['.Arctic','Antarctica.-120.-90_2',[[-150,-84],[-150,-90],[-120,-90],[-120,-84],[-150,-84]]],
['.Arctic','Antarctica.-90.-90_1',[[-120,-73.88],[-114,-73.8],[-100.8,-74.59],[-102.69,-72.09],[-90,-72.71],[-90,-84],[-120,-84]]],
['.Arctic','Antarctica.-90.-90_2',[[-120,-84],[-120,-90],[-90,-90],[-90,-84],[-120,-84]]],
['.Arctic','Antarctica.-60.-90_1',[[-90,-72.71],[-72,-73.19],[-73,-69.5],[-66,-66.8],[-60,-64.54],[-60,-73],[-61,-75.5],[-60,-75.62],[-60,-84],[-90,-84]]],
['.Arctic','Antarctica.-60.-90_2',[[-90,-84],[-90,-90],[-60,-90],[-60,-84],[-90,-84]]],
['.Arctic','Antarctica.-30.-90_1',[[-60,-64.54],[-58.5,-64],[-59.9,-68.19],[-60,-73]]],
['.Arctic','Antarctica.-30.-90_2',[[-60,-75.62],[-40,-77.9],[-30,-75.92],[-30,-84],[-60,-84]]],
['.Arctic','Antarctica.-30.-90_3',[[-60,-84],[-60,-90],[-30,-90],[-30,-84],[-60,-84]]],
['.Arctic','Antarctica.0.-90_1',[[-30,-75.92],[-23.9,-74.8],[-11,-71],[0,-70],[0,-84],[-30,-84]]],
['.Arctic','Antarctica.0.-90_2',[[-30,-84],[-30,-90],[0,-90],[0,-84],[-30,-84]]],
['.Arctic','Antarctica.30.-90_1',[[0,-70],[1,-69.9],[16,-70],[30,-69.42],[30,-84],[0,-84]]],
['.Arctic','Antarctica.30.-90_2',[[0,-84],[0,-90],[30,-90],[30,-84],[0,-84]]],
['.Arctic','Antarctica.60.-90_1',[[30,-69.42],[31.5,-69.5],[41,-68.5],[50,-67.09],[57,-67.09],[60,-67.3],[60,-84],[30,-84]]],
['.Arctic','Antarctica.60.-90_2',[[30,-84],[30,-90],[60,-90],[60,-84],[30,-84]]],
['.Arctic','Antarctica.90.-90_1',[[60,-67.3],[78,-69],[88.3,-66.19],[90,-66.14],[90,-84],[60,-84]]],
['.Arctic','Antarctica.90.-90_2',[[60,-84],[60,-90],[90,-90],[90,-84],[60,-84]]],
['.Arctic','Antarctica.120.-90_1',[[90,-66.14],[100.19,-66],[109.4,-66.59],[120,-66.64],[120,-84],[90,-84]]],
['.Arctic','Antarctica.120.-90_2',[[90,-84],[90,-90],[120,-90],[120,-84],[90,-84]]],
['.Arctic','Antarctica.150.-90_1',[[120,-66.64],[123.3,-66.69],[134,-66.09],[144.5,-67],[148.8,-67.69],[150,-67.88],[150,-84],[120,-84]]],
['.Arctic','Antarctica.150.-90_2',[[120,-84],[120,-90],[150,-90],[150,-84],[120,-84]]],
['.Arctic','Antarctica.180.-90_1',[[150,-67.88],[157,-69.09],[166,-70.59],[169,-73],[163,-75.5],[173,-77.59],[179.999,-78.3],[179.999,-84],[150,-84]]],
['.Arctic','Antarctica.180.-90_2',[[150,-84],[150,-90],[179.999,-90],[179.999,-84],[150,-84]]],
['.Arctic','Greenland.0.60',[[-30,83.4],[-27.5,83.4],[-26,82],[-28,82],[-23,81],[-15,81.2],[-20,80.3],[-20.5,78],[-22.29,76.5],[-20.5,73.9],[-22.4,70.5],[-25,69],[-30,67.74]]],
['.Arctic','Greenland.-30.60',[[-30,67.74],[-35.7,66.3],[-42.79,61],[-52.29,65],[-53,70.3],[-54,71.4],[-59,75.8],[-60,75.86],[-60,81.46],[-55.4,82.4],[-47.5,82.2],[-42.5,83.4],[-30,83.4]]],
['.Arctic','Greenland.-60.60',[[-60,75.87],[-69,76.5],[-70,77.5],[-66,79],[-62,81],[-60,81.45]]]
];