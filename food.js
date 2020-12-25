var dog , dogImg , happydogImg , database ,foods , foodstock;

function preload()
{
  //load images here
  dogImg=loadImage("image/dogImg.png");
  happydogImg=loadImage("image/happydogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodstock=database.ref("food");
  foodstock.on("value",readStock);

  dog = createSprite(250,350,10,60);
  dog.addImage(dogImg)
  dog.scale = 0.2;

  function readStock(data){
    foods=data.val();

  }
fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
});

feed=creareButton("feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);

fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed :"+ lastFed%12+"PM",350,30);
}else if (last==0){
  text("Last Feed : 12 AM ",350,30);
}else{
  text("Last Feed : "+ lastFed + "AM", 350,30);

}

function feedDog(){
  dog.addImage(happyDog);
  
  foodobj.updateFoodStock(foodObj.getFoodStock()-1)};
  database.ref('/').updata({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}


  function writeStock(x){

    database.ref('/').updata({
      Food:x
    })
  }


