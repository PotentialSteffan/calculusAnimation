const {ccclass, property} = cc._decorator;

@ccclass
export default class ArcComp extends cc.Component {
    onLoad(){
        const _graphic = this.node.getComponent(cc.Graphics);
        _graphic.moveTo(0,0);
        _graphic.lineTo(100,0);
        _graphic.arc(0,0,100,0,Math.PI/5,true);
        _graphic.lineTo(0,0);
        _graphic.stroke();
    }

    start () {
    }

    update(){

    }
}
