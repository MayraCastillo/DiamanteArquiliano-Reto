function iniciar()
{
   moverVertical();
   moverHorizontal();
   moverDiagonal();
}

function moverVertical()
{
   var imgV = document.getElementById('vertical');
   imgV.style.animationDuration = "1s";
   imgV.style.animationName = "moverVertical";
   imgV.style.animationIterationCount = "infinite";
   imgV.style.animationDirection = "alternate";
   imgV.style.animationTimingFunction = "linear";
}

function moverHorizontal()
{
   var imgH = document.getElementById('horizontal');
   imgH.style.animationDuration = "1s";
   imgH.style.animationName = "moverHorizontal";
   imgH.style.animationIterationCount = "infinite";
   imgH.style.animationDirection = "alternate";
   imgH.style.animationTimingFunction = "linear";
}

function moverDiagonal()
{
   var imgD = document.getElementById('diagonal');
   imgD.style.animationDuration = "1s";
   imgD.style.animationName = "moverDiagonal";
   imgD.style.animationIterationCount = "infinite";
   imgD.style.animationDirection = "alternate";
   imgD.style.animationTimingFunction = "linear";
}
