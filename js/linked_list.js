/**
* Developer : Mark Hiner (hiner@wisc.edu)
* All code (c)2011 Mark Hiner, all rights reserved
**/

function linkedList ()
{
	this.head = null;
	this.tail = null;
	this.length = 0;
}

// returns the data of the node at index ind, using a 0-index system
linkedList.prototype.at = function (ind)
{
	if(ind <= this.length && this.length > 0)
	{
		var tmpNode = this.head;
		for(i=0; i<ind; i++)
		{
			tmpNode = tmpNode.next;
		}
		return tmpNode;
	}
	else
	{
		return null;
	}
}

// creates a new node with data = d and adds it to the end of this list
linkedList.prototype.add = function (d)
{
	var tmpNode = new listNode(d);
	if(this.head == null)
	{
		this.head = tmpNode;
		this.tail = tmpNode;
	}
	else
	{
		this.tail.setNext(tmpNode);
		tmpNode.setPrev(this.tail);
		this.tail = tmpNode;
	}
	this.length++;
}

// removes and returns the node with data = d from this list, or null if not found;
linkedList.prototype.remove = function (d)
{
	var found = false;
	var tmpNode = this.head;
	var dist = 0;
	while(!found && dist < this.length)
	{
		if(tmpNode.data == d)
		{
			found = true;
			
			if(tmpNode.prev == null && tmpNode.next == null)
			{
				// removed node is head and tail
				this.head = null;
				this.tail = null;
			}
			else if(tmpNode.prev == null)
			{
				// removed node is head
				tmpNode.next.setPrev(null);
				this.head = tmpNode.next;
			}
			else if(tmpNode.next == null)
			{
				// removed node is tail
				tmpNode.prev.setNext(null);
				this.tail = tmpNode.prev;
			}
			else
			{
				// removed node is in the middle of the list
				tmpNode.prev.setNext(tmpNode.next);
				tmpNode.next.setPrev(tmpNode.prev);
			}
			this.length--;
			return tmpNode;
		}
		else
		{
			tmpNode = tmpNode.next;
		}
		
		dist++;
	}
	
	return null;
}

// remove the node at a specified index
linkedList.prototype.removeInd = function(ind)
{		
		if(ind <= this.length && this.length > 0)
		{
			var tmpNode = this.head;
			for(i=0; i<ind; i++)
			{
				tmpNode = tmpNode.next;
			}
			
						if(tmpNode.prev == null && tmpNode.next == null)
			{
				// removed node is head and tail
				this.head = null;
				this.tail = null;
			}
			else if(tmpNode.prev == null)
			{
				// removed node is head
				tmpNode.next.setPrev(null);
				this.head = tmpNode.next;
			}
			else if(tmpNode.next == null)
			{
				// removed node is tail
				tmpNode.prev.setNext(null);
				this.tail = tmpNode.prev;
			}
			else
			{
				// removed node is in the middle of the list
				tmpNode.prev.setNext(tmpNode.next);
				tmpNode.next.setPrev(tmpNode.prev);
			}
			this.length--;
			return tmpNode;
		}
		
		return null;
}

linkedList.prototype.getHead = function ()
{
	return this.head;
}

linkedList.prototype.toString = function ()
{
			var serialized = "";
			var tmpNode = this.head;
			for(i=0; i<this.length; i++)
			{
				serialized += tmpNode.getData().toString();
				tmpNode = tmpNode.next;
			}
			return serialized;
}
