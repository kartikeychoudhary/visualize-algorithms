var arr = [];

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
    arr.push(this);
    if(this.right!=null){
        this.right.visit();
    }
}

Node.prototype.height = function(){
    var h = 0;
    for(var i =0; i<arr.length;i++){
        if(arr[i].level > h){
            h = arr[i].level;
        }
    }

    return h;
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

            node.x = this.x - innerWidth/(node.level+4);
            print("L", this.x,node.x, node.value);

            node.y = this.y + 50;

            this.left = node;

        }else{
            this.left.addNode(node);
        }
    }else if(node.value > this.value){
        this.weight++;
        if(this.right == null){
            node.level = this.level+1;

            node.x = this.x + innerWidth/(node.level+5);
            print("R", this.x,node.x, node.value);

            node.y = this.y + 50;

            this.right = node;
        } else {
            this.right.addNode(node);
        }

    }
}