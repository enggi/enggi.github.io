    //´´½¨ºÍ³õÊ¼»¯µØÍ¼º¯Êý£º
    function initMap(){
      createMap();//´´½¨µØÍ¼
      setMapEvent();//ÉèÖÃµØÍ¼ÊÂ¼þ
      addMapControl();//ÏòµØÍ¼Ìí¼Ó¿Ø¼þ
      addMapOverlay();//ÏòµØÍ¼Ìí¼Ó¸²¸ÇÎï
    }
    function createMap(){ 
      map = new BMap.Map("map"); 
      map.centerAndZoom(new BMap.Point(121.53945,31.230819),15);
    }
    function setMapEvent(){
      map.enableScrollWheelZoom();
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom()
    }
    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay(){
      var markers = [
        {content:"ÉÏº£ÊÐÆÖ¶«ÐÂÇøÊÀ¼Í´óµÀ1500ºÅ527ÊÒ£¨¶«·½´óÏÃ£©",title:"ÉÏº£Ñå¼¯µç×ÓÉÌÎñÓÐÏÞ¹«Ë¾",imageOffset: {width:0,height:3},position:{lat:31.230992,lng:121.539171}}
      ];
      for(var index = 0; index < markers.length; index++ ){s
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
          imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
          width: 200,
          title: markers[index].title,
          enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
      };
      var labels = [
      ];
      for(var index = 0; index < labels.length; index++){
        var opt = { position: new BMap.Point(labels[index].position.lng,labels[index].position.lat)};
        var label = new BMap.Label(labels[index].content,opt);
        map.addOverlay(label);
      };
    }
    //ÏòµØÍ¼Ìí¼Ó¿Ø¼þ
    function addMapControl(){
      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      map.addControl(navControl);
      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
      map.addControl(overviewControl);
    }
    var map;
      initMap();
