//let Buttons = []
let NumbersLabels = ["7","8","9","4","5","6","1","2","3","0"]; //digits labels

let OpLabels = ["+","-","*","/","="];//operators labels

let Px ; //position in x used for placing the buttons
let Py ;//position in y used for placing the buttons
let Content = "0"; //Content to display on the screen
let Screen; //text area to display the Content


function setup() {
  createCanvas(325, 500);
  PlaceNumbers();
  PlaceOp()
  background("lightblue");
  PlaceTextArea() //creation and placement of the text area
  
  let CButton = createButton("C")//creation of the C button, dosen't need an entire function
  ApplyStyle(CButton)
  CButton.position(25,125)
  CButton.mousePressed(OnClickC)  
}


function PlaceTextArea()
{
  Screen = createElement('textarea');
  Screen.style('text-align', 'right');
  Screen.position(25,25)
  Screen.size(270,60)
  Screen.style('font-size', '30px');
  Screen.elt.value = "0"
}
function ApplyStyle(button)//style of the differents buttons
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

      tmp.position(Px,Py);
      ApplyStyle(tmp);
      if(OpLabels[i]!="=")
      {
      tmp.mousePressed(OnClickOp)
      }
      else
      {
        tmp.mousePressed(OnClickEqual)
      }
      Py+=75
      
    }
}

function OnClickNb()
{
  if(Content == "0")
    {
    Content=this.html()
    
    
    }
    else
      {
    Content+=this.html()
        
      }
        RefreshScreen()
  
}

function OnClickOp()
{

  if(Content == "0")
  {
    Content = this.html()
  }
  else
  {
    Content+=this.html()
  }

  
  
  RefreshScreen()
} 
  

function OnClickEqual()
{
  Screen.elt.value = Calcul(Content)//eval(Content)

}

function OnClickC() //the C button reset the Content to display
{
  Content = 0

  RefreshScreen()
}


function RefreshScreen()
{
  
  Screen.elt.value = Content
    
}

function Calcul(input)
{
  if(input.includes("/0"))
  {
    return("Division by 0 !") //Division by 0 case
  }
  else
  {
  return eval(input) //else return the result
  }
}
