(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{155:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/example-mask-poly-46536487e8112e2adb5834ccc0525c20.png"},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),o=a(7),i=(a(0),a(96)),r={id:"cameras",title:"Cameras"},s={unversionedId:"configuration/cameras",id:"configuration/cameras",isDocsHomePage:!1,title:"Cameras",description:"Setting Up Camera Inputs",source:"@site/docs/configuration/cameras.md",slug:"/configuration/cameras",permalink:"/frigate/configuration/cameras",editUrl:"https://github.com/blakeblackshear/frigate/edit/master/docs/docs/configuration/cameras.md",version:"current",sidebar:"docs",previous:{title:"Configuration",permalink:"/frigate/configuration/index"},next:{title:"Optimizing performance",permalink:"/frigate/configuration/optimizing"}},l=[{value:"Setting Up Camera Inputs",id:"setting-up-camera-inputs",children:[{value:"Example",id:"example",children:[]}]},{value:"Masks &amp; Zones",id:"masks--zones",children:[{value:"Masks",id:"masks",children:[]},{value:"Zones",id:"zones",children:[]}]},{value:"Objects",id:"objects",children:[]},{value:"Clips",id:"clips",children:[]},{value:"Snapshots",id:"snapshots",children:[]},{value:"24/7 Recordings",id:"247-recordings",children:[]},{value:"RTMP streams",id:"rtmp-streams",children:[]},{value:"Full example",id:"full-example",children:[]},{value:"Camera specific configuration",id:"camera-specific-configuration",children:[{value:"RTMP Cameras",id:"rtmp-cameras",children:[]},{value:"Blue Iris RTSP Cameras",id:"blue-iris-rtsp-cameras",children:[]}]}],c={toc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"setting-up-camera-inputs"},"Setting Up Camera Inputs"),Object(i.b)("p",null,"Up to 4 inputs can be configured for each camera and the role of each input can be mixed and matched based on your needs. This allows you to use a lower resolution stream for object detection, but create clips from a higher resolution stream, or vice versa."),Object(i.b)("p",null,"Each role can only be assigned to one input per camera. The options for roles are as follows:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Role"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"detect")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Main feed for object detection")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"clips")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clips of events from objects detected in the ",Object(i.b)("inlineCode",{parentName:"td"},"detect")," feed. ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#recording-clips"}),"docs"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"record")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Saves 60 second segments of the video feed. ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#247-recordings"}),"docs"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"rtmp")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Broadcast as an RTMP feed for other services to consume. ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#rtmp-streams"}),"docs"))))),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"mqtt:\n  host: mqtt.server.com\ncameras:\n  back:\n    ffmpeg:\n      inputs:\n        - path: rtsp://viewer:{FRIGATE_RTSP_PASSWORD}@10.0.10.10:554/cam/realmonitor?channel=1&subtype=2\n          roles:\n            - detect\n            - rtmp\n        - path: rtsp://viewer:{FRIGATE_RTSP_PASSWORD}@10.0.10.10:554/live\n          roles:\n            - clips\n            - record\n    width: 1280\n    height: 720\n    fps: 5\n")),Object(i.b)("h2",{id:"masks--zones"},"Masks & Zones"),Object(i.b)("h3",{id:"masks"},"Masks"),Object(i.b)("p",null,"Masks are used to ignore initial detection in areas of your camera's field of view."),Object(i.b)("p",null,"There are two types of masks available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Motion masks"),": Motion masks are used to prevent unwanted types of motion from triggering detection. Try watching the video feed with ",Object(i.b)("inlineCode",{parentName:"li"},"Motion Boxes")," enabled to see what may be regularly detected as motion. For example, you want to mask out your timestamp, the sky, rooftops, etc. Keep in mind that this mask only prevents motion from being detected and does not prevent objects from being detected if object detection was started due to motion in unmasked areas. Motion is also used during object tracking to refine the object detection area in the next frame. Over masking will make it more difficult for objects to be tracked. To see this effect, create a mask, and then watch the video feed with ",Object(i.b)("inlineCode",{parentName:"li"},"Motion Boxes")," enabled again."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Object filter masks"),": Object filter masks are used to filter out false positives for a given object type. These should be used to filter any areas where it is not possible for an object of that type to be. The bottom center of the detected object's bounding box is evaluated against the mask. If it is in a masked area, it is assumed to be a false positive. For example, you may want to mask out rooftops, walls, the sky, treetops for people. For cars, masking locations other than the street or your driveway will tell frigate that anything in your yard is a false positive.")),Object(i.b)("p",null,"To create a poly mask:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Visit the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/usage/web"}),"web UI")),Object(i.b)("li",{parentName:"ol"},"Click the camera you wish to create a mask for"),Object(i.b)("li",{parentName:"ol"},'Click "Mask & Zone creator"'),Object(i.b)("li",{parentName:"ol"},'Click "Add" on the type of mask or zone you would like to create'),Object(i.b)("li",{parentName:"ol"},"Click on the camera's latest image to create a masked area. The yaml representation will be updated in real-time"),Object(i.b)("li",{parentName:"ol"},'When you\'ve finished creating your mask, click "Copy" and paste the contents into your ',Object(i.b)("inlineCode",{parentName:"li"},"config.yaml")," file and restart Frigate")),Object(i.b)("p",null,"Example of a finished row corresponding to the below example image:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"motion:\n  mask: '0,461,3,0,1919,0,1919,843,1699,492,1344,458,1346,336,973,317,869,375,866,432'\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"poly",src:a(155).default})),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# Optional: camera level motion config\nmotion:\n  # Optional: motion mask\n  # NOTE: see docs for more detailed info on creating masks\n  mask: 0,900,1080,900,1080,1920,0,1920\n")),Object(i.b)("h3",{id:"zones"},"Zones"),Object(i.b)("p",null,"Zones allow you to define a specific area of the frame and apply additional filters for object types so you can determine whether or not an object is within a particular area. Zones cannot have the same name as a camera. If desired, a single zone can include multiple cameras if you have multiple cameras covering the same area by configuring zones with the same name for each camera."),Object(i.b)("p",null,"During testing, ",Object(i.b)("inlineCode",{parentName:"p"},"draw_zones")," should be set in the config to draw the zone on the frames so you can adjust as needed. The zone line will increase in thickness when any object enters the zone."),Object(i.b)("p",null,'To create a zone, follow the same steps above for a "Motion mask", but use the section of the web UI for creating a zone instead.'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# Optional: zones for this camera\nzones:\n  # Required: name of the zone\n  # NOTE: This must be different than any camera names, but can match with another zone on another\n  #       camera.\n  front_steps:\n    # Required: List of x,y coordinates to define the polygon of the zone.\n    # NOTE: Coordinates can be generated at https://www.image-map.net/\n    coordinates: 545,1077,747,939,788,805\n    # Optional: Zone level object filters.\n    # NOTE: The global and camera filters are applied upstream.\n    filters:\n      person:\n        min_area: 5000\n        max_area: 100000\n        threshold: 0.7\n")),Object(i.b)("h2",{id:"objects"},"Objects"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# Optional: Camera level object filters config.\nobjects:\n  track:\n    - person\n    - car\n  filters:\n    person:\n      min_area: 5000\n      max_area: 100000\n      min_score: 0.5\n      threshold: 0.7\n      # Optional: mask to prevent this object type from being detected in certain areas (default: no mask)\n      # Checks based on the bottom center of the bounding box of the object\n      mask: 0,0,1000,0,1000,200,0,200\n")),Object(i.b)("h2",{id:"clips"},"Clips"),Object(i.b)("p",null,"Frigate can save video clips without any CPU overhead for encoding by simply copying the stream directly with FFmpeg. It leverages FFmpeg's segment functionality to maintain a cache of video for each camera. The cache files are written to disk at ",Object(i.b)("inlineCode",{parentName:"p"},"/tmp/cache")," and do not introduce memory overhead. When an object is being tracked, it will extend the cache to ensure it can assemble a clip when the event ends. Once the event ends, it again uses FFmpeg to assemble a clip by combining the video clips without any encoding by the CPU. Assembled clips are are saved to ",Object(i.b)("inlineCode",{parentName:"p"},"/media/frigate/clips"),". Clips are retained according to the retention settings defined on the config for each object type."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Previous versions of frigate included ",Object(i.b)("inlineCode",{parentName:"p"},"-vsync drop")," in input parameters. This is not compatible with FFmpeg's segment feature and must be removed from your input parameters if you have overrides set."))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"clips:\n  # Required: enables clips for the camera (default: shown below)\n  # This value can be set via MQTT and will be updated in startup based on retained value\n  enabled: False\n  # Optional: Number of seconds before the event to include in the clips (default: shown below)\n  pre_capture: 5\n  # Optional: Number of seconds after the event to include in the clips (default: shown below)\n  post_capture: 5\n  # Optional: Objects to save clips for. (default: all tracked objects)\n  objects:\n    - person\n  # Optional: Camera override for retention settings (default: global values)\n  retain:\n    # Required: Default retention days (default: shown below)\n    default: 10\n    # Optional: Per object retention days\n    objects:\n      person: 15\n")),Object(i.b)("h2",{id:"snapshots"},"Snapshots"),Object(i.b)("p",null,"Frigate can save a snapshot image to ",Object(i.b)("inlineCode",{parentName:"p"},"/media/frigate/clips")," for each event named as ",Object(i.b)("inlineCode",{parentName:"p"},"<camera>-<id>.jpg"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# Optional: Configuration for the jpg snapshots written to the clips directory for each event\nsnapshots:\n  # Optional: Enable writing jpg snapshot to /media/frigate/clips (default: shown below)\n  # This value can be set via MQTT and will be updated in startup based on retained value\n  enabled: False\n  # Optional: print a timestamp on the snapshots (default: shown below)\n  timestamp: False\n  # Optional: draw bounding box on the snapshots (default: shown below)\n  bounding_box: False\n  # Optional: crop the snapshot (default: shown below)\n  crop: False\n  # Optional: height to resize the snapshot to (default: original size)\n  height: 175\n  # Optional: Camera override for retention settings (default: global values)\n  retain:\n    # Required: Default retention days (default: shown below)\n    default: 10\n    # Optional: Per object retention days\n    objects:\n      person: 15\n")),Object(i.b)("h2",{id:"247-recordings"},"24/7 Recordings"),Object(i.b)("p",null,"24/7 recordings can be enabled and are stored at ",Object(i.b)("inlineCode",{parentName:"p"},"/media/frigate/recordings"),". The folder structure for the recordings is ",Object(i.b)("inlineCode",{parentName:"p"},"YYYY-MM/DD/HH/<camera_name>/MM.SS.mp4"),". These recordings are written directly from your camera stream without re-encoding and are available in HomeAssistant's media browser. Each camera supports a configurable retention policy in the config."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Previous versions of frigate included ",Object(i.b)("inlineCode",{parentName:"p"},"-vsync drop")," in input parameters. This is not compatible with FFmpeg's segment feature and must be removed from your input parameters if you have overrides set."))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# Optional: 24/7 recording configuration\nrecord:\n  # Optional: Enable recording (default: global setting)\n  enabled: False\n  # Optional: Number of days to retain (default: global setting)\n  retain_days: 30\n")),Object(i.b)("h2",{id:"rtmp-streams"},"RTMP streams"),Object(i.b)("p",null,"Frigate can re-stream your video feed as a RTMP feed for other applications such as HomeAssistant to utilize it at ",Object(i.b)("inlineCode",{parentName:"p"},"rtmp://<frigate_host>/live/<camera_name>"),". Port 1935 must be open. This allows you to use a video feed for detection in frigate and HomeAssistant live view at the same time without having to make two separate connections to the camera. The video feed is copied from the original video feed directly to avoid re-encoding. This feed does not include any annotation by Frigate."),Object(i.b)("p",null,"Some video feeds are not compatible with RTMP. If you are experiencing issues, check to make sure your camera feed is h264 with AAC audio. If your camera doesn't support a compatible format for RTMP, you can use the ffmpeg args to re-encode it on the fly at the expense of increased CPU utilization."),Object(i.b)("h2",{id:"full-example"},"Full example"),Object(i.b)("p",null,"The following is a full example of all of the options together for a camera configuration"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"cameras:\n  # Required: name of the camera\n  back:\n    # Required: ffmpeg settings for the camera\n    ffmpeg:\n      # Required: A list of input streams for the camera. See documentation for more information.\n      inputs:\n        # Required: the path to the stream\n        # NOTE: Environment variables that begin with 'FRIGATE_' may be referenced in {}\n        - path: rtsp://viewer:{FRIGATE_RTSP_PASSWORD}@10.0.10.10:554/cam/realmonitor?channel=1&subtype=2\n          # Required: list of roles for this stream. valid values are: detect,record,clips,rtmp\n          # NOTICE: In addition to assigning the record, clips, and rtmp roles,\n          # they must also be enabled in the camera config.\n          roles:\n            - detect\n            - rtmp\n          # Optional: stream specific global args (default: inherit)\n          global_args:\n          # Optional: stream specific hwaccel args (default: inherit)\n          hwaccel_args:\n          # Optional: stream specific input args (default: inherit)\n          input_args:\n\n      # Optional: camera specific global args (default: inherit)\n      global_args:\n      # Optional: camera specific hwaccel args (default: inherit)\n      hwaccel_args:\n      # Optional: camera specific input args (default: inherit)\n      input_args:\n      # Optional: camera specific output args (default: inherit)\n      output_args:\n\n    # Required: width of the frame for the input with the detect role\n    width: 1280\n    # Required: height of the frame for the input with the detect role\n    height: 720\n    # Optional: desired fps for your camera for the input with the detect role\n    # NOTE: Recommended value of 5. Ideally, try and reduce your FPS on the camera.\n    #       Frigate will attempt to autodetect if not specified.\n    fps: 5\n\n    # Optional: camera level motion config\n    motion:\n      # Optional: motion mask\n      # NOTE: see docs for more detailed info on creating masks\n      mask: 0,900,1080,900,1080,1920,0,1920\n\n    # Optional: timeout for highest scoring image before allowing it\n    # to be replaced by a newer image. (default: shown below)\n    best_image_timeout: 60\n\n    # Optional: zones for this camera\n    zones:\n      # Required: name of the zone\n      # NOTE: This must be different than any camera names, but can match with another zone on another\n      #       camera.\n      front_steps:\n        # Required: List of x,y coordinates to define the polygon of the zone.\n        # NOTE: Coordinates can be generated at https://www.image-map.net/\n        coordinates: 545,1077,747,939,788,805\n        # Optional: Zone level object filters.\n        # NOTE: The global and camera filters are applied upstream.\n        filters:\n          person:\n            min_area: 5000\n            max_area: 100000\n            threshold: 0.7\n\n    # Optional: Camera level detect settings\n    detect:\n      # Optional: enables detection for the camera (default: True)\n      # This value can be set via MQTT and will be updated in startup based on retained value\n      enabled: True\n      # Optional: Number of frames without a detection before frigate considers an object to be gone. (default: double the frame rate)\n      max_disappeared: 10\n\n    # Optional: save clips configuration\n    clips:\n      # Required: enables clips for the camera (default: shown below)\n      # This value can be set via MQTT and will be updated in startup based on retained value\n      enabled: False\n      # Optional: Number of seconds before the event to include in the clips (default: shown below)\n      pre_capture: 5\n      # Optional: Number of seconds after the event to include in the clips (default: shown below)\n      post_capture: 5\n      # Optional: Objects to save clips for. (default: all tracked objects)\n      objects:\n        - person\n      # Optional: Camera override for retention settings (default: global values)\n      retain:\n        # Required: Default retention days (default: shown below)\n        default: 10\n        # Optional: Per object retention days\n        objects:\n          person: 15\n\n    # Optional: 24/7 recording configuration\n    record:\n      # Optional: Enable recording (default: global setting)\n      enabled: False\n      # Optional: Number of days to retain (default: global setting)\n      retain_days: 30\n\n    # Optional: RTMP re-stream configuration\n    rtmp:\n      # Required: Enable the live stream (default: True)\n      enabled: True\n\n    # Optional: Configuration for the jpg snapshots written to the clips directory for each event\n    snapshots:\n      # Optional: Enable writing jpg snapshot to /media/frigate/clips (default: shown below)\n      # This value can be set via MQTT and will be updated in startup based on retained value\n      enabled: False\n      # Optional: print a timestamp on the snapshots (default: shown below)\n      timestamp: False\n      # Optional: draw bounding box on the snapshots (default: shown below)\n      bounding_box: False\n      # Optional: crop the snapshot (default: shown below)\n      crop: False\n      # Optional: height to resize the snapshot to (default: original size)\n      height: 175\n      # Optional: Camera override for retention settings (default: global values)\n      retain:\n        # Required: Default retention days (default: shown below)\n        default: 10\n        # Optional: Per object retention days\n        objects:\n          person: 15\n\n    # Optional: Configuration for the jpg snapshots published via MQTT\n    mqtt:\n      # Optional: Enable publishing snapshot via mqtt for camera (default: shown below)\n      # NOTE: Only applies to publishing image data to MQTT via 'frigate/<camera_name>/<object_name>/snapshot'.\n      # All other messages will still be published.\n      enabled: True\n      # Optional: print a timestamp on the snapshots (default: shown below)\n      timestamp: True\n      # Optional: draw bounding box on the snapshots (default: shown below)\n      bounding_box: True\n      # Optional: crop the snapshot (default: shown below)\n      crop: True\n      # Optional: height to resize the snapshot to (default: shown below)\n      height: 270\n\n    # Optional: Camera level object filters config.\n    objects:\n      track:\n        - person\n        - car\n      filters:\n        person:\n          min_area: 5000\n          max_area: 100000\n          min_score: 0.5\n          threshold: 0.7\n          # Optional: mask to prevent this object type from being detected in certain areas (default: no mask)\n          # Checks based on the bottom center of the bounding box of the object\n          mask: 0,0,1000,0,1000,200,0,200\n")),Object(i.b)("h2",{id:"camera-specific-configuration"},"Camera specific configuration"),Object(i.b)("h3",{id:"rtmp-cameras"},"RTMP Cameras"),Object(i.b)("p",null,"The input parameters need to be adjusted for RTMP cameras"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"ffmpeg:\n  input_args:\n    - -avoid_negative_ts\n    - make_zero\n    - -fflags\n    - nobuffer\n    - -flags\n    - low_delay\n    - -strict\n    - experimental\n    - -fflags\n    - +genpts+discardcorrupt\n    - -use_wallclock_as_timestamps\n    - '1'\n")),Object(i.b)("h3",{id:"blue-iris-rtsp-cameras"},"Blue Iris RTSP Cameras"),Object(i.b)("p",null,"You will need to remove ",Object(i.b)("inlineCode",{parentName:"p"},"nobuffer")," flag for Blue Iris RTSP cameras"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"ffmpeg:\n  input_args:\n    - -avoid_negative_ts\n    - make_zero\n    - -flags\n    - low_delay\n    - -strict\n    - experimental\n    - -fflags\n    - +genpts+discardcorrupt\n    - -rtsp_transport\n    - tcp\n    - -stimeout\n    - '5000000'\n    - -use_wallclock_as_timestamps\n    - '1'\n")))}d.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,u=p["".concat(r,".").concat(m)]||p[m]||b[m]||i;return a?o.a.createElement(u,s(s({ref:t},c),{},{components:a})):o.a.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);