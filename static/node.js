function Node(val){
    this.value = val;
    this.right = null;
    this.left = null;
    this.weight = 0;
    this.level = 0;

    this.x=innerWidth/2;
    this.y=frameHeight+50;
}

Node.prototype.visit = function(){
    if(this.left!=null){
        this.left.visit();
    }
    console.log(this.value, this.level);

    if(this.right!=null){
        this.right.visit();
    }
}

Node.prototype.height = function(height){
    if(this.left!=null){
        return this.left.height(height+1);
    }
    if(this.right!=null){
        return this.right.height(height+1);
    }
    return height;
}


Node.prototype.visitDraw = function(parent){
    if(this.left!=null){
        this.left.visitDraw(this);
    }
    line(parent.x,parent.y, this.x,this.y);
    push();
    fill(255);
    text(this.value, this.x, this.y);
    pop();

    if(this.right!=null){
        this.right.visitDraw(this);
    }
}

Node.prototype.addNode = function(node){
    
    if(node.value < this.value){
        this.weight++;
        if(this.left == null){
            node.level = this.level+1;

            node.x = this.x - this.x/(node.level+1);
            node.y = this.y + 50;

            this.left = node;

        }else{
            this.left.addNode(node);
        }
    }else if(node.value > this.value){
        this.weight++;
        if(this.right == null){
            node.level = this.level+1;

            node.x = this.x + this.x/(node.level+1);
            node.y = this.y + 50;

            this.right = node;
        } else {
            this.right.addNode(node);
        }

    }
}