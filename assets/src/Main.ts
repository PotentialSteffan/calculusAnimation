const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(cc.Node)
    arcContainer: cc.Node = null;
    @property(cc.Prefab)
    arcPrefab: cc.Prefab = null;

    totalCount:number = 10;
    start () {
        for (let i = 0; i < this.totalCount; i++) {
            let _arcIns = cc.instantiate(this.arcPrefab);
            this.arcContainer.addChild(_arcIns); 
        }
        
        for (let i = 0; i < this.arcContainer.childrenCount; i++) {
            const _arc:cc.Node = this.arcContainer.children[i];
            let _rotateArc = i * Math.PI/this.totalCount*360/Math.PI;
            new cc.Tween(_arc).to(1,{rotation:-_rotateArc}).start(); 
        }
    }
}
