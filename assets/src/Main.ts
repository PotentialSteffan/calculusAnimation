const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(cc.Node)
    arcContainer: cc.Node = null;
    @property(cc.Prefab)
    arcPrefab: cc.Prefab = null;

    totalCount: number = 10;
    start() {
        for (let i = 0; i < this.totalCount; i++) {
            let _arcIns = cc.instantiate(this.arcPrefab);
            this.arcContainer.addChild(_arcIns);
        }

        for (let i = 0; i < this.arcContainer.childrenCount; i++) {
            const _arc: cc.Node = this.arcContainer.children[i];
            let _rotateArc = i * 360 / this.totalCount;
            new cc.Tween(_arc).to(1, { angle: -_rotateArc })
                .call(() => {
                    if (i == this.arcContainer.childrenCount - 1) {
                        this.arcContainerExpand();
                    }
                })
                .start()
        }
    }

    arcContainerExpand() {
        let _that = this;
        // new cc.Tween(this.arcContainer).parallel(
        new cc.Tween(this.arcContainer).to(1, { x: 100 }).call(() => {
            let _item = _that.arcContainer.children[0];
            let _localPos = _item.position;
            let _pos = _that.arcContainer.convertToWorldSpaceAR(_localPos);
            _item.parent = _that.arcContainer.parent;
            _item.position = _pos;
        }).then(
            new cc.Tween(this.arcContainer).to(3, { x: 200 }).call(() => {

            })
        ).start()

        // new cc.Tween(this.arcContainer).to(1, { angle: 360 / _that.totalCount }).call(() => {
        //     cc.log("angle change end" + new Date().getTime())
        //     let _item = _that.arcContainer.children[0];
        //     let _localPos = _item.position;
        //     let _pos = _that.arcContainer.convertToWorldSpaceAR(_localPos);
        //     _item.parent = _that.arcContainer.parent;
        //     _item.position = new cc.Vec3(0, 0, 0);
        // })
        // new cc.Tween().to(3, { angle: 360 }),
        // ).start();
    }

    update() {

    }
}
