import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, Platform} from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

declare var google;
/**
 * Generated class for the MapDirectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map-direction',
  templateUrl: 'map-direction.html',
})
export class MapDirectionPage {

  	@ViewChild('map') mapRef : ElementRef;
    name: DoubleRange;
    start:string;
    end:string;
	  map:any;
  constructor(public navCtrl: NavController, public navParams: NavParams , public plt : Platform) {
    this.plt.ready().then(() =>{
       this.start = 'penn station, new york, ny'; //{lat:xxxx,lng:xxxxxx}
       this.end = 'grand central station, new york, ny';
      this.showMap();
    });
  }
  ngOnInit(){
    this.name = this.navParams.get('userName');
  }

  ionViewWillEnter(){
  	this.showMap();
  }

  showMap(){
    var markerArray = [];
    //declear>>>
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    //declear<<<
    const options = {
       zoom: 13,
       center: {lat: 40.771, lng: -73.974}
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
    directionsDisplay.setMap(this.map);

    // Instantiate an info window to hold step text.
    var stepDisplay = new google.maps.InfoWindow;

    // Display the route between the initial start and end selections.
    this.calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, this.map);
  }
  calculateAndDisplayRoute(directionsDisplay, directionsService,markerArray, stepDisplay, map) {
        // First, remove any existing markers from the map.
        for (var i = 0; i < markerArray.length; i++) {
          markerArray[i].setMap(null);
        }

        // Retrieve the start and end locations and create a DirectionsRequest using
        // WALKING directions.
        directionsService.route({
          origin: 'Bangkok',
          destination: this.name,
          travelMode: 'DRIVING'
        }, function(response, status) {
          // Route the directions and pass the response to a function to create
          // markers for each step.
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            //showSteps(response, markerArray, stepDisplay, map);
            //>>>>
            var myRoute = response.routes[0].legs[0];
              for (var i = 0; i < myRoute.steps.length; i++) {
                var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
                marker.setMap(map);
                marker.setPosition(myRoute.steps[i].start_location);
                //attachInstructionText(stepDisplay, marker, myRoute.steps[i].instructions, map);
                //>>>
                google.maps.event.addListener(marker, 'click', function() {
                  // Open an info window when the marker is clicked on, containing the text
                  // of the step.
                  var getposition_lat = marker.getPosition().lat();
                  var getposition_lng = marker.getPosition().lng();
                  alert(JSON.stringify(myRoute));
                  stepDisplay.setContent(myRoute.steps[0].instructions+"<br>"+getposition_lat+"<br>"+getposition_lng+"<br>");
                  stepDisplay.open(map, marker);
                });
                //>>>
              }
             //>>>
          } else {
            alert('ไม่สามารถระบุแผนที่ได้');
          }
        });
      }

}
