const container = document.querySelector('.container')
const wrapper = new PIXI.Container()
const graphics = new PIXI.Graphics()

let app = new PIXI.Application(
    { 
      width: container.offsetWidth, 
      height: container.offsetHeight
    }
  );
container.appendChild(app.view)


// creating sprite
let plane = PIXI.Sprite.from('../assets/sample.png')

plane.position.x = 0
plane.position.y = 300


const rightPostBtnsX = container.offsetWidth - 30
const rightPostBtnsY = container.offsetHeight - 100

let buttonUp = graphics
      .beginFill(0xDBFFDB)
      .drawCircle(rightPostBtnsX, rightPostBtnsY, 20, 20, 50)

const buttonDown = graphics
      .beginFill(0xDBFFDB)
      .drawCircle(rightPostBtnsX, rightPostBtnsY + 50, 20, 20, 50)


app.stage.addChild(plane);
app.stage.addChild(buttonUp)

buttonUp.interactive = true
// buttonDown.interactive = true
buttonUp.on('pointerdown', onButtonUp)
// buttonDown.on('pointerdown', onButtonDown)



function onButtonUp () {
  // console.log('hello up')
  function update() {
      plane.position.y -= 0.2;
      app.render(app.stage);
      requestAnimationFrame(update);
  }
  update()
  
}

// function onButtonDown () {
//   console.log('hello down')
//   function update() {
//       plane.position.y += 0.2;
//       app.render(app.stage);
//       requestAnimationFrame(update);
//   }
//   update()
  
// }




 // Draw a green rectangle
 // const rect = graphics
 //     .beginFill(0x00ff00)
 //     .drawRect(40, 40, 200, 200);

 // Add a blur filter
// plane.filters = [new PIXI.filters.BlurFilter()];