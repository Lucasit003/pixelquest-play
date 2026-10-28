/* revfix-oct27 (exploit4 F6): the Travel tips / Getting started card sat over the hub's interact prompt ("Hire a companion at the
   roster boa..."). clearOfCard(a,c,width) takes the prompt's and the card's rects (stage coordinates, {left,top,right,bottom})
   and the stage width; it returns null when they are already apart (8 px gap), else where the prompt goes: {x} = its new centre,
   sliding sideways to the nearer side of the card that has room, or {y} = its new bottom edge, under the card, when neither side has. */
export function clearOfCard(a,c,width,g=8){if(!(a.left<c.right+g&&a.right>c.left-g&&a.top<c.bottom+g&&a.bottom>c.top-g))return null;
 const hw=(a.right-a.left)/2,cx=a.left+hw,fits=x=>x-hw>=g&&x+hw<=width-g,xs=[Math.floor(c.left-g-hw),Math.ceil(c.right+g+hw)].filter(fits).sort((p,q)=>Math.abs(p-cx)-Math.abs(q-cx));
 return xs.length?{x:xs[0]}:{y:Math.round(c.bottom+g+(a.bottom-a.top))};}
