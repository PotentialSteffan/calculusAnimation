const { ccclass, property } = cc._decorator;

@ccclass
export default class ArcComp extends cc.Component {
    onLoad() {
        const _graphic = this.node.getComponent(cc.Graphics);
        _graphic.moveTo(0, 0);
        let _r = 100;
        let _halfArc = Math.PI / 5 / 2;
        let _beginX = _r * Math.cos(_halfArc);
        let _beginY = -_r * Math.sin(_halfArc);
        _graphic.lineTo(_beginX, _beginY);
        _graphic.arc(0, 0, 100,-_halfArc, _halfArc, true);
        _graphic.lineTo(0, 0);
        _graphic.stroke();
    }

    start() {
    }

    update() {
        // if(this.node.angle == 90){
        //     this.node.parent.parent.addChild(this.node);
        // }
        // cc.log(this.node.angle)
    }
}
