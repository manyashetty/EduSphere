// /* global AFRAME */

// AFRAME.registerComponent('pendulum', {
//     schema: {
//       length: {type: 'number', default: 2}, // default pendulum length
//     },
    
//     init: function() {
//       this.angle = 0; // Initial angle
//       this.direction = 1; // Swing direction
//       this.updatePendulumPosition();
//       this.el.sceneEl.addEventListener('keydown', this.onKeyPress.bind(this));
//     },
  
//     tick: function() {
//       // Swing the pendulum
//       this.angle += this.direction * 0.02; // Adjust speed of swing
//       if (this.angle > 0.5 || this.angle < -0.5) {
//         this.direction *= -1; // Change direction
//       }
//       this.updatePendulumPosition();
//     },
  
//     updatePendulumPosition: function() {
//       const length = this.data.length;
//       const x = length * Math.sin(this.angle);
//       const y = 5 - length * Math.cos(this.angle); // Height calculation
//       this.el.setAttribute('position', `${x} ${y} -5`);
//     },
  
//     onKeyPress: function(evt) {
//       const lengthIncrement = 0.1;
//       if (evt.key === 'ArrowUp') {
//         this.data.length += lengthIncrement; // Increase length
//       } else if (evt.key === 'ArrowDown') {
//         this.data.length = Math.max(0.1, this.data.length - lengthIncrement); // Decrease length, prevent negative length
//       }
//       this.updatePendulumPosition(); // Update position after changing length
//     }
//   });
  