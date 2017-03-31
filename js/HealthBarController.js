class HealthBarController {
  constructor(healthBarPosition, fatherObject) {
    this.fatherObject = fatherObject;
    this.healthBar = healthBarGroup.create(healthBarPosition.x, healthBarPosition.y, 'healthBar');
    this.healthBarBG = healthBarGroup.create(healthBarPosition.x+3, healthBarPosition.y-5, 'healthBarBG');
    this.healthBar.anchor.setTo(0, 0.5);
  }

  remove() {
    if (!this.fatherObject.sprite.health) {
      this.healthBar.kill();
      this.healthBarBG.kill();
    }
  }

  update() {
    this.healthBarBG.scale.setTo(this.fatherObject.sprite.health / 10, 1);
    this.remove();
  }
}
