


function particle(red, green, blue, xpos, ypos, xst, yst)
{
    this.r = red;
    this.g = green;
    this.b = blue;
    this.x = xpos;
    this.y = ypos;
    this.children = new linkedList();
    this.parent = null;
    this.xstep = xst;
    this.ystep = yst;
    this.cInc = true;
}

particle.prototype.setLeader = function()
{
    this.isLeader = true;
}

particle.prototype.addChild = function(c)
{
    this.children.add(c);
}

particle.prototype.updateColors = function()
{
    if(this.r == 0 || this.g == 0 || this.b == 0) {
        this.cInc = true;
    }
    else if(this.r == 255 || this.g == 255 || this.b == 255) {
        this.cInc = false;
    }
    
    if(this.cInc === true) {
        //this.r++;
        //this.g++;
        //this.b++;
    }
    else {
        //this.r--;
        //this.g--;
        //this.b--;
    }
}
