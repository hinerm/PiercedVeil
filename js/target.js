

function target(red, green, blue, xpos, ypos)
{
    this.r = red;
    this.g = green;
    this.b = blue;
    this.x = xpos;
    this.y = ypos;
    
    if(beginLink === true) {
        linkSwarm.add(this);
        this.g += 50;
        this.b += 120;
        
        if(this.r > 255) this.r = 255;
        if(this.g > 255) this.g = 255;
        if(this.b > 255) this.b = 255;
        
        this.address = curLinkAddr;
    }
}