/**
* Developer : Mark Hiner (hiner@wisc.edu)
* All code (c)2011 Mark Hiner, all rights reserved
**/


function listNode (d)
{
	this.prev = null;
	this.next = null;
	this.data = d;
}

listNode.prototype.getData = function()
{
	return this.data;
}

listNode.prototype.setPrev = function(node)
{
	this.prev = node;
}

listNode.prototype.setNext = function(node)
{
	this.next = node;
}
