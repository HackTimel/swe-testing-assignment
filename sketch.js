let Buttons = []
let NumbersLabels = ["7","8","9","4","5","6","1","2","3","0"]; //digits labels

let OpLabels = ["+","-","x","/"];//operators labels

let Px ;
let Py ;
let Content = "0";
let Screen;
let CurrentNumber = 0;
let nextOp;



function setup() {
  createCanvas(325, 500);
  PlaceNumbers();
  PlaceOp()
  background("lightblue");
  Screen = createElement('textarea');
Screen.style('text-align', 'right');
  Screen.position(25,25)
  Screen.size(270,60)
  Screen.style('font-size', '30px');
  Screen.elt.value = "0"

  
  
  
  
  
  
}

function draw() {
  
}


function ApplyStyle(button)
{
  button.style("color", "darkred");
  button.size(50,50);
  button.style("background-color", "pink");
  button.style("border-color", "red");
  button.style("border-width", "3px");
  button.style("border-radius", "10px");
  
}

function PlaceNumbers()
{
  Px = 25;
  Py = 200;
  
  let cpt = 0;
  for(let i = 0;i<NumbersLabels.length;i++)
    {
      let tmp = createButton(NumbersLabels[i]);
      Buttons.push(tmp)
      tmp.position(Px,Py);
      ApplyStyle(tmp);
      tmp.mousePressed(OnClickNb)
      cpt++;
      if(cpt==3)
        {
          Py+=75
          cpt=0
        }
      Px+=75
      
      if(Px>225)
        {
          Px = 25
        }
    }
}


function PlaceOp()
{
  Px = 250;
  Py = 125;
  
  for(let i = 0;i<OpLabels.length;i++)
    {
      let tmp = createButton(OpLabels[i]);
      Buttons.push(tmp)
      tmp.position(Px,Py);
      ApplyStyle(tmp);
      tmp.mousePressed(OnClickOp)
      Py+=75
      
    }
  
  
}

function OnClickNb()
{
  if(Content == "0")
    {
    Content=this.html()
    CurrentNumber = parseInt(Content)
    
    }
    else
      {
    Content+=this.html()
        CurrentNumber*=10
        CurrentNumber+=parseInt(this.html())
        console.log(CurrentNumber)
      }
        RefreshScreen()
  
}

function OnClickOp()
{

  Content+=this.html()
  nextOp = this.html()
  RefreshScreen()
} 
  


function RefreshScreen()
{
  background("lightblue")
  Screen.elt.value = Content
  
  
  
}

