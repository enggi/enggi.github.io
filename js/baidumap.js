    function initMap(){
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
      addMapOverlay();//向地图添加覆盖物
    }  



    //创建地图函数
    function createMap(){                                                  
      map = new BMap.Map("map");    //在指定的容器内创建地图实例
      map.centerAndZoom(new BMap.Point(121.539203,31.230552),13);//设置地图中心点地理坐标，并改变缩放等级。在创建地图实例后应立即调用此方法对地图进行初始化。 
    }



    //设置地图事件函数
    function setMapEvent(){                                                    
      map.enableScrollWheelZoom();//启用滚轮放大缩小，默认禁用。
      map.enableKeyboard();      //用键盘操作，默认禁用。  键盘的上、下、左、右键可连续移动地图。同时按下 其中两个键可使地图进行对角移动。PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级  
      map.enableDragging();      //启用地图拖拽，默认启用。
      map.enableDoubleClickZoom()//启用双击放大，默认启用。
    }




    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);                 //打开信息窗
      });
    }




     //向地图添加覆盖物函数
    function addMapOverlay(){                                                  
      var markers = [
        {content:"地址：上海市浦东新区世纪大道1500号527室  电话：02151985787",
        title:"上海彦集电子商务有限公司",
        imageOffset: {width:0,height:3},position:{lat:31.231039,lng:121.5391}},
      ];
      for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);                       //以指定的经度和纬度创建一个地理点坐标
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("images/mapmark.jpg",new BMap.Size(20,25),{         //指定位置，在点的坐标出添加图标
          imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(22,5)});             //offset偏移,label创建一个文本标注实例。point参数指定了文本标注所在的地理位置。
        var opts = {
          width: 200,
          title: markers[index].title,
          enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);    //将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次。
      };
      var labels = [
      ];
      for(var index = 0; index < labels.length; index++){
        var opt = { position: new BMap.Point(labels[index].position.lng,labels[index].position.lat )};
        var label = new BMap.Label(labels[index].content,opt);
        map.addOverlay(label);     //将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次。
      };
    }





    //向地图添加控件
    function addMapControl(){   

      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});//ScaleControl创建一个比例尺控件
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);//设置比例尺单位制
      map.addControl(scaleControl);//将控件添加到地图，一个控件实例只能向地图中添加一次。

      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});//添加缩放平移控件
      map.addControl(navControl);//将控件添加到地图，一个控件实例只能向地图中添加一次。

      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});//添加缩略图控件
      map.addControl(overviewControl);//将控件添加到地图，一个控件实例只能向地图中添加一次。
    }



    // var map;
      initMap();